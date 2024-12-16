export interface PrjCardProp {
  title: string;
  startDate: string;
  endDate: string;
  linkTo?: string;
  subTitle?: string;
  contribution: number;
  participants: string[];
  theme?: ThemeType;
}

export interface PrjCardStyleProp {
  $theme: ThemeType;
}

export type ThemeType = "bage" | "skyblue";
