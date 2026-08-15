import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase, isConfigured } from '../supabaseClient';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isConfigured) {
      setLoading(false);
      return;
    }

    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Email Sign Up
  const signUpWithEmail = async (email, password, fullName, mobile) => {
    if (!isConfigured) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ data: { user: { email, user_metadata: { full_name: fullName, mobile } } }, error: null });
        }, 1000);
      });
    }

    return await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          mobile: mobile
        }
      }
    });
  };

  // Phone Sign Up
  const signUpWithPhone = async (phone, password, fullName, email) => {
    if (!isConfigured) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ data: { user: { phone, user_metadata: { full_name: fullName, email } } }, error: null });
        }, 1000);
      });
    }

    return await supabase.auth.signUp({
      phone,
      password,
      options: {
        data: {
          full_name: fullName,
          email: email
        }
      }
    });
  };

  // Email Sign In
  const signInWithEmail = async (email, password) => {
    if (!isConfigured) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const mockUser = { id: 'mock-user-id', email, user_metadata: { full_name: 'Demo User' } };
          setUser(mockUser);
          resolve({ data: { user: mockUser }, error: null });
        }, 1000);
      });
    }

    return await supabase.auth.signInWithPassword({
      email,
      password
    });
  };

  // Phone Sign In
  const signInWithPhone = async (phone, password) => {
    if (!isConfigured) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const mockUser = { id: 'mock-user-id', phone, user_metadata: { full_name: 'Demo User' } };
          setUser(mockUser);
          resolve({ data: { user: mockUser }, error: null });
        }, 1000);
      });
    }

    return await supabase.auth.signInWithPassword({
      phone,
      password
    });
  };

  // Verify OTP
  const verifyOtp = async (phone, token) => {
    if (!isConfigured) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ error: null });
        }, 1000);
      });
    }

    return await supabase.auth.verifyOtp({
      phone,
      token,
      type: 'signup'
    });
  };

  // Reset Password for Email
  const resetPassword = async (email) => {
    if (!isConfigured) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ error: null });
        }, 1000);
      });
    }

    return await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.origin + '/update-password',
    });
  };

  // Update User Password
  const updatePassword = async (newPassword) => {
    if (!isConfigured) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ error: null });
        }, 1000);
      });
    }

    return await supabase.auth.updateUser({
      password: newPassword
    });
  };

  // Sign Out
  const signOut = async () => {
    if (!isConfigured) {
      setUser(null);
      return new Promise((resolve) => resolve({ error: null }));
    }

    return await supabase.auth.signOut();
  };

  const value = {
    user,
    session,
    loading,
    signUpWithEmail,
    signUpWithPhone,
    signInWithEmail,
    signInWithPhone,
    verifyOtp,
    resetPassword,
    updatePassword,
    signOut
  };

  return (
    <AuthContext.Provider value={value}>
      {loading ? (
        <div className="min-h-screen flex items-center justify-center bg-nagpur-bg">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-nagpur-blue-primary"></div>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
