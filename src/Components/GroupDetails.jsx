import { useLoaderData } from "react-router";
import { Fade } from "react-awesome-reveal";
import Lottie from "lottie-react";
import loadingAnimation from "../assets/loading.json";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const GroupDetails = () => {
  const group = useLoaderData()

  const today = new Date();
  const startDate = new Date(group.startDate);
  const isDisable = startDate < today
  if (!group) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Lottie animationData={loadingAnimation} loop={true} className="h-48 w-48" />
      </div>
    );
  }

  return (
    <div className="p-6 min-h-screen">
      <Fade cascade damping={0.2} triggerOnce>
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl p-8">

          <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
            <div className="avatar">
              <div className="mask mask-squircle h-28 w-28 shadow-lg">
                <img
                  src={group.imageUrl}
                  alt={group.groupName}
                />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h2
                className="text-4xl font-bold text-gray-800 mb-2"
                data-tooltip-id="groupNameTip"
              >
                {group.groupName}
              </h2>

              <span className="badge badge-neutral py-4 text-lg px-4">
                {group.hobbyCategory}
              </span>
              <p className="text-gray-500 mt-2">
                Created by: <span className="font-semibold">{group.userName}</span>
              </p>
            </div>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            <div className="bg-orange-50 p-4 rounded-xl shadow-inner">
              <span className="font-semibold">Description:</span>
              <p className="mt-2">{group.description}</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-xl shadow-inner space-y-2">
              <p>
                <span className="font-semibold">Meeting Location: </span>
                {group.meetingLocation}
              </p>
              <p>
                <span className="font-semibold">Max Members: </span>
                {group.maxMembers}
              </p>
              <p className="font-bold ">
                <span className="text-orange-500">Start Date: </span>
                {group.startDate}
              </p>
            </div>
          </div>


          <div className="mt-6 text-center">
            <button
              disabled={isDisable}
              className="btn border-amber-500 text-black hover:bg-amber-600 hover:text-white"
              data-tooltip-id="joinTip"
            >
              Join Group
            </button>
            <Tooltip id="joinTip" place="top" content="Click to join this group!" />
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default GroupDetails;
