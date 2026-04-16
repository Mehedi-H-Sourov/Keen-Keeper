
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logoImg from "@/assets/logo.png";
import { IoHomeOutline } from "react-icons/io5";
import { RiTimeLine } from "react-icons/ri";
import { LuChartLine } from "react-icons/lu";
import MyNavLink from './MyNavLink';

const Navbar = () => {
     const navItems = [
    {
      path: "/home",
      text: "Home",
      icon: <IoHomeOutline />,
    },
    {
      path: "/timeline",
      text: "Timeline",
      icon: <RiTimeLine />,
    },
    {
      path: "/stats",
      text: "Stats",
      icon: <LuChartLine />,
    },
   
  ];
    return (
        <div className='shadow flex justify-between bg-base container mx-auto px-4 py-4 items-center'>
            <div>
                <Image src={logoImg} width={100} height={100} alt="Logo" />
            </div>

              <ul className="flex justify-between gap-2 items-center pr-6">
          {navItems.map((item, index) => (
            // Client component
            <MyNavLink key={index} href={item.path}>
              <span className="flex items-center gap-2  px-4 py-2 rounded-lg">
              {item.icon}
              {item.text}
        </span>
            </MyNavLink>
          ))}
            </ul>
        </div>
    );
};

export default Navbar;