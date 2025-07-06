import React from 'react';
import { ArrowRight, Award, Users, Building } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-black dark:via-gray-900 dark:to-black">
      <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
        }}
      ></div>

      {/* Add padding-top for mobile to avoid header overlap */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 sm:pt-0">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-bold text-white mb-6 leading-tight">
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-300 drop-shadow-lg mt-2">
              Designing the Future
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 dark:text-blue-200 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            We create exceptional architectural experiences that blend innovation, sustainability, and timeless design.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-white dark:bg-gray-100 text-gray-900 dark:text-gray-800 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg">
              <span>View Our Work</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 dark:hover:bg-gray-100 dark:hover:text-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get In Touch
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto">
            <div className="bg-white/15 dark:bg-white/10 backdrop-blur-md rounded-lg p-4 sm:p-6 text-center border border-white/20 dark:border-white/10">
              <Award className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400 dark:text-blue-300 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">5+</h3>
              <p className="text-gray-200 dark:text-gray-300 text-sm sm:text-base">Awards Won</p>
            </div>
            <div className="bg-white/15 dark:bg-white/10 backdrop-blur-md rounded-lg p-4 sm:p-6 text-center border border-white/20 dark:border-white/10">
              <Building className="h-6 w-6 sm:h-8 sm:w-8 text-purple-400 dark:text-purple-300 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">+15</h3>
              <p className="text-gray-200 dark:text-gray-300 text-sm sm:text-base">Projects Completed</p>
            </div>
            <div className="bg-white/15 dark:bg-white/10 backdrop-blur-md rounded-lg p-4 sm:p-6 text-center border border-white/20 dark:border-white/10">
              <Users className="h-6 w-6 sm:h-8 sm:w-8 text-green-400 dark:text-green-300 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">2+</h3>
              <p className="text-gray-200 dark:text-gray-300 text-sm sm:text-base">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;