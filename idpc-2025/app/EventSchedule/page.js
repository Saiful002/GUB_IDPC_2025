import React from "react";

const EventSchedule = () => {
  return (
    <section className="py-16 px-4 md:px-8 flex flex-col space-y-52">
      <section className="max-w-6xl mx-auto px-6 mt-8 ">
        <h2 className="text-4xl font-bold text-white mb-6 text-left">
          Event Schedule
        </h2>
        <p className="text-lg mb-8 text-left">
        After almost three years, the Green University Competitive Programming Arena (GUBCPA) is thrilled to host another GUB Inter Department Programming Contest (IDPC)! Sponsored by Mutual Trust Bank PLC, this prestigious event unites the brightest minds from various departments of Green University to demonstrate their programming expertise in an exciting and challenging competition.
        </p>
      </section>

      <section className=" ">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Timeline
          </h2>
        </div>

        <div className="mt-6 flex p-4 rounded-lg  bg-yellow-500 flex-col md:flex-row justify-center items-start md:items-center gap-12">
          {/* Mock Contest */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray-800">
              27 <span className="text-sm font-normal">FEB</span>
            </h3>
            <h4 className="text-lg font-semibold text-gray-800">
              Mock Contest
            </h4>

            <div className="text-left relative pl-4 mt-4">
              <div className="mb-6">
                <p className="font-bold text-gray-800">4:00 PM - 6:00 PM</p>
                <p className="text-gray-800 border-l-2 border-gray-800 h-12 ps-3">
                  Mock Contest time.
                </p>
              </div>
              <div>
                <p className="font-bold text-gray-800">6:00 PM - 6:30 PM</p>
                <p className="text-gray-800 border-l-2 border-gray-800 h-12 ps-3">
                  Team Reference Document (TRD) Submission.
                </p>
              </div>
            </div>
          </div>


          {/* Main Contest */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-2xl font-bold text-gray-800">
              28 <span className="text-sm font-normal">FEB</span>
            </h3>
            <h4 className="text-lg font-semibold text-gray-800">
              Main Contest
            </h4>

            <div className="text-left relative pl-4 mt-4">
              <div className="mb-6">
                <p className="font-bold text-gray-800">8:30 AM - 8:45 AM</p>
                <p className="text-gray-800 border-l-2 border-gray-800 h-12 ps-3">
                  Reporting Time.
                </p>
              </div>
              <div className="mb-6">
                <p className="font-bold text-gray-800">9:00 AM - 2:00 PM</p>
                <p className="text-gray-800 border-l-2 border-gray-800 h-12 ps-3">
                  Main Contest Time.
                </p>
              </div>
              <div>
                <p className="font-bold text-gray-800">4:00 PM - 6:00 PM</p>
                <p className="text-gray-800 border-l-2 border-gray-800 h-12 ps-3">
                  Prize Giving Ceremony.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default EventSchedule;
