'use client';

import { useEffect, useRef, useCallback, useState } from 'react';
import { createPortal } from 'react-dom';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  closeOnOutsideClick?: boolean;
};

export default function Modal({
  isOpen,
  onClose,
  children,
  title,
  closeOnOutsideClick = true
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isBrowser, setIsBrowser] = useState(false);
  
  // Set isBrowser to true on component mount (client-side)
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  // Handle outside click
  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (
      closeOnOutsideClick && 
      modalRef.current && 
      !modalRef.current.contains(e.target as Node)
    ) {
      onClose();
    }
  }, [onClose, closeOnOutsideClick]);

  // Handle keyboard events and outside click
  useEffect(() => {
    if (!isOpen || !isBrowser) return;
    
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleEsc);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEsc);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose, handleClickOutside, isBrowser]);

  // Don't render anything on the server
  if (!isOpen || !isBrowser) return null;

  return createPortal(
    <div 
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
      aria-modal="true"
      role="dialog"
    >
      <div 
        ref={modalRef}
        className="bg-white rounded-xl shadow-2xl w-full max-w-md max-h-[90dvh] overflow-y-auto animate-scaleIn"
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200 ">
          <h2 className="text-xl font-semibold text-gray-900 ">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700  transition-colors"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}