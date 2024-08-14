
import Hero from '@/components/Hero';
import NavBar from '@/components/NavBar';
import Image from 'next/image';
import About from '@/components/About';
import Projects from '@/components/Projects';
import ResentProjects from '@/components/ResentProjects';
import Email from '@/components/Email';
import Footer from '@/components/Footer';
// import Template from '@/components/Template';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#000319]">
      <NavBar />
      
      <div className="container mt-24 mx-auto px-12 py-4">
        <Hero/>
        <About/>
        {/* <Projects/> */}
        <ResentProjects />
        <Email/>
      </div>
      <Footer/>
    </main>
  );
}
