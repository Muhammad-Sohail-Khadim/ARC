import React from 'react';
import { Building2, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white transition-colors duration-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Building2 className="h-8 w-8 text-blue-400 dark:text-blue-300" />
              <span className="text-2xl font-bold">NAZStudio</span>
            </div>
            <p className="text-gray-400 dark:text-gray-500 mb-6 max-w-md">
              Creating exceptional architectural experiences through innovative design, 
              sustainable practices, and collaborative partnerships.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors duration-200">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="http://www.linkedin.com/in/muhammad-sohail-khadim" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors duration-200">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 dark:text-gray-500">
              <li><a href="" className="hover:text-white dark:hover:text-gray-300 transition-colors duration-200">Residential Design</a></li>
              <li><a href="" className="hover:text-white dark:hover:text-gray-300 transition-colors duration-200">Commercial Architecture</a></li>
              <li><a href="" className="hover:text-white dark:hover:text-gray-300 transition-colors duration-200">Master Planning</a></li>
              <li><a href="" className="hover:text-white dark:hover:text-gray-300 transition-colors duration-200">Interior Design</a></li>
            </ul>
          </div>
          
           
        </div>
        
        <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 text-center text-gray-400 dark:text-gray-500">
          <p>&copy; 2024 NAZStudio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;