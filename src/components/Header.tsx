import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="w-full relative h-48 py-5 flex items-center justify-center bg-gray-900">
      <Logo />
    </header>
  );
}
