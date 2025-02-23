import React from 'react';
import { 
  FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, 
  FaPython, FaGitAlt, FaDatabase 
} from 'react-icons/fa';
import { SiTailwindcss, SiMongodb } from 'react-icons/si';
import IconCloud from './IconCloud';

function Skills() {
  const skillIcons = [
    <FaReact size={40} color="#61DAFB" />,
    <FaJs size={40} color="#F7DF1E" />,
    <FaHtml5 size={40} color="#E34F26" />,
    <FaCss3Alt size={40} color="#1572B6" />,
    <FaNodeJs size={40} color="#339933" />,
    <FaPython size={40} color="#3776AB" />,
    <FaGitAlt size={40} color="#F05032" />,
    <SiTailwindcss size={40} color="#06B6D4" />,
    <SiMongodb size={40} color="#47A248" />,
    <FaDatabase size={40} color="#8B5CF6" />
  ];

  return (
    <div className="mt-16 w-full max-w-4xl px-4">
      <h3 className="text-2xl font-semibold text-white text-center mb-8">
        Langages de programmation
      </h3>
      <div className="flex justify-center mb-12">
        <IconCloud icons={skillIcons} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center">
        {[
          { name: 'React', icon: FaReact, color: 'text-blue-400' },
          { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
          { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
          { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500' },
          { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
          { name: 'Python', icon: FaPython, color: 'text-blue-300' },
          { name: 'Git', icon: FaGitAlt, color: 'text-red-500' },
          { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-400' },
          { name: 'MongoDB', icon: SiMongodb, color: 'text-green-400' },
          { name: 'SQL', icon: FaDatabase, color: 'text-purple-400' }
        ].map((skill, index) => {
          const Icon = skill.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center group"
            >
              <Icon className={`text-4xl ${skill.color} transition-all duration-300 group-hover:scale-125`} />
              <span className="mt-2 text-gray-300 group-hover:text-white transition-colors duration-300">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;