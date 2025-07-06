import React from 'react';
import { Home, Building2, Ruler, Lightbulb, TreePine, Palette } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Home className="h-8 w-8" />,
      title: 'Residential Design',
      description: 'Custom homes that reflect your lifestyle and values, from concept to completion.',
      features: ['Custom Home Design', 'Renovations', 'Interior Planning', 'Landscape Integration']
    },
    {
      icon: <Building2 className="h-8 w-8" />,
      title: 'Commercial Architecture',
      description: 'Innovative commercial spaces that enhance productivity and brand identity.',
      features: ['Office Buildings', 'Retail Spaces', 'Mixed-Use Developments', 'Hospitality Design']
    },
    {
      icon: <Ruler className="h-8 w-8" />,
      title: 'Master Planning',
      description: 'Comprehensive planning solutions for communities and large-scale developments.',
      features: ['Urban Planning', 'Site Analysis', 'Zoning Compliance', 'Development Strategy']
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Design Consultation',
      description: 'Expert guidance to bring your vision to life with professional insight.',
      features: ['Concept Development', 'Feasibility Studies', 'Design Review', 'Project Management']
    },
    {
      icon: <TreePine className="h-8 w-8" />,
      title: 'Sustainable Design',
      description: 'Environmentally conscious architecture that minimizes impact and maximizes efficiency.',
      features: ['Green Building', 'Energy Efficiency', 'Sustainable Materials', 'LEED Certification']
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: 'Interior Architecture',
      description: 'Thoughtful interior spaces that complement and enhance architectural design.',
      features: ['Space Planning', 'Material Selection', 'Lighting Design', 'Custom Millwork']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We offer comprehensive architectural services to bring your vision to life
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-sm hover:shadow-lg dark:shadow-gray-900/20 transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;