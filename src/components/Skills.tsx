import { Code, Database, Wrench, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'primary',
      skills: ['JavaScript', 'TypeScript', 'C++', 'C#', 'Java']
    },
    {
      title: 'Frontend Development',
      icon: Globe,
      color: 'secondary',
      skills: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3']
    },
    {
      title: 'Backend Development',
      icon: Database,
      color: 'accent',
      skills: ['Node.js', 'Express.js', '.NET (Dotnet)', 'MongoDB', 'MySQL', 'REST APIs']
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      color: 'muted',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'WebSocket']
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'secondary':
        return 'bg-secondary/10 text-secondary border-secondary/20';
      case 'accent':
        return 'bg-accent/10 text-accent border-accent/20';
      default:
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  const getIconColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-primary/10 text-primary';
      case 'secondary':
        return 'bg-secondary/10 text-secondary';
      case 'accent':
        return 'bg-accent/10 text-accent';
      default:
        return 'bg-muted/10 text-muted-foreground';
    }
  };

  return (
    <section id="skills" className="py-20 bg-muted/10">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit of modern technologies and programming languages 
              that I use to build scalable and efficient applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div key={category.title} className="gradient-card rounded-xl p-6 group">
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl ${getIconColorClasses(category.color)} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className={`skill-tag ${getColorClasses(category.color)}`}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Highlighted Technologies */}
          <div className="gradient-card rounded-xl p-8 text-center">
            <h3 className="text-2xl font-semibold mb-6">
              <span className="gradient-text">Specialized In</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="text-3xl font-bold text-primary">MERN</div>
                <div className="text-sm text-muted-foreground">
                  Full Stack Development with MongoDB, Express, React, and Node.js
                </div>
              </div>
              <div className="space-y-3">
                <div className="text-3xl font-bold text-secondary">Next.js</div>
                <div className="text-sm text-muted-foreground">
                  Modern React framework for production-ready applications
                </div>
              </div>
              <div className="space-y-3">
                <div className="text-3xl font-bold text-accent">.NET</div>
                <div className="text-sm text-muted-foreground">
                  For robust and scalable backend systems
                </div>
              </div>
            </div>
          </div>

          {/* Learning Mindset */}
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground italic">
              "Always learning, always growing. The technology landscape evolves rapidly, 
              and I'm committed to staying at the forefront of innovation."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;