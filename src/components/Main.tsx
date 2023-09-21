import { Play } from "lucide-react";
import Image from "next/image";
import React from 'react';

function getGreeting() {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  if (currentHour >= 5 && currentHour < 12) {
    return "Good Morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    return "Good Afternoon";
  } else {
    return "Goodnight";
  }
}

export function Main() {
  const greeting = getGreeting();

  return (
    <main className="flex-1 p-6 pt-0"> 
      <h1 className="font-semibold text-3xl mt-10">{greeting}</h1>

      <div className="grid grid-cols-3 gap-4 mt-4">
        <a href="#" className="bg-white/10 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
          <Image src="/album.png" width={80} height={80} alt="Foto album" />
          <strong>Master Of Puppets</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-5 invisible group-hover:visible">
            <Play fill='bg-black' />
          </button>
        </a>
        <a href="#" className="bg-white/10 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
          <Image src="/album.png" width={80} height={80} alt="Foto album" />
          <strong>Master Of Puppets</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-5 invisible group-hover:visible">
            <Play fill='bg-black' />
          </button>
        </a>
        <a href="#" className="bg-white/10 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
          <Image src="/album.png" width={80} height={80} alt="Foto album" />
          <strong>Master Of Puppets</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-5 invisible group-hover:visible">
            <Play fill='bg-black' />
          </button>
        </a>
        <a href="#" className="bg-white/10 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
          <Image src="/album.png" width={80} height={80} alt="Foto album" />
          <strong>Master Of Puppets</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-5 invisible group-hover:visible">
            <Play fill='bg-black' />
          </button>
        </a>
        <a href="#" className="bg-white/10 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
          <Image src="/album.png" width={80} height={80} alt="Foto album" />
          <strong>Master Of Puppets</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-5 invisible group-hover:visible">
            <Play fill='bg-black' />
          </button>
        </a>
        <a href="#" className="bg-white/10 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
          <Image src="/album.png" width={80} height={80} alt="Foto album" />
          <strong>Master Of Puppets</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-5 invisible group-hover:visible">
            <Play fill='bg-black' />
          </button>
        </a>
      </div>

      <h2 className="font-semibold text-2xl mt-10">Recently played</h2>

      <div className="grid grid-cols-7 gap-5 mt-4">
        <a href="" className="bg-white/5 p-3 flex flex-col gap-3 rounded hover:bg-white/10">
          <Image src="/album.png" className="w-full rounded-md" width={80} height={80} alt="Foto album" />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-500">Metallica</span>
        </a>
        <a href="" className="bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10">
          <Image src="/album.png" className="w-full" width={80} height={80} alt="Foto album" />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-500">Metallica</span>
        </a>
        <a href="" className="bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10">
          <Image src="/album.png" className="w-full" width={80} height={80} alt="Foto album" />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-500">Metallica</span>
        </a>
        <a href="" className="bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10">
          <Image src="/album.png" className="w-full" width={80} height={80} alt="Foto album" />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-500">Metallica</span>
        </a>
        <a href="" className="bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10">
          <Image src="/album.png" className="w-full" width={80} height={80} alt="Foto album" />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-500">Metallica</span>
        </a>
        <a href="" className="bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10">
          <Image src="/album.png" className="w-full" width={80} height={80} alt="Foto album" />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-500">Metallica</span>
        </a>
        <a href="" className="bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10">
          <Image src="/album.png" className="w-full" width={80} height={80} alt="Foto album" />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-500">Metallica</span>
        </a>
        <a href="" className="bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10">
          <Image src="/album.png" className="w-full" width={80} height={80} alt="Foto album" />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-500">Metallica</span>
        </a>
        <a href="" className="bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10">
          <Image src="/album.png" className="w-full" width={80} height={80} alt="Foto album" />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-500">Metallica</span>
        </a>
        <a href="" className="bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10">
          <Image src="/album.png" className="w-full" width={80} height={80} alt="Foto album" />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-500">Metallica</span>
        </a>
        <a href="" className="bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10">
          <Image src="/album.png" className="w-full" width={80} height={80} alt="Foto album" />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-500">Metallica</span>
        </a>
        <a href="" className="bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10">
          <Image src="/album.png" className="w-full" width={80} height={80} alt="Foto album" />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-500">Metallica</span>
        </a>
        <a href="" className="bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10">
          <Image src="/album.png" className="w-full" width={80} height={80} alt="Foto album" />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-500">Metallica</span>
        </a>
        <a href="" className="bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10">
          <Image src="/album.png" className="w-full" width={80} height={80} alt="Foto album" />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-500">Metallica</span>
        </a>
        <a href="" className="bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10">
          <Image src="/album.png" className="w-full" width={80} height={80} alt="Foto album" />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-500">Metallica</span>
        </a>
        <a href="" className="bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10">
          <Image src="/album.png" className="w-full" width={80} height={80} alt="Foto album" />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-500">Metallica</span>
        </a>
        <a href="" className="bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10">
          <Image src="/album.png" className="w-full" width={80} height={80} alt="Foto album" />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-500">Metallica</span>
        </a>
        <a href="" className="bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10">
          <Image src="/album.png" className="w-full" width={80} height={80} alt="Foto album" />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-500">Metallica</span>
        </a>
        <a href="" className="bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10">
          <Image src="/album.png" className="w-full" width={80} height={80} alt="Foto album" />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-500">Metallica</span>
        </a>
        <a href="" className="bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10">
          <Image src="/album.png" className="w-full" width={80} height={80} alt="Foto album" />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-500">Metallica</span>
        </a>
        <a href="" className="bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10">
          <Image src="/album.png" className="w-full" width={80} height={80} alt="Foto album" />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-500">Metallica</span>
        </a>
        <a href="" className="bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10">
          <Image src="/album.png" className="w-full" width={80} height={80} alt="Foto album" />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-500">Metallica</span>
        </a>
        <a href="" className="bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10">
          <Image src="/album.png" className="w-full" width={80} height={80} alt="Foto album" />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-500">Metallica</span>
        </a>
        <a href="" className="bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10">
          <Image src="/album.png" className="w-full" width={80} height={80} alt="Foto album" />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-500">Metallica</span>
        </a>
        <a href="" className="bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10">
          <Image src="/album.png" className="w-full" width={80} height={80} alt="Foto album" />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-500">Metallica</span>
        </a>
        <a href="" className="bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10">
          <Image src="/album.png" className="w-full" width={80} height={80} alt="Foto album" />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-500">Metallica</span>
        </a>
        <a href="" className="bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10">
          <Image src="/album.png" className="w-full" width={80} height={80} alt="Foto album" />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-500">Metallica</span>
        </a>
        <a href="" className="bg-white/5 p-3 flex flex-col gap-2 rounded hover:bg-white/10">
          <Image src="/album.png" className="w-full" width={80} height={80} alt="Foto album" />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-500">Metallica</span>
        </a>
      </div>
    </main>
  )
}