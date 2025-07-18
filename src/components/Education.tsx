import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, Award, BookOpen, Code } from "lucide-react";

const Education = () => {
  const education = [
    {
      id: "degree",
      title: "Formal Education",
      icon: GraduationCap,
      items: [
        {
          degree: "Master of Science in Computer Forensics and Cybersecurity",
          school: "University of Greenwich",
          period: "2023",
          location: "London, UK",
          gpa: "Distinction",
          description: "Advanced studies in digital forensics, cybersecurity frameworks, and incident response methodologies. Specialized in malware analysis and threat intelligence.",
          coursework: ["Digital Forensics", "Malware Analysis", "Network Security", "Threat Intelligence", "Incident Response", "Cyber Law"]
        },
        {
          degree: "Bachelor of Technology in Information Technology",
          school: "University of Mumbai",
          period: "2014 - 2018",
          location: "Mumbai, India",
          gpa: "First Class",
          description: "Strong foundation in computer systems, networking, and information security. Final year project on 'Advanced Persistent Threat Detection Systems'.",
          coursework: ["Computer Networks", "Information Security", "Database Systems", "System Administration", "Cryptography"]
        }
      ]
    },
    {
      id: "certifications",
      title: "Professional Certifications",
      icon: Award,
      items: [
        {
          name: "GIAC Certified Forensic Examiner (GCFE)",
          issuer: "SANS Institute",
          issued: "2023",
          expires: "2027",
          credential: "GCFE-2023-789012",
          description: "Advanced certification in digital forensics and incident response, covering Windows forensics and timeline analysis.",
          skills: ["Digital Forensics", "Windows Analysis", "Timeline Forensics", "Evidence Processing"]
        },
        {
          name: "GIAC Certified Forensic Analyst (GCFA)",
          issuer: "SANS Institute",
          issued: "2022",
          expires: "2026",
          credential: "GCFA-2022-345678",
          description: "Expert-level certification in advanced digital forensics and incident response methodologies.",
          skills: ["Advanced Forensics", "Memory Analysis", "Network Forensics", "Threat Hunting"]
        },
        {
          name: "Offensive Security Certified Professional (OSCP)",
          issuer: "Offensive Security",
          issued: "In Progress",
          expires: "Lifetime",
          credential: "Expected 2024",
          description: "Hands-on penetration testing certification demonstrating practical security assessment skills.",
          skills: ["Penetration Testing", "Exploitation", "Post-Exploitation", "Report Writing"]
        }
      ]
    },
    {
      id: "courses",
      title: "Specialized Training",
      icon: BookOpen,
      items: [
        {
          name: "Advanced Persistent Threat (APT) Analysis",
          platform: "SANS Institute",
          completed: "2023",
          instructor: "SANS FOR508",
          description: "Comprehensive training on advanced digital forensics techniques for sophisticated attacks and APT campaigns.",
          topics: ["Timeline Analysis", "Memory Forensics", "Network Analysis", "Malware Reverse Engineering", "Threat Attribution"]
        },
        {
          name: "Cloud Security & Forensics",
          platform: "AWS Training",
          completed: "2023",
          instructor: "AWS Security Specialists",
          description: "Specialized course covering security architecture and forensics in multi-cloud environments.",
          topics: ["Cloud Incident Response", "AWS Security", "Azure Forensics", "GCP Security", "Container Security"]
        },
        {
          name: "Threat Intelligence & Hunting",
          platform: "MITRE ATT&CK",
          completed: "2022",
          instructor: "MITRE Corporation",
          description: "Advanced threat hunting methodologies using MITRE ATT&CK framework and threat intelligence platforms.",
          topics: ["ATT&CK Framework", "Threat Modeling", "IOC Analysis", "TTP Mapping", "Hunt Hypothesis"]
        }
      ]
    },
    {
      id: "skills",
      title: "Technical Expertise",
      icon: Code,
      items: [
        {
          category: "Digital Forensics & DFIR",
          skills: [
            { name: "Autopsy/Sleuth Kit", level: 95 },
            { name: "Volatility (Memory Analysis)", level: 90 },
            { name: "KAPE/Timeline Analysis", level: 95 },
            { name: "X-Ways Forensics", level: 85 },
            { name: "Mobile Forensics", level: 80 }
          ]
        },
        {
          category: "Security Tools & SIEM",
          skills: [
            { name: "Splunk", level: 95 },
            { name: "Elastic Stack (ELK)", level: 90 },
            { name: "QRadar", level: 85 },
            { name: "Chronicle/Sumo Logic", level: 80 },
            { name: "KQL (Kusto Query)", level: 90 }
          ]
        },
        {
          category: "Threat Hunting & Analysis",
          skills: [
            { name: "MITRE ATT&CK", level: 95 },
            { name: "YARA Rules", level: 90 },
            { name: "Sigma Rules", level: 85 },
            { name: "Threat Intelligence", level: 90 },
            { name: "Malware Analysis", level: 85 }
          ]
        }
      ]
    }
  ];

  return (
    <section id="education" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 glow-text">
            Education & Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development throughout my career.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="degree" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-card/50 border border-border">
              {education.map((section) => (
                <TabsTrigger 
                  key={section.id}
                  value={section.id}
                  className="flex items-center gap-2 data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
                >
                  <section.icon className="w-4 h-4" />
                  <span className="hidden sm:block">{section.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {education.map((section) => (
              <TabsContent key={section.id} value={section.id} className="mt-8">
                {section.id === "skills" ? (
                  <div className="grid md:grid-cols-3 gap-6">
                    {section.items.map((skillGroup, index) => (
                      <Card key={index} className="bg-gradient-card border-border/50 glow-purple">
                        <CardHeader>
                          <CardTitle className="text-xl">{skillGroup.category}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          {skillGroup.skills.map((skill, skillIndex) => (
                            <div key={skillIndex}>
                              <div className="flex justify-between mb-2">
                                <span className="font-medium">{skill.name}</span>
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                              </div>
                              <div className="w-full bg-secondary rounded-full h-2">
                                <div 
                                  className="bg-gradient-primary h-2 rounded-full glow-purple" 
                                  style={{ width: `${skill.level}%` }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="grid gap-6">
                    {section.items.map((item, index) => (
                      <Card key={index} className="bg-gradient-card border-border/50 glow-purple hover:glow-purple transition-smooth animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                        <CardContent className="p-8">
                          {section.id === "degree" ? (
                            <div>
                              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                                <div>
                                  <h3 className="text-2xl font-bold text-primary mb-2">{item.degree}</h3>
                                  <p className="text-lg font-medium mb-2">{item.school}</p>
                                  <div className="flex flex-wrap gap-4 text-muted-foreground mb-4">
                                    <span>{item.period}</span>
                                    <span>•</span>
                                    <span>{item.location}</span>
                                    <span>•</span>
                                    <span>GPA: {item.gpa}</span>
                                  </div>
                                </div>
                              </div>
                              <p className="text-muted-foreground mb-6">{item.description}</p>
                              <div>
                                <h4 className="font-semibold mb-3">Relevant Coursework:</h4>
                                <div className="flex flex-wrap gap-2">
                                  {item.coursework.map((course) => (
                                    <Badge key={course} variant="secondary" className="bg-primary/20 text-primary">
                                      {course}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ) : section.id === "certifications" ? (
                            <div>
                              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                                <div>
                                  <h3 className="text-2xl font-bold text-primary mb-2">{item.name}</h3>
                                  <p className="text-lg font-medium mb-2">{item.issuer}</p>
                                  <div className="flex flex-wrap gap-4 text-muted-foreground mb-4">
                                    <span>Issued: {item.issued}</span>
                                    <span>•</span>
                                    <span>Expires: {item.expires}</span>
                                    <span>•</span>
                                    <span>ID: {item.credential}</span>
                                  </div>
                                </div>
                              </div>
                              <p className="text-muted-foreground mb-6">{item.description}</p>
                              <div>
                                <h4 className="font-semibold mb-3">Key Skills:</h4>
                                <div className="flex flex-wrap gap-2">
                                  {item.skills.map((skill) => (
                                    <Badge key={skill} variant="secondary" className="bg-primary/20 text-primary">
                                      {skill}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div>
                              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                                <div>
                                  <h3 className="text-2xl font-bold text-primary mb-2">{item.name}</h3>
                                  <p className="text-lg font-medium mb-2">{item.platform}</p>
                                  <div className="flex flex-wrap gap-4 text-muted-foreground mb-4">
                                    <span>Completed: {item.completed}</span>
                                    <span>•</span>
                                    <span>Instructor: {item.instructor}</span>
                                  </div>
                                </div>
                              </div>
                              <p className="text-muted-foreground mb-6">{item.description}</p>
                              <div>
                                <h4 className="font-semibold mb-3">Topics Covered:</h4>
                                <div className="flex flex-wrap gap-2">
                                  {item.topics.map((topic) => (
                                    <Badge key={topic} variant="secondary" className="bg-primary/20 text-primary">
                                      {topic}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Education;
