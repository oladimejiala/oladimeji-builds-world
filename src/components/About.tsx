import { Card, CardContent } from "@/components/ui/card";
import { User, Award, Target, TrendingUp } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <User className="h-8 w-8 text-primary" />,
      title: "5+ Years Experience",
      description: "Managing large-scale databases and developing ML/AI solutions"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "AWS & LinkedIn Certified",
      description: "Certified Data Scientist and Data Analyst with proven expertise"
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Research Focus",
      description: "Specialized in NTDs research and Schistosomiasis prediction models"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Founder of AMTECH-BJ",
      description: "Building innovative solutions since 2022"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="section-header">About Me</h2>
            <p className="section-subheader">
              Dedicated professional with expertise in data science, machine learning, 
              and software development, focused on solving real-world problems through technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio Content */}
            <div className="space-y-6 slide-in-up">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Professional Summary
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a dedicated AWS and LinkedIn certified Data Scientist and Data Analyst with over 
                five years of experience in managing large-scale databases, ensuring data quality, 
                and developing comprehensive reports and analyses.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My expertise spans SQL, Python, SPSS, and data integrity practices. I'm adept at 
                troubleshooting data environments, supporting data warehouse operations, and driving 
                ML/AI initiatives that deliver tangible business value.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                As the Founder of AMTECH-BJ, I've built machine learning models to provide insights 
                and recommendations for client businesses, integrated ML models into NTDs research, 
                and developed Schistosomiasis prediction models.
              </p>

              {/* Education */}
              <div className="mt-8">
                <h4 className="text-xl font-semibold text-foreground mb-4">Education</h4>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-foreground">Master of Science - Parasitology and Epidemiology</p>
                    <p className="text-muted-foreground">Federal University of Agriculture, Abeokuta (2012-2016)</p>
                    <p className="text-sm text-primary font-medium">Distinction Grade</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Bachelor of Science - Biological Sciences</p>
                    <p className="text-muted-foreground">Federal University of Agriculture, Abeokuta (2006-2010)</p>
                    <p className="text-sm text-primary font-medium">Second Class Upper Division</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid gap-6">
              {highlights.map((highlight, index) => (
                <Card 
                  key={index} 
                  className={`portfolio-card stagger-animation border-none shadow-lg hover:shadow-xl transition-all duration-300`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {highlight.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">
                          {highlight.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;