import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface User {
   firstName: string;
   lastName: string;
   role: string;
   id: number;
}

interface AuthState {
   user: User | null;
   setAuthUser: (user: User) => void;
   logout: () => void;
}

export const useAuthStore = create<AuthState>()(
   devtools((set) => ({
      user: null,
      setAuthUser: (user) => set({ user }),
      logout: () => set({ user: null }),
   }))
);
