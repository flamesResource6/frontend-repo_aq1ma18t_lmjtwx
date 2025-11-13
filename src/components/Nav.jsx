import { Menu } from "lucide-react";

export default function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md/0">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-semibold tracking-tight text-xl">GBA<span className="text-neutral-400">—Growth Bridge Agency</span></a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-600">
          <a href="#system" className="hover:text-black transition">System</a>
          <a href="#promise" className="hover:text-black transition">Promise</a>
          <a href="#faq" className="hover:text-black transition">FAQ</a>
        </nav>
        <a href="#book" className="hidden md:inline-flex items-center px-4 py-2 rounded-full bg-black text-white text-sm font-medium hover:opacity-90 transition">Book Discovery Call</a>
        <button className="md:hidden p-2 rounded-full border border-neutral-200"><Menu size={18} /></button>
      </div>
    </header>
  );
}
