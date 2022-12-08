import { PlusCircle } from "phosphor-react";

export function Button() {
  return (
    <button className="w-24 p-4 gap-2 bg-sky-600 hover:opacity-90 text-gray-100 rounded-lg cursor-pointer items-center justify-center flex">
      Criar
      <PlusCircle size={24} weight="bold" />
    </button>
  );
}
