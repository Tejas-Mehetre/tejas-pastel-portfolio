import {
  Briefcase,
  Calendar,
  MapPin,
  Trophy,
  GraduationCap,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Experience = () => {
  const achievements = [
    {
      title: "IIM Bangalore Ideathon",
      description:
        "Selected for prestigious ideathon for e-commerce innovation project",
      type: "Competition",
      icon: Trophy,
      link: "https://drive.google.com/file/d/1cxb0hcncxueuv3VRx1Fyqjq3e-CB9_1F/view",
    },
    {
      title: "Sunhack Hackathon",
      description:
        "Secured 8th position among 125 teams in a 36-hour coding competition focused on innovative tech solutions.",
      type: "Competition",
      icon: Trophy,
      link: "https://drive.google.com/file/d/1d9yj7VC6oubQlET1MOnIfZ7dhuiC7vQL/view",
    },

    {
      title: "LeetCode Problem Solver",
      description:
        "Solved 250+ coding problems using C++ with strong algorithmic skills",
      type: "Achievement",
      icon: Trophy,
      link: "https://leetcode.com/Tejas_Mehetre/",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-muted/10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Experience & <span className="gradient-text">Achievements</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My professional journey and notable accomplishments in technology
              and innovation
            </p>
          </div>

          {/* Current Experience */}
          <div className="gradient-card rounded-xl p-8 mb-12">
            <div className="flex items-start gap-6">
              <div className="p-4 rounded-xl bg-primary/10 flex-shrink-0">
                <Briefcase className="h-8 w-8 text-primary" />
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">
                      Full Stack Developer
                    </h3>
                    <p className="text-primary font-medium text-lg">
                      CentraLogic
                    </p>
                  </div>
                  <div className="text-muted-foreground">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="h-4 w-4" />
                      <span>Feb 2025 – Present</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>Remote</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Working on full-stack applications with modern technologies
                    including React.js, Node.js, .NET, and MongoDB. Leading
                    feature development, improving performance, and
                    collaborating across departments.
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-medium">Key Responsibilities:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        Leading feature development for full-stack applications
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        Improving application performance and user experience
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        Collaborating across departments on technical solutions
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        Building scalable backend systems with .NET and MongoDB
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {[
                      "React.js",
                      "Node.js",
                      ".NET",
                      "MongoDB",
                      "Full Stack Development",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Previous Internship */}
          <div className="gradient-card rounded-xl p-8 mb-12">
            <div className="flex items-start gap-6">
              <div className="p-4 rounded-xl bg-secondary/10 flex-shrink-0">
                <Briefcase className="h-8 w-8 text-secondary" />
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">
                      Next.js Intern
                    </h3>
                    <p className="text-secondary font-medium text-lg">
                      Baseel Partners
                    </p>
                  </div>
                  <div className="text-muted-foreground">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="h-4 w-4" />
                      <span>Oct 2024 – Feb 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>Remote</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Worked on building responsive user interfaces and
                    integrating APIs using modern web technologies. Collaborated
                    with the development team to deliver high-quality web
                    applications.
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-medium">Key Responsibilities:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                        Developed responsive UIs with Next.js and Tailwind CSS
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                        Integrated RESTful APIs and third-party services
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                        Collaborated with cross-functional teams using Git
                        workflows
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                        Optimized application performance and user experience
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {[
                      "Next.js",
                      "Tailwind CSS",
                      "API Integration",
                      "React.js",
                      "TypeScript",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-secondary/10 text-secondary border border-secondary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="gradient-card rounded-xl p-8 mb-12">
            <div className="flex items-start gap-6">
              <div className="p-4 rounded-xl bg-secondary/10 flex-shrink-0">
                <GraduationCap className="h-8 w-8 text-secondary" />
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">
                      Bachelor of Engineering
                    </h3>
                    <p className="text-secondary font-medium text-lg">
                      Computer Engineering
                    </p>
                  </div>
                  <div className="text-muted-foreground">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="h-4 w-4" />
                      <span>2021 – 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>Nashik, Maharashtra</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Sandip Institute of Engineering and Management, Nashik
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="px-4 py-2 rounded-lg bg-secondary/10 border border-secondary/20">
                      <span className="text-secondary font-semibold text-lg">
                        CGPA: 8.64/10
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">Relevant Coursework:</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Data Structures",
                        "Algorithms",
                        "Database Systems",
                        "Software Engineering",
                        "Web Development",
                        "Computer Networks",
                      ].map((course) => (
                        <span
                          key={course}
                          className="px-2 py-1 text-xs rounded-md bg-muted/50 text-muted-foreground border border-border/50"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-center">
              Notable <span className="gradient-text">Achievements</span>
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.title}
                  className="gradient-card rounded-xl p-6 text-center group"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className="h-8 w-8 text-accent" />
                  </div>

                  {/* <div className="achievement-badge mb-3">
                    <span>{achievement.type}</span>
                  </div> */}

                  <h4 className="font-semibold mb-3 text-lg">
                    {achievement.title}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {achievement.description}
                  </p>

                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="hover:bg-accent/10 text-accent"
                  >
                    <a
                      href={achievement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      View Certificate
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Education */}
          {/* <div className="mt-12 text-center">
            <div className="gradient-card rounded-xl p-6 max-w-md mx-auto">
              <h4 className="font-semibold mb-2">Higher Secondary Education</h4>
              <p className="text-muted-foreground mb-2">
                Shramik Junior College
              </p>
              <div className="text-primary font-semibold">84.17% (HSC)</div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Experience;
