import { Hook, HookCategory } from "@/app/types/hook"

const categoryColors: Record<HookCategory, string> = {
  Security: "bg-red-500/10 text-red-400 border-red-500/20",
  Notifications: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  Automation: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "SDK & Tooling": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Communication: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Formatting: "bg-orange-500/10 text-orange-400 border-orange-500/20",
}

export default function HookCard({ hook }: { hook: Hook }) {
  return (
    <div className="glass-card group flex flex-col gap-4 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1">
      <div className="flex flex-wrap items-center gap-2">
        <span
          className={`rounded-full border px-3 py-1 text-xs font-medium ${categoryColors[hook.category]}`}
        >
          {hook.category}
        </span>
        {hook.event && (
          <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-500">
            {hook.event}
          </span>
        )}
      </div>

      <div>
        <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
          {hook.name}
        </h3>
        <p className="mt-1 text-xs text-zinc-500">
          by {hook.author}
        </p>
      </div>

      <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-zinc-400">
        {hook.description}
      </p>

      <a
        href={hook.repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-purple-400 transition-colors hover:text-purple-300"
      >
        View on GitHub
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      </a>
    </div>
  )
}
