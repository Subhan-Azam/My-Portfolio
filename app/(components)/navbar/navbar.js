// import "./navbar.css";
// import Link from "next/link";
// import Image from "next/image";
// import HeaderBtn from "../headerBtn/headerBtn";

// export default function Navbar() {
//   return (
//     <>
//       <header className="navbar text-gray-600 body-font">
//         <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row    items-center">
//           <Link
//             href="#header"
//             className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
//           >
//             <span className="ml-3 text-2xl text-white">My Portfolio</span>
//           </Link>

//           <ul className="ul space-x-5 md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
//             <li className="li">
//               <Link href="#about" className="text-white">
//                 About Me
//               </Link>
//             </li>

//             <li className="li">
//               <Link href="#skills" className="text-white">
//                 Skills
//               </Link>
//             </li>

//             <li className="li">
//               <Link href="#services" className="text-white">
//                 Services
//               </Link>
//             </li>
//             <li className="li">
//               <Link href="#contact" className="text-white">
//                 Contact Me
//               </Link>
//             </li>
//           </ul>

//           <Link href="https://github.com/Subhan-Azam" target="_blank">
//             <HeaderBtn title="My Github" />
//           </Link>
//         </div>
//       </header>
//     </>
//   );
// }

"use client";
import "./navbar.css"
import { RiMenu2Fill } from "react-icons/ri";
import { GiTireIronCross } from "react-icons/gi";
import { useState } from "react";
import HeaderBtn from "../headerBtn/headerBtn";
import Link from "next/link";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const openMenuHandler = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <nav className="sticky top-0 left-0 z-10 bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={openMenuHandler}
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {openMenu ? <GiTireIronCross /> : <RiMenu2Fill />}
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Link href="#header">
                <img
                  className="hidden sm:block h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <ul className="flex space-x-4">
                <li className="li">
                  <Link
                    href="#about"
                    className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                    aria-current="page"
                  >
                    About
                  </Link>
                </li>

                <li className="li">
                  <Link
                    href="#skills"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Skills
                  </Link>
                </li>
                <li className="li">
                  <Link
                    href="#services"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Services
                  </Link>
                </li>

                <li className="li">
                  <Link
                    href="#contact"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Link href="https://github.com/Subhan-Azam" target="_blank">
              <HeaderBtn title="My Github" />
            </Link>
          </div>
        </div>
      </div>

      {openMenu && (
        <div className="sm:hidden" id="mobile-menu">
          <ul className="space-y-1 px-2 pb-3 pt-2">
            <li className="li">
              <Link
                href="#about"
                className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                aria-current="page"
              >
                About
              </Link>
            </li>
            <li className="li">
              <Link
                href="#skills"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Skills
              </Link>
            </li>
            <li className="li">
              <Link
                href="#services"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Services
              </Link>
            </li>
            <li className="li">
              <Link
                href="#contact"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
