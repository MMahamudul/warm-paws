import React from 'react';
import flogo from '../assets/flogo.png'; 
import MyContainer from './MyContainer';



const Footer = () => {
  return (
    <footer className="bg-[#b3d9e6]  text-blue-900 py-8 mt-10">
      <MyContainer>
        <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
          
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <div className="flex items-center space-x-2 ">
              <img
                src={flogo}
                alt="WarmPaws Logo"
                className="h-20 w-20"
              />
              <h2 className="text-xl font-semibold tracking-wide">WarmPaws</h2>
            </div>
            <p className="text-sm text-blue-800 text-center md:text-left max-w-xs">
              Caring for your pets with warmth, love, and expert care — because every paw deserves comfort.
            </p>
          </div>

        
          <div className="flex space-x-10 text-sm">
            <div className="flex flex-col space-y-2">
              <h3 className="font-semibold mb-1">Quick Links</h3>
              <a href="#home" className="hover:text-blue-700">Home</a>
              <a href="#services" className="hover:text-blue-700">Services</a>
              <a href="#about" className="hover:text-blue-700">Profile</a>
            
            </div>
            <div className="flex flex-col space-y-2">
              <h3 className="font-semibold mb-1">Follow Us</h3>
              <a href="#" className="hover:text-blue-700">Instagram</a>
              <a href="#" className="hover:text-blue-700">Facebook</a>
              <a href="#" className="hover:text-blue-700">Twitter</a>
            </div>
          </div>

         
          <div className="flex flex-col space-y-2 w-full md:w-auto text-center md:text-left">
            <h3 className="font-semibold">Stay Updated</h3>
            <p className="text-sm text-blue-800">
              Subscribe to get pet care tips and offers!
            </p>
            <form className="flex flex-col sm:flex-row items-center sm:space-x-2 space-y-2 sm:space-y-0 mt-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-1 rounded-full border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
              />
              <button
                type="submit"
                className="bg-blue-900 text-white rounded-full px-4 py-1 text-sm hover:bg-blue-800 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        
        <div className="border-t border-blue-300 mt-8 pt-4 text-center text-sm text-blue-800">
          © {new Date().getFullYear()} WarmPaws. All rights reserved.
        </div>
      </div>


      </MyContainer>
    </footer>
  );
}
export default Footer;