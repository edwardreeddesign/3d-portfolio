/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Navbar = () => {
  const router = useRouter();
  const navLinks = [
    // {
    //   name: 'Home',
    //   url: '/',
    // },
    {
      name: 'About',
      url: '/about',
    },
    {
      name: 'Projects',
      url: '/projects',
    },
    {
      name: 'Contact',
      url: '/contact',
    },
  ];
  return (
    <header className="header">
      <Link href="/">
        <img
          src="/images/logos/full-logo.svg"
          alt="Full Logo"
          className=" h-12 bg-black items-center justify-center flex shadow-lg p-2 rounded-lg"
        />
      </Link>
      {navLinks.map(links => (
        <nav
          key={links.name}
          className="flex  text-lg  gap-3 lg:gap-7 font-medium  "
        >
          <Link
            href={links.url}
            className={router.pathname === links.url ? 'active' : ' '}
          >
            {links.name}
          </Link>
        </nav>
      ))}
    </header>
  );
};
export default Navbar;
