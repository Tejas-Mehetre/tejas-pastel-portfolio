import { 
  Code2, 
  Database, 
  Wrench, 
  Globe,
  Braces,
  FileCode,
  Server,
  GitBranch,
  Github,
  MonitorSpeaker,
  Mail,
  Wifi,
  Triangle
} from 'lucide-react';

const Skills = () => {
  const skills = [
    // Programming Languages
    { name: 'JavaScript', icon: Braces, category: 'Programming Language' },
    { name: 'TypeScript', icon: FileCode, category: 'Programming Language' },
    { name: 'C++', icon: Code2, category: 'Programming Language' },
    { name: 'C#', icon: Code2, category: 'Programming Language' },
    { name: 'Java', icon: Code2, category: 'Programming Language' },
    
    // Frontend Development
    { name: 'React.js', icon: Triangle, category: 'Frontend Development' },
    { name: 'Next.js', icon: Triangle, category: 'Frontend Development' },
    { name: 'Tailwind CSS', icon: Globe, category: 'Frontend Development' },
    { name: 'HTML5', icon: Globe, category: 'Frontend Development' },
    { name: 'CSS3', icon: Globe, category: 'Frontend Development' },
    
    // Backend Development
    { name: 'Node.js', icon: Server, category: 'Backend Development' },
    { name: 'Express.js', icon: Server, category: 'Backend Development' },
    { name: '.NET (Dotnet)', icon: Server, category: 'Backend Development' },
    { name: 'MongoDB', icon: Database, category: 'Backend Development' },
    { name: 'MySQL', icon: Database, category: 'Backend Development' },
    
    // Tools & Technologies
    { name: 'Git', icon: GitBranch, category: 'Tools & Technologies' },
    { name: 'GitHub', icon: Github, category: 'Tools & Technologies' },
    { name: 'VS Code', icon: MonitorSpeaker, category: 'Tools & Technologies' },
    { name: 'Postman', icon: Mail, category: 'Tools & Technologies' },
    { name: 'WebSocket', icon: Wifi, category: 'Tools & Technologies' }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background via-muted/5 to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Technologies I <span className="gradient-text">Use</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Modern tools and technologies that power my development workflow
            </p>
          </div>

          {/* 3D Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group relative flex flex-col items-center"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* 3D Glass Circle */}
                <div className="relative">
                  {/* Main Circle */}
                  <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full bg-gradient-to-br from-card/80 via-card/40 to-transparent backdrop-blur-xl border border-border/50 flex items-center justify-center relative overflow-hidden group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 ease-out shadow-lg group-hover:shadow-2xl group-hover:shadow-primary/20">
                    
                    {/* Inner Glow */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Icon */}
                    <skill.icon className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-foreground/80 group-hover:text-foreground transition-colors duration-300 relative z-10" />
                    
                    {/* Animated Border */}
                    <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 opacity-0 group-hover:opacity-100 group-hover:animate-spin transition-opacity duration-500" style={{backgroundClip: 'padding-box'}}></div>
                  </div>
                  
                  {/* Outer Glow Effect */}
                  <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 scale-150"></div>
                </div>

                {/* Skill Name Tooltip */}
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="px-3 py-2 rounded-lg bg-card/90 backdrop-blur-sm border border-border/50 shadow-lg">
                    <p className="text-sm font-medium text-foreground whitespace-nowrap">
                      {skill.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {skill.category}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Quote */}
          <div className="text-center mt-20">
            <div className="max-w-2xl mx-auto">
              <p className="text-lg text-muted-foreground italic leading-relaxed">
                "Constantly exploring new technologies and pushing the boundaries of what's possible in modern development"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;