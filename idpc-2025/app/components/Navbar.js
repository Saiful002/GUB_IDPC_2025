'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa';
import { HiMenu } from "react-icons/hi";
import logo from '@/public/Images/GUB IDPC 2025 LOGO  TRANSPARENT.png'
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  let hideTimeout = null;

  const menuRef = useRef(null);
  const toggleMenu = () => setIsOpen(!isOpen);

  const handleMouseEnter = (dropdown) => {
    clearTimeout(hideTimeout); // Prevent hiding too quickly
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    hideTimeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 200); // Add delay before hiding
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="bg-transparent py-4 shadow-md shadow-[#9ebec8] shadow-b-2">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="md:w-32 w-52 ">
                <Image 
                  src={logo} 
                  alt="IDPC 2025" 
                  width={600} 
                  height={400} 
                  className="w-full h-24 md:h-20 bg-white p-5 border rounded-lg"
                />
              </div>
        <button id="menu-toggle" className="md:hidden text-white focus:outline-none" onClick={toggleMenu}>
  <HiMenu className="w-6 h-6" />
</button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6">
            <li><Link href="/" className="text-white hover:text-yellow-400">Home</Link></li>

            {/* About Dropdown */}
            <li 
              className="relative"
              onMouseEnter={() => handleMouseEnter('about')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center text-white hover:text-yellow-400">
                About <FaChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === 'about' && (
                <ul 
                  className="absolute left-0 mt-2 w-40 bg-gray-800 text-white shadow-lg rounded-lg z-50"
                  onMouseEnter={() => handleMouseEnter('about')}
                  onMouseLeave={handleMouseLeave}
                >
                  <li><Link href="/AboutGUBCPA" className="block px-4 py-2 hover:bg-gray-700 hover:text-yellow-400">About GUBCPA</Link></li>
                  <li><Link href="/AboutSponsors" className="block px-4 py-2 hover:bg-gray-700 hover:text-yellow-400">Sponsors & Partners</Link></li>
                  <li><Link href="/AboutSite" className="block px-4 py-2 hover:bg-gray-700 hover:text-yellow-400">About Site</Link></li>
                </ul>
              )}
            </li>

            {/* Event Dropdown */}
            <li 
              className="relative"
              onMouseEnter={() => handleMouseEnter('event')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center text-white hover:text-yellow-400">
                Event <FaChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === 'event' && (
                <ul 
                  className="absolute left-0 mt-2 w-40 bg-gray-800 text-white shadow-lg rounded-lg z-50"
                  onMouseEnter={() => handleMouseEnter('event')}
                  onMouseLeave={handleMouseLeave}
                >
                  <li><Link href="/EventDetails" className="block px-4 py-2 hover:bg-gray-700 hover:text-yellow-400">Event Details</Link></li>
                  <li><Link href="/PrizePool" className="block px-4 py-2 hover:bg-gray-700 hover:text-yellow-400">Prize Pool</Link></li>
                </ul>
              )}
            </li>

            <li><Link href="/EventSchedule" className="text-white hover:text-yellow-400">Schedule</Link></li>
            <li><Link href="/Registration" className="text-white hover:text-yellow-400">Registration</Link></li>
    
          </ul>
        </nav>
      </div>

      {/* Mobile Navigation */}
      
      <nav ref={menuRef} id="mobile-menu" className={`fixed top-0 right-0 w-2/3 h-full bg-[#9ebec8] flex flex-col items-center pt-16 space-y-4 transition-transform duration-500 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <Link href="/" className="text-gray-800 hover:text-[#cd1a69] font-bold" onClick={() => setIsOpen(false)}>Home</Link>

        {/* Mobile About Dropdown */}
        <div className="relative">
          <button className="flex items-center text-gray-800 hover:text-[#cd1a69] font-bold" onClick={() => setActiveDropdown(activeDropdown === 'about' ? null : 'about')}>
            About <FaChevronDown className="w-4 h-4 ml-1" />
          </button>
          {activeDropdown === 'about' && (
            <ul className="mt-2 bg-[#1c516c] text-white gray-700 rounded-lg w-40">
              <li><Link href="/AboutGUBCPA" className="block px-4 py-2 hover:bg-gray-800 " onClick={() => setIsOpen(false)}>About GUBCPA</Link></li>
              <li><Link href="/AboutSponsors" className="block px-4 py-2 hover:bg-gray-800" onClick={() => setIsOpen(false)}>Sponsors & Partners</Link></li>
              <li><Link href="/AboutSite" className="block px-4 py-2 hover:bg-gray-800" onClick={() => setIsOpen(false)}>About Site</Link></li>
            </ul>
          )}
        </div>

        {/* Mobile Event Dropdown */}
        <div className="relative">
          <button className="flex items-center text-gray-800 hover:text-[#cd1a69] font-bold" onClick={() => setActiveDropdown(activeDropdown === 'event' ? null : 'event')}>
            Event <FaChevronDown className="w-4 h-4 ml-1" />
          </button>
          {activeDropdown === 'event' && (
            <ul className="mt-2 bg-gray-900 text-white rounded-lg w-40">
              <li><Link href="/EventDetails" className="block px-4 py-2 hover:bg-gray-700" onClick={() => setIsOpen(false)}>Event Details</Link></li>
              <li><Link href="/PrizePool" className="block px-4 py-2 hover:bg-gray-700" onClick={() => setIsOpen(false)}>Prize Pool</Link></li>
            </ul>
          )}
        </div>

        <Link href="/EventSchedule" className="text-gray-800 hover:text-[#cd1a69] font-bold" onClick={() => setIsOpen(false)}>Schedule</Link>
        <Link href="/Registration" className="text-gray-800 hover:text-[#cd1a69] font-bold" onClick={() => setIsOpen(false)}>Registration</Link>
      </nav>
    </header>
  );
};

export default Navbar;
