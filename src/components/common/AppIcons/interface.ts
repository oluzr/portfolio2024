import { AppIconProp } from "../AppIcon/interface";

export type AppIconsProp = {
  icons: AppIconProp[];
  title: string;
  style: any;
};
export interface AppIconsStyleProp {
  $title: string;
  $length: "2n" | "3n";
}
