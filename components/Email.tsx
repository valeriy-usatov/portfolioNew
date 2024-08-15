'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Button from './ui/Button';
import { Label } from './ui/Label';
import { Input } from './ui/Input';
import { cn } from './lib/utils';
import GithubIcon from '../public/github-icon.svg';
import LinkedinIcon from '../public/linkedin-icon.svg';
import Whatsapp from '../public/whatsapp.svg';
import Telegram from '../public/telegram.svg';

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};


const Email = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const t = useTranslations('Contacts');

  type FormType ={
    email:string, 
    subject:string, 
    message:string
  }

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      email: (e.target as HTMLFormElement).email.value,
      subject: (e.target as HTMLFormElement).subject.value,
      message: (e.target as HTMLFormElement).message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = '/api/send';

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log('Message sent.');
      setEmailSubmitted(true);
    }
  };

  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">{t('title')}</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
        {t('description')}
        </p>
        <div className="socials flex gap-2">
          <Link className='hover:scale-125' href="https://github.com/valeriy-usatov/" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link className='hover:scale-125' href="linkedin.com" target="_blank">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link className='hover:scale-125' href="https://web.telegram.org/k/#@Valeriy1983" target="_blank">
            <Image src={Telegram} alt="Linkedin Icon" />
          </Link>
          <Link className='hover:scale-125' href="https://wa.me/79609771221" target="_blank">
            <Image src={Whatsapp} alt="Linkedin Icon" />
          </Link>
        </div >
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">{t('EmailSent')}</p>
        ) : (
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="">
              <LabelInputContainer>
                <Label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
                {t('Email')}
                </Label>
              </LabelInputContainer>
              <Input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="example@google.com"
              />
            </div>
            <div className="">
              <LabelInputContainer>
                <Label htmlFor="subject" className="text-white block text-sm mb-2 font-medium">
                {t('Subject')}
                </Label>
              </LabelInputContainer>
              <Input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder={t('sayHi')}
              />
            </div>
            <div className="">
              <LabelInputContainer>
                <Label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
                {t('Message')}
                </Label>
              </LabelInputContainer>
              <Input
                name="message"
                id="message"
                type="text"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 h-[80px]"
                placeholder={t('Talk')}
              />
            </div>
            {/* <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button> */}
            <Button title={t('Send')} />
          </form>
        )}
      </div>
    </section>
  );
};

export default Email;


