import Link from "next/link";
import Image from "next/image";
import Logo from "public/assets/logo.svg";
import React from "react";
import { useState } from "react";

const Navlink: React.FC<{
  children: React.ReactNode;
  href: string;
  onClick: () => void;
}> = ({ children, href, onClick }) => {
  return (
    <li>
      <Link href={href}>
        <a onClick={onClick} className={`text-white font-bold text-lg `}>
          {children}
        </a>
      </Link>
    </li>
  );
};

export const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <nav className={`container mt-10 flex justify-between items-center`}>
      <Link href="/">
        <a aria-label="homepage" className={`grid`}>
          <Image src={Logo} alt="" />
        </a>
      </Link>
      <div
        className={`fixed z-50 w-[min(22rem,87.2%)] right-align bg-bgdark pb-10 pt-6 px-6 rounded-lg 
        flex flex-col items-center gap-8 
        ${isSidebarOpen ? "top-24 transition-[top] duration-500" : "top-[-100vh]"}
      `}
      >
        <button
          className={`close-icon h-4 w-4 bg-white self-end`}
          aria-label="close menu"
          onClick={() => setIsSidebarOpen(false)}
        ></button>
        <ul
          className={`flex flex-col items-center gap-8 border-b border-[#9E9AA840] w-full pb-8 `}
        >
          <Navlink onClick={() => setIsSidebarOpen(false)} href="/">
            Features
          </Navlink>
          <Navlink onClick={() => setIsSidebarOpen(false)} href="/">
            Pricing
          </Navlink>
          <Navlink onClick={() => setIsSidebarOpen(false)} href="/">
            Resources
          </Navlink>
        </ul>
        <div className={`w-full flex flex-col gap-8 items-center`}>
          <Link href="/">
            <a
              onClick={() => setIsSidebarOpen(false)}
              className={`text-white font-bold text-lg `}
            >
              Login
            </a>
          </Link>
          <Link href="/">
            <a
              onClick={() => setIsSidebarOpen(false)}
              className={`h-12 w-full bg-primary grid place-items-center rounded-full
             text-white text-lg font-bold`}
            >
              Sign Up
            </a>
          </Link>
        </div>
      </div>
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed w-full h-screen top-0 left-0 z-[49]"
        ></div>
      )}

      <button
        onClick={() => setIsSidebarOpen(true)}
        className={`hamburger-icon h-6 w-6 bg-text`}
        aria-label="open menu"
      ></button>
    </nav>
  );
};
