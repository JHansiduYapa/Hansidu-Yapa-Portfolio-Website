import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const navigation = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-primary/10 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            JH.
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors font-medium relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex items-center space-x-2">
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
              onClick={() => window.open("https://linkedin.com/in/yourprofile", "_blank")}
              className="hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
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

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-sm border-b border-primary/10">
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
                >
                  {item.name}
                </button>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t border-primary/10">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => window.open("https://github.com/JHansiduYapa", "_blank")}
                >
                  <Github className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => window.open("https://linkedin.com/in/yourprofile", "_blank")}
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => scrollToSection("contact")}
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;