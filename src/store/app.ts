import { create } from "zustand";
interface AppIconsModalState {
  isAppIconsClicked: boolean;
  showAppIcons: () => void;
  hideAppIcons: () => void;
}
