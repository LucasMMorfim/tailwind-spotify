'use client'

import { Play, Pause, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2, Heart } from "lucide-react";
import Image from "next/image";
import { useState } from 'react';

export function Footer() {
  const [isPlaying, setIsPlaying] = useState(false);  
  const [isfavorite, setIsFavorite] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  const toggleClick = () => {
    setIsFavorite((prevNotClicked) => !prevNotClicked);
  }

  return (
    <footer className="bg-zinc-800 border-t border-zinc-700 px-4 py-4 flex items-center">
      <div className="flex items-center gap-3 w-[33%]">
        <Image src="/album.png" width={70} height={70} alt="Foto album" />
        <div className="flex flex-col">
          <strong className="font-normal">Battery</strong>
          <span className="text-xs text-zinc-500">Metallica</span>
        </div>
        <button className="text-zinc-400 ml-2 hover:text-zinc-100 cursor-default" onClick={toggleClick}>
          {isfavorite ? <Heart fill="green" className="text-green-800" size={18}/> : <Heart size={18}/>}
        </button>
      </div>
      <div className="flex flex-col items-center gap-2 w-[33%]">
        <div className="flex items-center gap-6">
          <Shuffle size={20} className="text-zinc-400 hover:text-zinc-100" />
          <SkipBack size={20} className="text-zinc-400 hover:text-zinc-100" />

          <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black" onClick={togglePlayPause}>
            {isPlaying ? <Pause fill='bg-black' className="mr-1" /> : <Play fill='bg-black' />}
          </button>

          <SkipForward size={20} className="text-zinc-400 hover:text-zinc-100" />
          <Repeat size={20} className="text-zinc-400 hover:text-zinc-100" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-zinc-400">2:31</span>   
          <div className="h-1 rounded-full w-[620px] bg-zinc-600">
            <div className="h-1 rounded-full w-40 bg-zinc-200"></div>
          </div>         
          <span className="text-sm text-zinc-400">5:12</span>
        </div>
      </div>
      <div className="flex items-center justify-end gap-2 w-[33%]">
        <Mic2 size={20} className="text-zinc-400 hover:text-zinc-100" />
        <LayoutList size={20} className="text-zinc-400 hover:text-zinc-100" />
        <Laptop2 size={20} className="text-zinc-400 hover:text-zinc-100" />
        <div className="flex items-center">
          <Volume size={20} />
          <div className="h-1 rounded-full w-20 bg-zinc-600">
            <div className="h-1 rounded-full w-5 bg-zinc-200"></div>
          </div>
        </div>
        <Maximize2 size={20} className="text-zinc-400 hover:text-zinc-100" />
      </div>
    </footer>
  )
}