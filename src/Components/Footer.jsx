import { Link } from "react-router";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 lg:px-20 py-10 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

       
        <div>
          <h2 className="text-2xl font-bold text-[#FD6E0A]">
            Hobby<span className="text-white">Hub</span>
          </h2>
          <p className="mt-3 text-gray-400">
            Discover, join, and create groups based on your passion. 
            Connect with people who share the same hobbies as you.
          </p>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#FD6E0A]">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-[#FD6E0A]">Home</Link></li>
            <li><Link to="/groups" className="hover:text-[#FD6E0A]">All Groups</Link></li>
            <li><Link to="/create" className="hover:text-[#FD6E0A]">Create Group</Link></li>
            <li><Link to="/my-groups" className="hover:text-[#FD6E0A]">My Groups</Link></li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#FD6E0A]">Contact</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Email: support@hobbyhub.com</li>
            <li>Phone: +880 1798391221</li>
            <li>Address: Dhaka, Bangladesh</li>
          </ul>
        </div>

     
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#FD6E0A]">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-[#FD6E0A]"><FaFacebookF /></a>
            <a href="#" className="hover:text-[#FD6E0A]"><FaTwitter /></a>
            <a href="#" className="hover:text-[#FD6E0A]"><FaInstagram /></a>
            <a href="#" className="hover:text-[#FD6E0A]"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

   
      <div className="border-t border-gray-700 mt-8 pt-5 text-center text-gray-500">
        <p>© {new Date().getFullYear()} HobbyHub. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
