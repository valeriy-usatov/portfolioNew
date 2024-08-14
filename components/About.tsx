'use client';
import React, { useTransition, useState, ReactElement } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';
import { Button } from './ui/MovingBorder';

interface TabData {
  title: string;
  id: string;
  content: ReactElement;
}

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
        <li>Tomsk State University of Control Systems and Radioelectronics</li>
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

const About = () => {
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string): void => {
    startTransition(() => {
      setTab(id);
    });
  };

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

        {/* <Image
          src="/images/my-photo_big.jpg"
          width={500}
          height={400}
          alt="about-image"
          className="rounded-2xl"
        /> */}
       </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a web developer with a passion for creating interactive and responsive web
            applications. My expertise includes JavaScript, TypeScript, React, Next.js, Redux,
            Node.js, HTML, CSS, Tailwind CSS, and Git. I thrive on continuous learning and am
            dedicated to expanding my knowledge and honing my skills. As a collaborative team
            player, I am driven by the excitement of working with others to craft extraordinary
            applications. Outside of coding, you can find me exploring new hiking trails or
            experimenting with gourmet cooking recipes.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton selectTab={() => handleTabChange('skills')} active={tab === 'skills'}>
              {' '}
              Skills{' '}
            </TabButton>
            <TabButton selectTab={() => handleTabChange('education')} active={tab === 'education'}>
              {'  '}
              Education{' '}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('certifications')}
              active={tab === 'certifications'}
            >
              {' '}
              Certifications{' '}
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
