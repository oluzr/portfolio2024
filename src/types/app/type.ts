export type ProjectItemType = { title: string; contents: ProjectContentType }[];
export type ProjectContentType = (
  | Record<string, string | (string | Object)[]>
  | string
)[];
