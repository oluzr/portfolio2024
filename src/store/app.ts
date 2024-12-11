import { create } from "zustand";

interface ModalBGState {
  modalBGShowState: boolean;
  showModalBG: () => void;
  hideModalBG: () => void;
}
interface AppIconsState {
  isOpened: boolean;
  openAppIcons: () => void;
  closeAppIcons: () => void;
}

export const useModalBGStore = create<ModalBGState>((set) => ({
  modalBGShowState: false,
  showModalBG: () => set({ modalBGShowState: true }),
  hideModalBG: () => set({ modalBGShowState: false }),
}));

export const useAppIconsStore = create<AppIconsState>((set) => ({
  isOpened: false,
  openAppIcons: () => {
    const showModalBG = useModalBGStore.getState().showModalBG;
    showModalBG();
    set({ isOpened: true });
  },
  closeAppIcons: () => {
    const hideModalBG = useModalBGStore.getState().hideModalBG;
    hideModalBG();
    set({ isOpened: false });
  },
}));
