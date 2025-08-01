import React, { useState, useEffect } from 'react';
import { X, Sparkles, Shield, Clock, Check, Globe, Phone } from 'lucide-react';
import { SendContact } from '../../../apis/services';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
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
    if (!formData.message.trim()) newErrors.company = 'Message is required';

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
      setErrorMsg("Your message has been successfully sent!")
    }).catch((error) => {
      setErrorMsg(error.response.data)
      setIsSubmitting(false);
      setIsError(true);
    })

    setTimeout(() => {
      setIsSubmitting(false);
      setIsError(false);
    }, 10000)

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
              <h2 className="text-3xl font-bold">Contact Us</h2>
            </div>
          </div>
        </div>
        {isSuccess && (
          <div className="flex items-center gap-2 mb-4 p-4 text-sm text-green-800 bg-green-100 rounded-lg" role="alert">
            <svg className="w-5 h-5 flex-shrink-0 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2l4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>{errorMsg}</div>
          </div>
        )}
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
            <div className="grid gap-6">
              {/* Full Name - Ligne 1 */}
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

              {/* Email + Phone - Ligne 2 */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Email */}
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

                {/* Phone */}
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
              </div>

              {/* Message - Ligne 3 */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all ${errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
                  rows={5}
                  placeholder="Type your message here..."
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
            </div>


            {/* CTA Button */}
            <div className="pt-4">
              <button
                aria-label="Send Message"
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-4 rounded-full text-lg font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden"
              >
                <div className="flex items-center justify-center gap-2">
                  <span>Send Message</span>
                </div>

                {/* Sparkle animation */}
                <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                  <Sparkles className="w-5 h-5 animate-pulse opacity-80" />
                </div>
              </button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
};

export default ContactModal;