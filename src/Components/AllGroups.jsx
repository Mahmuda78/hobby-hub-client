import React from "react";
import { Link, useLoaderData } from "react-router";

const AllGroups = () => {
  const groups = useLoaderData();
  console.log(groups);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8">
        All Hobby Groups
      </h2>

      <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
        <table className="table w-full">
          {/* head */}
          <thead className="bg-[#fc8f41] text-white uppercase text-sm">
            <tr>
              
              <th>Group Name</th>
              <th>Hobby Category</th>
              <th>Location</th>
              <th>Info</th>
            </tr>
          </thead>
          <tbody>
            {groups.map((group) => (
              <tr
                key={group._id}
                className="hover:bg-[#FFF3E0] transition-colors duration-200"
              >
                
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={group.imageUrl}
                          alt={group.groupName}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-gray-800">
                        {group.groupName}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="">
                    {group.hobbyCategory}
                  </span>
                </td>
                <td className="text-gray-600">{group.meetingLocation}</td>
                <th>
                  <Link to={`/group/${group._id}`}><button className="btn btn-outline btn-neutral ">
                    See more
                  </button></Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllGroups;
