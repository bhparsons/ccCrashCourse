import { Hook } from "@/app/types/hook"
import HookCard from "./HookCard"

export default function HookGrid({ hooks }: { hooks: Hook[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {hooks.map((hook) => (
        <HookCard key={`${hook.author}-${hook.name}`} hook={hook} />
      ))}
    </div>
  )
}
