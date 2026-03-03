import { hooks } from "@/app/data/hooks"
import HookGrid from "@/app/components/HookGrid"
import Navbar from "@/app/components/Navbar"

const stats = [
  { value: `${9}+`, label: "Community Hooks", description: "Open-source hooks built by the community, ready to install and use." },
  { value: "6", label: "Categories", description: "From security guardrails to notifications, automation, and more." },
  { value: "5+", label: "Hook Events", description: "PreToolUse, PostToolUse, Stop, PermissionRequest, and beyond." },
  { value: "100%", label: "Open Source", description: "Every hook is free and open-source. Contribute your own anytime." },
]

const steps = [
  { title: "Browse hooks", description: "Explore community-built hooks organized by category — security, automation, notifications, and more." },
  { title: "Install with one command", description: "Copy the hook configuration into your Claude Code settings file. No dependencies, no build steps." },
  { title: "Customize to your needs", description: "Each hook is a simple script you can modify. Adjust triggers, filters, and behavior to fit your workflow." },
  { title: "Share your own", description: "Built something useful? Submit a PR and share your hook with the entire Claude Code community." },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050507]">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-glow relative overflow-hidden pt-32 pb-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1.5 text-sm text-purple-300">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <circle cx="8" cy="8" r="3" fill="#7c3aed" />
              <circle cx="8" cy="8" r="6" stroke="#7c3aed" strokeWidth="1" opacity="0.4" />
            </svg>
            Open-source Claude Code hooks
          </div>

          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Supercharge Claude Code{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              with community hooks
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            Discover hooks that fire at lifecycle events in Claude Code sessions — from security guardrails to notifications and automation. Built by the community, for the community.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#hooks"
              className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition-all hover:bg-zinc-200"
            >
              Browse hooks
            </a>
            <a
              href="https://docs.anthropic.com/en/docs/claude-code/hooks"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/5 px-8 py-3 text-sm font-medium text-zinc-300 transition-all hover:bg-white/10 hover:text-white"
            >
              Read the docs
            </a>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-purple-400">
              Our workflow
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              How hooks make your{" "}
              <br className="hidden sm:block" />
              workflow easier
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="glass-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-sm font-bold text-purple-400">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">{step.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="section-glow-center relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-purple-400">
              Our statistics
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              The numbers that define HookHub
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
              >
                <p className="mb-3 text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <h3 className="mb-2 font-semibold text-white">{stat.label}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hooks Grid Section */}
      <section id="hooks" className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-purple-400">
              Community hooks
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Browse all available hooks
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
              Each hook is open-source and ready to use. Click through to view the source code, installation instructions, and contribute improvements.
            </p>
          </div>

          <HookGrid hooks={hooks} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-glow relative py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-purple-400">
            Get involved
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to build your own hook?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-400 leading-relaxed">
            Claude Code hooks are simple scripts that respond to lifecycle events. Build a hook, share it with the community, and help make Claude Code better for everyone.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://docs.anthropic.com/en/docs/claude-code/hooks"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition-all hover:bg-zinc-200"
            >
              Get started
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-[#050507] py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 28 28"
              fill="none"
              aria-hidden="true"
            >
              <path d="M6 8L14 4L22 8V20L14 24L6 20V8Z" stroke="#7c3aed" strokeWidth="2" fill="none" />
              <path d="M14 4V24" stroke="#7c3aed" strokeWidth="2" />
            </svg>
            <span className="text-sm font-semibold text-white">HookHub</span>
          </div>

          <nav className="flex items-center gap-6">
            <a href="#hooks" className="text-sm text-zinc-500 transition-colors hover:text-white">Browse</a>
            <a href="#how-it-works" className="text-sm text-zinc-500 transition-colors hover:text-white">How It Works</a>
            <a
              href="https://docs.anthropic.com/en/docs/claude-code/hooks"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 transition-colors hover:text-white"
            >
              Docs
            </a>
          </nav>

          <p className="text-xs text-zinc-600">Built by the community</p>
        </div>
      </footer>
    </div>
  )
}
