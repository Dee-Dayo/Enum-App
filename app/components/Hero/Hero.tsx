import styles from './Hero.module.css';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative h-40 bg-cover bg-center" style={{ backgroundImage: "url('/background.png')" }}>
      {/*<div className="absolute inset-0 bg-black opacity-50"></div>*/}
      <div className="relative z-10 flex flex-col justify-center h-full px-8 text-white">
        <h1 className="text-4xl font-bold">Semicolon Africa</h1>
        <button className="mt-4 px-4 py-2 bg-white text-purple-700 font-semibold rounded-md hover:bg-gray-200 transition-colors">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default Hero;
