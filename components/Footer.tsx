import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container mx-auto p-12 flex justify-between">
      <Link href="/" className="text-white text-5xl">
          <img src="./images/portfolio_logo.png" alt="portfolio-plus" width={100}/>
        </Link>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
      
    </footer>
  );
};

export default Footer;
