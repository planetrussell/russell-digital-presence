import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail, Linkedin, Globe, Briefcase, User, Users, Settings } from "lucide-react";
const Index = () => {
  const skills = ["Digital Strategy", "Congressional Operations", "Technical Leadership", "Project Management", "Policy Implementation", "Team Management", "Government Relations", "Digital Communications", "Strategic Planning"];
  const experiences = [{
    title: "Digital Director",
    organization: "U.S. Congress",
    period: "Current",
    description: "Leading digital initiatives and technical operations for a senior Congressional member, managing strategic technology implementations and digital communications."
  }, {
    title: "Technical Leadership",
    organization: "Various Organizations",
    period: "2018-Present",
    description: "Providing technical expertise and leadership across multiple projects, with focus on digital transformation and operational efficiency."
  }];
  return <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">Michael J. Russell</h1>
                <p className="text-sm text-slate-600">Digital Director, U.S. Congress</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#experience" className="text-slate-600 hover:text-blue-600 transition-colors">Experience</a>
              <a href="#skills" className="text-slate-600 hover:text-blue-600 transition-colors">Skills</a>
              <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl">
              <User className="w-16 h-16 text-white" />
            </div>
            <h1 className="font-bold text-slate-900 mb-4 animate-fade-in text-3xl">
              Michael J. Russell
            </h1>
            <p className="font-semibold mb-6 text-blue-500 text-xl">
              Digital Director | Technical Leader | Congressional Operations
            </p>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed text-left">
              A seasoned technical professional with broad, diverse skills currently serving as Digital Director 
              for a senior member of the U.S. Congress. Combining deep technical expertise with strategic 
              leadership to drive digital transformation in government operations.
            </p>
          </div>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Mail className="w-4 h-4 mr-2" />
              Get in Touch
            </Button>
            <Button variant="outline" size="lg">
              <Briefcase className="w-4 h-4 mr-2" />
              View Experience
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">About</h2>
            <p className="text-lg text-slate-600">Professional background and expertise</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-blue-900">Government Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-center">
                  Currently serving as Digital Director for a senior Congressional member, 
                  leading strategic technology initiatives in government operations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Settings className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-blue-900">Technical Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-center">
                  Broad technical skills spanning digital strategy, systems implementation, 
                  and technology leadership across diverse organizational contexts.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-blue-900">Strategic Leadership</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-center">
                  Proven ability to lead teams and drive organizational change through 
                  strategic planning and effective project management.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Professional Experience</h2>
            <p className="text-lg text-slate-600">Career highlights and key positions</p>
          </div>

          <div className="space-y-8">
            {experiences.map((experience, index) => <Card key={index} className="border-l-4 border-l-blue-600 shadow-lg">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-slate-900">{experience.title}</CardTitle>
                      <p className="text-blue-600 font-semibold">{experience.organization}</p>
                    </div>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      {experience.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{experience.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Core Competencies</h2>
            <p className="text-lg text-slate-600">Technical and leadership skills</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => <Badge key={index} variant="secondary" className="px-4 py-2 text-sm bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors cursor-default">
                {skill}
              </Badge>)}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-slate-600 mb-8">
            Available for professional consultations and strategic partnerships
          </p>

          <Card className="max-w-md mx-auto shadow-lg">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <Button className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Contact
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn Profile
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  <Globe className="w-4 h-4 mr-2" />
                  Professional Portfolio
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <Separator className="mb-6 bg-slate-700" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-slate-300">© 2024 Michael J. Russell. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <Mail className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
              <Globe className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;