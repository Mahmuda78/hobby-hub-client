
import { BookOpen, Camera } from "lucide-react";
import { FaBookOpen, FaCalendarAlt, FaUsers } from "react-icons/fa";
import { Link } from "react-router";

const Home = () => {
  return (
    <div>

     
      <div className="carousel w-full h-[400px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img className="object-cover w-full" src="https://i.ibb.co.com/wNRkcgBV/Untitled-design-6.png" />
          <div className="absolute flex items-center h-full  text-white px-10">
            <div className="ml-8">
              <h2 className="text-3xl font-bold text-white">Connect Through Hobbies</h2>
              <p className="mt-2 text-white">Meet new friends and share your passion with the community.</p>
              <Link to="/groups" className="btn mt-4 bg-[#FD6E0A] border-none">Explore Groups</Link>
            </div>
          </div>
          <a href="#slide3" className="btn btn-circle absolute left-5 top-1/2">❮</a>
          <a href="#slide2" className="btn btn-circle absolute right-5 top-1/2">❯</a>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://i.ibb.co.com/cKFMKCfW/connect.jpg" className="w-full object-cover" />
          <div className="absolute flex items-center h-full bg-black/50 text-white px-10">
            <div className="ml-8">
              <h2 className="text-3xl font-bold">Create Your Own Group</h2>
              <p className="mt-2">Start a new community around your favorite activity.</p>
              <Link to="/createGroup" className="btn mt-4 bg-[#FD6E0A] border-none">Create Now</Link>
            </div>
          </div>
          <a href="#slide1" className="btn btn-circle absolute left-5 top-1/2">❮</a>
          <a href="#slide3" className="btn btn-circle absolute right-5 top-1/2">❯</a>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://i.ibb.co.com/Xmng9yp/Untitled-design-4.png" className="w-full object-cover" />
          <div className="absolute flex items-center h-full text-white px-10">
            <div className="ml-8">
              <h2 className="text-3xl text-black font-bold">Discover Local Events</h2>
              <p className="mt-2 text-black">Join exciting events hosted by different hobby groups.</p>
              <Link to="/" className="btn mt-4 bg-[#FD6E0A] border-none">View Events</Link>
            </div>
          </div>
          <a href="#slide2" className="btn btn-circle absolute left-5 top-1/2">❮</a>
          <a href="#slide1" className="btn btn-circle absolute right-5 top-1/2">❯</a>
        </div>
      </div>

  
      
       
    

      
      
    </div>
  );
};

export default Home;
