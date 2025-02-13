import Image from 'next/image';
import Link from 'next/link';

const EventDetails = () => {
  return (
    <section className="mt-32 py-16 text-white">
     <section className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-6  text-left">
          Event Details
        </h2>
        <p className="text-lg mb-8  text-left">
        After almost three years, the Green University Competitive Programming Arena (GUBCPA) is thrilled to host another GUB Inter Department Programming Contest (IDPC)! Sponsored by Mutual Trust Bank PLC, this prestigious event unites the brightest minds from various departments of Green University to demonstrate their programming expertise in an exciting and challenging competition.
        </p>
        
     </section>




     <section className="mt-16 min-h-screen p-6 md:p-12 lg:p-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold  text-center">Details</h1>
        <div className="mt-6 text-white max-w-3xl mx-auto">
          <p><strong>Eligibility:</strong> Open to university students.</p>
          <p><strong>Teams:</strong> 120+ teams will compete, with each team comprising 3 students + 1 coach.</p>
          <p><strong>Problem Setters:</strong> The problem set will be designed by the Bangladesh Competitive Programming Society (BCS), ensuring a fair and intellectually stimulating competition.</p>
          <p><strong>Final Registration Fee:</strong> 120 TK.</p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-yellow-500 text-gray-800 shadow-lg p-6 rounded-lg text-center ">
            <h2 className="text-xl font-bold">Pre-Registration Starts</h2>
            <p>February 14, 2025 (Saturday)</p>
            <h2 className="text-xl font-bold mt-4">Pre-Registration Ends</h2>
            <p>February 26, 2025 (Tuesday, 11:59PM)</p>
          </div>

       

          <div className="bg-yellow-500 text-gray-800 shadow-lg p-6 rounded-lg text-center ">
            <h2 className="text-xl font-bold">Mock Contest</h2>
            <p>27 February 2025</p>
            <p>(4:00PM–6:00PM)</p>
            <h2 className="text-xl font-bold mt-4">Main Contest</h2>
            <p>28 February 2025</p>
            <p>(9:00AM–2:00PM)</p>
          </div>
        </div>

        <div className="mt-32 text-left">
          <h2 className="text-3xl font-bold text-center text-white">Always Stay Updated</h2>
          <p className="mt-4 text-white max-w-2xl mx-auto">
            If you have any questions or issues, feel free to message us on our page or post about our event.
            We value your suggestions and are here to make your experience even better—let us know how we can improve!
          </p>
          <div className="mt-6 flex flex-col md:flex-row justify-center gap-4">
          <div className="flex justify-center md:justify-start">
          <Link href="#" className="mt-6 bg-yellow-500 px-8 py-4 rounded-xl font-semibold shadow-md hover:bg-[#cd1a69] transition duration-300">
            Facebook Page
          </Link>
        </div>
          </div>
        </div>
      </div>
     </section>
    </section>





  );
};

export default EventDetails;
