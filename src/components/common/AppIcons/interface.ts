import { AppIconProp } from "../AppIcon/interface";

export type AppIconsProp = {
  icons: AppIconProp[];
  title: string;
  style: React.CSSProperties;
};
export interface AppIconsStyleProp {
  $title: string;
  $length: "2n" | "3n";
  style?: React.CSSProperties;
}
