'use client';
import { useEffect } from 'react';

export type ToastVariant = 'success' | 'error' | 'info';

interface ToastProps {
  id: string;
  message: string;
  variant?: ToastVariant;
  onClose: (id: string) => void;
  duration?: number;
}

export function Toast({
  id,
  message,
  variant = 'info',
  onClose,
  duration = 3000,
}: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => onClose(id), duration);
    return () => clearTimeout(timer);
  }, [id, duration, onClose]);

  const base =
    'px-4 py-3 rounded-xl shadow-lg text-sm text-white flex items-center gap-2 animate-slide-in';

  const variants = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-gray-800',
  };

  return (
    <div className={`${base} ${variants[variant]}`}>
      <span>{message}</span>
      <button onClick={() => onClose(id)} className="ml-2 opacity-70">
        ✕
      </button>
    </div>
  );
}
