export type HookCategory =
  | "Security"
  | "Notifications"
  | "Automation"
  | "SDK & Tooling"
  | "Communication"
  | "Formatting"

export type Hook = {
  name: string
  author: string
  category: HookCategory
  description: string
  repoUrl: string
  event?: string
}
