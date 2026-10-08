import Image from "next/image";
import Navbar from "./components/navbar";
import Link from "next/link";

export default function Home() {
  return (
     <section className="min-h-screen flex flex-col justify-end items-center bg-[url('/home/background-home-desktop.jpg')]   bg-center bg-cover md:pb-24">
          <section className="grid grid-cols-2 w-[70vw] min-w-100 ">
      <div className="">
        <p className="text-4xl uppercase">So, you want to travel to</p>
        <p className="text-9xl uppercase">Space</p>
        <p className="text-lg">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      
      <div className="justify-items-center"><Link href="/destination" className="w-[12rem] h-[12rem] rounded-full block bg-white text-black font-bold text-xl flex-center-col">Explore</Link></div>
    </section>
        </section>
  
  );
}
