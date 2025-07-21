import { Github, Linkedin, Mail, Code2, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/Tejas-Mehetre',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/tejas-mehetre-922385253/',
      label: 'LinkedIn'
    },
    {
      icon: Code2,
      href: 'https://leetcode.com/Tejas_Mehetre/',
      label: 'LeetCode'
    },
    {
      icon: Mail,
      href: 'mailto:tejasmehetre7@gmail.com',
      label: 'Email'
    }
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-muted/20 border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <button 
              onClick={scrollToTop}
              className="text-2xl font-bold gradient-text hover:scale-105 transition-transform"
            >
              Tejas Mehetre
            </button>
            <p className="text-muted-foreground max-w-xs">
              Computer Engineering student and Full Stack Developer passionate about 
              creating innovative web solutions.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-primary">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-muted-foreground hover:text-primary transition-colors w-fit"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-primary">Get In Touch</h4>
            <div className="space-y-2">
              <a
                href="mailto:tejasmehetre7@gmail.com"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                tejasmehetre7@gmail.com
              </a>
              <a
                href="tel:+918788982862"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                +91 8788982862
              </a>
              <p className="text-muted-foreground">
                Nashik, Maharashtra, India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Tejas Mehetre. All rights reserved.
            </p>
            
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <span>Built with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>using React, TypeScript & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;