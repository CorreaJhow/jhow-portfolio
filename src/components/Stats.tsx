import { stats } from "../data/site";

function StatItem({ label, hidden = false }: { label: string; hidden?: boolean }) {
  return (
    <li aria-hidden={hidden || undefined} className="flex items-center gap-8">
      {label}
      <span aria-hidden="true" className="text-zinc-700">
        ·
      </span>
    </li>
  );
}

export default function Stats() {
  return (
    <div className="overflow-hidden border-y border-zinc-900 bg-zinc-900/20">
      <ul className="marquee flex w-max items-center gap-8 whitespace-nowrap px-6 py-4 text-xs text-zinc-400 sm:text-sm">
        {stats.map((stat) => (
          <StatItem key={stat.label} label={stat.label} />
        ))}
        {/* Cópia decorativa pra fechar o loop contínuo, escondida de leitor de tela. */}
        {stats.map((stat) => (
          <StatItem key={`dup-${stat.label}`} label={stat.label} hidden />
        ))}
      </ul>
    </div>
  );
}
