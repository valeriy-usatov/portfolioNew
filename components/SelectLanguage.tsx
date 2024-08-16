'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useEffect, useState, useTransition } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import EngFlag from '../public/en.svg';
import RusFlag from '../public/ru.svg';
import ArrowDown from '../public/down_arrow.svg';
import { log } from 'console';

export default function SelectLanguage() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const [lang, setLang] = useState('EN');
  const [open, setOpen] = useState(false);

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  useEffect(()=>{
    localActive==='ru' ? setLang('RU'): setLang('EN')
  },[localActive])


  return (
    <div className="text-white">
      <div className="flex gap-3 cursor-pointer" onClick={()=>setOpen(value=>!value)}>
        {lang}
        <Image src={ArrowDown} alt="ArrowDown" className=''/>
      </div>
      {open && (
        <div className='absolute'>
        <Link href="/ru" className="flex gap-3 hover:scale-110" onClick={()=>setOpen(value=>!value)}>
          <Image src={RusFlag} alt="ru" />
          <p className='hidden lg:block'>Русский</p>
        </Link>
        <Link href="/en" className="flex gap-3 hover:scale-110" onClick={()=>setOpen(value=>!value)}>
          <Image src={EngFlag} alt="en" />
          <p className='hidden lg:block'>English</p>
        </Link>
      </div>
        )}
      
    </div>
  );
}
