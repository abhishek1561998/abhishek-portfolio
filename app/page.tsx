"use client";

import React, { useState, useEffect, createContext, useContext } from 'react';
import { 
  Search, 
  MapPin, 
  Briefcase, 
  Mail, 
  Github, 
  Linkedin, 
  Grid, 
  Code,
  Cpu,
  Globe,
  MoreVertical,
  ChevronDown,
  Database,
  Layers,
  ExternalLink,
  X,
  Rocket,
  Phone,
  Newspaper,
  Bot,
  ShoppingBag,
  Sun,
  Moon,
  ArrowUp
} from 'lucide-react';

// Theme Context
const ThemeContext = createContext({ isDark: true, toggleTheme: () => {} });

// --- Resume Data ---
const PROFILE = {
  name: "Abhishek Dandriyal",
  title: "Full Stack Developer — 6+ Years",
  location: "Bhopal, MP",
  phone: "9516018508",
  email: "abhishek1561998@gmail.com",
  about: "Experienced Software Development Engineer with 6+ years of hands-on expertise in the MERN Stack and MySQL. Skilled in architecting scalable full-stack applications using React.js, Next.js, and Node.js/Express, with strong experience in building REST APIs, optimising performance, and delivering maintainable code. Proficient in cloud deployment and infrastructure using AWS, containerization with Docker, and modern hosting platforms like Vercel.",
  stats: [
    { label: "Years Exp", value: "6+" },
    { label: "Projects", value: "10+" },
    { label: "Startups", value: "3" }
  ],
  socials: [
    { name: "GitHub", icon: Github, link: "https://github.com/abhishek1561998" },
    { name: "LinkedIn", icon: Linkedin, link: "https://www.linkedin.com/in/abhishek-dandriyal-a73085170/" },
    { name: "Portfolio", icon: Globe, link: "https://dev-ad.vercel.app/" }
  ]
};

const EXPERIENCE = [
  {
    company: "iifetech Pvt. Ltd.",
    role: "Senior Software Engineer",
    date: "April 2024 – Present",
    location: "Bhopal, MP",
    description: "Leading a team of developers on Broadengage project, providing technical guidance, code reviews, and task allocation. Architecting Micro-Frontend systems with Module Federation, implementing AWS CodeArtifact-based versioning, building common component libraries, and developing project management tools. Managing AWS infrastructure including EC2, S3, Lambda, EventBridge, and Elastic IP.",
    tags: ["Team Lead", "Micro-Frontend", "AWS", "CodeArtifact", "Module Federation"],
    website: "https://www.iifetech.com/"
  },
  {
    company: "Zappian Fintech India",
    role: "Front-end Developer",
    date: "April 2023 – April 2024",
    location: "Bhopal, MP",
    description: "Led end-to-end development of a fintech project as both lead developer and architect. Designed and implemented reusable component architecture, enabling consistent UI/UX across the organisation. Integrated RESTful APIs for seamless frontend-backend communication.",
    tags: ["Fintech", "Architecture", "React.js", "REST APIs"],
    website: "https://www.zappian.com/"
  },
  {
    company: "Appointy India",
    role: "Software Engineer",
    date: "April 2022 – April 2023",
    location: "Bhopal, MP",
    description: "Integrated RESTful APIs to improve system functionality, scalability, and performance. Implemented Micro-Frontend modules for modular development and independent deployments. Automated deployment workflows using CI/CD pipelines and Jenkins.",
    tags: ["Micro-Frontend", "CI/CD", "Jenkins", "REST APIs"],
    website: "https://www.appointy.com/"
  },
  {
    company: "AskGalore Digital India Pvt Ltd",
    role: "Front-end Developer",
    date: "April 2018 – April 2022",
    location: "Bhopal, MP",
    description: "Developed and maintained 10+ dynamic websites and applications using CMS and MERN stack. Enhanced user experience by designing responsive UIs. Used Figma, Adobe XD, and Photoshop to design user interfaces and create UI mockups.",
    tags: ["MERN", "CMS", "UI/UX", "Figma", "Adobe XD"],
    website: "https://askgalore.com/"
  }
];

