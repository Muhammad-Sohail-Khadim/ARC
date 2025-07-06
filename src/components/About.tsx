import React from 'react';
import { Target, Eye, Award, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Innovation',
      description: 'We embrace cutting-edge technology and creative solutions to push the boundaries of architectural design.'
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: 'Vision',
      description: 'We see beyond the present to create spaces that anticipate future needs and inspire generations.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Excellence',
      description: 'We maintain the highest standards in every project, from initial concept to final construction.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Collaboration',
      description: 'We believe the best results come from working closely with our clients and construction partners.'
    }
  ];

  const team = [
    {
      name: 'Muhammad Sohail',
      role: 'CEO',
      image: 'https://media.licdn.com/dms/image/v2/D5603AQGVGTziklJPQA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1724516420521?e=2147483647&v=beta&t=dqfpzGfvdRI5C46BEWAvYLSA-U3TJFrWP8WmfpqrtvU',
      bio: 'Principal Architect leading our firm with a vision for modern, sustainable, and functional design.He combines creativity with technical precision to deliver innovative architectural solutions across residential, commercial, and urban projects.His leadership drives a commitment to excellence, client satisfaction, and architectural integrity.'
    },
    {
      name: 'Muhammad Ramzan',
      role: 'Design Director',
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQG-sRkmnHVQ2Q/profile-displayphoto-shrink_100_100/B4DZfb7XKiHMAY-/0/1751741461634?e=1756944000&v=beta&t=GFPpclaQ67gF0Ujavs5fRC5PwEzWqM3SrAOE60_geI0',
      bio: 'Specializing in innovative  planning and mixed-use developments across major areas.'
    },
    {
      name: ' HAMZA',
      role: 'Senior Architect',
      image: 'https://media.licdn.com/dms/image/v2/D4D22AQGx7d4ltcZgPQ/feedshare-shrink_800/B4DZfb82V1GgAg-/0/1751741851940?e=1754524800&v=beta&t=t6Nq05jSpZGop_xlIUAuYQGSZCDJSyrmvE_54khlR8c',
      bio: 'Expert in vidulizer design with a focus on creating beautiful, functional spaces that enhance daily living.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">About NAZStudio</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We are a team of passionate architects dedicated to creating spaces that inspire, 
            function beautifully, and stand the test of time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Founded in 2024, NAZStudio has grown from a small design firm into a recognized leader 
              in sustainable and innovative architecture. Our journey began with a simple belief: 
              that great architecture has the power to transform lives and communities.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Today, we work on projects ranging from intimate residential homes to large-scale 
              commercial developments, always with the same commitment to design excellence, 
              environmental responsibility, and client satisfaction.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Our award-winning team combines decades of experience with fresh perspectives, 
              ensuring that every project we undertake is both timeless and forward-thinking.
            </p>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
              alt="Architecture team at work"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg"></div>
          </div>
        </div>
        
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="text-blue-600 dark:text-blue-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{value.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-xl p-8 shadow-sm hover:shadow-lg dark:shadow-gray-900/20 transition-all duration-300 text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{member.name}</h4>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;