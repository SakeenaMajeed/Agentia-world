import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { GiRobotAntennas } from "react-icons/gi";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & About */}
        <div>
          <h2 className="text-3xl font-extrabold text-white">Agentia World</h2>
          <p className="mt-4 text-gray-400">Empowering AI-driven innovations for a smarter future.</p>
          <button className="mt-6 flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-5 py-2.5 rounded-xl shadow-lg shadow-purple-500/30 transition-all">
            <GiRobotAntennas className="text-lg" /> AI
          </button>
        </div>
        
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-3 text-gray-400">
            <li><a href="#" className="hover:text-purple-400 transition-all">Home</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-all">Pricing</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-all">Technologies</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-all">Contact</a></li>
          </ul>
        </div>
        
        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-white">Follow Us</h3>
          <div className="flex space-x-4 mt-5">
            {[
              { icon: FaFacebookF, link: "#" },
              { icon: FaTwitter, link: "#" },
              { icon: FaLinkedinIn, link: "#" },
              { icon: FaInstagram, link: "#" }
            ].map(({ icon: Icon, link }, index) => (
              <a key={index} href={link} className="p-3 bg-gray-800/50 hover:bg-purple-600 transition-all rounded-full shadow-md shadow-gray-700/50 backdrop-blur-md">
                <Icon className="text-lg text-white" />
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-12 border-t border-gray-700 pt-5 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Agentia World. All rights reserved.</p>
      </div>
    </footer>
  );
}