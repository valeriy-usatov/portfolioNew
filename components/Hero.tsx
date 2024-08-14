'use client';

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Button } from './ui/MovingBorder';
import { GlobeDemo } from './GlobeDemo';
// import { MovingBorder } from './ui/MovingBorder';

const Hero = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
          >
            <h1 className="text-white mb-4 text-4xl lg:text-7xl sm:text-5xl leading-normal sm:leading-normal lg:leading-normal font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                Hello, I'm
              </span>
              <br />
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'Valeriy',
                  2000, // wait 1s before replacing "Mice" with "Hamsters"
                  'Web Developer',
                  1000,
                  'React Developer',
                  1000,
                  'Next.Js Developer',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className="text-[#ADB7BE] sm:text-lg lg:text-xl mb-6 text-base">
              Welcame to my portfolio! Scrol down to discover more about my projects, and how I can
              help bring yours ideas to life
            </p>
            <div>
              <Link
                href="/#contact"
                className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
              >
                Hire Me
              </Link>
              <Link
                href="./Usatov.pdf"
                download
                target='target="_blank"'
                className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
              >
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  Download CV
                </span>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          {/* <GlobeDemo/> */}
          <div className="flex items-center justify-center rounded-full bg-transparent w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
            >
              <Image src="/images/photo-2.png" alt="hero image" width={400} height={400} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
