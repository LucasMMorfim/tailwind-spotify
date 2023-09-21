import { HomeIcon, Search, Library, MoreHorizontal, Plus, Heart } from "lucide-react";
import React from 'react';


export function Sidebar() {
  
  return (
    <aside className="w-72 h-screen bg-zinc-950 p-6">
      <div><MoreHorizontal /></div>

      <nav className="space-y-5 mt-5">
        <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-400 hover:text-zinc-100">
          <HomeIcon />
          Home
        </a>
        <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-400 hover:text-zinc-100">
          <Search />
          Search
        </a>
        <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-400 hover:text-zinc-100">
          <Library />
          Your Library
        </a>      
      </nav>

      <div className="space-y-5 mt-10">
        <a href="" className="group flex items-center gap-3 text-sm font-semibold text-zinc-400 hover:text-zinc-100">
            <Plus className="bg-zinc-400 text-black rounded-sm p-1 group-hover:bg-zinc-100" />
            Create Playlist
          </a>
          <a href="" className="group flex items-center gap-3 text-sm font-semibold text-zinc-400 hover:text-zinc-100">
            <Heart fill="gray" className="text-gray-500 bg-gradient-to-br from-blue-800 via-purple-800 to-green-300/60 rounded-sm p-1 group-hover:from-blue-700 group-hover:via-purple-700 group-hover:to-green-300 group-hover:fill-zinc-100 group-hover:text-zinc-100" />
            Liked Songs
          </a>
      </div>
      
      <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Party Rock Anthem</a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Festa de formatura</a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Royalty - Slowes & Reverb</a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Halloween 🎃</a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Som ambiente</a>
      </nav>
    </aside>
  )
}