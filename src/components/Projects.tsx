import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Brain, Code, Database, Smartphone } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Recommendation System",
      description: "Machine learning system that provides personalized recommendations using collaborative filtering and deep learning techniques.",
      technologies: ["Python", "TensorFlow", "Pandas", "Flask", "React"],
      category: "AI/ML",
      icon: Brain,
      github: "https://github.com/JHansiduYapa",
      demo: "#",
      featured: true
    },
    {
      title: "Real-time Data Analytics Dashboard",
      description: "Full-stack web application for visualizing real-time data analytics with interactive charts and monitoring capabilities.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "D3.js"],
      category: "Web Development",
      icon: Database,
      github: "https://github.com/JHansiduYapa",
      demo: "#",
      featured: true
    },
    {
      title: "Computer Vision Object Detection",
      description: "Deep learning model for real-time object detection and classification using YOLO architecture.",
      technologies: ["Python", "PyTorch", "OpenCV", "YOLO", "FastAPI"],
      category: "Computer Vision",
      icon: Brain,
      github: "https://github.com/JHansiduYapa",
      demo: "#",
      featured: false
    },
    {
      title: "Mobile Task Management App",
      description: "Cross-platform mobile application for task management with offline sync and real-time collaboration features.",
      technologies: ["React Native", "Firebase", "Redux", "AsyncStorage"],
      category: "Mobile Development",
      icon: Smartphone,
      github: "https://github.com/JHansiduYapa",
      demo: "#",
      featured: false
    },
    {
      title: "Blockchain Voting System",
      description: "Secure voting system built on blockchain technology ensuring transparency and immutability of votes.",
      technologies: ["Solidity", "Web3.js", "React", "Ethereum", "Truffle"],
      category: "Blockchain",
      icon: Code,
      github: "https://github.com/JHansiduYapa",
      demo: "#",
      featured: false
    },
    {
      title: "Natural Language Processing Chatbot",
      description: "Intelligent chatbot using NLP techniques for customer service automation with sentiment analysis.",
      technologies: ["Python", "NLTK", "spaCy", "Transformers", "Django"],
      category: "AI/ML",
      icon: Brain,
      github: "https://github.com/JHansiduYapa",
      demo: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "AI/ML": "bg-primary/20 text-primary",
      "Web Development": "bg-accent/20 text-accent",
      "Mobile Development": "bg-green-500/20 text-green-600",
      "Computer Vision": "bg-purple-500/20 text-purple-600",
      "Blockchain": "bg-orange-500/20 text-orange-600"
    };
    return colors[category] || "bg-muted text-muted-foreground";
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Here are some of my notable projects showcasing my skills in AI/ML, web development, and software engineering.
          </p>
          
          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="group border-none shadow-lg hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <project.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <Badge className={`mt-1 ${getCategoryColor(project.category)}`}>
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => window.open(project.demo, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">Other Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <Card key={index} className="group border-none shadow-md hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <project.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <Badge className={`mt-1 text-xs ${getCategoryColor(project.category)}`}>
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github className="h-3 w-3 mr-1" />
                        Code
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => window.open(project.demo, "_blank")}
                      >
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open("https://github.com/JHansiduYapa", "_blank")}
            >
              <Github className="h-5 w-5 mr-2" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
