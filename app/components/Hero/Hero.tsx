'use client';

import Image from 'next/image';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Hero = () => {
  return (
    <div className="relative h-40 bg-cover bg-center" style={{ backgroundImage: "url('/background.png')" }}>
      <div className="relative z-10 flex justify-start items-center h-full px-12">
        <div className="p-2 bg-white bg-opacity-65 rounded-md text-center w-50">
          <div className="flex items-center space-x-4 mb-1.5">
            <Image src="/semicolon_logo.png" alt="Semicolon Logo" width={40} height={40}/>
            <h1 className="text-1xl font-bold text-black">Semicolon Africa</h1>
          </div>
          <Button
              variant="contained"
              disableElevation
              style={{ backgroundColor: 'white',
                color: 'black',
                width: '100%',
                padding: '5px 5px',
                textTransform: 'none'}}
              endIcon={<ArrowForwardIcon/>}
              className="font-semibold rounded-md"
          >
            View Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
