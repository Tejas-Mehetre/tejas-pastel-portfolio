const Skills = () => {
  const skills = [
    // Programming Languages
    { name: 'JavaScript', symbol: 'JS', color: 'bg-yellow-500', category: 'Programming Language' },
    { name: 'TypeScript', symbol: 'TS', color: 'bg-blue-600', category: 'Programming Language' },
    { name: 'C++', symbol: 'C++', color: 'bg-blue-700', category: 'Programming Language' },
    { name: 'C#', symbol: 'C#', color: 'bg-purple-600', category: 'Programming Language' },
    { name: 'Java', symbol: 'Java', color: 'bg-red-600', category: 'Programming Language' },
    
    // Frontend Development
    { name: 'React.js', symbol: '⚛', color: 'bg-cyan-500', category: 'Frontend Development' },
    { name: 'Next.js', symbol: 'N', color: 'bg-gray-900', category: 'Frontend Development' },
    { name: 'Tailwind CSS', symbol: 'TW', color: 'bg-teal-500', category: 'Frontend Development' },
    { name: 'HTML5', symbol: 'HTML', color: 'bg-orange-600', category: 'Frontend Development' },
    { name: 'CSS3', symbol: 'CSS', color: 'bg-blue-500', category: 'Frontend Development' },
    
    // Backend Development
    { name: 'Node.js', symbol: 'Node', color: 'bg-green-600', category: 'Backend Development' },
    { name: 'Express.js', symbol: 'Ex', color: 'bg-gray-700', category: 'Backend Development' },
    { name: '.NET', symbol: '.NET', color: 'bg-indigo-600', category: 'Backend Development' },
    { name: 'MongoDB', symbol: 'DB', color: 'bg-green-500', category: 'Backend Development' },
    { name: 'MySQL', symbol: 'SQL', color: 'bg-blue-700', category: 'Backend Development' },
    
    // Tools & Technologies
    { name: 'Git', symbol: 'Git', color: 'bg-orange-500', category: 'Tools & Technologies' },
    { name: 'GitHub', symbol: 'GH', color: 'bg-gray-800', category: 'Tools & Technologies' },
    { name: 'VS Code', symbol: 'VS', color: 'bg-blue-600', category: 'Tools & Technologies' },
    { name: 'Postman', symbol: 'PM', color: 'bg-orange-600', category: 'Tools & Technologies' },
    { name: 'WebSocket', symbol: 'WS', color: 'bg-purple-500', category: 'Tools & Technologies' }
  ];

  return (
    <section id="skills" className="relative py-24 bg-gray-900 overflow-hidden">
      {/* City Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 400'%3E%3Cpath fill='%23333' d='M0 400h1200V200l-100-50v-50l-50-25v-25l-50-25V0h-50v25l-50 25v25l-50 25v50l-50 25v50l-50 25v25l-50 25v50l-50 25v50l-50 25v25l-50 25v50l-50 25v50l-50 25v25l-50 25v50l-50 25v50l-50 25v25l-50 25v50l-50 25v50l-50 25v25l-50 25v50l-50 25v50Z'/%3E%3C/svg%3E")`
        }}
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-800/30 to-gray-900/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-purple-900/10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <p className="text-gray-400 text-lg font-medium mb-4 tracking-wider uppercase">MY SKILLS</p>
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-8">
              Technologies<span className="text-cyan-400">.</span>
            </h2>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-8 md:gap-12 lg:gap-16 justify-center max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group relative flex flex-col items-center justify-center"
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                {/* Technology Badge */}
                <div className="relative">
                  {/* Main Circle */}
                  <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full ${skill.color} flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-all duration-500 ease-out shadow-2xl group-hover:shadow-3xl border-2 border-white/10 group-hover:border-white/30`}>
                    
                    {/* Inner Highlight */}
                    <div className="absolute inset-2 rounded-full bg-white/20 group-hover:bg-white/30 transition-all duration-300" />
                    
                    {/* Technology Symbol/Text */}
                    <span className="text-white font-bold text-sm md:text-base lg:text-lg relative z-10 group-hover:scale-110 transition-transform duration-300">
                      {skill.symbol}
                    </span>
                    
                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10 transition-all duration-500" />
                  </div>
                  
                  {/* Outer Glow */}
                  <div className={`absolute inset-0 rounded-full ${skill.color} blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 scale-150`} />
                </div>

                {/* Skill Name on Hover */}
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                  <div className="px-3 py-2 rounded-lg bg-gray-800/95 backdrop-blur-sm border border-gray-600/50 shadow-xl whitespace-nowrap">
                    <p className="text-sm font-semibold text-white">
                      {skill.name}
                    </p>
                  </div>
                  {/* Arrow pointing up */}
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800/95 rotate-45 border-l border-t border-gray-600/50" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;