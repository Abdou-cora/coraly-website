import { useState, useEffect } from 'react';

export const useSignupModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // Global click handler for data-popup="signup" elements
  useEffect(() => {
    const handleSignupClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest('[data-popup="signup"]')) {
        e.preventDefault();
        openModal();
      }
    };

    document.addEventListener('click', handleSignupClick);
    return () => document.removeEventListener('click', handleSignupClick);
  }, []);

  return {
    isOpen,
    openModal,
    closeModal
  };
};