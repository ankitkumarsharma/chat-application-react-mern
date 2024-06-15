import { create } from 'zustand';

const useMobileScreenStore = create((set) => ({
    showOnMobile: null,
    setShowOnMobile: (ev) => set({ showOnMobile: ev }),
}));

export default useMobileScreenStore;