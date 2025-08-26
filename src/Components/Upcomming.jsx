import React, { useEffect, useState } from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const UpcomingSection = () => {
  

  const [text] = useTypewriter({
    words: [
      "Exciting events are on the way...",
      "Stay tuned for upcoming hobbies!",
      "Join new adventures soon!",
    ],
    loop: true,
    delaySpeed: 2000,
  });
 
const [groups, setGroups] = useState([]);

  useEffect(() => {
    
    fetch("http://localhost:5000/groups")
      .then(res => res.json())
      .then(data => setGroups(data))
      .catch(error => console.error("Error fetching groups:", error));
  }, []);

  const today = new Date();

  
  const upComing = groups
    .filter(group => new Date(group.startDate) >= today)
    .sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
    .slice(0, 6);

  return (
    <section className="px-6 lg:px-2 py-14 text-center">
      <h2 className="text-3xl font-bold text-[#FD6E0A]">
        Upcoming Events
      </h2>
      <p className="text-lg py-4 text-gray-700 font-medium">
        <span>{text}</span>
        <Cursor cursorColor="#FD6E0A" />
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {upComing.map((group) => (
          <div
            key={group.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 ease-in-out overflow-hidden"
          >
            
            <img
              src={group.imageUrl}
              alt={group.groupName}
              className="w-full h-48 object-cover"
            />

            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {group.groupName}
              </h3>
              <p className="text-gray-600 mb-3">{group.description}</p>

              <div className="flex items-center text-gray-500 text-sm mb-2">
                <FaCalendarAlt className="mr-2 text-[#FD6E0A]" />
                {group.startDate}
              </div>

              <div className="flex items-center text-gray-500 text-sm">
                <FaMapMarkerAlt className="mr-2 text-[#FD6E0A]" />
                {group.meetingLocation}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingSection;
