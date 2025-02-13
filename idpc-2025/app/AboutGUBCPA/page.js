import Image from "next/image";
import gucpa from '@/public/Images/GUB COMPETIVE PROGRAMMING ARENA.png'

export default function AboutGUBCPA() {
  return (
    <div className=" min-h-screen p-6 md:p-12 lg:p-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row md:flex-row mt-10 items-center gap-10 justify-center">
         <div>
         <h1 className="text-3xl md:text-4xl font-bold text-white text-left">
            About GUBCPA
          </h1>
          <p className="mt-4 text-white text-left max-w-3xl mx-auto">
          The Green University Competitive Programming Arena (GUBCPA) is a dynamic platform dedicated to fostering a culture of problem-solving, algorithmic thinking, and teamwork among students at Green University. As a hub for programming enthusiasts, GUBCPA aims to provide students with opportunities to enhance their coding skills, participate in competitive programming contests, and engage in collaborative learning experiences.<br/><br/>
          GUBCPA regularly organizes workshops, training sessions, and competitions to help students refine their problem-solving abilities and prepare for national and international programming contests. By bringing together talented minds from diverse backgrounds, the arena promotes knowledge sharing, critical thinking, and a passion for programming. With a commitment to excellence, GUBCPA continues to inspire and nurture the next generation of skilled programmers at Green University.
          </p>
         </div>
          <div className="flex justify-center">
            <Image
              src={gucpa}
              alt="AUSTPIC Logo"
              width={500}
              height={500}
              className="rounded-lg shadow-2xl shadow-yellow-400"
            />
          </div>
        
        </div>
        <div className="flex flex-col sm:flex-row mt-64 md:flex-row mt-10 items-center gap-10 justify-center">
        <div className="mt-12 flex justify-center">
          <Image
            src="https://siteadmin.green.edu.bd/uploads/images/news/2_1708312682_news-cover.jpg"
            alt="Founding Members"
            width={800}
            height={400}
            className="rounded-lg w-full max-w-4xl"
          />
        </div>
        <div className="bg-yellow-500 text-gray-800 shadow-lg p-6 md:p-16 rounded-lg max-w-lg text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Founding Members
            </h2>
            <h3 className="text-xl md:text-2xl font-bold mt-3">
              The Pioneers Of GUBCPA
            </h3>
            <p className="mt-3 text-gray-700 text-left">
            The founding members of the Green University Competitive Programming Arena (GUBCPA) established a thriving community built on innovation, collaboration, and excellence. Their unwavering dedication transformed a vision into reality, inspiring countless students to embrace problem-solving and advance their programming skills. Today, we uphold their legacy by fostering creativity, critical thinking, and teamwork among aspiring programmers. GUBCPA continues to empower students with opportunities to excel in competitive programming, ensuring that the passion and spirit of its pioneers live on in future generations.


            </p>
          </div>
        
        </div>
      </div>
    </div>
  );
}
