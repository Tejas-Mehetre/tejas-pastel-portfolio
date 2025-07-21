import { ExternalLink, Github, Brain, Shield, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'Resume Sorting (MERN + NLP)',
      description: 'An intelligent resume filtering system that matches resumes to job descriptions using natural language processing. Built with MERN stack and advanced NLP algorithms.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'NLP', 'Express.js', 'Python'],
      icon: Brain,
      color: 'primary',
      github: 'https://github.com/Tejas-Mehetre/Resume-Sorting',
      live: '#',
      features: ['Natural Language Processing', 'Resume Parsing', 'Job Matching Algorithm', 'MERN Stack']
    },
    {
      title: 'Notes Nexus (Freelance)',
      description: 'A secure notes-sharing platform with OAuth authentication and categorized access. Users can create, share, and organize notes with different permission levels.',
      technologies: ['Next.js', 'TypeScript', 'OAuth', 'MongoDB', 'Tailwind CSS'],
      icon: Shield,
      color: 'secondary',
      github: '#',
      live: '#',
      features: ['OAuth Authentication', 'Categorized Access', 'Real-time Sync', 'Secure Sharing']
    },
    {
      title: 'Real-time Chat Application',
      description: 'A modern chat application with WebSocket integration, featuring real-time messaging, user authentication, and an intuitive user interface.',
      technologies: ['React.js', 'Socket.io', 'Node.js', 'Express.js', 'MongoDB'],
      icon: MessageCircle,
      color: 'accent',
      github: 'https://github.com/Tejas-Mehetre/Chat-App',
      live: '#',
      features: ['Real-time Messaging', 'WebSocket Integration', 'User Authentication', 'Responsive Design']
    }
  ];

  const getColorClasses = (color: string) => {
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

  const getBorderColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'border-primary/20 hover:border-primary/40';
      case 'secondary':
        return 'border-secondary/20 hover:border-secondary/40';
      case 'accent':
        return 'border-accent/20 hover:border-accent/40';
      default:
        return 'border-border hover:border-border/60';
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my recent work, demonstrating problem-solving skills 
              and proficiency in modern web technologies
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`project-card ${getBorderColorClasses(project.color)}`}
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-3 rounded-xl ${getColorClasses(project.color)}`}>
                    <project.icon className="h-8 w-8" />
                  </div>
                  <div className="flex gap-2">
                    {project.github !== '#' && (
                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                        className="hover:bg-primary/10"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                    {project.live !== '#' && (
                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                        className="hover:bg-primary/10"
                      >
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-primary">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature) => (
                        <div key={feature} className="text-xs text-muted-foreground">
                          • {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-medium">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-md bg-muted/50 text-muted-foreground border border-border/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="gradient-card rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">
                Interested in my work?
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm always excited to discuss new projects and opportunities. 
                Let's connect and see how we can work together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  className="bg-primary hover:bg-primary-glow glow-effect"
                >
                  <a href="https://github.com/Tejas-Mehetre" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View All Projects
                  </a>
                </Button>
                <Button 
                  variant="outline"
                  asChild
                  className="border-primary/30 hover:border-primary hover:bg-primary/10"
                >
                  <a href="mailto:tejasmehetre7@gmail.com">
                    Contact Me
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;