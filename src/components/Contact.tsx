import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter,
  Download,
  ExternalLink
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email",
      value: "oladimejialabim@gmail.com",
      link: "mailto:oladimejialabim@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone",
      value: "+229 91 13 46 72",
      link: "tel:+22991134672"
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Location",
      value: "Tokan-Aidegnon Quarters, Abomey-Calavi, Benin",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/oladimejimalabi",
      color: "hover:text-blue-600"
    },
    {
      icon: <Github className="h-5 w-5" />,
      name: "GitHub",
      url: "https://github.com/oladimejiala",
      color: "hover:text-gray-800"
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      name: "Twitter",
      url: "https://twitter.com/amtechbenin",
      color: "hover:text-blue-400"
    },
    {
      icon: <ExternalLink className="h-5 w-5" />,
      name: "ORCID",
      url: "https://orcid.org/0000-0002-5290-4074",
      color: "hover:text-green-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="section-header">Get In Touch</h2>
            <p className="section-subheader">
              Ready to collaborate or discuss opportunities? I'd love to hear from you. 
              Let's connect and explore how we can work together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="slide-in-up">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Let's Start a Conversation
                </h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Whether you're looking for a data scientist, need machine learning solutions, 
                  or want to discuss research collaboration, I'm here to help bring your ideas to life.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{info.title}</h4>
                      {info.link !== "#" ? (
                        <a 
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-6">
                <h4 className="font-semibold text-foreground mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-background rounded-lg border border-border transition-all duration-200 ${social.color} hover:shadow-md hover:scale-105`}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Download CV */}
              <div className="pt-6">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary-dark w-full sm:w-auto"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download My CV
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="portfolio-card">
              <CardHeader>
                <CardTitle className="text-xl">Send me a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="text-sm font-medium text-foreground mb-2 block">
                        First Name *
                      </label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="text-sm font-medium text-foreground mb-2 block">
                        Last Name *
                      </label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john.doe@example.com"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="text-sm font-medium text-foreground mb-2 block">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      placeholder="Project collaboration opportunity"
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project or how we can work together..."
                      rows={6}
                      required
                      className="w-full resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary-dark"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;