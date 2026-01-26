
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black p-4 flex flex-col md:flex-row md:items-center md:justify-between">
      
     
      <div className="flex items-center space-x-5 mb-4 md:mb-0">
      
          <img
            src="/IMG/3.png"
            alt="Logo"
            className="h-16 w-12 object-contain rounded-lg"
          />
        
        <div className="flex flex-col">
           <span className="text-white text-lg md:text-xl">
            <span className="font-normal text-pink-600">Isabelle</span>{" "}
            <span className="font-bold">Nauber-Gelhaar</span>
          </span>

    
          <span className="text-sm text-gray-400 md:text-base">
            Web Developer &amp; Web Designer
          </span>
        
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <Link
          to="/contact"
          className="text-white cursor-pointer hover:text-gray-300 border-2 border-pink-600 px-2 py-1"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

