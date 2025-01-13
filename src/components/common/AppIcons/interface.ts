import { AppIconProp } from "../AppIcon/interface";

export type AppIconsProp = {
  icons: AppIconProp[];
  title: string;
  style: React.CSSProperties;
  notiNum?:number
};
export interface AppIconsStyleProp {
  $title: string;
  $length: "2n" | "3n";
  style?: React.CSSProperties;
}
