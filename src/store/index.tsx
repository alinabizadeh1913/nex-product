import { create } from "zustand";

interface SidebarOpenType {
  sidebarOpen: boolean;
  setSidebarOpen: (state: boolean) => void;
}

const useSidebarStore = create<SidebarOpenType>((set) => ({
  sidebarOpen: true,
  setSidebarOpen: (state) => set({ sidebarOpen: state }),
}));

export { useSidebarStore };
