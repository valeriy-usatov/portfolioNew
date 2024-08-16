import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://valeriy-usatov.com/"),
  title: "Usatov Persinal Portfolio",
  description: "Usatov is Web Developer, React Developer, Next.Js Developer",
  openGraph: {
    title: {
    default: "Usatov Persinal Portfolio",
    template: "%s - Usatov Persinal Portfolio" 
    },
    description: "Usatov is Web Developer, React Developer, Next.Js Developer",
    type: "website",
    locale: "en_Us",
    url:'https://valeriy-usatov.com',
    siteName: "Portfolio Usatov"
  }
};

// Can be imported from a shared config
const locales = ['en', 'ru'];
 
export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}


export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>

          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}


// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>{children}</body>
//     </html>
//   );
// }
