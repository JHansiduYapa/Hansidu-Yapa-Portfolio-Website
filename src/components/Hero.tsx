import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-foreground">Hi, I'm </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              J Hansidu Yapa
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
            Computer Engineering Student
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Passionate about AI/ML and building innovative solutions. 
            Final-year undergraduate with a focus on machine learning, 
            data science, and software development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              onClick={() => scrollToSection("projects")}
              className="shadow-glow"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open("https://github.com/JHansiduYapa", "_blank")}
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
          </div>
          
          <button
            onClick={() => scrollToSection("about")}
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowDown className="h-6 w-6 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;