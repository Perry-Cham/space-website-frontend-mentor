"use client"
import { usePathname } from "next/navigation";
const destinations = [
  { position: "00", name: "Home", url:"/" },
  { position: "01", name: "Destination", url:"/destination" },
  { position: "02", name: "Crew", url: "/crew" },
  { position: "03", name: "Technology", url: "/technology" },
];
const Navbar = () => {
 


  return (
    <header className="flex w-full justify-between px-4 py-8 fixed top-0 left-0">
      <div>
        <img src="/shared/logo.svg" className="" />
      </div>

      <div className="hidden md:block w-[45%]">
        <DesktopNavigation />
      </div>

      <div className="md:hidden">
        <MobileNavigation />
      </div>
    </header>
  );
};


const DesktopNavigation = () => {
   const pathname = usePathname();
  return (
    <nav className="flex justify-end px-8 bg-[rgba(255,255,255,0.05)] w-full h-[10vh]">
      <ul className="flex justify-center items-center space-x-16">
        {destinations.map((dest) => (
          <li key={dest.name} className={`text-lg h-full  py-4 flex justify-center items-center ${(usePathname() === ("/" + dest.name)) && "border-b-white border-2"}`}>
            <a href={dest.url} className="h-fit cursor-pointer">
              <span  className="font-bold inline-block mr-2 ">{dest.position}</span>
              <span>{dest.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const MobileNavigation = () => {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>Destinations</li>
        <li>Crew</li>
        <li>Vehicles</li>
      </ul>
    </nav>
  );
};




export default Navbar;
