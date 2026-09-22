import Image from "next/image";

export default function Home() {
  return (
    <section className="grid grid-cols-2 h-full">
      <div>
        <p>So, you want to travel to</p>
        <p>Space</p>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      
      <div className="justify-items-center"><button className="w-[12rem] h-[12rem] rounded-full block bg-white text-black font-bold text-xl">Explore</button></div>
    </section>
  );
}
