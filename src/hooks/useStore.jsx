import { create } from "zustand";

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () =>
    set((state) => ({ count: state.count > 0 ? state.count - 1 : 0 })),
}));

export { useStore };
