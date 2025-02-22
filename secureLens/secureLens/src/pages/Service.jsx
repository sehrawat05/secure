import React from 'react';

const Services = () => {
  const services = [
    { title: 'FIRE DETECTION', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis lectus tortorism.', icon: '🖥️', link: 'secureLens\public\fire model\templates\index.html' },
    { title: 'OBJECT DETECTION', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis lectus tortorism.', icon: '💻', link: '/real.html' },
    { title: 'Incident Reporting & Alerts', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis lectus tortorism.', icon: '📦', link: '/index.html' },
    { title: 'Data Security & Privacy Consulting', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis lectus tortorism.', icon: '✍️', link: '/index.html' },
    { title: 'Smart Video Summarization', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis lectus tortorism.', icon: '📣', link: '/index.html' },
    { title: 'Custom AI Integration for Surveillance Systems', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis lectus tortorism.', icon: '📷', link: '/index.html' },
  ];

  return (
    <div className="bg-gray-900 text-white py-10 px-5">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">
          OUR <span className="text-purple-400">SERVICE</span>
        </h2>
        <p className="text-gray-400 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultrices sapien vel quam luctus pulvinar.
        </p>
        <div className="w-16 h-1 bg-purple-400 mx-auto my-4"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <a 
            key={index}
            href={service.link}  
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray-800 p-6 rounded-lg text-center border border-gray-700 hover:border-purple-400 transition-transform transform hover:scale-105 block"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="font-bold text-lg mb-2">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Services;
