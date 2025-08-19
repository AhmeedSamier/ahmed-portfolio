import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  ExternalLink,
  Code,
  Database,
  Globe,
  Shield,
  Award,
  User,
  Briefcase,
  GraduationCap
} from 'lucide-react'
import portfolioImage from './assets/portfolio_image.png'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const skills = [
    { name: 'React.js', icon: <Code className="w-5 h-5" /> },
    { name: 'JavaScript (ES6+)', icon: <Code className="w-5 h-5" /> },
    { name: 'TypeScript', icon: <Code className="w-5 h-5" /> },
    { name: 'HTML5 & CSS3', icon: <Globe className="w-5 h-5" /> },
    { name: 'Responsive Design', icon: <Globe className="w-5 h-5" /> },
    { name: 'API Integration', icon: <Database className="w-5 h-5" /> },
    { name: 'Git & GitHub', icon: <Github className="w-5 h-5" /> },
    { name: 'Information Security', icon: <Shield className="w-5 h-5" /> },
    { name: 'Performance Optimization', icon: <Code className="w-5 h-5" /> }
  ]

  const projects = [
    {
      title: 'Pure Fresh - Poultry Company Website',
      description: 'Developed a responsive web application for a poultry company using React.js with modern UI/UX design.',
      technologies: ['React.js', 'JavaScript', 'CSS3', 'Responsive Design'],
      type: 'Freelance Project',
      link: 'https://pure-fresh-poultry34.onrender.com/'
    },
    {
      title: 'Security Dashboard',
      description: 'Graduation project featuring a comprehensive security dashboard using React.js and Next.js to visualize penetration testing results with real-time charts and severity analysis.',
      technologies: ['React.js', 'Next.js', 'Flask API', 'Data Visualization'],
      type: 'Graduation Project',
      link: 'https://github.com/AhmeedSamier'
    },
    {
      title: 'E-commerce Web Application',
      description: 'Responsive e-commerce platform with product listing, shopping cart, user authentication, and payment integration.',
      technologies: ['React.js', 'JavaScript', 'Payment Integration', 'Authentication'],
      type: 'Personal Project',
      link: 'https://github.com/AhmeedSamier'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-gray-900">Ahmed Samir</div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-200 ${
                    activeSection === section
                      ? 'text-blue-600 font-medium'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Frontend Developer
                </h1>
                <h2 className="text-2xl lg:text-3xl text-blue-600 font-medium">
                  Ahmed Samir Mohamed
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Passionate about building scalable & performant web applications with React, JavaScript, and modern web technologies.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={() => scrollToSection('projects')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
                >
                  View My Work
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => scrollToSection('contact')}
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium transition-all duration-200"
                >
                  Get In Touch
                </Button>
              </div>

              <div className="flex space-x-6">
                <a 
                  href="https://github.com/AhmeedSamier" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/ahmed-samer-824045255/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <img 
                  src={portfolioImage} 
                  alt="Ahmed Samir" 
                  className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-2xl border-4 border-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Frontend Developer with a unique background in Information Security & Penetration Testing
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a passionate Frontend Developer specializing in building modern, high-performance web applications using React, JavaScript, and TypeScript. My unique background in Information Security gives me a comprehensive understanding of secure web development practices.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I focus on performance optimization, responsive design, and exceptional user experience. Currently seeking a React Frontend Developer role where I can contribute value while continuing to grow my expertise.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                <Card className="p-6 hover:shadow-lg transition-shadow duration-200">
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-3 mb-3">
                      <GraduationCap className="w-6 h-6 text-blue-600" />
                      <h3 className="font-semibold text-gray-900">Education</h3>
                    </div>
                    <p className="text-gray-600">Bachelor's in Information Security & Digital Forensics</p>
                    <p className="text-sm text-gray-500">Benha University</p>
                  </CardContent>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow duration-200">
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-3 mb-3">
                      <Award className="w-6 h-6 text-blue-600" />
                      <h3 className="font-semibold text-gray-900">Certification</h3>
                    </div>
                    <p className="text-gray-600">CCNA7: Enterprise Networking</p>
                    <p className="text-sm text-gray-500">Cisco Networking Academy</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Based in Cairo, Egypt</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Briefcase className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Available for Relocation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <User className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Freelance Experience</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">English Proficient</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive toolkit for building modern web applications
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-200 transform hover:scale-105 bg-white">
                <CardContent className="p-0">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      {skill.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{skill.name}</h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Additional Expertise</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['OOP', 'UI/UX Basics', 'Data Structures & Algorithms', 'Performance Optimization', 'RESTful APIs'].map((tech) => (
                <Badge key={tech} variant="secondary" className="px-4 py-2 text-sm bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors duration-200">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of my work in frontend development and web applications
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 h-full">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-blue-600 border-blue-600">
                          {project.type}
                        </Badge>
                        <ExternalLink className="w-5 h-5 text-gray-400" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Want to see more of my work?</p>
            <Button 
              onClick={() => window.open('https://github.com/AhmeedSamier', '_blank')}
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium transition-all duration-200"
            >
              <Github className="w-5 h-5 mr-2" />
              View GitHub Profile
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ready to bring your ideas to life with modern web technologies
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold">Get In Touch</h3>
              <p className="text-lg text-blue-100 leading-relaxed">
                I'm actively seeking new opportunities as a React Frontend Developer. Whether you have a project in mind or just want to connect, I'd love to hear from you.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:as299357@gmail.com" className="text-blue-100 hover:text-white transition-colors duration-200">
                      as299357@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+201272986201" className="text-blue-100 hover:text-white transition-colors duration-200">
                      +20 127 298 6201
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-blue-100">Cairo, Egypt</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Quick Connect</h3>
              <div className="space-y-4">
                <Button 
                  onClick={() => window.open('mailto:as299357@gmail.com', '_blank')}
                  className="w-full bg-white text-blue-600 hover:bg-gray-100 py-3 rounded-lg font-medium transition-all duration-200"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </Button>
                
                <Button 
                  onClick={() => window.open('https://www.linkedin.com/in/ahmed-samer-824045255/', '_blank')}
                  variant="outline"
                  className="w-full border-white text-white hover:bg-white/10 py-3 rounded-lg font-medium transition-all duration-200"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  Connect on LinkedIn
                </Button>
                
                <Button 
                  onClick={() => window.open('https://github.com/AhmeedSamier', '_blank')}
                  variant="outline"
                  className="w-full border-white text-white hover:bg-white/10 py-3 rounded-lg font-medium transition-all duration-200"
                >
                  <Github className="w-5 h-5 mr-2" />
                  View GitHub
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 Ahmed Samir Mohamed. Built with React.js and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

