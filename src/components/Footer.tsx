import { Github, Linkedin, Twitter, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://www.linkedin.com/in/oladimejimalabi",
      label: "LinkedIn"
    },
    {
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/oladimejiala",
      label: "GitHub"
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      url: "https://twitter.com/amtechbenin",
      label: "Twitter"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      url: "mailto:oladimejialabim@gmail.com",
      label: "Email"
    },
    {
      icon: <ExternalLink className="h-5 w-5" />,
      url: "https://orcid.org/0000-0002-5290-4074",
      label: "ORCID"
    }
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Oladimeji Alabi</h3>
            <p className="text-primary-foreground/80 max-w-sm">
              Data Scientist & ML Engineer passionate about solving real-world problems 
              through innovative technology solutions.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-lg transition-colors duration-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>
                <a 
                  href="mailto:oladimejialabim@gmail.com"
                  className="hover:text-primary-foreground transition-colors"
                >
                  oladimejialabim@gmail.com
                </a>
              </p>
              <p>
                <a 
                  href="tel:+22991134672"
                  className="hover:text-primary-foreground transition-colors"
                >
                  +229 91 13 46 72
                </a>
              </p>
              <p>Abomey-Calavi, Benin Republic</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Oladimeji Alabi. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a 
                href="#" 
                className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;