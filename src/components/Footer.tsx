import { profile } from "../data/site";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 px-6 py-8">
      <div className="mx-auto flex max-w-3xl flex-col gap-1 text-xs text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Feito com Vite + React + Tailwind</span>
      </div>
    </footer>
  );
}
