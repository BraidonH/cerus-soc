'use client'

import Image from "next/image";
import logo from './assets/imgs/CerusStudiosTransSmall.png';
import hamburger from './assets/imgs/menu.png';
import forest from './assets/imgs/forest.jpg';
import close from './assets/imgs/close.png';
import codImage from  './assets/imgs/landscape.jpg';
import menImage from  './assets/imgs/big-head.jpg';
import girlsImage from  './assets/imgs/group.jpg';
import LogoHighDef from './assets/imgs/cerus-logo-8k.png';
import { useState } from 'react';




export default function Home() {
  const [toggle, setToggle] = useState(false);
  const [imageSrc, setImageSrc] = useState(hamburger)

  function dropdown() {
    const dropdown = document.querySelector('.dropdown');

    if(toggle == false) {
      dropdown?.classList.remove('dropdown-closed')
      dropdown?.classList.add('dropdown-open')
      document.body.style.overflow = "hidden"
      setToggle(!toggle);
    } else {
      setToggle(!toggle)
      dropdown?.classList.remove('dropdown-open')
      dropdown?.classList.add('dropdown-closed')
      document.body.style.overflow = ""
    } 
  }

  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-hidden flex flex-col bg-[#222] px-4 pb-6">
      <div className="dropdown dropdown-closed flex flex-col p-8 md:hidden">
      <Image className="rounded-lg object-cover self-end" src={close} alt="close-dropdown" width="40" height="40" onClick={dropdown}/>
          <div className="flex flex-col items-start p-8 gap-10">
              <a href="/about" className="text-white text-5xl underline">About</a>
              <a href="/sponsors" className="text-white text-5xl underline">Sponsors</a>
              <a href="/clothing" className="text-white text-5xl underline">Clothing</a>
              <a href="/creators" className="text-white text-5xl underline">Creators</a>
          </div>
      </div>
      <div className="z-10 items-center justify-between font-mono text-sm max-w-[390px] md:max-w-full">
        <header className="bg-[#222] min-w-[100vw] px-4 flex items-center justify-between border-b-2 border-red-900 fixed left-0 md:hidden">
        <div className="">
            <Image className="rounded-lg object-cover" src={logo} alt="cerus logo" width="60" height="60"/>
          </div>
          <Image className="hamburger rounded-lg" src={imageSrc} alt="hamburger icon" width="40" height="40" onClick={dropdown}/>
        </header>
        <header className="hidden md:flex items-center justify-around min-w-screen">
          <div className="flex gap-6">
            <a className="text-white text-xl">About</a>
            <a className="text-white text-xl">Menus</a>
            <a className="text-white text-xl">Offers</a>
          </div>
          <Image className="" src={LogoHighDef} alt="high def cerus logo" width="100" height="100"/>
          <div className="flex gap-6">
            <a className="text-white text-xl">Gallery</a>
            <a className="text-white text-xl">Contact</a>
            <a className="text-white text-xl">Blog</a>
          </div>
        </header>
       <div className="image-slider flex flex-col items-center gap-7 mt-4 b pt-[75px] md:flex-row">
        
       </div>
      </div>
    </main>
  );  
}


