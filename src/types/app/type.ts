export type ProjectItemType = { title: string; contents: ProjectContentType }[];
export type ProjectContentType = (Record<string, string | string[]> | string)[];
export interface TimelineType {
  year: number;
  contents: { date: string; content: string }[];
}
export type ProjectNameType = "som" | "usports" | "optimaApp" | "optimaRx" | "lsp";
