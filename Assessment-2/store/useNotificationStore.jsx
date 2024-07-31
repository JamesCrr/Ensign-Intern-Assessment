import { create } from "zustand";

const useNotificationStore = create((set) => ({
  queue: [],
  addToQueue: (key) => {
    set((state) => ({ queue: [...state.queue, key] }));
  },
  removeFromQueue: () => {
    set((state) => ({ queue: state.queue.slice(1) }));
  },
}));
export default useNotificationStore;
