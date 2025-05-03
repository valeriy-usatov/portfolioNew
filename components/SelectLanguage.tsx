'use client';

import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useEffect, useState, useTransition } from 'react';
import Chinese from '../public/Chinese.svg';
import ArrowDown from '../public/down_arrow.svg';
import EngFlag from '../public/en.svg';
import RusFlag from '../public/ru.svg';

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

  useEffect(() => {
    const supportedLocales = ['ru', 'en', 'cn']; // Список поддерживаемых локалей

    // Проверяем, есть ли текущая локаль в списке поддерживаемых
    if (!supportedLocales.includes(localActive)) {
      // Перенаправляем на локаль 'en' при несоответствии
      router.replace(`/en`);
      return;
    }

    // Устанавливаем язык для отображения
    setLang(localActive === 'ru' ? 'RU' : localActive === 'cn' ? 'CN' : 'EN');
  }, [localActive, router]);

  return (
    <div className="text-white">
      <div className="flex gap-3 cursor-pointer" onClick={() => setOpen((value) => !value)}>
        {lang}
        <Image src={ArrowDown} alt="ArrowDown" className="" />
      </div>
      {open && (
        <div
          className={`absolute transition-all duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
        >
          <Link
            href="/ru"
            className="flex gap-3 items-center justify-between hover:scale-110"
            onClick={() => setOpen((value) => !value)}
          >
            <Image
              src={RusFlag}
              width={30}
              height={30}
              alt="ru"
              className="object-contain w-[30px] h-[30px]"
            />
            <p className="hidden lg:block">Русский</p>
          </Link>
          <Link
            href="/en"
            className="flex gap-3 items-center justify-between hover:scale-110"
            onClick={() => setOpen((value) => !value)}
          >
            <Image
              src={EngFlag}
              alt="en"
              width={30}
              height={30}
              className="object-contain w-[30px] h-[30px]"
            />
            <p className="hidden lg:block">English</p>
          </Link>
          <Link
            href="/cn"
            className="flex gap-3 items-center justify-between hover:scale-110"
            onClick={() => setOpen((value) => !value)}
          >
            <Image
              src={Chinese}
              alt="cn"
              width={30}
              height={30}
              className="object-contain w-[30px] h-[30px]"
            />
            <p className="hidden lg:block">中文</p>
          </Link>
        </div>
      )}
    </div>
  );
}
