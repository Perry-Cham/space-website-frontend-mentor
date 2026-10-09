import Image from "next/image";
import Navbar from "./components/navbar";
import Link from "next/link";

export default function Home() {
  const exploreBtnRadius = {
    desktop:"12rem",
    mobile:"8rem" 
  }
  return (
     <section className="min-h-screen flex flex-col max-sm:pt-[15vh] overflow-hidden md:justify-end items-center bg-[url('/home/background-home-mobile.jpg')] md:bg-[url('/home/background-home-desktop.jpg')]   bg-center bg-cover md:pb-24">
          <section className=" grid max-sm:gap-24  md:grid-cols-2 md:w-[70vw] min-w-100">
      <div className="px-8">
        <p className="text-center text-lg md:text-4xl uppercase">So, you want to travel to</p>
        <p className="text-center text-7xl my-4 md:text-9xl uppercase">Space</p>
        <p className="text-justify md:text-lg">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>

      </div>
      
      <div 
    className="justify-items-center"><Link href="/destination" className={`w-40 h-40 md:w-80 md:h-80 rounded-full block bg-white text-black font-bold text-xl flex-center-col`}>Explore</Link></div>
    </section>
        </section>
  
  );
}
