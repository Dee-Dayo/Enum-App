'use client';

import Link from 'next/link';
import Image from 'next/image';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AppsIcon from '@mui/icons-material/Apps';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-12 py-4 flex justify-between items-center relative">
      <div className="flex items-center space-x-4">
        <Image src="/logo.png" alt="Logo" width={25} height={25} />
        <Image src="/enum.png" alt="Enum Logo" width={70} height={22} className="hidden md:block" />
      </div>

      <div className="items-center space-x-8 hidden md:flex">
        <Link href="/">
          <span className="text-customGray font-semibold hover:text-customBlue transition-colors">
            Home
          </span>
        </Link>

        <Link href="/">
          <span className="bg-customLightBlue rounded-full px-6 py-3 text-customBlue font-semibold hover:text-customBlue transition-colors">
            Workspace
          </span>
        </Link>

        <Link href="/">
          <span className="text-customGray font-semibold hover:text-customBlue transition-colors">
            Resources Library
          </span>
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <NotificationsNoneIcon className="text-customGray" />
        <Image src="/profile.png" alt="Profile" width={32} height={32} className="rounded-full" />
        <span className="text-customGray hidden md:block">Onowomano</span>
        <ExpandMoreIcon className="text-customGray hidden md:block" />
        <AppsIcon className="text-customBlue hidden md:block" />
      </div>
    </nav>
  );
};

export default Navbar;
