import Image from 'next/image';
import Link from 'next/link';

const PrizePool = () => {
  return (
    <section className="mt-32 py-16 text-white">
     <section className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-6  text-left">
        🏆 Prize Pool
        </h2>
        <p className="text-lg mb-8  text-left">
        After almost three years, the Green University Competitive Programming Arena (GUBCPA) is thrilled to host another GUB Inter Department Programming Contest (IDPC)! Sponsored by Mutual Trust Bank PLC, this prestigious event unites the brightest minds from various departments of Green University to demonstrate their programming expertise in an exciting and challenging competition.


        </p>
     </section>
     <section className="mt-6 min-h-screen p-6 md:p-12 lg:p-16">
  
      {/* Top 10 Prizes */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {[
          { rank: "1st", color: "bg-yellow-400", text: "text-yellow-900" },
          { rank: "2nd", color: "bg-gray-400", text: "text-gray-900" },
          { rank: "3rd", color: "bg-orange-500", text: "text-white" },
          { rank: "4th", color: "bg-blue-500", text: "text-white" },
          { rank: "5th", color: "bg-blue-400", text: "text-white" },
          { rank: "6th", color: "bg-green-400", text: "text-white" },
          { rank: "7th", color: "bg-green-300", text: "text-gray-900" },
          { rank: "8th", color: "bg-purple-400", text: "text-white" },
          { rank: "9th", color: "bg-purple-500", text: "text-white" },
          { rank: "10th", color: "bg-pink-400", text: "text-white" },
        ].map((prize, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-lg ${prize.color} ${prize.text} text-center font-bold text-xl`}
          >
            🎖 {prize.rank} Prize
          </div>
        ))}
      </div>

      {/* Special Prizes Section */}
      <div className="mt-12 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Solver Prize */}
          <div className="p-6 bg-red-500 text-white text-center rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold">
              🚀 First Solver of Every Problem
            </h3>
            <p className="mt-2">
              A special prize for the fastest problem solvers.
            </p>
          </div>

          {/* Best Female Participant Prize */}
          <div className="p-6 bg-pink-500 text-white text-center rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold">👩‍💻 Best Female Participant</h3>
            <p className="mt-2">
              Recognizing the best female coder in the contest.
            </p>
          </div>
        </div>
      </div>
    </section>
    </section>





  );
};

export default PrizePool;
