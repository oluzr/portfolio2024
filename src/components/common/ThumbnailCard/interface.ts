export interface Prop {
  title: string;
  imgSrc: string;
  linkTo?: string;
  size?: "full" | "square";
  notiNum?: number;
}
export interface StyleProp {
  $size: "full" | "square";
}
