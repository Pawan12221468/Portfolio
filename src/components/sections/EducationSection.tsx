import { motion } from 'framer-motion';
import { FiBook } from 'react-icons/fi';

export default function EducationSection() {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "XYZ University",
      year: "2020 - 2024",
      details: "Specialized in Software Development and Data Structures",
      gpa: "GPA: 3.8/4.0"
    },
    {
      degree: "Higher Secondary Education",
      institution: "ABC School",
      year: "2018 - 2020",
      details: "Science Stream with Computer Science",
      gpa: "Percentage: 92%"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
        </div>

        <div className="grid gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 relative"
            >
              <div className="absolute -left-3 top-6 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                <FiBook className="text-white" />
              </div>
              
              <div className="ml-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {edu.degree}
                </h3>
                <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                  {edu.institution}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  {edu.year}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  {edu.details}
                </p>
                <p className="text-gray-600 dark:text-gray-400 font-medium">
                  {edu.gpa}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 