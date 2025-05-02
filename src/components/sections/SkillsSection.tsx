import { useState } from 'react';
import { FiCode, FiDatabase, FiTool, FiMonitor } from 'react-icons/fi';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiExpress, SiMongodb, SiGit, SiFigma, SiRedux, SiTypescript, SiTailwindcss } from 'react-icons/si';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'tools', label: 'Tools' },
  { id: 'other', label: 'Other' },
];

const skills = [
  { name: 'HTML5', icon: <SiHtml5 className="w-8 h-8 text-orange-500" />, category: 'frontend' },
  { name: 'CSS3', icon: <SiCss3 className="w-8 h-8 text-blue-500" />, category: 'frontend' },
  { name: 'JavaScript', icon: <SiJavascript className="w-8 h-8 text-yellow-400" />, category: 'frontend' },
  { name: 'TypeScript', icon: <SiTypescript className="w-8 h-8 text-blue-600" />, category: 'frontend' },
  { name: 'React', icon: <SiReact className="w-8 h-8 text-cyan-400" />, category: 'frontend' },
  { name: 'Redux', icon: <SiRedux className="w-8 h-8 text-purple-500" />, category: 'frontend' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-8 h-8 text-sky-400" />, category: 'frontend' },
  { name: 'Node.js', icon: <SiNodedotjs className="w-8 h-8 text-green-600" />, category: 'backend' },
  { name: 'Express', icon: <SiExpress className="w-8 h-8 text-gray-700 dark:text-gray-200" />, category: 'backend' },
  { name: 'MongoDB', icon: <SiMongodb className="w-8 h-8 text-green-700" />, category: 'backend' },
  { name: 'Git', icon: <SiGit className="w-8 h-8 text-orange-600" />, category: 'tools' },
  { name: 'Figma', icon: <SiFigma className="w-8 h-8 text-pink-500" />, category: 'tools' },
  { name: 'VS Code', icon: <FiCode className="w-8 h-8 text-blue-400" />, category: 'tools' },
  { name: 'Database', icon: <FiDatabase className="w-8 h-8 text-indigo-400" />, category: 'backend' },
  { name: 'Other', icon: <FiMonitor className="w-8 h-8 text-gray-400" />, category: 'other' },
];

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills =
    activeCategory === 'all'
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center text-cyan-400 mb-10">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full font-semibold transition-colors duration-200 text-base focus:outline-none
                ${activeCategory === cat.id
                  ? 'bg-cyan-400 text-gray-900 shadow-lg'
                  : 'bg-gray-800 text-gray-200 hover:bg-cyan-600 hover:text-white'}`}
            >
              {cat.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center bg-gray-800 rounded-xl shadow-md p-6 hover:scale-105 hover:shadow-xl transition-transform duration-300"
            >
              {skill.icon}
              <span className="mt-3 text-lg font-semibold text-gray-100 text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 