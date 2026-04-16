"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MyNavLink = ({href, children}) => {
    const pathname = usePathname();
    return (
         <Link
      href={href}
      className={` ${pathname === href ? "bg-[#2f5d4e] text-white" : "text-gray-600"}`}
    >
      {children}
    </Link>
    );
};

export default MyNavLink;