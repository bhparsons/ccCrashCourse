import Link from "next/link"

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#050507]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M6 8L14 4L22 8V20L14 24L6 20V8Z"
              stroke="#7c3aed"
              strokeWidth="2"
              fill="none"
            />
            <path
              d="M14 4V24"
              stroke="#7c3aed"
              strokeWidth="2"
            />
            <path
              d="M6 8L22 8"
              stroke="#7c3aed"
              strokeWidth="1.5"
              opacity="0.5"
            />
          </svg>
          <span className="text-lg font-semibold tracking-tight text-white">
            HookHub
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#hooks" className="text-sm text-zinc-400 transition-colors hover:text-white">
            Browse
          </a>
          <a href="#how-it-works" className="text-sm text-zinc-400 transition-colors hover:text-white">
            How It Works
          </a>
          <a href="#stats" className="text-sm text-zinc-400 transition-colors hover:text-white">
            Stats
          </a>
        </nav>

        <a
          href="https://docs.anthropic.com/en/docs/claude-code/hooks"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition-all hover:bg-zinc-200"
        >
          Get started
        </a>
      </div>
    </header>
  )
}
