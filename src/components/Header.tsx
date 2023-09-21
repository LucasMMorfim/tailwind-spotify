import { ChevronLeft, ChevronRight, User, ChevronDown } from "lucide-react";

export function Header() {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-4 pt-5 pl-8">
        <button className="p-1 rounded-full bg-black/40">
          <ChevronLeft />
        </button>
        <button className="p-1 rounded-full bg-black/40">
          <ChevronRight />
        </button>    
      </div>

      <div className="flex items-center pt-5 pr-8 gap-10">
        <button className="border border-zinc-500 rounded-full p-1.5 px-5 cursor-default">
          Faça upgrade
        </button>

        <button className="flex border border-black bg-black rounded-full p-1.5 px-1 items-center">
          <div className="border border-zinc-500 rounded-full p-1 bg-zinc-500">
            <User size={20} />
          </div>
            <span className="px-2">Lucasmorfim</span>
            <ChevronDown size={20} fill="white" />
        </button>
      </div>
    </div>
  )
}




