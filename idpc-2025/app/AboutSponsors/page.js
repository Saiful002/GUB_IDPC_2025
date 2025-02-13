import Image from "next/image";
import titlesp from "@/public/Images/titlesp.png";
import Link from "next/link";

export default function AboutSponsors() {
  return (
    <div className="mt-16 min-h-screen p-6 md:p-12 lg:p-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row md:flex-row mt-10 items-center gap-10 justify-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-white text-left">
              Sponsors and Partners
            </h1>
            <p className="mt-4 text-white text-left max-w-3xl mx-auto">
              Our sponsors play a pivotal role in driving innovation and
              progress. Their steadfast support enables us to push limits,
              venture into new possibilities, and strive for excellence. With
              their dedication and foresight, we continue to evolve, inspire,
              and deliver meaningful experiences that leave a lasting impact.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row mt-64 md:flex-row mt-10 items-center gap-10 justify-center">
          <div className="mt-12 flex justify-center">
            <Image
              src={titlesp}
              alt="Founding Members"
              width={800}
              height={400}
              className="rounded-lg  shadow-2xl shadow-yellow-400 w-full max-w-4xl"
            />
          </div>
          <div className="text-gray-800 p-6 md:p-4  max-w-lg text-center md:text-left">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-white text-left">
                Our Title Sponsor Phitron
              </h1>
              <p className="mt-4 text-white text-left max-w-3xl mx-auto">
                The Green University Competitive Programming Arena (GUBCPA) is a
                dynamic platform dedicated to fostering a culture of
                problem-solving, algorithmic thinking, and teamwork among
                students at Green University. As a hub for programming
                enthusiasts, GUBCPA aims to provide students with opportunities
                to enhance their coding skills, participate in competitive
                programming contests, and engage in collaborative learning
                experiences.
                <br />
                <br />
                GUBCPA regularly organizes workshops, training sessions, and
                competitions to help students refine their problem-solving
                abilities and prepare for national and international programming
                contests. By bringing together talented minds from diverse
                backgrounds, the arena promotes knowledge sharing, critical
                thinking, and a passion for programming. With a commitment to
                excellence, GUBCPA continues to inspire and nurture the next
                generation of skilled programmers at Green University.
              </p>
            </div>
            <div className="flex justify-center md:justify-start">
          <Link href="https://phitron.io/" className="text-white mt-6 bg-yellow-500 px-8 py-4 rounded-xl font-semibold shadow-md hover:bg-[#cd1a69] transition duration-300">
            Visit Phitron Website
          </Link>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}
