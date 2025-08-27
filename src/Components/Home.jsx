import { Link } from "react-router";
import FeaturedGroups from "./Features";
import { useState, useEffect } from "react";

const Home = () => {
  const [theme, setTheme] = useState("light");

  
  useEffect(() => {
    // শুধু এই কম্পোনেন্ট mount থাকলে theme apply হবে
    document.documentElement.setAttribute("data-theme", theme);

    // cleanup: Home থেকে বের হলে default theme এ ফিরিয়ে দাও
    return () => {
      document.documentElement.setAttribute("data-theme", "light");
    };
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
   
      <div className="flex justify-between items-center p-4 bg-base-200 shadow">
        <h1 className="text-2xl font-bold"></h1>
        <button className="btn btn-sm btn-outline" onClick={toggleTheme}>
          {theme === "light" ? " Dark" : " Light"}
        </button>
        
      </div>

      {/* Carousel Section */}
      <div className="carousel w-full h-[400px]">
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <img
            className="object-cover w-full"
            src="https://i.ibb.co.com/wNRkcgBV/Untitled-design-6.png"
          />
          <div className="absolute flex items-center h-full text-white px-10">
            <div className="ml-8">
              <h2 className="text-3xl font-bold">Connect Through Hobbies</h2>
              <p className="mt-2">
                Meet new friends and share your passion with the community.
              </p>
              <Link
                to="/groups"
                className="btn mt-4 bg-[#FD6E0A] border-none"
              >
                Explore Groups
              </Link>
            </div>
          </div>
          <a
            href="#slide3"
            className="btn btn-circle absolute left-5 top-1/2"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn btn-circle absolute right-5 top-1/2"
          >
            ❯
          </a>
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co.com/cKFMKCfW/connect.jpg"
            className="w-full object-cover"
          />
          <div className="absolute flex items-center h-full bg-black/50 text-white px-10">
            <div className="ml-8">
              <h2 className="text-3xl font-bold">Create Your Own Group</h2>
              <p className="mt-2">
                Start a new community around your favorite activity.
              </p>
              <Link
                to="/createGroup"
                className="btn mt-4 bg-[#FD6E0A] border-none"
              >
                Create Now
              </Link>
            </div>
          </div>
          <a
            href="#slide1"
            className="btn btn-circle absolute left-5 top-1/2"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="btn btn-circle absolute right-5 top-1/2"
          >
            ❯
          </a>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co.com/Xmng9yp/Untitled-design-4.png"
            className="w-full object-cover"
          />
          <div className="absolute flex items-center h-full text-white px-10">
            <div className="ml-8">
              <h2 className="text-3xl text-black font-bold">
                Discover Local Events
              </h2>
              <p className="mt-2 text-black">
                Join exciting events hosted by different hobby groups.
              </p>
              <Link to="/" className="btn mt-4 bg-[#FD6E0A] border-none">
                View Events
              </Link>
            </div>
          </div>
          <a
            href="#slide2"
            className="btn btn-circle absolute left-5 top-1/2"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="btn btn-circle absolute right-5 top-1/2"
          >
            ❯
          </a>
        </div>
      </div>

    
      <FeaturedGroups />
    </div>
  );
};

export default Home;
