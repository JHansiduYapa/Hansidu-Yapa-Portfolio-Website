import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Brain, Wrench, GitBranch, Smartphone } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "C", "SQL", "R"]
    },
    {
      title: "AI/ML & Data Science",
      icon: Brain,
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "OpenCV", "NLTK", "Keras"]
    },
    {
      title: "Web Development",
      icon: Code,
      skills: ["React", "Node.js", "Express.js", "Next.js", "Vue.js", "HTML/CSS", "Tailwind CSS", "Bootstrap"]
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "SQLite"]
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: ["Docker", "AWS", "Linux", "Nginx", "Postman", "Figma", "VS Code", "Jupyter"]
    },
    {
      title: "Version Control & Deployment",
      icon: GitBranch,
      skills: ["Git", "GitHub", "GitLab", "Vercel", "Netlify", "Heroku", "CI/CD"]
    }
  ];

  const achievements = [
    "Built 15+ AI/ML projects with practical applications",
    "Contributed to 3 open-source projects",
    "Completed multiple online certifications in AI/ML",
    "Led team projects in university courses",
    "Participated in hackathons and coding competitions"
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and the technologies I work with.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-glow transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Key Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-primary">Academic & Project Highlights</h4>
                  <ul className="space-y-3">
                    {achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-hero rounded-lg p-6">
                  <h4 className="text-lg font-semibold mb-4">Learning Goals</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Advanced deep learning architectures</li>
                    <li>• MLOps and model deployment at scale</li>
                    <li>• Cloud computing and distributed systems</li>
                    <li>• Blockchain and Web3 technologies</li>
                    <li>• Computer vision and robotics</li>
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

export default Skills;