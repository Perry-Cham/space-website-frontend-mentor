const destinations = [
  { position: "00", name: "Home" },
  { position: "01", name: "Destination" },
  { position: "02", name: "Crew" },
  { position: "03", name: "Technology" },
];
const Navbar = () => {
  return (
    <header className="flex w-full justify-between px-4 py-8">
      <div>
        <img src="/shared/logo.svg" className=""/>
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
  return (
    <nav className="flex justify-end px-8 py-4 bg-[rgba(255,255,255,0.05)] w-full">
      <ul className="flex justify-center items-center space-x-2">
        {destinations.map((dest) => (
          <li>
            <span className="font-bold">{dest.position}</span>
            <span>{dest.name}</span>
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
