import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-black dark:via-gray-900 dark:to-black">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="grid grid-cols-12 gap-4 h-full animate-pulse">
            {Array.from({ length: 144 }).map((_, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-300 rounded-sm"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: '3s'
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main loading content */}
      <div className="relative z-10 text-center">
        {/* Logo with animation */}
        <div className="mb-8">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-blue-500 dark:bg-blue-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
            <div className="relative bg-white dark:bg-gray-100 rounded-full p-6 shadow-2xl">
              <img
                src="/src/components/img/111.jpg"
                alt="NAZStudio Logo"
                className="h-16 w-16 object-contain rounded-full animate-bounce"
                onError={(e) => {
                  console.log('Logo failed to load, using fallback');
                  e.target.src = 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=64&h=64&fit=crop';
                }}
              />
            </div>
          </div>
        </div>

        {/* Brand name */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-wider">
          <span className="inline-block animate-pulse">N</span>
          <span className="inline-block animate-pulse" style={{ animationDelay: '0.1s' }}>A</span>
          <span className="inline-block animate-pulse" style={{ animationDelay: '0.2s' }}>Z</span>
          <span className="inline-block text-blue-400 dark:text-blue-300 animate-pulse" style={{ animationDelay: '0.3s' }}>Studio</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl text-gray-300 dark:text-gray-400 mb-8 animate-fade-in-up opacity-100">
          Designing the Future
        </p>

        {/* Loading bar */}
        <div className="w-64 mx-auto mb-6">
          <div className="h-1 bg-gray-700 dark:bg-gray-600 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 rounded-full animate-loading-bar"></div>
          </div>
        </div>

        {/* Loading text */}
        <p className="text-gray-400 dark:text-gray-500 text-sm animate-pulse">
          Loading your architectural experience...
        </p>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 dark:bg-blue-300 rounded-full animate-float"></div>
      <div className="absolute top-40 right-32 w-3 h-3 bg-purple-400 dark:bg-purple-300 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-40 w-2 h-2 bg-green-400 dark:bg-green-300 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 right-20 w-4 h-4 bg-yellow-400 dark:bg-yellow-300 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
    </div>
  );
};

export default LoadingScreen;