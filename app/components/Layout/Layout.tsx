import { ReactNode } from 'react';
import Navbar from "@/app/components/Navbar/NavBar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      {/*<Hero />*/}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
