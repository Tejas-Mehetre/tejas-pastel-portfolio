import { GraduationCap, Code, Target, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating innovative solutions and constantly learning new technologies
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Bio Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary">
                Computer Engineering Student & Full Stack Developer
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a final-year Computer Engineering student at Sandip Institute of Engineering 
                and Management, Nashik, with a strong CGPA of 8.64. My passion lies in building 
                scalable web applications and solving complex problems through code.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently working as an intern at Baseel Partners, where I develop responsive UIs 
                with Next.js and Tailwind CSS, and integrate APIs to create seamless user experiences. 
                I've participated in multiple hackathons and ideathons, always pushing myself to 
                learn and grow.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me solving algorithmic challenges on LeetCode 
                or exploring new technologies to stay ahead of the curve.
              </p>
            </div>

            {/* Highlights Cards */}
            <div className="space-y-6">
              <div className="gradient-card rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Education</h4>
                    <p className="text-sm text-muted-foreground">BE Computer Engineering</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Sandip Institute of Engineering and Management, Nashik
                </p>
                <p className="text-primary font-semibold">CGPA: 8.64/10</p>
              </div>

              <div className="gradient-card rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-secondary/10">
                    <Code className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Current Role</h4>
                    <p className="text-sm text-muted-foreground">Full Stack Developer Intern</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Baseel Partners (Oct 2024 – Present)
                </p>
                <p className="text-secondary font-semibold">Next.js • Tailwind CSS • API Integration</p>
              </div>

              <div className="gradient-card rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <Award className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Problem Solver</h4>
                    <p className="text-sm text-muted-foreground">Algorithmic Challenges</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  200+ problems solved on LeetCode
                </p>
                <p className="text-accent font-semibold">Ranked 12th in SunHack Hackathon</p>
              </div>
            </div>
          </div>

          {/* Key Strengths */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Problem Solving</h4>
              <p className="text-muted-foreground text-sm">
                Strong analytical skills with experience in data structures, algorithms, and optimization
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                <Code className="h-8 w-8 text-secondary" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Full Stack Development</h4>
              <p className="text-muted-foreground text-sm">
                Proficient in modern web technologies from frontend React to backend Node.js
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Innovation</h4>
              <p className="text-muted-foreground text-sm">
                Selected for IIM Bangalore Ideathon and multiple hackathon participations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;