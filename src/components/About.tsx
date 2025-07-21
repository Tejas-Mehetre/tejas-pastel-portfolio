import { GraduationCap, Code, Target, Award, Server, Brain } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating innovative solutions and constantly
              learning new technologies
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Bio Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary">
                Full Stack Developer
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a full-stack developer passionate about building scalable,
                high-performance web applications and solving real-world
                problems through clean, efficient code.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently working at <strong>CentraLogic</strong> as a Full
                Stack Developer, where I build end-to-end solutions using{" "}
                <strong>React.js</strong>, <strong>Node.js</strong>, and{" "}
                <strong>.NET</strong>. I've also successfully delivered several
                freelance projects, collaborating with clients to bring their
                ideas to life.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me solving algorithmic
                challenges on <strong>LeetCode</strong> (250+ problems solved)
                or exploring the latest tools and technologies to stay sharp and
                innovative in the ever-evolving tech world.
              </p>
            </div>

            {/* Highlights Cards */}
            <div className="space-y-6">
              

              <div className="gradient-card rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-secondary/10">
                    <Code className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Current Role</h4>
                    <p className="text-sm text-muted-foreground">
                      Full Stack Developer
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Centralogic (Feb 2025 – Present)
                </p>
                <p className="text-secondary font-semibold">
                  Reactjs • Nodejs • .Net
                </p>
              </div>

              <div className="gradient-card rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <Award className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Problem Solver</h4>
                    <p className="text-sm text-muted-foreground">
                      Algorithmic Challenges
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  250+ problems solved on LeetCode
                </p>
                {/* <p className="text-accent font-semibold">Ranked 12th in SunHack Hackathon</p> */}
              </div>
            </div>
          </div>

          {/* Key Strengths */}
          <div className="grid md:grid-cols-4 gap-8">
  {/* Frontend Developer */}
  <div className="text-center">
    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
      <Code className="h-8 w-8 text-primary" />
    </div>
    <h4 className="text-lg font-semibold mb-2">Frontend Developer</h4>
    <p className="text-muted-foreground text-sm">
      Built responsive applications using <strong>React.js</strong>, <strong>Next.js</strong>, and <strong>React Native</strong> for modern, scalable user interfaces.
    </p>
  </div>

  {/* Backend Developer */}
  <div className="text-center">
    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
      <Server className="h-8 w-8 text-secondary" />
    </div>
    <h4 className="text-lg font-semibold mb-2">Backend Developer</h4>
    <p className="text-muted-foreground text-sm">
      Developed robust backend services using <strong>Node.js</strong> and <strong>.NET</strong> for API design, authentication, and database integration.
    </p>
  </div>

  {/* AI/ML Explorer */}
  <div className="text-center">
    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
      <Brain className="h-8 w-8 text-accent" />
    </div>
    <h4 className="text-lg font-semibold mb-2">AI/ML Explorer</h4>
    <p className="text-muted-foreground text-sm">
      Actively learning and experimenting with AI/ML concepts and tools to build intelligent applications.
    </p>
  </div>

  {/* Problem Solving */}
  <div className="text-center">
    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
      <Target className="h-8 w-8 text-primary" />
    </div>
    <h4 className="text-lg font-semibold mb-2">Problem Solving</h4>
    <p className="text-muted-foreground text-sm">
      Strong foundation in algorithms and data structures. Solved <strong>250+ problems</strong> on LeetCode.
    </p>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default About;
