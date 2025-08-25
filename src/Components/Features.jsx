import React, { useEffect, useState } from "react";

const FeaturedGroups = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    
    fetch("http://localhost:5000/groups")
      .then(res => res.json())
      .then(data => setGroups(data))
      .catch(error => console.error("Error fetching groups:", error));
  }, []);

  const today = new Date();

  
  const featuredGroups = groups
    .filter(group => new Date(group.startDate) <= today)
    .sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
    .slice(0, 6);

  return (
    <section className="px-6 lg:px-20 py-14 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10 text-[#FD6E0A]">
        Featured Groups
      </h2>

      {featuredGroups.length === 0 ? (
        <p className="text-center text-gray-500">No ongoing groups found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredGroups.map(group => (
            <div
              key={group._id || group.id}
              className="bg-white shadow-2xl border-2 border-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={group.imageUrl}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{group.groupName}</h3>
                <p className="text-gray-600">
                   Date: {new Date(group.startDate).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default FeaturedGroups;
