import { ReactNode } from 'react';
import Navbar from "@/app/components/Navbar/NavBar";
import Hero from "@/app/components/Hero/Hero";
import Footer from "@/app/components/Footer/Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      <Hero />
      <main>
        {children}
      </main>
        <Footer/>
    </div>
  );
};

export default Layout;
