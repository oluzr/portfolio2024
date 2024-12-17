export interface ButtonProp {
  innerTxt: string;
  type?: "button" | "submit";
  widthType?: "full" | "auto";
  disabled?: boolean;
  useArrow?: boolean;
  styleType?: "normal" | "orange" | "submit" | "disabled" | "cancle";
  bgColor?: string;
  radius?: "0" | "50%";
  onClickHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export interface ButtonStyleProp {
  $bgColor?: string;
}
