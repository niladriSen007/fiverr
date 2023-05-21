import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4">About</h3>
            <ul className="list-none">
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Press & News</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Partnerships</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="list-none">
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Help & Support</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Trust & Safety</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Selling on Fiverr</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Buying on Fiverr</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-lg font-bold mb-4">Community</h3>
            <ul className="list-none">
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Events</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Forum</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Affiliates</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <ul className="list-none">
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Facebook</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Twitter</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Instagram</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
