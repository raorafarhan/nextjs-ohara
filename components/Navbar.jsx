import React from "react";
import Image from "next/image";
import Logo from "../assets/img/logo-ohara.svg";
import SearchLogo from "../assets/img/search-logo.svg";
import TrollyIcon from "../assets/img/trolly-icon.png";
import ProfileIcon from "../assets/img/profile-logo.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="left-0 top-0 z-50 flex w-full items-center bg-transparent">
      <div className="w-full mx-auto ">
        <div className="w-full flex relative justify-center items-center border-b-2 box-border shadow-md">
          <div className="px-4">
            <Link href="/">
              <Image
                src={Logo}
                alt="Ohara Arch"
                width={140}
                height={70}
                className="py-4"
              ></Image>
            </Link>
          </div>
          <div className="ml-12">
            <div className="bg-white border-gray-300 border-[1px] w-[39rem] h-9 rounded-xl flex items-center justify-between ">
              <input type="text" className="text-sm ml-3 text-gray-400 border-none focus:outline-none w-full" placeholder="Search"></input>
              <Image src={SearchLogo} className="h-[0.85rem] filter grayscale"></Image>
            </div>
          </div>
          <div className="ml-24">
            <div>
              <ul className="flex space-x-20">
                <li className="cursor-pointer hover:text-purple-800 transition-all duration-300">My Class</li>
                <li className="cursor-pointer hover:text-purple-800 transition-all duration-300">Be a Lecturer</li>
                <li className="cursor-pointer hover:text-purple-800 transition-all duration-300 hover:fill-purple-800 ">
                <Link href={'/'} className="flex">
                  <p className="mr-2">Cart</p>
                  <Image src={TrollyIcon} width={25} className="stroke-purple-800"></Image>
                </Link>
                </li>
                <li className="cursor-pointer hover:text-purple-800 transition-all duration-300 ">
                <Link href={'/'} className="flex">
                  <p className="mr-2">Profile</p>
                  <Image src={ProfileIcon} width={25} className="fill-current"></Image>
                </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
