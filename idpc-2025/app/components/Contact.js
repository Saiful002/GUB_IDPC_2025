import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 px-6 py-16 md:mt-64">
      {/* Contact Card */}
      <div className="bg-yellow-500 text-gray-800 px-8 py-32 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <hr className="border-gray-500 mb-4" />

        <div className="space-y-6">
          {/* Address */}
          <div className="flex items-start gap-4">
            <div className="bg-white text-green-800 p-3 rounded-full">
              <FaMapMarkerAlt className="w-6 h-6 text-gray-800" />
            </div>
            <div>
              <h4 className="font-semibold text-lg">Meet Us</h4>
              <p>141, &142 Love Rd, Dhaka 1208</p>
            </div>
          </div>

          {/* Call */}
          <div className="flex items-start gap-4">
            <div className="bg-white text-green-800 p-3 rounded-full">
              <FaPhoneAlt className="w-6 h-6 text-gray-800" />
            </div>
            <div>
              <h4 className="font-semibold text-lg">Call Us</h4>
              <p>+880 1751 908837</p>
              <p>+880 1612 117551</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="bg-white text-green-800 p-3 rounded-full">
              <FaEnvelope className="w-6 h-6 text-gray-800" />
            </div>
            <div>
              <h4 className="font-semibold text-lg">Email Us</h4>
              <p>austpic@aust.edu</p>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="w-full max-w-lg">
        <iframe
          className="w-full h-72 rounded-xl shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8745453424024!2d90.38425407596834!3d23.751083878679313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b96d71eec57b%3A0x34a65418de93a92a!2s141%2C%20142%20Love%20Rd%2C%20Dhaka%201213!5e0!3m2!1sen!2sbd!4v1707262345678"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
