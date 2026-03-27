'use client';
import clsx from 'clsx';
import { useEffect } from 'react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({ open, onClose, children }: ModalProps) {
  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }

    if (open) {
      window.addEventListener('keydown', handleEsc);
    }

    return () => window.removeEventListener('keydown', handleEsc);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        data-state={open ? 'open' : 'closed'}
        className={clsx('fixed inset-0 bg-black/80', 'animate-fade-in')}
        onClick={onClose}
      />

      <div
        className={clsx(
          'bg-background relative z-50 w-full max-w-lg rounded-xl p-6 shadow-xl',
          'animate-scale-in',
        )}
      >
        {children}

        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-sm opacity-70 hover:opacity-100"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
