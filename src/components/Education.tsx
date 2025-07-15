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
          period: "2022-2023",
          location: "London, UK",
          gpa: "Distinction",
          description: "Advanced studies in digital forensics, cybersecurity frameworks, and incident response methodologies. Specialized in malware analysis and threat intelligence.",
          coursework: ["Digital Forensics", "Malware Analysis", "Network Security", "Threat Intelligence", "Incident Response", "Cyber Law"]
        },
        {
          degree: "Bachelor of Technology in Information Technology",
          school: "University of Mumbai",
          period: "2014 - 2018",
          location: "India",
          gpa: "First Class",
          description: "Strong foundation in computer systems, networking, and information security. Final year project on 'Advanced Persistent Threat Detection Systems'.",
          coursework: ["Computer Networks", "Information Security", "Database Systems", "System Administration", "Cryptography"]
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
      id: " Core Competency Areas",
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
          description: "Expert- certification in advanced digital forensics and incident response methodologies.",
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
id: "skills",
title: "Technical Expertise",
icon: Code,
items: [
  {
    category: "🔍 Threat Hunting & Detection Engineering",
    skills: [
      { name: "Advanced TTP and hypothesis-driven threat hunting" },
      { name: "Custom detection rule development (SIEM, EDR, XDR)" },
      { name: "MITRE ATT&CK alignment and use-case mapping" },
      { name: "Behavioural and anomaly-based detection" },
      { name: "Query development using KQL, Splunk SPL, and SQL" },
      { name: "Dashboard creation and threat visualisation" },
      { name: "Detection gap analysis via purple teaming exercises" }
    ]
  },
  {
    category: "🧪 Digital Forensics & Incident Response (DFIR)",
    skills: [
      { name: "Disk, memory, network, and cloud forensics (AWS, Azure, GCP)" },
      { name: "Root cause analysis and incident triage" },
      { name: "Email and phishing analysis using OSINT and threat platforms" },
      { name: "Incident containment, eradication, and recovery procedures" },
      { name: "Evidence handling, forensic tooling, and chain of custody" },
      { name: "Automated forensic data acquisition and triage scripting" },
      { name: "Deception-based detection to reduce dwell time" }
    ]
  },
  {
    category: "☁️ Cloud & Endpoint Security",
    skills: [
      { name: "Endpoint threat detection using Trellix, Carbon Black, Defender XDR, etc." },
      { name: "Host-based and behavioural intrusion analysis" },
      { name: "Cloud-native security tooling (AWS GuardDuty, Azure Sentinel, GCP SCC)" },
      { name: "Multi-cloud detection and response across SaaS environments" },
      { name: "Unified DDoS incident response and mitigation framework" },
      { name: "Cloud log analysis and cross-platform threat correlation" }
    ]
  },
  {
    category: "⚙️ Automation, Scripting & Threat Intelligence",
    skills: [
      { name: "Python, PowerShell, and JavaScript scripting for security automation" },
      { name: "Custom SOAR playbooks for threat response orchestration" },
      { name: "Automated ingestion and enrichment of threat intel feeds" },
      { name: "OSINT investigation and threat actor profiling" },
      { name: "Adversary simulation and malware behaviour research" },
      { name: "Integration of CTI into SOC workflows and detections" },
      { name: "Tool development for automated triage and IOC processing" }
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
      <div className="grid md:grid-cols-2 gap-6">
        {section.items.map((skillGroup, index) => (
          <Card key={index} className="bg-gradient-card border-border/50 glow-purple">
            <CardHeader>
              <CardTitle className="text-xl">{skillGroup.category}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {skillGroup.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-sm">{skill.name}</span>
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
