import { useState, useEffect } from 'react';

export const useContactUsModal = () => {
  const [isOpenContact, setIsOpenContact] = useState(false);

  const openModal = () => {
    setIsOpenContact(true);
  };

  const closeContactModal = () => {
    setIsOpenContact(false);
  };

  // Global click handler for data-popup="signup" elements
  useEffect(() => {
    const handleSignupClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest('[data-popup="contactus"]')) {
        e.preventDefault();
        openModal();
      }
    };

    document.addEventListener('click', handleSignupClick);
    return () => document.removeEventListener('click', handleSignupClick);
  }, []);

  return {
    isOpenContact,
    openModal,
    closeContactModal
  };
};