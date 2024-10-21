import { ReactNode } from 'react';
import Navbar from "@/app/components/Navbar/NavBar";
import Hero from "@/app/components/Hero/Hero";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      <Hero />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
