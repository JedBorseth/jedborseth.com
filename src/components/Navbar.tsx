import { useState, useEffect } from "react";
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const listener = window.matchMedia("(max-width: 767px)");
    setIsMobile(listener.matches);
    const onChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
      setMenuOpen(false);
    };
    listener.addEventListener("change", onChange);
  }, []);
  return (
    <>
      {isMobile ? (
        <nav className="sticky top-0 border-b-2 font-mono text-white">
          <ul className="flex h-12 w-full items-center justify-between bg-black">
            <div className="pl-[5%]">
              <a href="" className="hover:text-gray-600">
                <li>MAKE LOGO HERE</li>
              </a>
            </div>
            <div
              className="mr-10 text-lg"
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            >
              |||
            </div>
            {menuOpen && (
              <div className="absolute top-12 right-0 flex w-screen animate-[opacity_250ms_ease-in-out] flex-col gap-5 border-t-2 border-violet-600 bg-black py-5 text-center">
                <a href="" className="hover:text-gray-600">
                  <li>Projects</li>
                </a>
                <a href="" className="hover:text-gray-600">
                  <li>About</li>
                </a>
              </div>
            )}
          </ul>
        </nav>
      ) : (
        <nav className="border-b-2 font-mono text-white">
          <ul className="flex h-12 w-full items-center justify-between bg-black">
            <div className="md:pl-[5%]">
              <a href="" className="hover:text-gray-600">
                <li>MAKE LOGO HERE</li>
              </a>
            </div>
            <div className="flex gap-10 md:pr-10">
              <a
                href="https://gallery.jedborseth.com"
                target="_blank"
                className="hover:text-gray-600"
              >
                <li>3D Gallery</li>
              </a>
              <a href="" className="hover:text-gray-600">
                <li>Projects</li>
              </a>
              <a href="" className="hover:text-gray-600">
                <li>About</li>
              </a>
            </div>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navbar;
