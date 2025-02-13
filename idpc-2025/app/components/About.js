
import React from "react";

const About = () => {
  const stats = [
    { title: "📍 Venue", value: "Computer Labs of GUB", isNumber: false },
    { title: "Teams", value: "120+", isNumber: true },
    { title: "Participants", value: "1,200+", isNumber: true },
    { title: "Spectators", value: "10,000+", isNumber: true },
  ];

  return (
    <section id="about" className="py-16 text-white mt-16">
      <div className="max-w-6xl md:mx-auto mx-2 text-left md:text-left sm:my-16 md:my-16">
        <h2 className="text-4xl font-bold mb-6">About GUB IDPC 2025</h2>
        <p className="sm:text-lg md:text-lg mb-8 text-sm px-2">
        Welcome to GUB IDPC 2025, the premier inter-department programming contest organized by the Green University Competitive Programming Arena (GUBCPA). This event brings together the brightest minds from various departments of Green University to compete in a challenging yet exciting programming competition. Open to all undergraduate students, teams of three will collaborate under the guidance of a faculty mentor, fostering strategic thinking and real-world problem-solving skills. <br/><br/>
        GUB IDPC 2025 is more than just a contest; it is a platform for students to showcase their programming prowess, gain valuable experience, and prepare for larger-scale competitions. Through this event, we aim to build a stronger programming community within the university and inspire students to push the boundaries of their coding abilities. On behalf of GUBCPA, we warmly welcome you to this thrilling onsite event and look forward to your active participation and collaborative spirit. Lets make GUB IDPC 2025 an unforgettable experience!
        </p>
        <hr className="border-gray-300 mb-6" />
        <p className="font-semibold px-2">“Organized by - Green University Competitive Programming Arena (GUBCPA)”</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-6xl mx-auto px-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg flex flex-col justify-center items-center text-center shadow-lg shadow-yellow-300 ${stat.isNumber ? "bg-white text-gray-800" : "bg-yellow-500 text-gray-800"}`}
            >
              {stat.isNumber ? (
                <>
                  <span className="text-2xl font-extrabold text-[#cd1a69]">{stat.value}</span>
                  <span className="text-gray-600 text-sm font-medium">{stat.title}</span>
                </>
              ) : (
                <>
                  <div className="text-lg font-bold">{stat.title}</div>
                  <div className="text-sm font-medium">{stat.value}</div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
