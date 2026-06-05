'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({href, children}) => {
    const path = usePathname();
    const isActive = path === href;
    return (
        <div>
            <Link href={href} className={`hover:text-[#24B1B1] ${isActive ? "text-[#24B1B1] border-b-2 border-[#24B1B1] px-2 py-1" : ''}`}>{children}</Link>
        </div>
    );
};

export default Navlink;