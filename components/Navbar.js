/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="header">
      <Link href="/">
        <img
          src="/images/logos/full-logo.svg"
          alt="Full Logo"
          className="w-full h-12"
        />
      </Link>
      <nav className="flex text-lg text-white gap-7 font-medium">
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
};
export default Navbar;
