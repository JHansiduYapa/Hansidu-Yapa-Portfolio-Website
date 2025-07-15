import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Mail, Download } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="network-bg"></div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left space-y-6">
            <div className="space-y-2">
              <p className="text-lg text-muted-foreground tracking-wide">Hello, I'm</p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                <span className="text-foreground">J Hansidu</span>
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Yapa
                </span>
              </h1>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-semibold text-primary">
                Computer Engineering Student
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Passionate about <span className="text-primary font-medium">AI/ML</span> and building innovative solutions. 
                Final-year undergraduate with expertise in machine learning, 
                data science, and full-stack development.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection("projects")}
                className="shadow-glow hover:shadow-lg transition-all duration-300"
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open("https://github.com/JHansiduYapa", "_blank")}
                className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-6">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open("https://github.com/JHansiduYapa", "_blank")}
                className="hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => scrollToSection("contact")}
                className="hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right Avatar/Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-primary opacity-20 animate-pulse"></div>
              <div className="absolute inset-4 rounded-full bg-card border-2 border-primary/20 flex items-center justify-center">
                <div className="text-6xl md:text-7xl font-bold text-primary/60">JH</div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center animate-bounce">
                <Github className="h-8 w-8 text-primary" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center animate-bounce" style={{animationDelay: '0.5s'}}>
                <Mail className="h-6 w-6 text-primary" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => scrollToSection("about")}
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors group"
          >
            <ArrowDown className="h-6 w-6 animate-bounce group-hover:animate-pulse" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;