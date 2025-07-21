import { Mail, Phone, MapPin, Github, Linkedin, Code2, Send, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Contact = () => {
  const [isEmailCopied, setIsEmailCopied] = useState(false);
  const [isPhoneCopied, setIsPhoneCopied] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'tejasmehetre7@gmail.com',
      href: 'mailto:tejasmehetre7@gmail.com',
      copyable: true,
      setCopied: setIsEmailCopied,
      isCopied: isEmailCopied
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8788982862',
      href: 'tel:+918788982862',
      copyable: true,
      setCopied: setIsPhoneCopied,
      isCopied: isPhoneCopied
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Nashik, Maharashtra, India',
      href: '#',
      copyable: false
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Tejas-Mehetre',
      color: 'hover:text-primary'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/tejas-mehetre-922385253/',
      color: 'hover:text-secondary'
    },
    {
      icon: Code2,
      label: 'LeetCode',
      href: 'https://leetcode.com/Tejas_Mehetre/',
      color: 'hover:text-accent'
    }
  ];

  const handleCopy = async (text: string, setCopied: (value: boolean) => void) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I'm always excited to discuss new opportunities, collaborations, or just chat about technology. 
              Let's connect and build something amazing together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-primary">
                  Let's Start a Conversation
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Whether you have a project in mind, want to discuss opportunities, 
                  or just want to say hello, I'd love to hear from you. I typically 
                  respond within 24 hours.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((contact) => (
                  <div key={contact.label} className="flex items-center gap-4 group">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <contact.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{contact.label}</p>
                      <div className="flex items-center gap-2">
                        {contact.href !== '#' ? (
                          <a
                            href={contact.href}
                            className="text-foreground hover:text-primary transition-colors font-medium"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <span className="text-foreground font-medium">{contact.value}</span>
                        )}
                        {contact.copyable && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleCopy(contact.value, contact.setCopied!)}
                            className="h-6 px-2 text-xs"
                          >
                            {contact.isCopied ? '✓ Copied' : 'Copy'}
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-border/50">
                <p className="text-sm text-muted-foreground mb-4">Follow me on social platforms</p>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-xl border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group ${social.color}`}
                      title={social.label}
                    >
                      <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-6">
              <div className="gradient-card rounded-xl p-8">
                <h4 className="text-xl font-semibold mb-4">Ready to collaborate?</h4>
                <p className="text-muted-foreground mb-6">
                  I'm currently open to new opportunities and exciting projects. 
                  Let's discuss how we can work together!
                </p>
                
                <div className="space-y-4">
                  <Button 
                    className="w-full bg-primary hover:bg-primary-glow glow-effect"
                    asChild
                  >
                    <a href="mailto:tejasmehetre7@gmail.com?subject=Let's collaborate!">
                      <Send className="mr-2 h-4 w-4" />
                      Send me an email
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-primary/30 hover:border-primary hover:bg-primary/10"
                    asChild
                  >
                    <a 
                      href="https://www.linkedin.com/in/tejas-mehetre-922385253/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="mr-2 h-4 w-4" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>
              </div>

              {/* Portfolio Links */}
              {/* <div className="gradient-card rounded-xl p-8">
                <h4 className="text-xl font-semibold mb-4">Explore my work</h4>
                <div className="space-y-3">
                  <a
                    href="https://github.com/Tejas-Mehetre/Resume-Sorting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/20 transition-colors group"
                  >
                    <span className="text-muted-foreground">Resume Sorting Project</span>
                    <ExternalLink className="h-4 w-4 group-hover:text-primary transition-colors" />
                  </a>
                  <a
                    href="https://github.com/Tejas-Mehetre/Chat-App"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/20 transition-colors group"
                  >
                    <span className="text-muted-foreground">Chat Application</span>
                    <ExternalLink className="h-4 w-4 group-hover:text-primary transition-colors" />
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1d9yj7VC6oubQlET1MOnIfZ7dhuiC7vQL/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/20 transition-colors group"
                  >
                    <span className="text-muted-foreground">Hackathon Certificate</span>
                    <ExternalLink className="h-4 w-4 group-hover:text-primary transition-colors" />
                  </a>
                  <a
                    href="https://drive.google.com/file/d/1cxb0hcncxueuv3VRx1Fyqjq3e-CB9_1F/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/20 transition-colors group"
                  >
                    <span className="text-muted-foreground">IIMB Certificate</span>
                    <ExternalLink className="h-4 w-4 group-hover:text-primary transition-colors" />
                  </a>
                </div>
              </div> */}

              {/* Availability Status */}
              {/* <div className="text-center p-6 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-sm font-medium text-primary">Available for new opportunities</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Open to internships, freelance projects, and full-time positions
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;