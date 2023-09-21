import { Footer } from "@/components/Footer";
import { Sidebar } from "@/components/Sidebar";
import { Main } from "@/components/Main";
import React from 'react';
import { Header } from "@/components/Header";

export default function Home() {

  return (
    <div className="flex h-screen">
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 overflow-auto">
          <Header />
          <Main />
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full bg-gray-200">
        <Footer />
      </div>
    </div>
  )
}