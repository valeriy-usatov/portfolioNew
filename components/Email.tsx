'use client';
import React, { useState } from 'react';
import GithubIcon from '../public/github-icon.svg';
import LinkedinIcon from '../public/linkedin-icon.svg';
import Whatsapp from '../public/whatsapp.svg';
import Telegram from '../public/telegram.svg';
import Link from 'next/link';
import Image from 'next/image';
import Button from './ui/Button';

const Email = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

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
        <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always open. Whether you
          have a question or just want to say hi, I&apos;ll try my best to get back to you!
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
          <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
        ) : (
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="">
              <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="example@google.com"
              />
            </div>
            <div className="">
              <label htmlFor="subject" className="text-white block text-sm mb-2 font-medium">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="">
              <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            {/* <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button> */}
            <Button title='Send Message' />
          </form>
        )}
      </div>
    </section>
  );
};

export default Email;
