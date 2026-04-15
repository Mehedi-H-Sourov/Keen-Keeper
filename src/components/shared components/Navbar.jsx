
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logoImg from "@/assets/logo.png";
import { IoHomeOutline } from "react-icons/io5";
import { RiTimeLine } from "react-icons/ri";
import { LuChartLine } from "react-icons/lu";

const Navbar = () => {
    return (
        <div className='shadow flex justify-between bg-base container mx-auto px-4 py-4'>
            <div>
                <Image src={logoImg} width={100} height={100} alt="Logo" />
            </div>

            <div className='flex gap-3'>
                
                <Link href="/home" className='flex items-center gap-1.5 text-gray-500'><IoHomeOutline /> Home</Link>
                <Link href="/timeline" className='flex items-center gap-1.5 text-gray-500'> <RiTimeLine /> Timeline</Link>
                <Link href="/stats" className='flex items-center gap-1.5 text-gray-500'><LuChartLine />Stats</Link>
            </div>
        </div>
    );
};

export default Navbar;