import React from "react";
import { FaBookOpen, FaCalendarAlt, FaUsers } from "react-icons/fa";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const ExtraSection = () => {
 

  return (
    <div>
      <section className="bg-gradient-to-r from-gray-100 to-gray-200 px-6 lg:px-20 py-14 text-center">
      <h2 className="text-3xl font-bold text-center mb-10 text-[#FD6E0A]">
        Why Join HobbyHub?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300">
          <div className="flex justify-center mb-4 text-[#FD6E0A]">
            <FaUsers size={40} />
          </div>
          <h3 className="font-semibold text-xl mb-2">Find Your Tribe</h3>
          <p className="text-gray-600">
            Connect with like-minded people who share your passion.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300">
          <div className="flex justify-center mb-4 text-[#FD6E0A]">
            <FaBookOpen size={40} />
          </div>
          <h3 className="font-semibold text-xl mb-2">Learn & Grow</h3>
          <p className="text-gray-600">
            Explore new hobbies, gain knowledge, and improve skills.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300">
          <div className="flex justify-center mb-4 text-[#FD6E0A]">
            <FaCalendarAlt size={40} />
          </div>
          <h3 className="font-semibold text-xl mb-2">Host Events</h3>
          <p className="text-gray-600">
            Organize and attend exciting activities in your area.
          </p>
        </div>
      </div>
    </section>

    </div>
  );
};

export default ExtraSection;
