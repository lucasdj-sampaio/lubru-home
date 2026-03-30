'use client';
import { ToastItem } from '@/components/molecules/toastContainer';
import { useState } from 'react';

export function useToast() {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  function addToast(message: string, variant?: ToastItem['variant']) {
    const id = crypto.randomUUID();

    setToasts(prev => [...prev, { id, message, variant }]);
  }

  function removeToast(id: string) {
    setToasts(prev => prev.filter(t => t.id !== id));
  }

  return { toasts, addToast, removeToast };
}
