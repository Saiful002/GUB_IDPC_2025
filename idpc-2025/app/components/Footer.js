import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/Images/GUB IDPC 2025 LOGO  TRANSPARENT.png'

const Footer = () => {
  return (
    <footer className=" mt-32 py-10 bg-[#154963] shadow-[0_-6px_12px_-1px_#9ebec8]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center lg:items-start justify-evenly">
        
        {/* Logo */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left mb-8 lg:mb-0">
            <div className="md:w-52 w-52 ">
                          <Image 
                            src={logo} 
                            alt="IDPC 2025" 
                            width={600} 
                            height={400} 
                            className="w-full h-24 md:h-32 bg-white p-5 border rounded-lg"
                          />
                        </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
          
          {/* Quick Link */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Quick Link</h3>
            <ul className="space-y-2 text-left text-sm">
              <li><Link href="/AboutGUBCPA" className="hover:text-yellow-400">GUBCPA</Link></li>
              <li><Link href="/AboutSponsors" className="hover:text-yellow-400">Sponsors & Partners</Link></li>
              <li><Link href="/Registration" className="hover:text-yellow-400">Pre-Registration</Link></li>
            </ul>
          </div>

          {/* Event */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Event</h3>
            <ul className="space-y-2 text-left text-sm">
           
              <li><Link href="/EventDetails" className="hover:text-yellow-400">Event Details</Link></li>
              <li><Link href="/EventSchedule" className="hover:text-yellow-400">Event Schedule</Link></li>
              <li><Link href="/PrizePool" className="hover:text-yellow-400">Prize Pool</Link></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Copyright Section */}
      <div className=" text-center mt-8 border-t border-gray-300 pt-4">
        <p className="text-sm">Copyright © 2025 GUB IDPC | Developed by <Link href="https://github.com/Saiful002" className="text-yellow-400 font-semibold">Saiful Kabir Chowdhury</Link></p>
        
      </div>
    </footer>
  );
};

export default Footer;
