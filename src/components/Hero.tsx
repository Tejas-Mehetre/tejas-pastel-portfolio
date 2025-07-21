import { ArrowDown, Download, Github, Linkedin, Mail, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/public/Tejas_Resume.pdf';
    link.download = 'Tejas_Mehetre_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-0"
      style={{
        backgroundImage: `linear-gradient(rgba(34, 40, 49, 0.8), rgba(34, 40, 49, 0.8)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="section-fade section-visible">
          {/* Profile Introduction */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6 mt-4 md:mt-0">
              <Code2 size={16} />
              <span className="text-sm font-medium">Full Stack Developer</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="gradient-text">Tejas Mehetre</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Passionate full-stack developer focused on crafting innovative and impactful web solutions. Skilled at transforming complex ideas into elegant, scalable, and high-performance applications using modern technologies.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="group bg-primary hover:bg-primary-glow text-primary-foreground font-semibold px-8 glow-effect"
              onClick={scrollToAbout}
            >
              Explore My Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="font-semibold px-8 border-primary/30 hover:border-primary hover:bg-primary/10"
              onClick={downloadResume}
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/Tejas-Mehetre"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
            >
              <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.linkedin.com/in/tejas-mehetre-922385253/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
            >
              <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://leetcode.com/Tejas_Mehetre/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
            >
              <Code2 className="h-5 w-5 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="mailto:tejasmehetre7@gmail.com"
              className="p-3 rounded-full border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
            >
              <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;