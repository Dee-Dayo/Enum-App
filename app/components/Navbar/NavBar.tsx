import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-12 py-4 flex justify-between items-center relative">
      <div className="flex items-center space-x-4">
        <Image src="/logo.png" alt="Logo" width={25} height={25} />
        <Image src="/enum.png" alt="Enum Logo" width={80} height={32} className="hidden md:block" />
      </div>

      <div className=" items-center space-x-8 hidden md:flex">
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
        <Image src="/bell.png" alt="Notifications" width={32} height={32} />
        <Image src="/profile.png" alt="Profile" width={32} height={32} className="rounded-full" />
        <span className="text-customGray hidden md:block">Onowomano</span>
        <Image src="/arrow_down.png" alt="Dropdown" width={16} height={16} className="hidden md:block" />
        <Image src="/group.png" alt="Group" width={22} height={22} className="hidden md:block" />
      </div>
    </nav>
  );
};

export default Navbar;
