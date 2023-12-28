import "./navbar.css";
import Link from "next/link";
import HeaderBtn from "../headerBtn/headerBtn";

export default function Navbar() {
  return (
    <>
      <header className="navbar text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <span className="ml-3 text-2xl text-white">My Portfolio</span>
          </Link>

          <ul className="space-x-5 md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <li>
              <Link href="#about" className="text-white">
                About Me
              </Link>
            </li>

            <li>
              <Link href="#" className="text-white">
                Skills
              </Link>
            </li>

            <li>
              <Link href="#services" className="text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-white">
                Contact Me
              </Link>
            </li>
          </ul>

          <HeaderBtn title="My Github" />
        </div>
      </header>
    </>
  );
}
