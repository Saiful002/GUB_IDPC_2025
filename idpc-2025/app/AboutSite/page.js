import Image from "next/image";
import { FaGithub, FaFacebook, FaEnvelope } from "react-icons/fa";
import saiful from '@/public/Images/saiful.jpg'

const DeveloperIntro = () => {
  const developers = [
    {
      name: "Saiful Kabir Chowdhury",
      role: "Full Stack Developer",
      src: saiful, // Replace with actual image path
      github: "https://github.com/Saiful002",
      facebook: "https://www.facebook.com/share/12DFJ46kXTQ/",
      email: "mailto:csaifulkabir@gmail.com?subject=Hello%20Saiful&body=I%20would%20like%20to%20connect%20with%20you",
      title: "Developed By", // Title for the first card
    },
    // {
    //   name: "Jane Smith",
    //   role: "Frontend Engineer",
    //   src: saiful, // Replace with actual image path
    //   github: "https://github.com/janesmith",
    //   facebook: "https://facebook.com/janesmith",
    //   email: "mailto:janesmith@example.com",
    //   title: "Graphic Designer", // Title for the second card
    // },
  ];

  return (
    <section className="mt-16 py-12  text-white">
      <div className="max-w-xl mx-auto px-2">
        <div className="grid  md:grid-cols-1 gap-8">
          {developers.map((dev, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center">
              {/* Title for each card */}
              <h2 className="text-3xl font-bold mb-4">{dev.title}</h2>

              <Image
                src={dev.src}
                alt="name"
                width={500}
                height={800}
                className="w-64 h-64 mx-auto rounded-2 mb-4 object-scale-down border-4 border-yellow-400"
              />
              <h3 className="text-xl font-semibold">{dev.name}</h3>
              <p className="text-gray-400">{dev.role}</p>
              <div className="flex justify-center space-x-4 mt-4">
                <a
                  href={dev.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-400 text-2xl"
                >
                  <FaGithub />
                </a>
                <a
                  href={dev.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-400 text-2xl"
                >
                  <FaFacebook />
                </a>
                <a href={dev.email} className="text-white hover:text-yellow-400 text-2xl">
                  <FaEnvelope />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeveloperIntro;
