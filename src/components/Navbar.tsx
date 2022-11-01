import { useState, useEffect } from "react";
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(true);
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
            <li className="pl-[5%]">
              <a href="../" className="hover:text-gray-600">
                <p>MAKE LOGO HERE</p>
              </a>
            </li>
            <li
              className="mr-10 text-lg hover:cursor-pointer"
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
              </svg>
            </li>
            {menuOpen && (
              <div className="absolute top-12 right-0 flex w-screen animate-[opacity_250ms_ease-in-out] flex-col gap-5 border-t-2 border-violet-600 bg-black py-5 text-center">
                <a href="./projects" className="hover:text-gray-600">
                  Projects
                </a>
                <a href="./about" className="hover:text-gray-600">
                  About
                </a>
              </div>
            )}
          </ul>
        </nav>
      ) : (
        <nav className="border-b-2 font-mono text-white">
          <ul className="flex h-12 w-full items-center justify-between bg-black">
            <li className="md:pl-[5%]">
              <a href="../" className="hover:text-gray-600">
                <p>MAKE LOGO HERE</p>
              </a>
            </li>
            <div className="flex gap-10 md:pr-10">
              <li>
                <a
                  href="https://gallery.jedborseth.com"
                  target="_blank"
                  className="hover:text-gray-600"
                >
                  3D Gallery
                </a>
              </li>
              <li>
                <a href="./projects" className="hover:text-gray-600">
                  Projects
                </a>
              </li>
              <li>
                <a href="./about" className="hover:text-gray-600">
                  About
                </a>
              </li>
            </div>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navbar;
