import React from 'react';
import flogo from '../assets/flogo.png'; 
import MyContainer from './MyContainer';
import { Link } from 'react-router'; // If using React Router

const Footer = () => {
  return (
    <footer className="bg-[#b3d9e6] text-blue-900 py-10 mt-10">
      <MyContainer>
        <div className="container mx-auto px-4">
          
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
            
         
            <div className="flex flex-col items-center md:items-start space-y-3 max-w-xs text-center md:text-left">
              <div className="flex items-center space-x-2">
                <img src={flogo} alt="WarmPaws Logo" className="h-16 w-16" />
                <h2 className="text-xl font-semibold tracking-wide">WarmPaws</h2>
              </div>
              <p className="text-sm text-blue-800">
                Caring for your pets with warmth, love, and expert care — because every paw deserves comfort.
              </p>
            </div>

          
            <div className="flex flex-col space-y-2 text-center md:text-left">
              <h3 className="font-semibold text-base mb-1">Quick Links</h3>
              <Link to="/" className="hover:text-blue-700 transition">Home</Link>
              <Link to="/services" className="hover:text-blue-700 transition">Services</Link>
              <Link to="/profile" className="hover:text-blue-700 transition">Profile</Link>
            </div>

            
            <div className="flex flex-col space-y-2 text-center md:text-left">
              <h3 className="font-semibold text-base mb-1">Follow Us</h3>
              <a href="#" className="hover:text-blue-700 transition">Instagram</a>
              <a href="#" className="hover:text-blue-700 transition">Facebook</a>
              <a href="#" className="hover:text-blue-700 transition">Twitter</a>
            </div>

           
            <div className="flex flex-col space-y-3 w-full md:w-1/3 text-center md:text-left">
              <h3 className="font-semibold text-base">Stay Updated</h3>
              <p className="text-sm text-blue-800">
                Subscribe to get pet care tips and special offers!
              </p>
              <form className="flex flex-col sm:flex-row items-center sm:space-x-2 space-y-2 sm:space-y-0 mt-1">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 w-full rounded-full border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                />
                <button
                  type="submit"
                  className="bg-blue-900 text-white rounded-full px-4 py-2 text-sm hover:bg-blue-800 transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          
          <div className="border-t border-blue-300 mt-10 pt-4 text-center text-sm text-blue-800 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6 flex-wrap">
            <p>© {new Date().getFullYear()} WarmPaws. All rights reserved.</p>
            <Link to="/privacy-policy" className="hover:text-blue-700 underline">
              Privacy Policy
            </Link>
            
          </div>
        </div>
      </MyContainer>
    </footer>
  );
};

export default Footer;
