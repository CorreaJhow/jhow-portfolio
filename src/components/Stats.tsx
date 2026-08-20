import { stats } from "../data/site";

export default function Stats() {
  return (
    <div className="border-y border-zinc-900 bg-zinc-900/20">
      <ul className="mx-auto flex max-w-3xl flex-wrap items-center gap-x-3 gap-y-2 px-6 py-4 text-xs text-zinc-500 sm:text-sm">
        {stats.map((stat, i) => (
          <li key={stat.label} className="flex items-center gap-3">
            {i > 0 && <span className="text-zinc-700">·</span>}
            {stat.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
