import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight, Loader2, Eye, EyeOff, Leaf, Phone } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const { signInWithEmail, signInWithPhone } = useAuth();
  const navigate = useNavigate();

  const [loginMethod, setLoginMethod] = useState('email');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    const contact = loginMethod === 'email' ? email : mobile;
    if (!contact || !password) {
      setError('Please fill in all fields.');
      setIsLoading(false);
      return;
    }

    try {
      let result;
      if (loginMethod === 'email') {
        result = await signInWithEmail(email.trim(), password);
      } else {
        result = await signInWithPhone(mobile.trim(), password);
      }

      if (result.error) {
        throw result.error;
      }

      navigate('/app');
    } catch (err) {
      setError(err.message || 'Login failed. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  const greeting = (() => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning! ☀️';
    if (hour < 17) return 'Good Afternoon! 🌤️';
    return 'Good Evening! 🌙';
  })();

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
        
        <div className="text-center mb-6">
          <h2 className="text-3xl font-extrabold text-gray-900">{greeting}</h2>
          <p className="mt-2 text-sm sm:text-base text-gray-800 font-semibold">
            Sign in to continue your journey with Eco Move Nagpur.
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          {/* Email / Mobile */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-sm font-bold text-gray-900">
                {loginMethod === 'email' ? 'Email address' : 'Mobile number'}
              </label>
              <button type="button" onClick={() => setLoginMethod(loginMethod === 'email' ? 'mobile' : 'email')}
                className="text-xs font-bold text-nagpur-blue-primary hover:text-blue-700 transition-colors underline">
                {loginMethod === 'email' ? 'Use mobile number' : 'Use email'}
              </button>
            </div>
            {loginMethod === 'email' ? (
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-800" />
                </div>
                <input id="email" type="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 text-base border border-gray-400 rounded-lg py-3 outline-none transition-all focus:border-nagpur-blue-primary focus:ring-2 focus:ring-nagpur-blue-primary/20 text-gray-900 font-semibold placeholder-gray-400"
                  placeholder="you@example.com" />
              </div>
            ) : (
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-gray-800" />
                </div>
                <input id="mobile" type="tel" required value={mobile} onChange={(e) => setMobile(e.target.value)}
                  className="block w-full pl-10 text-base border border-gray-400 rounded-lg py-3 outline-none transition-all focus:border-nagpur-blue-primary focus:ring-2 focus:ring-nagpur-blue-primary/20 text-gray-900 font-semibold placeholder-gray-400"
                  placeholder="+91 9876543210" maxLength={13} />
              </div>
            )}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-bold text-gray-900 mb-1.5">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-800" />
              </div>
              <input id="password" type={showPassword ? 'text' : 'password'} autoComplete="current-password" required
                value={password} onChange={(e) => setPassword(e.target.value)}
                className="block w-full pl-10 pr-10 text-base border border-gray-400 rounded-lg py-3 outline-none transition-all focus:border-nagpur-blue-primary focus:ring-2 focus:ring-nagpur-blue-primary/20 text-gray-900 font-semibold placeholder-gray-400"
                placeholder="••••••••" />
              <button type="button" onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-800 hover:text-gray-900 transition-colors">
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember-me" type="checkbox" className="h-4 w-4 text-nagpur-blue-primary border-gray-300 rounded cursor-pointer" />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 font-semibold cursor-pointer">Remember me</label>
            </div>
            <Link to="/forgot-password" className="text-sm font-bold text-nagpur-blue-primary hover:text-blue-700 transition-colors underline">Forgot password?</Link>
          </div>

          {/* Submit */}
          <button type="submit" disabled={isLoading}
            className="w-full flex justify-center items-center gap-2 py-3.5 px-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-nagpur-blue-primary to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed">
            {isLoading ? <><Loader2 className="h-5 w-5 animate-spin" /> Signing in...</> : <>Login <ArrowRight className="h-4 w-4" /></>}
          </button>
        </form>

        <div className="mt-8 text-center border-t border-gray-200 pt-6">
          <p className="text-sm text-gray-900 font-semibold mb-4">
            Don't have an account?{' '}
            <Link to="/signup" className="font-bold text-nagpur-blue-primary hover:text-blue-700 transition-colors underline">Sign up</Link>
          </p>
          <Link to="/" className="text-sm font-bold text-gray-800 hover:text-gray-900 transition-colors underline">← Back to Home</Link>
        </div>

      </div>

    </div>
  );
};

export default Login;
