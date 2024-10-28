'use client'

import Image from 'next/image';

export default function Footer() {
  return (
    <div className="fixed bottom-0 w-full border-t border-gray-200 md:hidden flex justify-around py-2">
      <div className="flex flex-col items-center text-customGray">
        <Image src="/home.png" alt="Home" width={20} height={20} />
        <span className="text-xs">Home</span>
      </div>

      <div className="flex flex-col items-center text-customBlue">
        <Image src="/layout.png" alt="Workspace" width={20} height={20} />
        <span className="text-xs text-blue-500">Workspace</span>
      </div>

      <div className="flex flex-col items-center text-customGray">
        <Image src="/program.png" alt="Resources" width={20} height={20} />
        <span className="text-xs">Resources</span>
      </div>

      <div className="flex flex-col items-center text-customGray">
        <Image src="/calendar.png" alt="Schedule" width={20} height={20} />
        <span className="text-xs">Schedule</span>
      </div>
    </div>
  );
}
