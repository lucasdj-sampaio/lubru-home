'use client';
import { Toast } from '../atoms/toast';

export interface ToastItem {
  id: string;
  message: string;
  variant?: 'success' | 'error' | 'info';
}

interface ToastContainerProps {
  toasts: ToastItem[];
  removeToast: (id: string) => void;
}

export function ToastContainer({ toasts, removeToast }: ToastContainerProps) {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-2 z-50">
      {toasts.map(toast => (
        <Toast key={toast.id} {...toast} onClose={removeToast} />
      ))}
    </div>
  );
}
