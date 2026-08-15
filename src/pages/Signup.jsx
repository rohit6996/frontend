import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, CheckCircle2, Circle, AlertCircle, Loader2, Eye, EyeOff, Leaf, Phone } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Signup = () => {
  const { signUpWithEmail } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [passwordTouched, setPasswordTouched] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const hasUppercase = /[A-Z]/.test(formData.password);
  const hasLowercase = /[a-z]/.test(formData.password);
  const hasNumber = /[0-9]/.test(formData.password);
  const hasSpecial = /[^A-Za-z0-9]/.test(formData.password);
  const hasMinLength = formData.password.length >= 8;

  const criteria = [
    { label: 'Uppercase letter', met: hasUppercase },
    { label: 'Lowercase letter', met: hasLowercase },
    { label: 'Number', met: hasNumber },
    { label: 'Special character (e.g. !?<>@#$%)', met: hasSpecial },
    { label: '8 characters or more', met: hasMinLength },
  ];

  const allCriteriaMet = hasUppercase && hasLowercase && hasNumber && hasSpecial && hasMinLength;
  const passwordsMatch = formData.password.length > 0 && formData.confirmPassword.length > 0 && formData.password === formData.confirmPassword;
  
  // Both Name, Mobile (10+ digits), and Email are mandatory
  const isFormValid = 
    formData.fullName.trim().length > 0 && 
    formData.mobile.trim().length >= 10 && 
    formData.email.trim().length > 0 && 
    allCriteriaMet && 
    passwordsMatch;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    setIsLoading(true);
    setError('');

    try {
      const result = await signUpWithEmail(
        formData.email.trim(),
        formData.password,
        formData.fullName.trim(),
        formData.mobile.trim()
      );

      if (result.error) {
        throw result.error;
      }

      alert('Account created successfully! You can now log in.');
      navigate('/login');
    } catch (err) {
      setError(err.message || 'Registration failed.');
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
        
        <div className="text-center mb-6">
          <h2 className="text-3xl font-extrabold text-gray-900">Create Your Account</h2>
          <p className="mt-2 text-sm sm:text-base text-gray-800 font-semibold">
            Start planning smarter journeys across Nagpur.
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          
          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-bold text-gray-900 mb-1.5">Full Name <span className="text-red-500">*</span></label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-800" />
              </div>
              <input id="fullName" name="fullName" type="text" required value={formData.fullName} onChange={handleChange}
                className="block w-full pl-10 text-base border border-gray-400 rounded-lg py-3 outline-none transition-all focus:border-nagpur-blue-primary focus:ring-2 focus:ring-nagpur-blue-primary/20 text-gray-900 font-semibold placeholder-gray-400"
                placeholder="John Doe" />
            </div>
          </div>

          {/* Mobile Number (Mandatory) */}
          <div>
            <label htmlFor="mobile" className="block text-sm font-bold text-gray-900 mb-1.5">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Phone className="h-5 w-5 text-gray-800" />
              </div>
              <input id="mobile" name="mobile" type="tel" required value={formData.mobile} onChange={handleChange}
                className="block w-full pl-10 text-base border border-gray-400 rounded-lg py-3 outline-none transition-all focus:border-nagpur-blue-primary focus:ring-2 focus:ring-nagpur-blue-primary/20 text-gray-900 font-semibold placeholder-gray-400"
                placeholder="+91 9876543210" maxLength={13} />
            </div>
          </div>

          {/* Email (Mandatory) */}
          <div>
            <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-1.5">
              Email address <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-800" />
              </div>
              <input id="email" name="email" type="email" autoComplete="email" required value={formData.email} onChange={handleChange}
                className="block w-full pl-10 text-base border border-gray-400 rounded-lg py-3 outline-none transition-all focus:border-nagpur-blue-primary focus:ring-2 focus:ring-nagpur-blue-primary/20 text-gray-900 font-semibold placeholder-gray-400"
                placeholder="you@example.com" />
            </div>
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-bold text-gray-900 mb-1.5">Password <span className="text-red-500">*</span></label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-800" />
              </div>
              <input id="password" name="password" type={showPassword ? 'text' : 'password'} required
                value={formData.password} onChange={handleChange} onFocus={() => setPasswordTouched(true)}
                className="block w-full pl-10 pr-10 text-base border border-gray-400 rounded-lg py-3 outline-none transition-all focus:border-nagpur-blue-primary focus:ring-2 focus:ring-nagpur-blue-primary/20 text-gray-900 font-semibold placeholder-gray-400"
                placeholder="••••••••" />
              <button type="button" onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-800 hover:text-gray-900 transition-colors">
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>

            {/* Password Criteria */}
            {passwordTouched && (
              <div className="mt-3 bg-gray-50 rounded-xl p-4 border border-gray-200">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Password must contain:</p>
                <div className="space-y-2">
                  {criteria.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      {item.met ? (
                        <CheckCircle2 className="h-[18px] w-[18px] text-emerald-600 flex-shrink-0" />
                      ) : (
                        <Circle className="h-[18px] w-[18px] text-gray-400 flex-shrink-0" />
                      )}
                      <span className={`text-sm transition-colors duration-200 ${item.met ? 'text-emerald-800 font-bold' : 'text-gray-600 font-semibold'}`}>
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-bold text-gray-900 mb-1.5">Confirm Password <span className="text-red-500">*</span></label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-800" />
              </div>
              <input id="confirmPassword" name="confirmPassword" type={showConfirmPassword ? 'text' : 'password'} required
                value={formData.confirmPassword} onChange={handleChange}
                className={`block w-full pl-10 pr-10 text-base rounded-lg py-3 border outline-none transition-all ${
                  formData.confirmPassword.length > 0
                    ? passwordsMatch ? 'border-emerald-500 focus:ring-2 focus:ring-emerald-200' : 'border-red-400 focus:ring-2 focus:ring-red-200'
                    : 'border-gray-400 focus:ring-2 focus:ring-nagpur-blue-primary/20 focus:border-nagpur-blue-primary'
                } text-gray-900 font-semibold placeholder-gray-400`}
                placeholder="••••••••" />
              <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-800 hover:text-gray-900 transition-colors">
                {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
            {formData.confirmPassword.length > 0 && !passwordsMatch && (
              <p className="mt-1.5 text-sm text-red-600 font-semibold flex items-center gap-1.5"><AlertCircle className="h-4 w-4" /> Passwords do not match</p>
            )}
            {passwordsMatch && (
              <p className="mt-1.5 text-sm text-emerald-600 font-semibold flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4" /> Passwords match</p>
            )}
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button type="submit" disabled={!isFormValid || isLoading}
              className={`w-full flex justify-center items-center gap-2 py-3.5 px-4 rounded-xl text-base font-bold text-white transition-all duration-300 ${
                isFormValid
                  ? 'bg-gradient-to-r from-nagpur-blue-primary to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-md hover:shadow-lg cursor-pointer'
                  : 'bg-gray-300 cursor-not-allowed'
                  }`}>
              {isLoading ? <><Loader2 className="h-5 w-5 animate-spin" /> Creating account...</> : 'Create Account'}
            </button>
          </div>
        </form>

        <div className="mt-8 text-center border-t border-gray-200 pt-6">
          <p className="text-sm text-gray-900 font-semibold mb-4">
            Already have an account?{' '}
            <Link to="/login" className="font-bold text-nagpur-blue-primary hover:text-blue-700 transition-colors underline">Login</Link>
          </p>
          <Link to="/" className="text-sm font-bold text-gray-800 hover:text-gray-900 transition-colors underline">← Back to Home</Link>
        </div>

      </div>

    </div>
  );
};

export default Signup;
