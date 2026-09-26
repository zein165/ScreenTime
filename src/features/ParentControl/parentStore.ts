import { create } from 'zustand';

interface ParentState {
  status: 'loading' | 'success' | 'empty' | 'error';
  isSubmitting: boolean;
  setStatus: (status: 'loading' | 'success' | 'empty' | 'error') => void;
  setSubmitting: (isSubmitting: boolean) => void;
}

export const useParentStore = create((set) => ({
  status: 'loading',
  isSubmitting: false,
  setStatus: (status) => set({ status }),
  setSubmitting: (isSubmitting) => set({ isSubmitting }),
}));