const PROJECTS = [
  {
    title: "Broadengage",
    role: "Tech Lead",
    image: "bg-indigo-100",
    description: "Leading team and architecting enterprise-grade Micro-Frontend system with Module Federation. Implemented AWS CodeArtifact-based versioning for shared packages, built a reusable common component library, and developed a project management application similar to Jira for task tracking and team collaboration.",
    link: "https://demo.broadengage.com/",
    tech: "React.js, Micro-Frontend, AWS CodeArtifact, Module Federation, Node.js, MySQL"
  },
  {
    title: "RAI - Project Management Tool",
    role: "Tech Lead",
    image: "bg-cyan-100",
    description: "Built an innovative project management platform 'From Idea to Innovation' - a comprehensive tool for managing projects, tasks, sprints, and team collaboration. Features include Kanban boards, sprint planning, backlog management, and real-time team collaboration similar to Jira.",
    link: "https://rai.broadengage.com/",
    tech: "React.js, Node.js, MySQL, AWS, Micro-Frontend, Module Federation"
  },
  {
    title: "Jardin Botanica",
    role: "Full Stack Developer",
    image: "bg-green-100",
    description: "Built a scalable e-commerce platform using Medusa.js and Next.js with modular architecture, secure backend services, and SEO-friendly frontend. Integrated AWS, Contentful, PostgreSQL, and Vercel with advanced features like user activity tracking, lead insights, and automated order confirmation emails.",
    link: "https://jardin-botanica-uat.vercel.app/in",
    tech: "Next.js, Medusa.js, Node.js, Contentful, AWS, Postgres, Vercel, Resend"
  },
  {
    title: "Be Tracker App",
    role: "Full Stack Developer",
    image: "bg-blue-100",
    description: "Developed a complete lead management system with custom scoring, advanced tracking (UTM, direct visitors, drop-offs), and real-time dashboards using Next.js and MySQL. Built scalable serverless APIs and deployed on Vercel.",
    link: "https://reports.broadengage.com/",
    tech: "Next.js, MySQL, Vercel"
  },
  {
    title: "AI Agent Assistant - LLM",
    role: "Full Stack Developer",
    image: "bg-purple-100",
    description: "Developed an AI-powered assistant using Next.js with secure Clerk authentication, GraphQL APIs, and responsive Tailwind UI to automate tasks and enhance productivity. Built a scalable, modern full-stack solution with intelligent interactions.",
    link: "https://digitalaiindia.com/",
    tech: "Convex, Clerk, Next.js, Langchain, LangGraph, GraphQL"
  },
  {
    title: "Lead Distribution System",
    role: "Full Stack Developer",
    image: "bg-orange-100",
    description: "Developed an advanced lead management system with tracking for direct, UTM, and drop-off users, along with data visualisation for better insights. Enhanced system scalability and lead allocation workflows with efficient APIs.",
    link: "confidential",
    tech: "Node.js, Express.js, MongoDB, React.js, MUI, Redux"
  },
  {
    title: "CaseFox Legal Billing Software",
    role: "Full Stack Developer",
    image: "bg-yellow-100",
    description: "Contributed to key modules like Case Management, Client Management, Settings, Leads, and Accounts by building scalable APIs and responsive UIs using React, Material-UI, and GraphQL within a SaaS-based architecture.",
    link: "https://www.casefox.com/",
    tech: "React, GraphQL, Node.js, Material-UI, SaaS Stack"
  },
  {
    title: "EazyVC – Blockchain Voting",
    role: "Full Stack Developer",
    image: "bg-red-100",
    description: "Developed a secure blockchain-based online voting platform using Blockchain, Smart Contracts, React.js, and Node.js to ensure transparency, immutability, and automated vote validation with seamless voter authentication.",
    link: "https://eazyvc.com/",
    tech: "React, Node.js, Express, MUI, MongoDB, Blockchain"
  }
];

const SKILLS = [
  "JavaScript (ES6+)", "React.js", "Next.js", "Node.js", 
  "Express.js", "MongoDB", "MySQL", "PostgreSQL",
  "Material UI", "Tailwind CSS", "GraphQL", "REST APIs",
  "Micro-Frontend Architecture", "Module Federation",
  "AWS EC2", "AWS S3", "AWS Lambda", "AWS EventBridge", 
  "AWS Elastic IP", "AWS CodeArtifact", "Docker", "Vercel", 
  "CI/CD (GitHub Actions)", "Jenkins",
  "Medusa.js", "Contentful", "Convex", "Firebase",
  "Langchain", "LangGraph", "PHP", "Java", "Git/GitHub"
];

const STARTUPS = [
  {
    name: "Khabar Loktantra",
    tagline: "देश-दुनिया की हर बड़ी खबर सबसे पहले",
    description: "A comprehensive Hindi news platform delivering breaking news, political updates, and stories from across India and the world. Built with modern web technologies for fast, reliable news consumption.",
    icon: Newspaper,
    link: "https://khabarloktantra.com/",
    color: "bg-red-500",
    stats: { users: "10K+", articles: "5K+", states: "36" },
    tech: ["Next.js", "Node.js", "MongoDB", "AWS"]
  },
  {
    name: "Digital AI India",
    tagline: "Future of AI Technology",
    description: "Pioneering AI solutions company offering 3D AI Chatbots, AI Call Features, and intelligent automation for businesses. Transforming enterprises with cutting-edge artificial intelligence.",
    icon: Bot,
    link: "https://digitalaiindia.com/",
    color: "bg-purple-500",
    stats: { models: "10K+", clients: "500+", uptime: "99.9%" },
    tech: ["Next.js", "AI/ML", "LangChain", "OpenAI"]
  },
  {
    name: "StillNew",
    tagline: "Always in Style — Thrift Fashion",
    description: "E-commerce platform for premium thrift and vintage fashion. Offering quality second-hand clothing at affordable prices, promoting sustainable fashion choices.",
    icon: ShoppingBag,
    link: "https://stillnew.in/",
    color: "bg-emerald-500",
    stats: { products: "100+", orders: "500+", savings: "60%" },
    tech: ["Shopify", "E-commerce", "Payment Gateway"]
  }
];

