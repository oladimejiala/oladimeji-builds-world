import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star } from "lucide-react";

const Projects = () => {
  const featuredProjects = [
    {
      title: "Schistosomiasis Prediction Model",
      description: "Advanced machine learning model for predicting Schistosomiasis outbreaks using epidemiological data and environmental factors. Integrated into NTDs research with high accuracy rates.",
      technologies: ["Python", "Machine Learning", "Scikit-Learn", "Jupyter Notebook", "Epidemiology"],
      githubUrl: "https://github.com/oladimejiala/schisto-project",
      liveUrl: "#",
      featured: true,
      category: "Machine Learning"
    },
    {
      title: "Malaria & Anemia Analysis",
      description: "Comprehensive training and analysis of Malaria and Anemia datasets using Scikit-Learn algorithms. Provides insights for public health decision-making.",
      technologies: ["Python", "Scikit-Learn", "Data Analysis", "Statistical Modeling", "Jupyter Notebook"],
      githubUrl: "https://github.com/oladimejiala/Training-Malaria-and-Aanemia-datasets-using-Scikit-Learn-Algorithm",
      liveUrl: "#",
      featured: true,
      category: "Data Science"
    },
    {
      title: "Schistosoma Ova Detection & Count (SODaC)",
      description: "Deep Learning model to screen urine and stool samples from schistosomiasis endemic communities to determine prevalence and intensity of Schistosoma species ova.",
      technologies: ["Deep Learning", "Computer Vision", "Python", "Medical Imaging", "Disease Detection"],
      githubUrl: "https://github.com/oladimejiala/Schistosoma-Ova-Detect-and-Count-SODaC-",
      liveUrl: "#",
      featured: true,
      category: "Machine Learning"
    },
    {
      title: "MaLLad Educational Game",
      description: "Interactive educational game for public sensitization about mosquitoes and malaria prevention. Gamified learning experience for health education.",
      technologies: ["JavaScript", "Game Development", "HTML5", "CSS3", "Educational Technology"],
      githubUrl: "https://github.com/oladimejiala/MaLLad-App",
      liveUrl: "#",
      featured: true,
      category: "Game Development"
    },
    {
      title: "Online Supplier Checker",
      description: "Tool designed to help users and customers find the right suppliers for products or services they require. Streamlines supplier discovery process.",
      technologies: ["HTML5", "JavaScript", "Web Development", "Database"],
      githubUrl: "https://github.com/oladimejiala/online_checker",
      liveUrl: "#",
      featured: false,
      category: "Web Application"
    },
    {
      title: "LnkZip QR Pro",
      description: "Advanced QR code generation and link shortening service with professional features for business use.",
      technologies: ["TypeScript", "React", "Node.js", "QR Generation"],
      githubUrl: "https://github.com/amta-repo/lnkzip-qr-pro",
      liveUrl: "#",
      featured: false,
      category: "Web Application"
    },
    {
      title: "LnkZip QR Go",
      description: "Lightweight QR code generator and URL shortener with modern interface and fast performance.",
      technologies: ["TypeScript", "Modern Web APIs", "Progressive Web App"],
      githubUrl: "https://github.com/amta-repo/lnkzip-qr-go",
      liveUrl: "#",
      featured: false,
      category: "Web Application"
    },
    {
      title: "AMTECH-BJ 2022 WordPress Site",
      description: "WordPress-based company website for AMTECH-BJ featuring content management and business showcase.",
      technologies: ["WordPress", "PHP", "MySQL", "Content Management"],
      githubUrl: "https://github.com/amta-repo/AMTECH-BJ-2022",
      liveUrl: "#",
      featured: false,
      category: "CMS Development"
    },
    {
      title: "React Project One",
      description: "Modern React application demonstrating component architecture and state management best practices.",
      technologies: ["React", "JavaScript", "Modern Web Development"],
      githubUrl: "https://github.com/amta-repo/react-project-one",
      liveUrl: "#",
      featured: false,
      category: "Web Development"
    },
    {
      title: "Watson Studio Model Management",
      description: "Feature Engineering and Model Deployments using Watson Studio Local for enterprise ML workflows.",
      technologies: ["Python", "Machine Learning", "IBM Watson", "Jupyter Notebook"],
      githubUrl: "https://github.com/amta-repo/model-mgmt-on-watson-studio-local",
      liveUrl: "#",
      featured: false,
      category: "Machine Learning"
    }
  ];

  const categories = ["All", "Machine Learning", "Data Science", "Web Development", "Game Development", "Web Application"];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="section-header">Featured Projects</h2>
            <p className="section-subheader">
              A showcase of my work in data science, machine learning, web development, 
              and innovative solutions that solve real-world problems.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Highlighted Work</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.filter(project => project.featured).map((project, index) => (
                <Card 
                  key={index} 
                  className={`portfolio-card group stagger-animation h-full`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <Badge variant="outline" className="mb-3 text-xs">
                          {project.category}
                        </Badge>
                      </div>
                      <Star className="h-5 w-5 text-secondary fill-current" />
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex gap-3 pt-2">
                        <Button variant="outline" size="sm" asChild>
                          <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <Github size={16} />
                            Code
                          </a>
                        </Button>
                        {project.liveUrl !== "#" && (
                          <Button variant="default" size="sm" asChild>
                            <a 
                              href={project.liveUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              <ExternalLink size={16} />
                              Live Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* All Projects */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Additional Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.filter(project => !project.featured).map((project, index) => (
                <Card 
                  key={index} 
                  className={`portfolio-card group stagger-animation h-full`}
                  style={{ animationDelay: `${(index + 4) * 0.1}s` }}
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <Badge variant="outline" className="w-fit text-xs">
                      {project.category}
                    </Badge>
                    <CardDescription className="text-sm">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      {/* Technologies - Limit to 3 for smaller cards */}
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" asChild className="flex-1">
                          <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2"
                          >
                            <Github size={14} />
                            Code
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* GitHub CTA */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Want to see more? Check out my complete portfolio on GitHub.
            </p>
            <Button variant="default" size="lg" asChild>
              <a 
                href="https://github.com/oladimejiala" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github size={20} />
                View All Projects
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;