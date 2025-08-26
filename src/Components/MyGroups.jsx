import React, { use, useState,} from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useLoaderData } from "react-router";
import Login from "../Pages/Login";
import Swal from "sweetalert2";


const MyGroups = () => {
 
  const { user } = use(AuthContext);
  const initialGroups = useLoaderData();
 const [groups, setGroups]= useState(initialGroups)
  if (!user) {
    return  <><Login></Login></>
  }

  const myGroups = groups.filter(group => group.userEmail === user.email);



   const handleDelete = (_id) => {
        console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            console.log(result.isConfirmed)
            if (result.isConfirmed) {

                // start deleting the coffee
                fetch(`http://localhost:5000/groups/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Group has been deleted.",
                                icon: "success"
                            });

                            // remove the coffee from the state
                            const remainingCoffees = groups.filter(grp => grp._id !== _id);
                            setGroups(remainingCoffees);
                        
                         }
                    })


            }
        });

    }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-center text-gradient-to-r from-purple-500 to-pink-500">My Groups</h2>
      {myGroups.length === 0 ? (
        <p className="text-gray-600 text-center italic">You haven't created or joined any groups yet.</p>
      ) : (
        <div className="p-6 bg-gray-50 min-h-screen">
      

      <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
        <table className="table w-full">
        
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
                <th className=" grid gap-y-2 grid-cols-1">
                  <Link to={`/updateGroup/${group._id}`}>
                  <button className="btn btn-outline btn-neutral ">
                    Update
                  </button></Link>
                  <button className="btn btn-outline w-20 hover:bg-red-400" onClick={()=>handleDelete(group._id)}>Delete</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
      )}
    </div>
  );
};

export default MyGroups;
