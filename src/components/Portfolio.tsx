import React, { useState, useEffect } from 'react';
import { Play, ExternalLink, Calendar, MapPin, Award, Eye, X } from 'lucide-react';
import image11 from '../components/img/11.jpg';
import image12 from '../components/img/12.jpg';

const Portfolio = () => {
  const [imageIndices, setImageIndices] = useState({});
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const projectGallery = [
    {
      id: 1,
      title: 'Luxury Villa Design',
      images: [
        'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        image11,
        image12
      ],
      category: 'Residential',
      description: 'A stunning villa that seamlessly blends indoor and outdoor living spaces.',
      fullDescription: 'This luxury villa represents the perfect harmony between modern architecture and natural beauty. The design features expansive floor-to-ceiling windows that frame breathtaking views, while sustainable materials create a warm, organic aesthetic. The open-plan living spaces flow seamlessly onto outdoor terraces, blurring the boundaries between interior and exterior. Smart home technology is integrated throughout, including automated lighting systems and energy-efficient climate control.',
      features: ['Sustainable Materials', 'Smart Home Technology', 'Infinity Pool', 'Natural Integration', 'Energy Efficient'],
      area: '4,500 sq ft',
      budget: '$2.8M',
      location: 'Lake Tahoe, CA',
      year: '2023'
    },
    {
      id: 2,
      title: 'Corporate Headquarters',
      images: [
        'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        image11,
        image12
      ],
      category: 'Commercial',
      description: 'Modern corporate building designed for productivity and employee wellbeing.',
      fullDescription: 'The Corporate Innovation Center stands as a beacon of modern workplace design, featuring flexible spaces that adapt to the evolving needs of tech companies. The building incorporates biophilic design principles with living walls, natural lighting, and outdoor collaboration spaces. Advanced HVAC systems ensure optimal air quality, while the building\'s smart infrastructure supports the latest in workplace technology.',
      features: ['Biophilic Design', 'Flexible Workspaces', 'Smart Infrastructure', 'Living Walls', 'LEED Platinum'],
      area: '150,000 sq ft',
      budget: '$45M',
      location: 'San Francisco, CA',
      year: '2023'
    },
    {
      id: 3,
      title: 'Cultural Center',
      images: [
        'https://images.pexels.com/photos/1707310/pexels-photo-1707310.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        image11,
        image12
      ],
      category: 'Public',
      description: 'A community cultural center that serves as a landmark for the city.',
      fullDescription: 'This contemporary cultural center represents a thoughtful integration of modern architectural principles with cultural heritage. The design features clean geometric lines softened by traditional patterns and locally sourced materials. Natural light is carefully controlled through innovative skylight systems and strategically placed windows to create optimal viewing conditions for artwork.',
      features: ['Cultural Integration', 'Flexible Gallery Spaces', 'Natural Lighting', 'Traditional Elements', 'Local Materials'],
      area: '25,000 sq ft',
      budget: '$3.2M',
      location: 'Lahore, Pakistan',
      year: '2024'
    },
    {
      id: 4,
      title: 'Eco-Friendly Home',
      images: [
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        image11,
        image12
      ],
      category: 'Residential',
      description: 'Sustainable home design featuring renewable energy and green technologies.',
      fullDescription: 'This sustainable family home showcases how environmental responsibility and beautiful design can work hand in hand. The residence features a comprehensive solar panel system that generates more energy than the home consumes, making it net-positive. Rainwater harvesting systems irrigate the native plant gardens, while greywater recycling reduces overall water consumption.',
      features: ['Net-Positive Energy', 'Rainwater Harvesting', 'Passive Solar Design', 'Local Materials', 'Native Landscaping'],
      area: '3,200 sq ft',
      budget: '$850K',
      location: 'Portland, OR',
      year: '2022'
    }
  ];

  // Initialize image indices
  useEffect(() => {
    const initialIndices = {};
    projectGallery.forEach(project => {
      initialIndices[project.id] = 0;
    });
    setImageIndices(initialIndices);
  }, []);

  // Auto-swiping functionality for cards (pause when modal is open)
  useEffect(() => {
    if (!selectedProject) {
      const intervals = {};
      
      projectGallery.forEach(project => {
        if (project.images && project.images.length > 1) {
          intervals[project.id] = setInterval(() => {
            setImageIndices(prev => ({
              ...prev,
              [project.id]: (prev[project.id] + 1) % project.images.length
            }));
          }, 2000);
        }
      });

      return () => {
        Object.values(intervals).forEach(interval => {
          if (interval) clearInterval(interval);
        });
      };
    }
  }, [selectedProject]);

  // Auto-swiping for modal images
  useEffect(() => {
    if (selectedProject && selectedProject.images && selectedProject.images.length > 1) {
      const interval = setInterval(() => {
        setModalImageIndex(prev => (prev + 1) % selectedProject.images.length);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [selectedProject]);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setModalImageIndex(0);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setModalImageIndex(0);
  };

  const videoProjects = [
    {
      id: 1,
      title: 'Bridge Design',
      description: 'A comprehensive walkthrough of our latest Bridge project.',
      youtubeId: 'sEhwpf95xRQ',
      category: 'Bridge Design',
      location: 'Lahore, Pakistan',
      year: '2024',
      features: ['Sustainable Materials', 'Smart Integration', 'Natural Lighting']
    },
    {
      id: 2,
      title: 'Commercial Architecture Innovation',
      description: 'Explore our cutting-edge commercial building design that combines functionality with aesthetic appeal.',
      youtubeId: '0KpdoIuGuEY',
      category: 'Commercial',
      location: 'Lahore, Pakistan',
      year: '2024',
      features: ['Energy Efficient', 'Modern Facade', 'Flexible Spaces', 'Green Building Certified']
    }
  ];

  
  const achievements = [
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Design Excellence Award',
      year: '2024',
      description: 'Recognized for outstanding architectural innovation'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Sustainable Design Award',
      year: '2023',
      description: 'Leading the way in eco-friendly architecture'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Best Commercial Project',
      year: '2023',
      description: 'Excellence in commercial building design'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our latest projects through detailed videos and comprehensive project showcases
          </p>
        </div>
         {/* Project Gallery Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Project Gallery</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectGallery.map((project) => (
              <div key={project.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.images[imageIndices[project.id] || 0]} 
                    alt={project.title} 
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  {/* Image counter */}
                  {project.images && project.images.length > 1 && (
                    <div className="absolute top-2 right-2">
                      <div className="bg-black/50 text-white px-2 py-1 rounded-full text-xs">
                        {(imageIndices[project.id] || 0) + 1}/{project.images.length}
                      </div>
                    </div>
                  )}
                  {/* Auto-play indicator */}
                  <div className="absolute top-2 left-2">
                    <div className="bg-green-500/80 text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                      <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                      Auto
                    </div>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 right-4">
                      <button
                        onClick={() => openProjectModal(project)}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
                      >
                        <Eye className="h-5 w-5 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <span className="block text-sm text-blue-600 dark:text-blue-400 mb-1 font-medium">{project.category}</span>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{project.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                  <button
                    onClick={() => openProjectModal(project)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-200 text-sm font-medium"
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Projects Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Project Videos</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {videoProjects.map((project) => (
              <div key={project.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                {/* Video Embed */}
                <div className="relative aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${project.youtubeId}`}
                    title={project.title}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Project Details */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </div>

                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{project.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>

                  <div className="mb-6">
                    <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Features:</h5>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={`https://youtube.com/watch?v=${project.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-200"
                  >
                    <Play className="h-5 w-5" />
                    <span>Watch on YouTube</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mb-10">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Our Achievements</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 flex items-start space-x-4">
                <div className="text-blue-600 dark:text-blue-400">{achievement.icon}</div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{achievement.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{achievement.year}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={closeProjectModal}
                className="absolute top-4 right-4 z-10 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
              >
                <X className="h-6 w-6 text-white" />
              </button>
              
              <div className="relative h-64 md:h-80 overflow-hidden rounded-t-2xl">
                <img
                  src={selectedProject.images[modalImageIndex]}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Modal image counter and auto-play indicator */}
                {selectedProject.images && selectedProject.images.length > 1 && (
                  <div className="absolute top-4 left-4 flex gap-2">
                    <div className="bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                      {modalImageIndex + 1}/{selectedProject.images.length}
                    </div>
                    <div className="bg-green-500/80 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      Auto
                    </div>
                  </div>
                )}
                
                <div className="absolute bottom-6 left-6 text-white">
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">{selectedProject.title}</h2>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{selectedProject.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{selectedProject.year}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Project Overview</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                      {selectedProject.fullDescription}
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Key Features</h3>
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {selectedProject.features?.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Project Details</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-300">Area:</span>
                          <span className="font-medium text-gray-900 dark:text-white">{selectedProject.area}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-300">Budget:</span>
                          <span className="font-medium text-gray-900 dark:text-white">{selectedProject.budget}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-300">Category:</span>
                          <span className="font-medium text-gray-900 dark:text-white capitalize">{selectedProject.category}</span>
                        </div>
                      </div>
                    </div>

                    {selectedProject.images && selectedProject.images.length > 1 && (
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Project Gallery</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {selectedProject.images.map((image, index) => (
                            <div
                              key={index}
                              className={`relative cursor-pointer rounded-lg overflow-hidden ${
                                index === modalImageIndex ? 'ring-2 ring-blue-500' : ''
                              }`}
                              onClick={() => setModalImageIndex(index)}
                            >
                              <img
                                src={image}
                                alt={`${selectedProject.title} ${index + 1}`}
                                className="w-full h-20 object-cover hover:scale-110 transition-transform duration-300"
                              />
                              {index === modalImageIndex && (
                                <div className="absolute inset-0 bg-blue-500/20"></div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;