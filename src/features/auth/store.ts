import { create } from "zustand";
import { persist } from "zustand/middleware";

// УВАГА: це навчальний мок авторизації. Паролі зберігаються у localStorage
// у відкритому вигляді — так робити в реальному проєкті не можна.
// У бойовому варіанті це замінюється на Auth.js/Clerk + бекенд.

export interface AuthUser {
  name: string;
  email: string;
}

interface StoredUser extends AuthUser {
  password: string;
}

type Result = { ok: true } | { ok: false; error: string };

interface AuthState {
  users: StoredUser[];
  currentUser: AuthUser | null;
  register: (data: { name: string; email: string; password: string }) => Result;
  login: (email: string, password: string) => Result;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      users: [],
      currentUser: null,

      register: ({ name, email, password }) => {
        const normalized = email.trim().toLowerCase();
        if (get().users.some((u) => u.email === normalized)) {
          return { ok: false, error: "Користувач з таким email вже існує" };
        }
        const user: StoredUser = { name, email: normalized, password };
        set((state) => ({
          users: [...state.users, user],
          currentUser: { name, email: normalized },
        }));
        return { ok: true };
      },

      login: (email, password) => {
        const normalized = email.trim().toLowerCase();
        const found = get().users.find((u) => u.email === normalized);
        if (!found || found.password !== password) {
          return { ok: false, error: "Невірний email або пароль" };
        }
        set({ currentUser: { name: found.name, email: found.email } });
        return { ok: true };
      },

      logout: () => set({ currentUser: null }),
    }),
    { name: "hyggy-auth" },
  ),
);
