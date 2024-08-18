"use client";
import React, { useState } from "react";
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import NavLink from './NavLink';
import MenuOverlay from "./MenuOverlay";
import SelectLanguage from "./SelectLanguage";
import { useTranslations } from 'next-intl';

type NavLin = {
  title: string;
  path: string;
};



const NavBar = () => {
  const t = useTranslations('Navigation');
  const [navbarOpen, setNavbarOpen] = useState(false);

  const navLinks: { title: string, path: string }[] = [
    {
      title: `${t('About')}`,
      path: '#about',
    },
    {
      title: `${t('Projects')}`,
      path: '#projects',
    },
    {
      title: `${t('Contacts')}`,
      path: '#contact',
    },
  ];

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#000319] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href="/" className="text-white text-5xl">
          <img src="./images/portfolio_logo.png" alt="portfolio-plus" width={200}/>
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
       
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0  gap-4 mt-0">
            {navLinks.map((link, index) => (
              <li key={`${index}${link}`}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <SelectLanguage/>
        </div>

        
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default NavBar;
