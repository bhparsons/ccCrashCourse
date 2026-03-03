export const faqs = [
  {
    question: "What are Claude Code hooks?",
    answer:
      "Hooks are user-defined shell scripts that execute automatically at specific points during a Claude Code session. They let you add custom behavior — like security checks, notifications, or code formatting — without modifying Claude Code itself.",
  },
  {
    question: "What lifecycle events can hooks respond to?",
    answer:
      "Claude Code supports several hook events: PreToolUse (before a tool runs), PostToolUse (after a tool runs), Notification (when Claude Code sends a notification), Stop (when the agent finishes), and SubagentStop (when a subagent finishes). Each event provides relevant context your script can use.",
  },
  {
    question: "How do I install a hook?",
    answer:
      "Copy the hook configuration into your Claude Code settings file (either ~/.claude/settings.json for global hooks or .claude/settings.json in your project). Each hook specifies the event it listens to and the command to run. No dependencies or build steps required.",
  },
  {
    question: "What is HookHub?",
    answer:
      "HookHub is a community-driven directory of open-source Claude Code hooks. It helps you discover hooks built by other developers, organized by category and event type, so you can quickly find and install the ones that fit your workflow.",
  },
  {
    question: "How do I submit my own hook?",
    answer:
      "Submit a pull request to the HookHub repository on GitHub. Include your hook's name, description, category, the event it listens to, and a link to its source code. Once reviewed and merged, it will appear on the site for others to discover.",
  },
  {
    question: "Is HookHub free and open-source?",
    answer:
      "Yes! HookHub is completely free to use and fully open-source. Every hook listed on the platform is also open-source, so you can inspect, modify, and redistribute them freely.",
  },
  {
    question: "Can hooks modify or block Claude Code's actions?",
    answer:
      "Yes. PreToolUse hooks can block a tool call by returning an exit code or specific JSON output, effectively acting as guardrails. PostToolUse hooks can inspect results after the fact. This makes hooks powerful for enforcing security policies and team conventions.",
  },
  {
    question: "Do hooks work with all Claude Code plans?",
    answer:
      "Hooks are a core feature of Claude Code and work regardless of your plan. As long as you're running Claude Code locally, you can configure and use hooks.",
  },
]
