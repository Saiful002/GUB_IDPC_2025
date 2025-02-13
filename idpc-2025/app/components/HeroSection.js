
import Image from 'next/image';
import Link from 'next/link';
import DemoImg from '@/public/Images/GUB IDPC 2025 LOGO .png'

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center text-left sm:px-16 md:px-16 px-6 py-16 my-8">
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
          GUB Inter Department <br /> Programming Contest-2025
        </h2>
        <p className="sm:text-lg md:text-lg text-base font-medium max-w-2xl">
          Get ready to showcase your programming skills in the most prestigious contest of the year. Join the best minds and compete for glory!
        </p>
        <div className="flex justify-center md:justify-start">
          <Link href="/Registration" className="mt-6 bg-yellow-500 px-8 py-4 rounded-xl font-semibold shadow-md hover:bg-[#cd1a69] transition duration-300">
            Register Now
          </Link>
        </div>
      </div>
      <div className="md:w-2/5 shadow-xl shadow-yellow-300 mt-16 md:mt-32">
        <Image 
          src={DemoImg} 
          alt="IDPC 2025" 
          width={600} 
          height={400} 
          className="rounded-lg shadow-lg w-full h-auto"
        />
      </div>
    </section>
  );
};

export default HeroSection;
