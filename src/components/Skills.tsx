import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  Brain, 
  MessageSquare, 
  Search, 
  Lightbulb,
  BarChart3,
  Globe
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Tech Stack",
      description: "Programming languages and technologies I work with",
      skills: [
        "Python", "JavaScript", "HTML5", "CSS3", "SQL", 
        "Machine Learning", "Deep Learning", "SPSS", "Power BI",
        "ESRI ArcGIS", "AWS", "Git", "React", "TypeScript"
      ]
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: "Communication Skills",
      description: "Effective communication and presentation abilities",
      skills: [
        "Technical Writing", "Scientific Writing", "Presentation Skills",
        "Data Storytelling", "Client Communication", "Team Collaboration",
        "Documentation", "Public Speaking", "Cross-functional Communication"
      ]
    },
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "Research",
      description: "Research methodologies and analytical capabilities",
      skills: [
        "Data Analysis", "Statistical Analysis", "Research Design",
        "Literature Review", "Experimental Design", "Survey Design",
        "Epidemiological Research", "Parasitology Research", "Field Studies",
        "Quality Assurance", "Data Validation"
      ]
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      title: "Entrepreneurship",
      description: "Problem-solving and value creation expertise",
      skills: [
        "Problem Solving", "Value Creation", "Business Development",
        "Project Management", "Strategic Planning", "Innovation",
        "Client Relations", "Team Leadership", "Process Improvement",
        "Product Development"
      ]
    }
  ];

  const certifications = [
    { name: "AWS Certified", issuer: "Amazon Web Services" },
    { name: "LinkedIn Certified Data Scientist", issuer: "LinkedIn Learning" },
    { name: "Data Analyst Certification", issuer: "LinkedIn Learning" }
  ];

  const professionalAttributes = [
    "Autonomous Problem Solver",
    "Collaborative and Hardworking", 
    "Quick Learner",
    "Detail-Oriented and Results-Driven",
    "Excellent Organizational Skills",
    "Effective Communicator",
    "Hands-On and Practical Approach"
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="section-header">Skills & Expertise</h2>
            <p className="section-subheader">
              A comprehensive overview of my technical skills, research capabilities, 
              and professional competencies across multiple domains.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className={`portfolio-card stagger-animation h-full`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    {category.icon}
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="skill-badge text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Certifications */}
            <Card className="portfolio-card">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <BarChart3 className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">Certifications</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold text-foreground">{cert.name}</h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Professional Attributes */}
            <Card className="portfolio-card">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Globe className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl">Professional Attributes</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {professionalAttributes.map((attribute, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground">{attribute}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;