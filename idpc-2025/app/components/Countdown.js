'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import reveal from '@/public/Images/LOGO REVEAL_.png'

const Countdown = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date('2025-02-15T00:00:00').getTime();
    const now = new Date().getTime();
    const diff = eventDate - now;

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diff % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="countdown-section" className="py-16  text-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-col items-center justify-center sm:my-16 md:my-16">
        <div className="md:w-1/2 w-full text-center mb-8 md:mb-0 pb-16">
          <h3 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">Countdown</h3>
          <div className="flex justify-center space-x-2 sm:space-x-4 md:space-x-4">
            {['Days', 'Hours', 'Minutes', 'Seconds'].map((label, index) => (
              <div key={label} className="countdown-item bg-yellow-400 text-gray-900 p-3 rounded-lg shadow-lg w-full sm:w-24 md:w-32 h-24 flex flex-col items-center">
                <span className="text-2xl sm:text-4xl md:text-4xl font-extrabold">
                  {String(Object.values(timeLeft)[index]).padStart(2, '0')}
                </span>
                <div className="text-sm mt-2">{label}</div>
              </div>
            ))}
          </div>
          <p className="sm:text-lg md:text-lg text-sm max-w-xl mx-auto md:mx-0 mt-6">
            Dont miss out on the opportunity to be part of the most exciting programming competition of the year. Time is ticking!
          </p>
        </div>
        <div className="md:w-1/2 w-full flex justify-center">
          <Image
            src={reveal}
            alt="Countdown Image"
            width={400}
            height={300}
            className="rounded-lg shadow-2xl shadow-yellow-400 w-full h-auto max-w-xs md:max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Countdown;
