export interface ChatBubbleProp {
  side?: "left" | "right";
  message?: string | string[];
  img?: string;
  title?: string;
  isLoading?: boolean;
  spinnerColor?: string;
}
export interface ChatBubbleStyleProp {
  $side: "left" | "right";
}
