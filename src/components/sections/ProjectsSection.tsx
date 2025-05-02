import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

// Project data
const projects = [
  {
    title: "E-commerce Website",
    description: "A full-featured e-commerce platform built with PHP, MySQL, and Bootstrap. Includes user authentication, product management, shopping cart, and checkout functionality.",
    technologies: ["PHP", "MySQL", "Bootstrap", "HTML", "CSS"],
    githubLink: "https://github.com/Pawan12221468/E-CommercePHP",
    demoLink: null,
    image: "/E-Commerce.png"
  },
  {
    title: "Weather Forecast App",
    description: "A real-time weather application built with React and Vite. Features include current weather, 5-day forecast, and location-based weather data using OpenWeatherMap API.",
    technologies: ["React", "Vite", "TypeScript", "Tailwind CSS", "OpenWeatherMap API"],
    githubLink: "https://github.com/Pawan12221468/Weather",
    demoLink: null,
    image: "/Weather.png"
  }
];

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Projects" 
          subtitle="A selection of my recent development work."
          centered
        />
        
        <div className="mt-12">
          {/* Project Tabs */}
          <div className="flex flex-wrap justify-center mb-8">
            {projects.map((project) => (
              <button
                key={project.title}
                onClick={() => setActiveProject(project)}
                className={`px-4 py-2 mx-2 mb-2 rounded-full transition-colors ${
                  activeProject.title === project.title
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {project.title}
              </button>
            ))}
          </div>
          
          {/* Active Project Display */}
          <motion.div
            key={activeProject.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            {/* Project Image */}
            <div className="rounded-xl overflow-hidden shadow-lg group">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full aspect-video object-cover object-center transition-transform duration-300 group-hover:scale-105 group-hover:shadow-2xl"
              />
            </div>
            
            {/* Project Info */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {activeProject.title}
                </h3>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {activeProject.description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-4">
                {activeProject.githubLink && (
                  <a
                    href={activeProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <FiGithub className="mr-2" />
                    <span>View Code</span>
                  </a>
                )}
                
                {activeProject.demoLink && (
                  <a
                    href={activeProject.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <FiExternalLink className="mr-2" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 