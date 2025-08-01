import React, { useState, useEffect } from 'react';
import { X, Sparkles, Shield, Clock, Check, Globe, Phone } from 'lucide-react';
import { SendContact } from '../../../apis/services';

interface CoralySignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CoralySignupModal: React.FC<CoralySignupModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    country: '',
    teamSize: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [errorMsg, setErrorMsg] = useState<string>();

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Auto-focus on first field
      setTimeout(() => {
        const firstInput = document.querySelector('#signup-fullname') as HTMLInputElement;
        if (firstInput) firstInput.focus();
      }, 100);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.country.trim()) newErrors.country = 'Country is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;
    setIsSubmitting(true);

    SendContact(formData).then((resp) => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }).catch((error) => {
      setErrorMsg(error.response.data)
      setIsSubmitting(false);
      setIsError(true);
    })

    setTimeout(() => {
      setIsSubmitting(false);
      setIsError(false);
    },10000)

  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      // Only close if no unsaved input
      const hasInput = Object.values(formData).some(value => value.trim() !== '');
      if (!hasInput) {
        onClose();
      }
    }
  };

  if (!isOpen) return null;

  if (isSuccess) {
    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Coraly! 🎉</h3>
          <p className="text-gray-600 mb-6">
            We'll be in touch within 24 hours to set up your free trial and show you how to create your first AI-powered listing.
          </p>
          <button
            type="button" aria-label="Continue Exploring"
            onClick={onClose}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200"
          >
            Continue Exploring
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleOutsideClick}
    >
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[95vh] overflow-y-auto">
        {/* Header with gradient background */}
        <div className="relative bg-gradient-to-br from-purple-600 via-pink-500 to-purple-700 text-white p-8 rounded-t-3xl overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>

          {/* Close button */}
          <button
            type="button" aria-label="Close modal"
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header content */}
          <div className="relative text-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 animate-pulse" />
              <h2 className="text-3xl font-bold">Let's Launch Your First AI Listing</h2>
            </div>
            <p className="text-xl opacity-90">
              Coraly will create your first enhanced, SEO-ready listing - 100% free. No credit card needed.
            </p>
          </div>
        </div>
        {isError && (
          <div className="flex items-center gap-2 mb-2 mt-3 p-4 text-sm text-red-800 bg-red-100 rounded-lg" role="alert">
            <svg className="w-5 h-5 text-red-600 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.054 0 1.918-.816 1.994-1.85L21 18V6c0-1.054-.816-1.918-1.85-1.994L19 4H5c-1.054 0-1.918.816-1.994 1.85L3 6v12c0 1.054.816 1.918 1.85 1.994L5 20z" />
            </svg>
            <div>{errorMsg}</div>
          </div>
        )}
        {/* Form section */}
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Form fields grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label htmlFor="signup-fullname" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  id="signup-fullname"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all ${errors.fullName ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
                  placeholder="Enter your full name"
                />
                {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
              </div>

              {/* Work Email */}
              <div>
                <label htmlFor="signup-email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Work Email *
                </label>
                <input
                  id="signup-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
                  placeholder="your.email@company.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="signup-phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    id="signup-phone"
                    type="number"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all ${errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300'
                      }`}
                    placeholder="+971 50 123 4567"
                  />
                </div>
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              {/* Company Name */}
              <div>
                <label htmlFor="signup-company" className="block text-sm font-semibold text-gray-700 mb-2">
                  Company Name *
                </label>
                <input
                  id="signup-company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all ${errors.company ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
                  placeholder="Your Real Estate Company"
                />
                {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
              </div>

              {/* Role */}
              <div>
                <label htmlFor="signup-role" className="block text-sm font-semibold text-gray-700 mb-2">
                  Role
                  <span className="text-gray-500 text-xs ml-1">(We'll tailor your onboarding)</span>
                </label>
                <select
                  id="signup-role"
                  value={formData.role}
                  onChange={(e) => handleInputChange('role', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                >
                  <option value="">Select your role</option>
                  <option value="agent">Agent</option>
                  <option value="broker">Broker</option>
                  <option value="marketing-lead">Marketing Lead</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Country */}
              <div>
                <label htmlFor="signup-country" className="block text-sm font-semibold text-gray-700 mb-2">
                  Country *
                </label>
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select
                    id="signup-country"
                    value={formData.country}
                    onChange={(e) => handleInputChange('country', e.target.value)}
                    className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all ${errors.country ? 'border-red-500 bg-red-50' : 'border-gray-300'
                      }`}
                  >
                    <option value="">Select your country</option>
                    <option value="AE">United Arab Emirates</option>
                    <option value="GB">United Kingdom</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="AU">Australia</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
              </div>

              {/* Team Size */}
              <div>
                <label htmlFor="signup-teamsize" className="block text-sm font-semibold text-gray-700 mb-2">
                  Team Size
                </label>
                <select
                  id="signup-teamsize"
                  value={formData.teamSize}
                  onChange={(e) => handleInputChange('teamSize', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                >
                  <option value="">Select team size</option>
                  <option value="solo">Solo Agent</option>
                  <option value="2-5">2-5 Agents</option>
                  <option value="6-15">6-15 Agents</option>
                  <option value="15+">15+ Agents</option>
                </select>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                aria-label="Setting up your trial"
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-4 rounded-full text-lg font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Setting up your trial...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <span>🔓 Start My Free 7-Day Trial</span>
                  </div>
                )}

                {/* Sparkle animation */}
                <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                  <Sparkles className="w-5 h-5 animate-pulse opacity-80" />
                </div>
              </button>
            </div>
          </form>

          {/* Trust section */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-500" />
                <span>100% GDPR Compliant</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-500" />
                <span>Your data is safe with us</span>
              </div>
            </div>

            <div className="text-center mt-4">
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                <Clock className="w-4 h-4 text-purple-500" />
                <span>Agents launch their first listing in under 5 minutes</span>
              </div>
            </div>

            {/* Portal logos */}
            <div className="mt-8 text-center">
              <p className="text-xs text-gray-500 mb-3">Trusted by agents on</p>
              <div className="flex items-center justify-center gap-6 opacity-60">
                <img src="/icons/logo-property-finder.svg" alt="PropertyFinder" className="h-6 object-contain" />
                <img src="/icons/bayut_logo_2x_20072020.png" alt="Bayut" className="h-6 object-contain" />
                <img src="/icons/Zoopla-logo-Purple-RGBPNG.png" alt="Zoopla" className="h-6 object-contain" />
                <img src="/icons/Rightmove_logo.png" alt="Rightmove" className="h-6 object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoralySignupModal;