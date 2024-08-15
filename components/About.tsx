'use client';
import React, { useTransition, useState, ReactElement } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import TabButton from './TabButton';
import { Button } from './ui/MovingBorder';

interface TabData {
  title: string;
  id: string;
  content: ReactElement;
}



const About = () => {
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();
  const t = useTranslations('AboutMe');

  const handleTabChange = (id: string): void => {
    startTransition(() => {
      setTab(id);
    });
  };

  const TAB_DATA: TabData[] = [
    {
      title: 'Skills',
      id: 'skills',
      content: (
        <ul className="list-disc pl-2">
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Redux</li>
          <li>Node.js</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Tailwind</li>
          <li>Git</li>
        </ul>
      ),
    },
    {
      title: 'Education',
      id: 'education',
      content: (
        <ul className="list-disc pl-2">
          <li>{t('University')}</li>
        </ul>
      ),
    },
    {
      title: 'Certifications',
      id: 'certifications',
      content: (
        <ul className="list-disc pl-2">
          <li>Udemy</li>
          <li>Academy school</li>
        </ul>
      ),
    },
  ];

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8  py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
       <div className='flex justify-center'>
       <Button
          duration={Math.floor(Math.random() * 10000) + 10000}
          borderRadius="1.75rem"
          style={{
            background: 'rgb(4,7,29)',
            backgroundColor: 'linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
            // add this border radius to make it more rounded so that the moving border is more realistic
            borderRadius: `calc(1.75rem* 0.96)`,
          }}
          // remove bg-white dark:bg-slate-900
          className="flex-1 text-black dark:text-white border-neutral-700 dark:border-slate-800"
        >
         
          <Image
          src="/images/my-photo_big.jpg"
          width={400}
          height={600}
          // layout="fill"
          objectFit="cover"
          alt="about-image"
          className="rounded-2xl"
        /> 
        </Button>
       </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">{t('About_Me')}</h2>
          <p className="text-base lg:text-lg">
          {t('Description')}
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton selectTab={() => handleTabChange('skills')} active={tab === 'skills'}>
              {' '}
              {t('Skills')}
            </TabButton>
            <TabButton selectTab={() => handleTabChange('education')} active={tab === 'education'}>
              {'  '}
              {t('Education')}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('certifications')}
              active={tab === 'certifications'}
            >
              {' '}
              {t('Certifications')}
            </TabButton>
          </div>
          {/* <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div> */}
          {/* второй вариант */}
          {TAB_DATA.map((item) => {
            if (item.id === tab) {
              return item.content;
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
