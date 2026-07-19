import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 mt-12 border-t border-gray-200 text-gray-500 text-xs max-w-3xl mx-auto bg-white px-6 sm:px-12 md:px-20 font-sans">
      <p>&copy; {new Date().getFullYear()} Fathan Akbar A. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
