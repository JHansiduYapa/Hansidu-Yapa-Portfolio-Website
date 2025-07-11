import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code, Zap, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI/ML Enthusiast",
      description: "Passionate about machine learning, deep learning, and artificial intelligence applications"
    },
    {
      icon: Code,
      title: "Full-Stack Developer",
      description: "Experienced in web development with modern frameworks and technologies"
    },
    {
      icon: Zap,
      title: "Problem Solver",
      description: "Love tackling complex challenges and building efficient, scalable solutions"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborative mindset with experience in agile development and project management"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            I'm a final-year Computer Engineering student with a passion for AI/ML and software development.
            I enjoy building projects that make a difference and continuously learning new technologies.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {highlights.map((item, index) => (
              <Card key={index} className="text-center border-none shadow-lg hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
                  <p className="text-muted-foreground mb-4">
                    Currently pursuing my Computer Engineering degree with a specialization in AI/ML. 
                    I have hands-on experience with various programming languages, frameworks, and tools.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    My projects range from machine learning models to full-stack web applications, 
                    always focusing on practical solutions to real-world problems.
                  </p>
                  <p className="text-muted-foreground">
                    I'm actively seeking opportunities to apply my skills in AI/ML, software development, 
                    and contribute to innovative projects that push the boundaries of technology.
                  </p>
                </div>
                <div className="bg-gradient-hero rounded-lg p-6">
                  <h4 className="text-lg font-semibold mb-4">Currently</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Final year Computer Engineering student</li>
                    <li>• Working on AI/ML research projects</li>
                    <li>• Building full-stack applications</li>
                    <li>• Contributing to open source</li>
                    <li>• Seeking internship opportunities</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;