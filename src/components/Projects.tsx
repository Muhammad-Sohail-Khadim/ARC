import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, MapPin, Calendar, ChevronLeft, ChevronRight, Eye, X } from 'lucide-react';
import image11 from '../components/img/11.jpg';
import image12 from '../components/img/12.jpg';


const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedProject, setSelectedProject] = useState(null);
  const [cardImageIndices, setCardImageIndices] = useState({});
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const cardAutoPlayRefs = useRef({});
  const modalAutoPlayRef = useRef<NodeJS.Timeout | null>(null);
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'public', name: 'Public' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Modern Lakeside Residence',
      category: 'residential',
      location: 'Lake Tahoe, CA',
      year: '2023',
      images: [
        'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      description: 'A contemporary home that embraces its natural surroundings with floor-to-ceiling windows and sustainable materials.',
      fullDescription: 'This stunning lakeside residence represents the perfect harmony between modern architecture and natural beauty. The design features expansive floor-to-ceiling windows that frame breathtaking lake views, while sustainable materials like reclaimed wood and locally sourced stone create a warm, organic aesthetic. The open-plan living spaces flow seamlessly onto outdoor terraces, blurring the boundaries between interior and exterior. Smart home technology is integrated throughout, including automated lighting systems and energy-efficient climate control. The property also features a private dock, infinity pool, and landscaped gardens that complement the natural shoreline.',
      features: ['Sustainable Materials', 'Smart Home Technology', 'Infinity Pool', 'Private Dock', 'Energy Efficient'],
      area: '4,500 sq ft',
      budget: '$2.8M'
    },
    {
      id: 2,
      title: 'Corporate Innovation Center',
      category: 'commercial',
      location: 'San Francisco, CA',
      year: '2023',
      images: [
        'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1907784/pexels-photo-1907784.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      description: 'A cutting-edge office building designed to foster creativity and collaboration in the heart of Silicon Valley.',
      fullDescription: 'The Corporate Innovation Center stands as a beacon of modern workplace design, featuring flexible spaces that adapt to the evolving needs of tech companies. The building incorporates biophilic design principles with living walls, natural lighting, and outdoor collaboration spaces. Advanced HVAC systems ensure optimal air quality, while the building\'s smart infrastructure supports the latest in workplace technology. The design promotes both focused work and spontaneous collaboration through a variety of space types, from quiet pods to dynamic meeting areas.',
      features: ['Biophilic Design', 'Flexible Workspaces', 'Smart Infrastructure', 'Living Walls', 'LEED Platinum'],
      area: '150,000 sq ft',
      budget: '$45M'
    },
    {
      id: 3,
      title: 'Contemporary Art Gallery',
      category: 'public',
      location: 'Lahore, Pakistan',
      year: '2024',
      images: [
        'https://images.pexels.com/photos/1907784/pexels-photo-1907784.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      description: 'A seamlessly blends contemporary architecture with cultural heritage.',
      fullDescription: 'This contemporary art gallery represents a thoughtful integration of modern architectural principles with Pakistan\'s rich cultural heritage. The design features clean geometric lines softened by traditional Islamic patterns and locally sourced materials. Natural light is carefully controlled through innovative skylight systems and strategically placed windows to create optimal viewing conditions for artwork. The gallery spaces are flexible and can be reconfigured for different exhibitions, while the central courtyard provides a peaceful gathering space that reflects traditional Pakistani architecture.',
      features: ['Cultural Integration', 'Flexible Gallery Spaces', 'Natural Lighting', 'Traditional Courtyard', 'Local Materials'],
      area: '25,000 sq ft',
      budget: '$3.2M'
    },
    {
      id: 4,
      title: 'Sustainable Family Home',
      category: 'residential',
      location: 'Portland, OR',
      year: '2022',
      images: [
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      description: 'An eco-friendly residence featuring solar panels, rainwater harvesting, and locally sourced materials.',
      fullDescription: 'This sustainable family home showcases how environmental responsibility and beautiful design can work hand in hand. The residence features a comprehensive solar panel system that generates more energy than the home consumes, making it net-positive. Rainwater harvesting systems irrigate the native plant gardens, while greywater recycling reduces overall water consumption. The home is built with locally sourced, low-impact materials including FSC-certified wood and recycled steel. Passive solar design principles minimize heating and cooling needs, while triple-glazed windows and superior insulation ensure year-round comfort.',
      features: ['Net-Positive Energy', 'Rainwater Harvesting', 'Passive Solar Design', 'Local Materials', 'Native Landscaping'],
      area: '3,200 sq ft',
      budget: '$850K'
    },
    {
      id: 5,
      title: 'Tech Campus Expansion',
      category: 'commercial',
      location: 'Austin, TX',
      year: '2023',
      images: [
        'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1907784/pexels-photo-1907784.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      description: 'A modern campus expansion that promotes wellness and productivity through biophilic design principles.',
      fullDescription: 'The Tech Campus Expansion redefines the modern workplace by prioritizing employee wellness and environmental sustainability. The design incorporates extensive green spaces, including rooftop gardens and interior courtyards that provide natural respite throughout the workday. Advanced air filtration systems and abundant natural light create a healthy indoor environment, while flexible workspace configurations support both collaborative and focused work. The campus features state-of-the-art fitness facilities, meditation spaces, and a full-service cafeteria with locally sourced ingredients.',
      features: ['Rooftop Gardens', 'Wellness Facilities', 'Flexible Workspaces', 'Natural Light', 'Local Sourcing'],
      area: '200,000 sq ft',
      budget: '$65M'
    },
    {
      id: 6,
      title: 'Community Library',
      category: 'public',
      location: 'Denver, CO',
      year: '2022',
      images: [
        'https://images.pexels.com/photos/1907784/pexels-photo-1907784.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      description: 'A modern library that serves as a community hub with flexible spaces for learning and gathering.',
      fullDescription: 'This community library reimagines the traditional library as a dynamic community hub that serves diverse needs. The design features flexible spaces that can be easily reconfigured for different activities, from quiet study areas to large community meetings. A dedicated children\'s section includes interactive learning spaces and a storytelling amphitheater. The building incorporates sustainable design elements including a green roof, solar panels, and natural ventilation systems. Digital infrastructure supports both traditional library services and modern technology needs, including maker spaces and computer labs.',
      features: ['Flexible Spaces', 'Children\'s Section', 'Maker Spaces', 'Green Roof', 'Digital Infrastructure'],
      area: '35,000 sq ft',
      budget: '$12M'
    },
    {
      id: 7,
      title: 'Luxury Penthouse',
      category: 'residential',
      location: 'Miami, FL',
      year: '2024',
      images: [
        image11,
        image12,
        'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      description: 'An exclusive penthouse featuring panoramic city views and premium finishes throughout.',
      fullDescription: 'This luxury penthouse represents the pinnacle of urban living, offering unparalleled views of Miami\'s skyline and coastline. The interior design features premium materials including Italian marble, custom millwork, and designer fixtures throughout. Floor-to-ceiling windows maximize natural light and views, while private terraces provide outdoor living spaces with infinity-edge features. The home includes a private elevator, wine cellar, home theater, and spa-like master suite. Smart home automation controls lighting, climate, security, and entertainment systems.',
      features: ['Panoramic Views', 'Premium Materials', 'Private Elevator', 'Wine Cellar', 'Smart Automation'],
      area: '6,500 sq ft',
      budget: '$8.5M'
    },
    {
      id: 8,
      title: 'Green Office Complex',
      category: 'commercial',
      location: 'Seattle, WA',
      year: '2024',
      images: [
        'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/1907784/pexels-photo-1907784.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      ],
      description: 'LEED Platinum certified office complex with innovative sustainable technologies.',
      fullDescription: 'The Green Office Complex sets new standards for sustainable commercial architecture, achieving LEED Platinum certification through innovative design and technology integration. The building features a living facade with integrated photovoltaic panels and vertical gardens that improve air quality and provide natural insulation. Rainwater collection systems supply irrigation and cooling, while geothermal systems provide efficient heating and cooling. The interior spaces prioritize natural light and ventilation, with operable windows and skylights reducing reliance on artificial lighting and mechanical systems.',
      features: ['LEED Platinum', 'Living Facade', 'Geothermal Systems', 'Rainwater Collection', 'Natural Ventilation'],
      area: '180,000 sq ft',
      budget: '$55M'
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  // Initialize card image indices
  useEffect(() => {
    const initialIndices = {};
    projects.forEach(project => {
      initialIndices[project.id] = 0;
    });
    setCardImageIndices(initialIndices);
  }, []);

  // Auto-play functionality for main carousel
  useEffect(() => {
    if (isAutoPlaying && filteredProjects.length > 0 && !selectedProject) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex >= filteredProjects.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, filteredProjects.length, selectedProject]);

  // Auto-play functionality for card images (only when modal is closed)
  useEffect(() => {
    if (!selectedProject) {
      projects.forEach(project => {
        if (project.images && project.images.length > 1) {
          cardAutoPlayRefs.current[project.id] = setInterval(() => {
            setCardImageIndices(prev => ({
              ...prev,
              [project.id]: (prev[project.id] + 1) % project.images.length
            }));
          }, 2000);
        }
      });
    } else {
      // Clear all card auto-play intervals when modal is open
      Object.values(cardAutoPlayRefs.current).forEach(interval => {
        if (interval) clearInterval(interval);
      });
    }

    return () => {
      Object.values(cardAutoPlayRefs.current).forEach(interval => {
        if (interval) clearInterval(interval);
      });
    };
  }, [projects, selectedProject]);

  // Auto-play functionality for modal images
  useEffect(() => {
    if (selectedProject && selectedProject.images && selectedProject.images.length > 1) {
      modalAutoPlayRef.current = setInterval(() => {
        setModalImageIndex(prev => (prev + 1) % selectedProject.images.length);
      }, 2000);
    }

    return () => {
      if (modalAutoPlayRef.current) {
        clearInterval(modalAutoPlayRef.current);
      }
    };
  }, [selectedProject]);

  // Reset index when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  // Scroll to current project
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 320;
      const scrollPosition = currentIndex * cardWidth;
      
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex <= 0 ? filteredProjects.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex >= filteredProjects.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setCurrentIndex(0);
    setIsAutoPlaying(true);
  };

  const handleCardClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setModalImageIndex(0);
    setIsAutoPlaying(false);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    setModalImageIndex(0);
    setIsAutoPlaying(true);
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our portfolio of innovative architectural solutions
          </p>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Auto-play indicator */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <div className={`w-2 h-2 rounded-full ${isAutoPlaying && !selectedProject ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
            <span>{isAutoPlaying && !selectedProject ? 'Auto-playing' : 'Paused'}</span>
          </div>
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
          >
            {isAutoPlaying ? 'Pause' : 'Resume'}
          </button>
        </div>
        
        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <button
            onClick={handlePrevious}
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 transform hover:scale-110 shadow-md"
            aria-label="Previous project"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700 dark:text-gray-300" />
          </button>
          
          <div className="flex items-center gap-2">
            {filteredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => handleCardClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-blue-600 dark:bg-blue-400 scale-125' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 transform hover:scale-110 shadow-md"
            aria-label="Next project"
          >
            <ChevronRight className="h-6 w-6 text-gray-700 dark:text-gray-300" />
          </button>
        </div>

        {/* Horizontal Scrolling Container */}
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth'
            }}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className={`flex-shrink-0 w-80 bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl dark:shadow-gray-900/20 transition-all duration-500 transform cursor-pointer ${
                  index === currentIndex 
                    ? 'scale-105 shadow-xl ring-2 ring-blue-500 dark:ring-blue-400' 
                    : 'hover:scale-102'
                }`}
                style={{ scrollSnapAlign: 'start' }}
                onClick={() => handleCardClick(index)}
              >
                <div className="relative overflow-hidden group">
                  <img 
                    src={project.images ? project.images[cardImageIndices[project.id] || 0] : project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 right-4 flex gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openProjectModal(project);
                        }}
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
                      >
                        <Eye className="h-5 w-5 text-white" />
                      </button>
                      <ExternalLink className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  {/* Active indicator */}
                  {index === currentIndex && (
                    <div className="absolute top-4 left-4">
                      <div className="bg-blue-600 dark:bg-blue-400 text-white dark:text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </div>
                    </div>
                  )}
                  {/* Image counter */}
                  {project.images && project.images.length > 1 && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-black/50 text-white px-2 py-1 rounded-full text-xs">
                        {(cardImageIndices[project.id] || 0) + 1}/{project.images.length}
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-1">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span className="truncate">{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{project.year}</span>
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openProjectModal(project);
                    }}
                    className="w-full bg-blue-600 dark:bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200 text-sm font-medium"
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Counter */}
        <div className="text-center mt-8">
          <p className="text-gray-500 dark:text-gray-400">
            Showing {currentIndex + 1} of {filteredProjects.length} projects
          </p>
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
                  src={selectedProject.images ? selectedProject.images[modalImageIndex] : selectedProject.image}
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
                          <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
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
                                index === modalImageIndex ? 'ring-2 ring-blue-500 dark:ring-blue-400' : ''
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

export default Projects;