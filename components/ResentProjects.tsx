
import React from 'react';
import { FaLocationArrow } from "react-icons/fa6";
import { useTranslations } from 'next-intl';
import { projects } from '@/data';
import { PinContainer } from './ui/3d-pin';
import Link from 'next/link';

const ResentProjects = () => {
  const t = useTranslations('Projects');
  return (
    <section id="projects">
      <div className="py-20 text-white">
        <h1 className="text-4xl font-bold text-center">
        {t('title')} <span className="text-purple-400">{t('titleSpan')}</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-16 mt-10">
          {projects.map(({ id, title, des, img, iconLists, link, gitHubLink }) => (
            <div
              key={id}
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] relative z-0"
            >
              <PinContainer title={link} href={link}>
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <img src={img} alt={title} />
                </div>
                <h2 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">{title}</h2>
  
                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 h-[56px]"
                  style={{
                    color: '#BEC1DD',
                    margin: '1vh 0',
                  }}
                >
                  {des}
            
                </p>
  
                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center hover:scale-150"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt="icon5" className="p-2 hover:scale-125" />
                      </div>
                    ))}
                  </div>
  
                  <div className="flex justify-center items-center gap-4">
                    <Link href={link} target="_blank" className="flex lg:text-xl md:text-xs text-sm text-purple hover:scale-125">
                    <img src='./www.svg' alt="git" className="lg:w-10 lg:h-10 w-8 h-8" />
                    </Link>
                    {/* <FaLocationArrow className="ms-3" color="#CBACF9" /> */}
                    <Link href={gitHubLink} target="_blank" className="flex lg:text-xl md:text-xs text-sm text-purple hover:scale-125">
                    <img src='./git.svg' alt="git" className="lg:w-10 lg:h-10 w-8 h-8 " />
                    </Link>
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResentProjects;
