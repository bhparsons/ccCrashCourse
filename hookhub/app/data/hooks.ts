import { Hook } from "@/app/types/hook"

export const hooks: Hook[] = [
  {
    name: "block-dangerous-commands",
    author: "karanb192",
    category: "Security",
    description:
      "Intercepts Bash tool calls before execution and blocks shell commands deemed dangerous, such as rm -rf, dd, mkfs, and other destructive operations.",
    repoUrl: "https://github.com/karanb192/claude-code-hooks",
    event: "PreToolUse",
  },
  {
    name: "protect-secrets",
    author: "karanb192",
    category: "Security",
    description:
      "Scans outgoing tool calls for patterns that look like API keys, tokens, and other secrets, preventing them from being leaked in commands or file writes.",
    repoUrl: "https://github.com/karanb192/claude-code-hooks",
    event: "PreToolUse",
  },
  {
    name: "auto-stage",
    author: "karanb192",
    category: "Automation",
    description:
      "Automatically runs git add on any files that Claude writes or edits after each tool call, keeping the staging area in sync with Claude's changes.",
    repoUrl: "https://github.com/karanb192/claude-code-hooks",
    event: "PostToolUse",
  },
  {
    name: "notify-permission",
    author: "karanb192",
    category: "Notifications",
    description:
      "Sends a desktop notification whenever Claude Code requests permission for a tool, so you can stay heads-up without watching the terminal.",
    repoUrl: "https://github.com/karanb192/claude-code-hooks",
    event: "PermissionRequest",
  },
  {
    name: "event-logger",
    author: "karanb192",
    category: "SDK & Tooling",
    description:
      "Logs every hook event (tool name, input, output, timestamps) to a local JSONL file, providing a detailed audit trail of Claude's actions in each session.",
    repoUrl: "https://github.com/karanb192/claude-code-hooks",
    event: "All",
  },
  {
    name: "Britfix",
    author: "Talieisin",
    category: "Formatting",
    description:
      "Automatically formats and lints modified files after each write using your project's configured formatter (Prettier, ESLint, Black, etc.), keeping code style consistent.",
    repoUrl: "https://github.com/Talieisin/britfix",
    event: "PostToolUse",
  },
  {
    name: "CC Notify",
    author: "dazuiba",
    category: "Notifications",
    description:
      "Delivers a macOS or Linux desktop notification when a Claude Code session completes, so you know the moment Claude is done and waiting for your input.",
    repoUrl: "https://github.com/dazuiba/CCNotify",
    event: "Stop",
  },
  {
    name: "cchooks",
    author: "GowayLee",
    category: "SDK & Tooling",
    description:
      "A Go-based SDK and CLI toolkit for building, testing, and deploying Claude Code hooks. Provides typed event structs, a local test runner, and scaffolding commands.",
    repoUrl: "https://github.com/GowayLee/cchooks",
  },
  {
    name: "Claude Hook Comms (HCOM)",
    author: "aannoo",
    category: "Communication",
    description:
      "Enables two-way messaging between Claude Code hooks and external services via HTTP webhooks, letting hooks both send data out and receive instructions back.",
    repoUrl: "https://github.com/aannoo/claude-hook-comms",
  },
]
