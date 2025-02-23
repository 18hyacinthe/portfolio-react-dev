import React from 'react';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaJava, FaPython, 
  FaPhp, FaDatabase 
} from 'react-icons/fa';
import { 
  SiFlutter, SiCplusplus, SiCsharp, 
  SiMysql, SiPostgresql, SiMongodb, 
  SiReact, SiR 
} from 'react-icons/si';
import { TbBrandCpp } from 'react-icons/tb';
import IconCloud from './IconCloud';

function Skills() {
  const languages = [
    { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
    { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500' },
    { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
    { name: 'Java', icon: FaJava, color: 'text-red-500' },
    { name: 'React Native', icon: SiReact, color: 'text-blue-400' },
    { name: 'Flutter', icon: SiFlutter, color: 'text-cyan-400' },
    { name: 'C', icon: TbBrandCpp, color: 'text-gray-400' },
    { name: 'C++', icon: SiCplusplus, color: 'text-blue-600' },
    { name: 'C#', icon: SiCsharp, color: 'text-purple-500' },
    { name: 'PHP', icon: FaPhp, color: 'text-indigo-400' },
    { name: 'Python', icon: FaPython, color: 'text-yellow-300' },
    { name: 'R', icon: SiR, color: 'text-blue-700' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400' },
    { name: 'MySQL', icon: SiMysql, color: 'text-orange-400' },
    { name: 'NoSQL', icon: SiMongodb, color: 'text-green-500' }
  ];

  const skillIcons = languages.map(lang => 
    React.createElement(lang.icon, { size: 60, color: getColorHex(lang.color) })
  );


  function getColorHex(tailwindClass) {
    const colorMap = {
      'text-orange-500': '#f97316',
      'text-blue-500': '#3b82f6',
      'text-yellow-400': '#facc15',
      'text-red-500': '#ef4444',
      'text-blue-400': '#60a5fa',
      'text-cyan-400': '#22d3ee',
      'text-gray-400': '#9ca3af',
      'text-blue-600': '#2563eb',
      'text-purple-500': '#a855f7',
      'text-indigo-400': '#818cf8',
      'text-yellow-300': '#fde047',
      'text-blue-700': '#1d4ed8',
      'text-orange-400': '#fb923c',
      'text-green-500': '#22c55e'
    };
    return colorMap[tailwindClass] || '#ffffff';
  }

  return (
    <div className="w-full max-w-6xl px-4 mx-auto">
      <h3 className="text-3xl font-semibold text-white text-center mb-12">
        Langages de programmation
      </h3>
      <div className="flex justify-center items-center">
        <div className="w-[1000px] h-[1000px]">
          <IconCloud icons={skillIcons} />
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center mt-8">
        {languages.map((lang, index) => {
          const Icon = lang.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center group"
            >
              <Icon className={`text-5xl ${lang.color} transition-all duration-300 group-hover:scale-125`} />
              <span className="mt-2 text-gray-300 group-hover:text-white transition-colors duration-300">
                {lang.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;