// --- Components ---

const ScrollToTop = () => {
  const { isDark } = useContext(ThemeContext);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 p-3 rounded-full shadow-lg transition-all z-50 hover:scale-110 ${isDark ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-blue-600 text-white hover:bg-blue-500'}`}
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </button>
  );
};

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  return (
    <button 
      onClick={toggleTheme}
      className={`p-2 rounded-full transition-all ${isDark ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
};

const Navbar = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div className={`sticky top-0 z-50 flex items-center justify-between px-4 h-14 border-b sm:px-6 ${isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'}`}>
      <div className="flex items-center gap-4 w-full max-w-3xl">
        <span className={`text-2xl font-bold hidden sm:block ${isDark ? 'text-white' : 'text-gray-900'}`}>
          AD<span className="text-blue-500">.</span>
        </span>
        
        {/* Search Bar */}
        <div className={`flex-1 flex items-center rounded-full px-4 py-2 transition-all max-w-2xl ${isDark ? 'bg-gray-800 border border-gray-700 hover:border-gray-600' : 'bg-gray-100 border border-gray-200 hover:border-gray-300'}`}>
          <span className={`mr-3 hidden sm:block ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>search:</span>
          <input 
            type="text" 
            value={`${PROFILE.name} software engineer`} 
            readOnly 
            className={`flex-1 outline-none bg-transparent w-full ${isDark ? 'text-gray-200' : 'text-gray-800'}`}
          />
          <div className={`flex items-center gap-3 pl-3 ml-2 ${isDark ? 'border-l border-gray-700' : 'border-l border-gray-300'}`}>
             <Search size={20} className={`cursor-pointer ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'}`} />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-4 pl-4">
        <ThemeToggle />
        <div className={`h-9 w-9 rounded-full overflow-hidden border-2 cursor-pointer transition-all ${isDark ? 'border-gray-600 hover:border-blue-500' : 'border-gray-300 hover:border-blue-500'}`}>
          <img src="/profile.png" alt={PROFILE.name} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

const Tabs = ({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) => {
  const { isDark } = useContext(ThemeContext);
  const tabs = ["All", "Experience", "Projects", "Startups", "Skills"];
  
  return (
    <div className={`sticky top-14 z-40 border-b ${isDark ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-all ${
                activeTab === tab 
                  ? "border-blue-500 text-blue-500" 
                  : isDark 
                    ? "border-transparent text-gray-400 hover:text-gray-200" 
                    : "border-transparent text-gray-500 hover:text-gray-900"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const KnowledgePanel = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div className={`rounded-xl overflow-hidden mb-6 ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200 shadow-sm'}`}>
      {/* Profile Section - Compact */}
      <div className="p-4 text-center">
        <img 
          src="/profile.png" 
          alt={PROFILE.name}
          className={`w-20 h-20 rounded-full mx-auto mb-3 object-cover ${isDark ? 'border-3 border-gray-700' : 'border-3 border-gray-100'}`}
        />
        <h1 className={`text-lg font-semibold mb-0.5 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {PROFILE.name}
        </h1>
        <p className={`text-xs mb-3 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{PROFILE.title}</p>
        
        <div className="flex gap-2 mb-4">
          <a href={`mailto:${PROFILE.email}`} className="flex-1 bg-blue-600 text-white font-medium py-1.5 rounded-full text-sm hover:bg-blue-700 transition-all flex items-center justify-center gap-1.5">
             <Mail size={14} /> Contact
          </a>
          <a href={PROFILE.socials[2]?.link || "#"} target="_blank" rel="noopener noreferrer" className={`p-1.5 border rounded-full transition-colors ${isDark ? 'border-gray-600 text-gray-400 hover:text-white hover:border-gray-500' : 'border-gray-300 text-gray-500 hover:text-gray-900 hover:border-gray-400'}`}>
             <Globe size={16} />
          </a>
        </div>

        <p className={`text-xs leading-relaxed mb-3 text-left ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {PROFILE.about}
        </p>

        <div className={`border-t pt-3 grid grid-cols-3 gap-3 mb-3 ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
          {PROFILE.stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className={`font-bold text-base ${isDark ? 'text-white' : 'text-gray-900'}`}>{stat.value}</div>
              <div className={`text-[10px] ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="space-y-2 text-left">
          <div className={`flex items-center gap-2 text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            <MapPin size={14} className={isDark ? 'text-gray-500' : 'text-gray-400'} />
            <span>{PROFILE.location}</span>
          </div>
          <div className={`flex items-center gap-2 text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            <Briefcase size={14} className={isDark ? 'text-gray-500' : 'text-gray-400'} />
            <span>Works at <strong className={isDark ? 'text-white' : 'text-gray-900'}>iifetech Pvt. Ltd.</strong></span>
          </div>
          <a href={`tel:${PROFILE.phone}`} className={`flex items-center gap-2 text-xs transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
            <Phone size={14} className={isDark ? 'text-gray-500' : 'text-gray-400'} />
            <span>+91 {PROFILE.phone}</span>
          </a>
          <a href={`mailto:${PROFILE.email}`} className={`flex items-center gap-2 text-xs transition-colors ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
            <Mail size={14} className={isDark ? 'text-gray-500' : 'text-gray-400'} />
            <span>{PROFILE.email}</span>
          </a>
          
          <div className="pt-3 flex gap-2 overflow-x-auto pb-1">
            {PROFILE.socials.map((social) => (
              <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-0.5 min-w-[50px] cursor-pointer group">
                <div className={`h-8 w-8 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all ${isDark ? 'bg-gray-700 text-gray-400' : 'bg-gray-100 text-gray-500'}`}>
                  <social.icon size={16} />
                </div>
                <span className={`text-[10px] group-hover:text-blue-500 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{social.name}</span>
            </a>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

const SearchResult = ({ title, url, desc, date, tags, website }: { title: string; url: string; desc: string; date: string; tags?: string[]; website?: string }) => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div className={`relative group cursor-pointer p-4 rounded-lg transition-all duration-300 hover:translate-x-1 ${isDark ? 'hover:bg-gray-800/50' : 'hover:bg-gray-50'}`}>
      {/* Left accent line on hover */}
      <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-0 group-hover:h-3/4 transition-all duration-300 rounded-full ${isDark ? 'bg-blue-500' : 'bg-blue-600'}`} />
      
      <div className="flex items-center gap-2 mb-1">
        <div className={`h-7 w-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 group-hover:scale-110 ${isDark ? 'bg-gray-700 text-gray-300 group-hover:bg-blue-600 group-hover:text-white' : 'bg-gray-200 text-gray-600 group-hover:bg-blue-600 group-hover:text-white'}`}>
          {title.charAt(0)}
        </div>
        <div className="flex flex-col">
          <span className={`text-sm leading-tight ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{title}</span>
          <span className={`text-xs leading-tight ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{url}</span>
        </div>
        {website && (
          <a 
            href={website} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`ml-auto p-1.5 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 ${isDark ? 'text-gray-400 hover:text-blue-400 hover:bg-gray-700' : 'text-gray-500 hover:text-blue-600 hover:bg-gray-200'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={16} />
          </a>
        )}
      </div>
      <h3 className={`text-lg font-normal mb-1 transition-colors duration-300 ${isDark ? 'text-blue-400 group-hover:text-blue-300' : 'text-blue-600 group-hover:text-blue-700'}`}>
        {website ? (
          <a href={website} target="_blank" rel="noopener noreferrer" className="group-hover:underline">
            {title} - {desc.split('.')[0]}...
          </a>
        ) : (
          <span className="group-hover:underline">{title} - {desc.split('.')[0]}...</span>
        )}
      </h3>
      <div className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
        <span className={`text-xs mr-2 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{date} —</span>
        {desc}
      </div>
      {tags && (
        <div className="mt-2 flex gap-2 flex-wrap">
          {tags.map((tag: string) => (
            <span key={tag} className={`text-xs border rounded-full px-3 py-1 transition-all duration-300 hover:scale-105 ${isDark ? 'border-gray-600 text-gray-400 hover:border-blue-500 hover:text-blue-400' : 'border-gray-300 text-gray-500 hover:border-blue-500 hover:text-blue-600'}`}>
              {tag}
            </span>
          ))}
        </div>
      )}
      
      {/* Bottom separator */}
      <div className={`absolute bottom-0 left-4 right-4 h-px ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`} />
    </div>
  );
};

const ProjectCard = ({ project, onClick }: { project: typeof PROJECTS[0]; onClick: () => void }) => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div 
      className={`border rounded-xl overflow-hidden transition-all flex flex-col h-full cursor-pointer group ${isDark ? 'border-gray-700 bg-gray-800 hover:border-gray-600' : 'border-gray-200 bg-white hover:border-gray-300 shadow-sm'}`}
      onClick={onClick}
    >
      <div className={`h-32 ${project.image} w-full relative opacity-60 group-hover:opacity-80 transition-opacity`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <Layers size={32} className="text-gray-500 opacity-50" />
        </div>
        <div className={`absolute bottom-2 right-2 text-xs px-2 py-1 rounded ${isDark ? 'bg-gray-900/80 text-gray-300' : 'bg-white/90 text-gray-600'}`}>
          Project
        </div>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-4 h-4 rounded bg-blue-600 flex items-center justify-center">
            <Code size={10} className="text-white" />
          </div>
          <span className={`text-xs truncate ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{project.tech}</span>
        </div>
        <h3 className={`text-lg font-medium mb-2 group-hover:text-blue-500 ${isDark ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
        <p className={`text-sm mb-4 flex-1 line-clamp-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{project.description}</p>
        <div className={`flex items-center justify-between text-xs mt-auto pt-3 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
          <span className={isDark ? 'text-gray-500' : 'text-gray-400'}>{project.role}</span>
          <div className="flex items-center gap-2">
            {project.link === "confidential" && (
              <span className="text-yellow-500 text-xs">🔒</span>
            )}
            <span className="text-blue-500 font-medium">View Details →</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectModal = ({ project, onClose }: { project: typeof PROJECTS[0] | null; onClose: () => void }) => {
  if (!project) return null;
  
  return (
    <div 
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`h-48 ${project.image} w-full relative`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <Layers size={64} className="text-gray-400 opacity-50" />
          </div>
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 shadow-md transition-colors"
          >
            <X size={20} className="text-gray-600" />
          </button>
          <div className="absolute bottom-4 left-4 bg-black/60 text-white text-sm px-3 py-1 rounded-full">
            {project.role}
          </div>
        </div>
        
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">{project.title}</h2>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.split(', ').map((tech: string, idx: number) => (
              <span 
                key={idx} 
                className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-200"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Description</h3>
            <p className="text-gray-700 leading-relaxed">{project.description}</p>
          </div>
          
          <div className="flex gap-3 pt-4 border-t border-gray-100">
            {project.link === "confidential" ? (
              <button 
                className="flex-1 flex items-center justify-center gap-2 bg-orange-100 text-orange-600 py-3 px-4 rounded-lg font-medium cursor-not-allowed"
                disabled
              >
                🔒 Confidential Project
              </button>
            ) : project.link && project.link !== "#" ? (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors"
              >
                View Live Project <ExternalLink size={16} />
              </a>
            ) : (
              <button 
                className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-400 py-3 px-4 rounded-lg font-medium cursor-not-allowed"
                disabled
              >
                Live Link Coming Soon
              </button>
            )}
            <button 
              onClick={onClose}
              className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const StartupCard = ({ startup }: { startup: typeof STARTUPS[0] }) => {
  const { isDark } = useContext(ThemeContext);
  const IconComponent = startup.icon;
  return (
    <a 
      href={startup.link} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`border rounded-xl p-4 transition-all group flex gap-4 ${isDark ? 'border-gray-700 bg-gray-800 hover:border-blue-500/50 hover:bg-gray-800/80' : 'border-gray-200 bg-white hover:border-blue-400 hover:shadow-md'}`}
    >
      {/* Left: Icon */}
      <div className={`${startup.color} p-3 rounded-xl text-white shrink-0 h-fit`}>
        <IconComponent size={24} />
      </div>
      
      {/* Middle: Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h3 className={`font-semibold group-hover:text-blue-500 transition-colors truncate ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {startup.name}
          </h3>
          <ExternalLink size={14} className={`shrink-0 opacity-0 group-hover:opacity-100 transition-opacity ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
        </div>
        <p className={`text-xs mb-2 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{startup.tagline}</p>
        
        {/* Stats inline */}
        <div className="flex items-center gap-3 flex-wrap">
          {Object.entries(startup.stats).map(([key, value]) => (
            <div key={key} className="flex items-center gap-1">
              <span className={`text-sm font-semibold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>{String(value)}</span>
              <span className={`text-xs capitalize ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{key}</span>
            </div>
          ))}
        </div>
        
        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mt-2">
          {startup.tech.slice(0, 3).map((tech: string, idx: number) => (
            <span 
              key={idx}
              className={`text-xs px-2 py-0.5 rounded ${isDark ? 'bg-gray-700/50 text-gray-400' : 'bg-gray-100 text-gray-500'}`}
            >
              {tech}
            </span>
          ))}
          {startup.tech.length > 3 && (
            <span className={`text-xs px-2 py-0.5 rounded ${isDark ? 'bg-gray-700/50 text-gray-500' : 'bg-gray-100 text-gray-400'}`}>
              +{startup.tech.length - 3}
            </span>
          )}
        </div>
      </div>
    </a>
  );
};

const FAQ_DATA = [
  {
    question: "What is Abhishek's tech stack?",
    answer: "Abhishek specializes in the MERN Stack (MongoDB, Express.js, React.js, Node.js), Next.js, TypeScript, and MySQL. He's also proficient in GraphQL, Material UI, Tailwind CSS, and has extensive experience with AWS services (EC2, S3, Lambda, EventBridge, CodeArtifact) and Docker for containerization."
  },
  {
    question: "Has Abhishek worked with Micro-Frontend Architecture?",
    answer: "Yes! Abhishek has architected enterprise-grade Micro-Frontend systems using Module Federation at iifetech. He implemented AWS CodeArtifact-based versioning for shared packages and built reusable common component libraries that enable independent deployment of UI modules."
  },
  {
    question: "Does Abhishek have AWS cloud experience?",
    answer: "Absolutely. Abhishek has hands-on experience with AWS EC2, S3, Lambda, EventBridge, Elastic IP, and CodeArtifact. He manages cloud infrastructure for high availability and has implemented CI/CD pipelines using GitHub Actions for automated deployments."
  },
  {
    question: "Has Abhishek led development teams?",
    answer: "Yes, Abhishek currently leads a team of developers at iifetech as Senior Software Engineer. He provides technical guidance, conducts code reviews, handles task allocation, and manages end-to-end project execution including architecture design, development, and deployment."
  },
  {
    question: "Does Abhishek have entrepreneurial experience?",
    answer: "Yes! Abhishek has founded multiple startups including Khabar Loktantra (Hindi news platform), Digital AI India (AI solutions company), and StillNew (thrift fashion e-commerce). He combines technical expertise with business acumen to build and scale products."
  }
];

const PeopleAlsoAsk = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { isDark } = useContext(ThemeContext);

  return (
    <div className={`border rounded-lg overflow-hidden mb-8 ${isDark ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white shadow-sm'}`}>
      <div className={`p-4 border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
        <h3 className={`text-lg ${isDark ? 'text-white' : 'text-gray-900'}`}>People also ask</h3>
      </div>
      {FAQ_DATA.map((item, idx) => (
        <div key={idx} className={`border-b last:border-b-0 ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
          <div 
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            className={`px-4 py-3 flex justify-between items-center cursor-pointer group ${isDark ? 'hover:bg-gray-700/50' : 'hover:bg-gray-50'}`}
          >
            <span className={`text-sm font-medium ${isDark ? 'text-gray-300 group-hover:text-white' : 'text-gray-700 group-hover:text-gray-900'}`}>{item.question}</span>
            <ChevronDown 
              size={18} 
              className={`transition-transform duration-200 ${openIndex === idx ? 'rotate-180' : ''} ${isDark ? 'text-gray-400' : 'text-gray-500'}`} 
            />
          </div>
          {openIndex === idx && (
            <div className={`px-4 pb-4 pt-1 ${isDark ? 'bg-gray-700/30' : 'bg-gray-50'}`}>
              <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// Welcome Intro Component - Apple Style Premium
const WelcomeIntro = ({ onComplete }: { onComplete: () => void }) => {
  const [stage, setStage] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 200),
      setTimeout(() => setStage(2), 1000),
      setTimeout(() => setStage(3), 1800),
      setTimeout(() => setStage(4), 2600),
      setTimeout(() => setStage(5), 3400),
      setTimeout(() => setStage(6), 4200),
      setTimeout(() => onComplete(), 5000),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-[#000000] flex items-center justify-center overflow-hidden cursor-default select-none">
      
      {/* Dynamic gradient that follows mouse */}
      <div 
        className="absolute inset-0 transition-all duration-[2000ms] ease-out"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`,
        }}
      />

      {/* Animated mesh gradient background */}
      <div 
        className={`absolute inset-0 transition-opacity duration-[2000ms] ${stage >= 1 ? 'opacity-100' : 'opacity-0'}`}
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120, 119, 198, 0.15), transparent),
            radial-gradient(ellipse 60% 40% at 100% 100%, rgba(59, 130, 246, 0.1), transparent),
            radial-gradient(ellipse 60% 40% at 0% 100%, rgba(139, 92, 246, 0.1), transparent)
          `
        }}
      />

      {/* Subtle grid pattern */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ${stage >= 2 ? 'opacity-[0.03]' : 'opacity-0'}`}
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}
      />

      {/* Floating orbs */}
      <div 
        className={`absolute w-[500px] h-[500px] rounded-full transition-all duration-[3000ms] ${stage >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
          left: '10%',
          top: '20%',
          filter: 'blur(40px)',
          animation: stage >= 2 ? 'float 8s ease-in-out infinite' : 'none'
        }}
      />
      <div 
        className={`absolute w-[400px] h-[400px] rounded-full transition-all duration-[3000ms] delay-300 ${stage >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)',
          right: '15%',
          bottom: '20%',
          filter: 'blur(40px)',
          animation: stage >= 2 ? 'float 10s ease-in-out infinite reverse' : 'none'
        }}
      />

      {/* Main content container */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        
        {/* Top line decoration */}
        <div 
          className={`mx-auto mb-8 h-px w-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-1000 ${stage >= 1 ? 'w-32' : 'w-0'}`}
        />

        {/* Pre-title */}
        <div 
          className={`transition-all duration-1000 ${stage >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs tracking-[0.4em] uppercase text-white/40 font-medium">
            <span className={`inline-block w-2 h-2 rounded-full bg-emerald-500 ${stage >= 2 ? 'animate-pulse' : ''}`} />
            Available for opportunities
          </span>
        </div>

        {/* Main name - Letter by letter reveal */}
        <h1 className="mt-6 sm:mt-8 overflow-hidden">
          <span className="block text-6xl sm:text-8xl lg:text-9xl font-bold tracking-tight">
            {"Abhishek".split('').map((letter, i) => (
              <span
                key={i}
                className={`inline-block transition-all duration-700 ${stage >= 2 ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-[100px] blur-sm'}`}
                style={{ 
                  transitionDelay: `${i * 60}ms`,
                  background: 'linear-gradient(135deg, #ffffff 0%, #a5b4fc 50%, #6366f1 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                {letter}
              </span>
            ))}
          </span>
        </h1>

        {/* Subtitle with reveal */}
        <div 
          className={`mt-4 sm:mt-6 transition-all duration-1000 ${stage >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <p className="text-lg sm:text-xl lg:text-2xl font-light text-white/60 tracking-wide">
            Senior Full Stack Engineer
          </p>
        </div>

        {/* Expertise tags */}
        <div 
          className={`mt-8 flex flex-wrap justify-center gap-3 transition-all duration-1000 ${stage >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          {['React', 'Node.js', 'TypeScript', 'AWS'].map((tech, i) => (
            <span
              key={tech}
              className={`px-4 py-1.5 text-xs sm:text-sm font-medium rounded-full border border-white/10 text-white/50 backdrop-blur-sm transition-all duration-500 hover:border-white/30 hover:text-white/80`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Stats row */}
        <div 
          className={`mt-12 flex justify-center gap-12 sm:gap-16 transition-all duration-1000 ${stage >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          {[
            { value: '6+', label: 'Years' },
            { value: '10+', label: 'Projects' },
            { value: '3', label: 'Startups' }
          ].map((stat, i) => (
            <div key={stat.label} className="text-center" style={{ transitionDelay: `${i * 150}ms` }}>
              <div className="text-3xl sm:text-4xl font-bold text-white">{stat.value}</div>
              <div className="text-xs sm:text-sm text-white/40 mt-1 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Enter button */}
        <div 
          className={`mt-12 transition-all duration-1000 ${stage >= 6 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <button
            onClick={onComplete}
            className="group relative px-8 py-3 text-sm font-medium text-white/80 rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 hover:text-white overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Portfolio
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>

        {/* Bottom decorative line */}
        <div 
          className={`mx-auto mt-12 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-1000 ${stage >= 3 ? 'w-64 opacity-100' : 'w-0 opacity-0'}`}
        />
      </div>

      {/* Corner decorations */}
      <div className={`absolute top-8 left-8 text-[10px] text-white/20 font-mono tracking-wider transition-all duration-1000 ${stage >= 4 ? 'opacity-100' : 'opacity-0'}`}>
        PORTFOLIO / 2024
      </div>
      <div className={`absolute top-8 right-8 text-[10px] text-white/20 font-mono tracking-wider transition-all duration-1000 ${stage >= 4 ? 'opacity-100' : 'opacity-0'}`}>
        BHOPAL, INDIA
      </div>
      <div className={`absolute bottom-8 left-8 text-[10px] text-white/20 font-mono tracking-wider transition-all duration-1000 ${stage >= 4 ? 'opacity-100' : 'opacity-0'}`}>
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 animate-pulse" />
        OPEN TO WORK
      </div>
      <div className={`absolute bottom-8 right-8 text-[10px] text-white/20 font-mono tracking-wider transition-all duration-1000 ${stage >= 4 ? 'opacity-100' : 'opacity-0'}`}>
        SCROLL TO EXPLORE ↓
      </div>

      {/* CSS for float animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(5deg); }
        }
      `}</style>
    </div>
  );
};

// Main Page Component
export default function Home() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);
  const [isDark, setIsDark] = useState(true);
  const [showIntro, setShowIntro] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);

  const handleIntroComplete = () => {
    setShowIntro(false);
    setTimeout(() => setContentVisible(true), 100);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {/* Welcome Intro */}
      {showIntro && <WelcomeIntro onComplete={handleIntroComplete} />}
      
      <div className={`min-h-screen font-sans transition-all duration-700 ${isDark ? 'bg-gray-900 text-gray-200' : 'bg-gray-50 text-gray-900'} ${contentVisible ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar />
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <ScrollToTop />
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col-reverse lg:flex-row lg:justify-start gap-[8rem]">
            {/* Left Column (Search Results) */}
            <div className="flex-1 max-w-2xl">
              
              {/* "Did you mean" Context */}
              <div className="mb-6 text-sm">
                <span className={`italic ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Did you mean: </span>
                <a href={`mailto:${PROFILE.email}`} className={`font-medium italic hover:underline ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                  Hire this experienced Full Stack Engineer
                </a>
              </div>

              {activeTab === "All" && (
                <>
                  <div className="mb-8">
                      <h2 className={`text-2xl font-normal mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Work Experience</h2>
                      {EXPERIENCE.map((job, index) => (
                      <SearchResult 
                          key={index}
                          title={job.company} 
                          url={`${job.company.toLowerCase().replace(/\s+/g, '').replace(/\./g, '')}.com › careers › ${job.role.toLowerCase().replace(/\s+/g, '-')}`}
                          desc={job.description}
                          date={job.date}
                          tags={job.tags}
                          website={job.website}
                      />
                      ))}
                  </div>

                  <PeopleAlsoAsk />

                  <div>
                      <h2 className={`text-2xl font-normal mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Key Projects</h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {PROJECTS.slice(0,2).map((project, idx) => (
                              <ProjectCard key={idx} project={project} onClick={() => setSelectedProject(project)} />
                          ))}
                      </div>
                  </div>
                </>
              )}

              {activeTab === "Experience" && (
                 <div className="animate-fadeIn">
                    {EXPERIENCE.map((job, index) => (
                      <SearchResult 
                          key={index}
                          title={job.company} 
                          url={`${job.company.toLowerCase().replace(/\s+/g, '').replace(/\./g, '')}.com › careers › ${job.role.toLowerCase().replace(/\s+/g, '-')}`}
                          desc={job.description}
                          date={job.date}
                          tags={job.tags}
                          website={job.website}
                      />
                    ))}
                 </div>
              )}

              {activeTab === "Projects" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fadeIn">
                      {PROJECTS.map((project, idx) => (
                          <ProjectCard key={idx} project={project} onClick={() => setSelectedProject(project)} />
                      ))}
                  </div>
              )}

              {activeTab === "Startups" && (
                  <div className="animate-fadeIn">
                      <div className="flex items-center gap-3 mb-4">
                        <Rocket className="text-blue-500" size={22} />
                        <div>
                          <h2 className={`text-lg font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>My Ventures</h2>
                          <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>Products that solve real problems</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                          {STARTUPS.map((startup, idx) => (
                              <StartupCard key={idx} startup={startup} />
                          ))}
                      </div>
                  </div>
              )}

              {activeTab === "Skills" && (
                  <div className="animate-fadeIn">
                      <h2 className={`text-xl mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Technical Proficiency</h2>
                      <div className="flex flex-wrap gap-2">
                          {SKILLS.map(skill => (
                              <span key={skill} className={`px-4 py-2 rounded-md border transition-all cursor-default ${isDark ? 'bg-gray-800 text-gray-400 border-gray-700 hover:border-gray-600 hover:text-gray-200' : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:text-gray-900'}`}>
                                  {skill}
                              </span>
                          ))}
                      </div>
                  </div>
              )}

            </div>

            {/* Right Column (Knowledge Panel) */}
            <div className="lg:w-[340px] shrink-0">
              <div className="lg:sticky lg:top-28">
                <KnowledgePanel />
              </div>
            </div>

          </div>
        </main>

        <footer className={`text-sm py-4 mt-12 border-t ${isDark ? 'bg-gray-800 text-gray-500 border-gray-700' : 'bg-white text-gray-500 border-gray-200'}`}>
          <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
               <span className={isDark ? 'text-gray-400' : 'text-gray-500'}>© 2024 Abhishek Dandriyal</span>
            </div>
            <div className="flex gap-6">
              <a href={`mailto:${PROFILE.email}`} className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-gray-900'}`}>Contact</a>
              <a href={PROFILE.socials[0]?.link || "#"} target="_blank" rel="noopener noreferrer" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-gray-900'}`}>GitHub</a>
              <a href={PROFILE.socials[1]?.link || "#"} target="_blank" rel="noopener noreferrer" className={`transition-colors ${isDark ? 'hover:text-white' : 'hover:text-gray-900'}`}>LinkedIn</a>
            </div>
          </div>
        </footer>
      </div>
    </ThemeContext.Provider>
  );
}