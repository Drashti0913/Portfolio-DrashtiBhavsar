"use client";

import {
  Linkedin,
  Github,
  Mail,
  Instagram,
  Twitter,
  GraduationCap,
} from "lucide-react";

export default function SocialMedia() {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/drashtibhavsar9",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/Drashti0913",
    },
    {
      name: "Google Scholar",
      icon: GraduationCap,
      href: "https://scholar.google.com/citations?user=qf2SqPsAAAAJ&hl=en&oi=ao",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/_drashti09", 
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:bhavsar.dr@northeastern.edu",
    },
    {
      name: "Twitter/X",
      icon: Twitter,
      href: "https://x.com/BhavsarDrashti2",
    },
  ];

  return (
    <section className="py-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8">
          {/* Left side - Name, Email, and Navigation */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'serif' }}>
              Drashti Bhavsar
            </h2>
            <a 
              href="mailto:drashtibhavsar09@gmail.com" 
              className="text-gray-300 hover:text-white transition-colors text-sm md:text-base block mb-4"
            >
              drashtibhavsar09@gmail.com
            </a>
            <div className="text-white text-sm md:text-base space-y-1">
              <div>
                <a href="#home" className="hover:text-gray-300 transition-colors">Home</a>
                <span className="mx-2">•</span>
                <a href="#projects" className="hover:text-gray-300 transition-colors">Projects</a>
                <span className="mx-2">•</span>
                <a href="#experience" className="hover:text-gray-300 transition-colors">Experience</a>
                <span className="mx-2">•</span>
                <a href="#achievements" className="hover:text-gray-300 transition-colors">Achievements</a>
                <span className="mx-2">•</span>
                <a href="#education" className="hover:text-gray-300 transition-colors">Education</a>
              </div>
             
            </div>
          </div>

          {/* Vertical divider line */}
          <div className="hidden lg:block w-px h-32 bg-white/30"></div>

          {/* Right side - Social Icons and Bio */}
          <div className="flex-1 flex flex-col items-center lg:items-end gap-4">
            <div className="bg-white rounded-full px-6 py-3 flex items-center gap-5">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="text-gray-900 hover:text-gray-600 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
            <p className="text-white text-sm md:text-base max-w-md text-center lg:text-right">
            AI/ML Researcher and Data Scientist focused on building intelligent systems, advancing machine learning research, and creating solutions that drive real-world impact.            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

