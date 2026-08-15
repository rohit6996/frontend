import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight, Loader2, Leaf, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const ForgotPassword = () => {
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setIsLoading(true);
    setError('');

    try {
      const result = await resetPassword(email.trim());
      if (result && result.error) throw result.error;
      setIsSuccess(true);
    } catch (err) {
      setError(err.message || 'Failed to send password reset email.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 relative bg-cover bg-center"
      style={{ backgroundImage: "url('/auth.png.png')" }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Floating Logo Top-Left */}
      <div className="absolute top-6 left-6 z-20">
        <Link to="/" className="inline-flex items-center gap-2.5 bg-white/95 border border-gray-200 rounded-xl shadow-lg px-4 py-2">
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-1.5 rounded-lg">
            <Leaf className="h-4 w-4 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xs text-gray-900 leading-tight tracking-tight">Eco Move</span>
            <span className="text-[9px] font-bold text-emerald-700 uppercase tracking-[0.2em] leading-tight">Nagpur</span>
          </div>
        </Link>
      </div>

      {/* Centered Auth Card */}
      <div className="w-full max-w-md bg-white/95 backdrop-blur-md py-8 px-6 sm:px-10 shadow-2xl rounded-3xl border border-white/25 relative z-10 animate-fade-in-up">
        
        {!isSuccess ? (
          <>
            <div className="text-center mb-6">
              <h2 className="text-3xl font-extrabold text-gray-900 font-sans tracking-tight">Reset Password</h2>
              <p className="mt-2 text-sm sm:text-base text-gray-800 font-semibold">
                Enter your email address and we'll send you a recovery link.
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              
              {error && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              )}

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-1.5">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-800" />
                  </div>
                  <input 
                    id="email" 
                    type="email" 
                    required 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-10 text-base border border-gray-400 rounded-lg py-3 outline-none transition-all focus:border-nagpur-blue-primary focus:ring-2 focus:ring-nagpur-blue-primary/20 text-gray-900 font-semibold placeholder-gray-400"
                    placeholder="you@example.com" 
                  />
                </div>
              </div>

              {/* Submit */}
              <button 
                type="submit" 
                disabled={isLoading || !email}
                className={`w-full flex justify-center items-center gap-2 py-3.5 px-4 rounded-xl text-base font-bold text-white transition-all duration-300 ${
                  email && !isLoading
                    ? 'bg-gradient-to-r from-nagpur-blue-primary to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-md hover:shadow-lg cursor-pointer'
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
              >
                {isLoading ? (
                  <><Loader2 className="h-5 w-5 animate-spin" /> Sending Link...</>
                ) : (
                  <>Send Recovery Link <ArrowRight className="h-4 w-4" /></>
                )}
              </button>
            </form>

            <div className="mt-8 text-center border-t border-gray-200 pt-6">
              <Link to="/login" className="text-sm font-bold text-nagpur-blue-primary hover:text-blue-700 transition-colors underline">
                Back to Login
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-100">
              <CheckCircle2 className="h-10 w-10 text-emerald-500" />
            </div>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Check Your Inbox</h2>
            <p className="text-sm text-gray-700 font-semibold mb-6">
              We sent a password recovery link to <span className="text-nagpur-blue-primary">{email}</span>. Click the link to update your password.
            </p>
            <Link 
              to="/login"
              className="block w-full py-3 px-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-nagpur-blue-primary to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-md text-center cursor-pointer"
            >
              Return to Login
            </Link>
          </div>
        )}

      </div>

    </div>
  );
};

export default ForgotPassword;
