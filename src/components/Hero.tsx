import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, ExternalLink } from "lucide-react";
import authorPhoto from "@/assets/author-photo.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${authorPhoto})`,
        }}
      ></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Content */}
          <div className="fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Data Scientist &amp; 
              <span className="block text-secondary">ML Engineer</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Solving everyday problems using Software Development, Data Science, 
              Machine Learning, and Artificial Intelligence. Based in Benin Republic.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button 
                size="lg" 
                className="btn-hero px-8 py-4 text-lg font-semibold"
              >
                <a href="#projects" className="flex items-center gap-2">
                  View My Work
                  <ExternalLink size={20} />
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="btn-outline-hero px-8 py-4 text-lg font-semibold"
              >
                <a href="#contact" className="flex items-center gap-2">
                  <Download size={20} />
                  Download CV
                </a>
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center justify-center gap-6 mb-12">
              <a
                href="https://www.linkedin.com/in/oladimejimalabi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-secondary transition-colors duration-200 p-2"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/oladimejiala"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-secondary transition-colors duration-200 p-2"
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#about" className="text-white hover:text-secondary transition-colors duration-200">
              <ArrowDown size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;