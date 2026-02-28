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
  ArrowUp,
  HelpCircle,
  Sparkles
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
    { label: "Projects", value: "12+" },
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
    title: "HireLoop",
    role: "Tech Lead",
    image: "bg-teal-100",
    description: "Led development of a comprehensive recruitment and hiring management platform. Streamlined the entire hiring process from job posting to candidate onboarding with features like applicant tracking, interview scheduling, candidate pipeline management, and hiring analytics.",
    link: "http://hireloop.iifetech.com/",
    tech: "React.js, Node.js, MySQL, AWS, REST APIs"
  },
  {
    title: "iife Tech Assessments",
    role: "Tech Lead",
    image: "bg-pink-100",
    description: "Built a comprehensive assessment platform for creating, managing, and tracking student assessments. Features include easy assignment creation with customizable settings, student management, detailed analytics & reports, secure authentication, and time-based submission tracking.",
    link: "https://assessment.iifetech.com/",
    tech: "React.js, Node.js, MySQL, AWS, REST APIs"
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
    image: "bg-sky-100",
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
    color: "bg-cyan-400",
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
    <div className="fixed bottom-6 right-6 z-50">
      {/* Glow effect */}
      {isDark && <div className="absolute inset-0 bg-[#6967FB] rounded-2xl blur-xl opacity-40 scale-110" />}
      
      <button
        onClick={scrollToTop}
        className={`relative p-4 rounded-2xl shadow-lg transition-all hover:scale-110 group ${isDark ? 'bg-[#6967FB] text-white shadow-[#6967FB]/30 hover:shadow-[#6967FB]/50' : 'bg-blue-600 text-white hover:bg-blue-500'}`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
        
        {/* Animated ring */}
        {isDark && (
          <span className="absolute inset-0 rounded-2xl border-2 border-[#6967FB] animate-ping opacity-30" />
        )}
      </button>
    </div>
  );
};

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  return (
    <button 
      onClick={toggleTheme}
      className={`p-2.5 rounded-full transition-all border ${isDark ? 'bg-white/5 border-white/10 text-yellow-400 hover:bg-white/10 hover:border-white/20' : 'bg-gray-100 border-gray-200 text-gray-700 hover:bg-gray-200'}`}
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
};

const Navbar = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div className={`sticky top-0 z-50 flex items-center justify-between px-4 h-16 border-b sm:px-6 backdrop-blur-xl ${isDark ? 'bg-[#0E1A1F]/90 border-white/10' : 'bg-white/80 border-gray-200'}`}>
      {/* Subtle glow line at bottom */}
      {isDark && <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6967FB]/30 to-transparent" />}
      
      <div className="flex items-center gap-4 w-full max-w-3xl">
        <span className={`text-2xl font-bold hidden sm:block relative ${isDark ? 'text-white' : 'text-gray-900'}`}>
          <span className={isDark ? 'neon-text' : ''} style={{ background: 'linear-gradient(135deg, #ffffff 0%, #6967FB 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>AD</span>
          <span className={isDark ? 'neon-text-accent' : ''} style={{ color: '#C8F904' }}>.</span>
        </span>
        
        {/* Search Bar with enhanced styling */}
        <div className={`relative flex-1 flex items-center rounded-2xl px-5 py-3 transition-all max-w-2xl group ${isDark ? 'bg-white/5 border border-white/10 hover:border-[#6967FB]/50 hover:bg-white/10' : 'bg-gray-100 border border-gray-200 hover:border-gray-300'}`}>
          {/* Hover glow effect */}
          {isDark && <div className="absolute inset-0 rounded-2xl bg-[#6967FB]/5 opacity-0 group-hover:opacity-100 transition-opacity" />}
          
          <span className={`relative mr-3 hidden sm:block text-sm font-medium ${isDark ? 'text-white/40' : 'text-gray-400'}`}>search:</span>
          <input 
            type="text" 
            value={`${PROFILE.name} software engineer`} 
            readOnly 
            className={`relative flex-1 outline-none bg-transparent w-full ${isDark ? 'text-white/80' : 'text-gray-800'}`}
          />
          <div className={`relative flex items-center gap-3 pl-3 ml-2 ${isDark ? 'border-l border-white/10' : 'border-l border-gray-300'}`}>
             <Search size={20} className={`cursor-pointer transition-all ${isDark ? 'text-white/40 hover:text-[#C8F904] hover:scale-110' : 'text-gray-500 hover:text-gray-900'}`} />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 sm:gap-4 pl-4">
        <ThemeToggle />
        <div className="relative group">
          {/* Glow ring on hover */}
          {isDark && <div className="absolute inset-0 rounded-full bg-[#6967FB] blur-md opacity-0 group-hover:opacity-50 transition-opacity scale-110" />}
          <div className={`relative h-10 w-10 rounded-full overflow-hidden border-2 cursor-pointer transition-all ${isDark ? 'border-white/20 group-hover:border-[#6967FB] group-hover:shadow-lg group-hover:shadow-[#6967FB]/30' : 'border-gray-300 hover:border-blue-500'}`}>
            <img src="/profile.png" alt={PROFILE.name} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Tabs = ({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) => {
  const { isDark } = useContext(ThemeContext);
  const tabs = ["All", "Experience", "Projects", "Startups", "Skills"];
  
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setTimeout(() => {
      const contentSection = document.getElementById('content-section');
      if (contentSection && window.innerWidth < 1024) {
        const navHeight = 64 + 52;
        const elementPosition = contentSection.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: elementPosition - navHeight, behavior: 'smooth' });
      }
    }, 100);
  };
  
  return (
    <div className={`sticky top-16 z-40 border-b backdrop-blur-xl ${isDark ? 'border-white/10 bg-[#0E1A1F]/80' : 'border-gray-200 bg-white/80'}`}>
      {/* Subtle glow line */}
      {isDark && <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6967FB]/20 to-transparent" />}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide py-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`relative px-5 py-3.5 text-sm font-medium whitespace-nowrap transition-all rounded-lg ${
                activeTab === tab 
                  ? isDark 
                    ? "text-[#C8F904] bg-[#C8F904]/10" 
                    : "text-blue-600 bg-blue-50"
                  : isDark 
                    ? "text-white/50 hover:text-white/80 hover:bg-white/5" 
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              {tab}
              {activeTab === tab && isDark && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-[#C8F904] rounded-full" />
              )}
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
    <div className={`relative rounded-2xl overflow-hidden mb-6 ${isDark ? 'gradient-border glow' : 'bg-white border border-gray-200 shadow-sm'}`}>
      {/* Animated glow background */}
      {isDark && (
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#6967FB] rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#C8F904] rounded-full blur-[60px] opacity-30" />
        </div>
      )}
      
      {/* Profile Section - Compact */}
      <div className="relative p-5 text-center">
        {/* Profile image with glowing ring */}
        <div className="relative inline-block mb-4">
          <div className={`absolute inset-0 rounded-full ${isDark ? 'animate-pulse bg-[#6967FB]/30 blur-md scale-110' : ''}`} />
          <img 
            src="/profile.png" 
            alt={PROFILE.name}
            className={`relative w-24 h-24 rounded-full mx-auto object-cover ${isDark ? 'border-2 border-[#6967FB] shadow-xl shadow-[#6967FB]/30' : 'border-3 border-gray-100'}`}
          />
          <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center glow-accent" style={{ backgroundColor: '#C8F904' }}>
            <span className="w-2.5 h-2.5 rounded-full bg-[#0E1A1F] animate-pulse" />
          </div>
        </div>
        
        <h1 className={`text-xl font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {PROFILE.name}
        </h1>
        <p className={`text-xs mb-4 ${isDark ? 'text-white/50' : 'text-gray-500'}`}>{PROFILE.title}</p>
        
        <div className="flex gap-2 mb-5">
          <a href={`mailto:${PROFILE.email}`} className={`relative flex-1 font-medium py-3 rounded-xl text-sm transition-all flex items-center justify-center gap-2 overflow-hidden group ${isDark ? 'bg-[#6967FB] text-white hover:shadow-xl hover:shadow-[#6967FB]/40' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>
             <span className="relative z-10 flex items-center gap-2"><Mail size={14} /> Contact</span>
             {isDark && <div className="absolute inset-0 bg-gradient-to-r from-[#6967FB] via-[#8583fc] to-[#6967FB] opacity-0 group-hover:opacity-100 transition-opacity" />}
          </a>
          <a href={PROFILE.socials[2]?.link || "#"} target="_blank" rel="noopener noreferrer" className={`p-3 rounded-xl transition-all ${isDark ? 'bg-white/5 border border-white/10 text-white/60 hover:text-[#C8F904] hover:border-[#C8F904]/50 hover:shadow-lg hover:shadow-[#C8F904]/10' : 'border border-gray-300 text-gray-500 hover:text-gray-900 hover:border-gray-400'}`}>
             <Globe size={16} />
          </a>
        </div>

        <p className={`text-xs leading-relaxed mb-4 text-left ${isDark ? 'text-white/50' : 'text-gray-600'}`}>
          {PROFILE.about}
        </p>

        {/* Stats with glowing numbers */}
        <div className={`border-t pt-4 grid grid-cols-3 gap-3 mb-4 ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
          {PROFILE.stats.map((stat, idx) => (
            <div key={idx} className="text-center group cursor-default">
              <div className={`font-bold text-xl transition-all ${isDark ? 'text-[#C8F904] group-hover:neon-text-accent' : 'text-gray-900'}`}>{stat.value}</div>
              <div className={`text-[10px] uppercase tracking-wider ${isDark ? 'text-white/40' : 'text-gray-500'}`}>{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="space-y-3 text-left">
          {[
            { icon: MapPin, text: PROFILE.location },
            { icon: Briefcase, text: <>Works at <strong className={isDark ? 'text-white' : 'text-gray-900'}>iifetech Pvt. Ltd.</strong></> },
          ].map((item, idx) => (
            <div key={idx} className={`flex items-center gap-3 text-xs p-2 rounded-lg transition-all ${isDark ? 'text-white/60 hover:bg-white/5' : 'text-gray-600'}`}>
              <div className={`p-1.5 rounded-lg ${isDark ? 'bg-[#6967FB]/20' : 'bg-gray-100'}`}>
                <item.icon size={12} className={isDark ? 'text-[#6967FB]' : 'text-gray-400'} />
              </div>
              <span>{item.text}</span>
            </div>
          ))}
          <a href={`tel:${PROFILE.phone}`} className={`flex items-center gap-3 text-xs p-2 rounded-lg transition-all ${isDark ? 'text-white/60 hover:bg-white/5 hover:text-[#C8F904]' : 'text-gray-600 hover:text-gray-900'}`}>
            <div className={`p-1.5 rounded-lg ${isDark ? 'bg-[#6967FB]/20' : 'bg-gray-100'}`}>
              <Phone size={12} className={isDark ? 'text-[#6967FB]' : 'text-gray-400'} />
            </div>
            <span>+91 {PROFILE.phone}</span>
          </a>
          <a href={`mailto:${PROFILE.email}`} className={`flex items-center gap-3 text-xs p-2 rounded-lg transition-all ${isDark ? 'text-white/60 hover:bg-white/5 hover:text-[#C8F904]' : 'text-gray-600 hover:text-gray-900'}`}>
            <div className={`p-1.5 rounded-lg ${isDark ? 'bg-[#6967FB]/20' : 'bg-gray-100'}`}>
              <Mail size={12} className={isDark ? 'text-[#6967FB]' : 'text-gray-400'} />
            </div>
            <span>{PROFILE.email}</span>
          </a>
          
          <div className="pt-4 flex gap-3 overflow-x-auto pb-1">
            {PROFILE.socials.map((social) => (
              <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1.5 min-w-[55px] cursor-pointer group">
                <div className={`h-11 w-11 rounded-xl flex items-center justify-center transition-all ${isDark ? 'bg-white/5 border border-white/10 text-white/60 group-hover:bg-[#6967FB] group-hover:border-[#6967FB] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#6967FB]/30 group-hover:scale-110' : 'bg-gray-100 text-gray-500 group-hover:bg-blue-600 group-hover:text-white'}`}>
                  <social.icon size={18} />
                </div>
                <span className={`text-[10px] transition-colors ${isDark ? 'text-white/40 group-hover:text-[#C8F904]' : 'text-gray-500 group-hover:text-blue-500'}`}>{social.name}</span>
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
    <div className={`relative group cursor-pointer p-5 rounded-2xl transition-all duration-300 ${isDark ? 'hover:bg-white/5 hover:border-white/10 border border-transparent' : 'hover:bg-gray-50'}`}>
      {/* Animated left accent line */}
      <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 group-hover:h-3/4 transition-all duration-500 rounded-full ${isDark ? 'bg-gradient-to-b from-[#6967FB] via-[#C8F904] to-[#6967FB]' : 'bg-blue-600'}`} />
      
      {/* Glow on hover */}
      {isDark && (
        <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-0 group-hover:h-20 bg-[#6967FB] blur-xl opacity-0 group-hover:opacity-50 transition-all duration-500" />
      )}
      
      <div className="flex items-center gap-3 mb-2">
        <div className={`relative h-10 w-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all duration-300 group-hover:scale-110 ${isDark ? 'bg-white/5 border border-white/10 text-white/70 group-hover:bg-[#6967FB] group-hover:border-[#6967FB] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#6967FB]/30' : 'bg-gray-200 text-gray-600 group-hover:bg-blue-600 group-hover:text-white'}`}>
          {title.charAt(0)}
        </div>
        <div className="flex flex-col flex-1">
          <span className={`text-sm font-medium leading-tight ${isDark ? 'text-white/90' : 'text-gray-700'}`}>{title}</span>
          <span className={`text-xs leading-tight ${isDark ? 'text-white/40' : 'text-gray-400'}`}>{url}</span>
        </div>
        {website && (
          <a 
            href={website} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`p-2.5 rounded-xl transition-all duration-300 opacity-0 group-hover:opacity-100 ${isDark ? 'text-white/50 hover:text-[#C8F904] hover:bg-white/10 border border-transparent hover:border-white/10' : 'text-gray-500 hover:text-blue-600 hover:bg-gray-200'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={16} />
          </a>
        )}
      </div>
      
      <h3 className={`text-lg font-medium mb-2 transition-colors duration-300 ${isDark ? 'text-[#6967FB] group-hover:text-[#8583fc]' : 'text-blue-600 group-hover:text-blue-700'}`}>
        {website ? (
          <a href={website} target="_blank" rel="noopener noreferrer" className="hover:underline decoration-[#6967FB]/50">
            {title} - {desc.split('.')[0]}...
          </a>
        ) : (
          <span>{title} - {desc.split('.')[0]}...</span>
        )}
      </h3>
      
      <div className={`text-sm leading-relaxed ${isDark ? 'text-white/50' : 'text-gray-600'}`}>
        <span className={`inline-flex items-center gap-1 text-[10px] mr-2 px-2 py-0.5 rounded-full ${isDark ? 'bg-white/5 text-white/40' : 'bg-gray-100 text-gray-400'}`}>{date}</span>
        {desc}
      </div>
      
      {tags && (
        <div className="mt-4 flex gap-2 flex-wrap">
          {tags.map((tag: string, idx: number) => (
            <span 
              key={tag} 
              className={`text-xs rounded-lg px-3 py-1.5 transition-all duration-300 hover:scale-105 ${isDark ? 'bg-white/5 border border-white/10 text-white/50 hover:border-[#6967FB]/50 hover:text-[#6967FB] hover:bg-[#6967FB]/10 hover:shadow-lg hover:shadow-[#6967FB]/10' : 'border border-gray-300 text-gray-500 hover:border-blue-500 hover:text-blue-600'}`}
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      
      {/* Bottom separator with gradient */}
      <div className={`absolute bottom-0 left-5 right-5 h-px ${isDark ? 'bg-gradient-to-r from-transparent via-white/10 to-transparent' : 'bg-gray-200'}`} />
    </div>
  );
};

const ProjectCard = ({ project, onClick }: { project: typeof PROJECTS[0]; onClick: () => void }) => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div 
      className={`relative rounded-2xl overflow-hidden transition-all flex flex-col h-full cursor-pointer group ${isDark ? 'gradient-border hover:glow' : 'border border-gray-200 bg-white hover:border-gray-300 shadow-sm'}`}
      onClick={onClick}
    >
      {/* Hover glow effect */}
      {isDark && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-20 bg-[#6967FB] rounded-full blur-[60px] opacity-30" />
        </div>
      )}
      
      <div className={`relative h-36 ${project.image} w-full overflow-hidden`}>
        {/* Gradient overlay */}
        <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-transparent via-transparent to-[#0E1A1F]' : ''}`} />
        
        {/* Animated grid pattern */}
        {isDark && <div className="absolute inset-0 dot-pattern opacity-30" />}
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`p-4 rounded-2xl ${isDark ? 'bg-white/5 backdrop-blur-sm border border-white/10' : ''}`}>
            <Layers size={28} className={isDark ? 'text-[#6967FB]' : 'text-gray-500 opacity-50'} />
          </div>
        </div>
        
        <div className={`absolute top-3 right-3 text-[10px] px-3 py-1.5 rounded-full font-medium ${isDark ? 'bg-[#6967FB]/20 text-[#6967FB] border border-[#6967FB]/30 backdrop-blur-sm' : 'bg-white/90 text-gray-600'}`}>
          {project.role}
        </div>
      </div>
      
      <div className="relative p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${isDark ? 'bg-[#6967FB]/20 border border-[#6967FB]/30' : 'bg-blue-100'}`}>
            <Code size={12} className={isDark ? 'text-[#6967FB]' : 'text-blue-600'} />
          </div>
          <span className={`text-[10px] truncate uppercase tracking-wider ${isDark ? 'text-white/40' : 'text-gray-400'}`}>{project.tech.split(',')[0]}</span>
        </div>
        
        <h3 className={`text-lg font-semibold mb-2 transition-colors ${isDark ? 'text-white group-hover:text-[#C8F904]' : 'text-gray-900 group-hover:text-blue-500'}`}>{project.title}</h3>
        <p className={`text-sm mb-4 flex-1 line-clamp-2 ${isDark ? 'text-white/50' : 'text-gray-600'}`}>{project.description}</p>
        
        <div className={`flex items-center justify-between text-xs mt-auto pt-4 border-t ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
          <div className="flex items-center gap-2">
            {project.link === "confidential" && (
              <span className="flex items-center gap-1 text-yellow-500/80 text-xs bg-yellow-500/10 px-2 py-1 rounded-full">🔒 Private</span>
            )}
          </div>
          <span className={`font-medium transition-all flex items-center gap-1 ${isDark ? 'text-[#C8F904] group-hover:gap-2' : 'text-blue-500'}`}>
            View Details 
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

const ProjectModal = ({ project, onClose }: { project: typeof PROJECTS[0] | null; onClose: () => void }) => {
  const { isDark } = useContext(ThemeContext);
  if (!project) return null;
  
  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className={`relative rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-fadeInUp ${isDark ? 'gradient-border glow' : 'bg-white'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Background glow effects */}
        {isDark && (
          <>
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#6967FB] rounded-full blur-[100px] opacity-20" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#C8F904] rounded-full blur-[80px] opacity-10" />
          </>
        )}
        
        <div className="relative max-h-[90vh] overflow-y-auto">
          <div className={`relative h-56 ${project.image} w-full overflow-hidden`}>
            {/* Gradient overlay */}
            <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-transparent via-transparent to-[#0E1A1F]' : ''}`} />
            
            {/* Dot pattern */}
            {isDark && <div className="absolute inset-0 dot-pattern opacity-20" />}
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className={`p-6 rounded-3xl ${isDark ? 'bg-white/5 backdrop-blur-sm border border-white/10' : ''}`}>
                <Layers size={48} className={isDark ? 'text-[#6967FB]' : 'text-gray-400 opacity-50'} />
              </div>
            </div>
            
            <button 
              onClick={onClose}
              className={`absolute top-4 right-4 rounded-xl p-2.5 transition-all group ${isDark ? 'bg-[#0E1A1F]/80 hover:bg-[#0E1A1F] text-white/80 backdrop-blur-sm border border-white/10 hover:border-[#C8F904]/50' : 'bg-white/90 hover:bg-white text-gray-600 shadow-md'}`}
            >
              <X size={20} className="group-hover:rotate-90 transition-transform" />
            </button>
            
            <div className={`absolute bottom-4 left-4 text-sm px-4 py-2 rounded-xl backdrop-blur-sm font-medium ${isDark ? 'bg-[#6967FB]/20 text-[#6967FB] border border-[#6967FB]/30' : 'bg-black/60 text-white'}`}>
              {project.role}
            </div>
          </div>
          
          <div className="relative p-8">
            <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>{project.title}</h2>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.split(', ').map((tech: string, idx: number) => (
                <span 
                  key={idx} 
                  className={`text-xs px-4 py-2 rounded-xl border transition-all hover:scale-105 ${isDark ? 'bg-[#6967FB]/10 text-[#6967FB] border-[#6967FB]/30 hover:bg-[#6967FB]/20' : 'bg-blue-50 text-blue-700 border-blue-200'}`}
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="mb-8">
              <h3 className={`text-xs font-semibold uppercase tracking-wider mb-3 ${isDark ? 'text-white/40' : 'text-gray-500'}`}>About this project</h3>
              <p className={`leading-relaxed ${isDark ? 'text-white/70' : 'text-gray-700'}`}>{project.description}</p>
            </div>
            
            <div className={`flex gap-4 pt-6 border-t ${isDark ? 'border-white/10' : 'border-gray-100'}`}>
              {project.link === "confidential" ? (
                <button 
                  className={`relative flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-medium cursor-not-allowed overflow-hidden ${isDark ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20' : 'bg-orange-100 text-orange-600'}`}
                  disabled
                >
                  🔒 Confidential Project
                </button>
              ) : project.link && project.link !== "#" ? (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`relative flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-medium transition-all group overflow-hidden ${isDark ? 'bg-[#6967FB] text-white hover:shadow-xl hover:shadow-[#6967FB]/40' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
                >
                  <span className="relative z-10 flex items-center gap-2">View Live Project <ExternalLink size={16} className="group-hover:rotate-12 transition-transform" /></span>
                  {isDark && <div className="absolute inset-0 bg-gradient-to-r from-[#6967FB] via-[#8583fc] to-[#6967FB] opacity-0 group-hover:opacity-100 transition-opacity" />}
                </a>
              ) : (
              <button 
                className={`flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-medium cursor-not-allowed ${isDark ? 'bg-white/5 text-white/30 border border-white/10' : 'bg-gray-100 text-gray-400'}`}
                disabled
              >
                Live Link Coming Soon
              </button>
            )}
            <button 
              onClick={onClose}
              className={`px-8 py-4 rounded-xl font-medium transition-all ${isDark ? 'bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:border-[#C8F904]/50 hover:text-[#C8F904]' : 'border border-gray-300 text-gray-700 hover:bg-gray-50'}`}
            >
              Close
            </button>
          </div>
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
      className={`relative rounded-2xl p-5 transition-all group flex gap-4 overflow-hidden ${isDark ? 'gradient-border hover:glow' : 'border border-gray-200 bg-white hover:border-blue-400 hover:shadow-md'}`}
    >
      {/* Background glow effect */}
      {isDark && (
        <>
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#6967FB] rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#C8F904] rounded-full blur-[60px] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
        </>
      )}
      
      {/* Left: Icon with glow */}
      <div className="relative">
        <div className={`absolute inset-0 rounded-xl blur-md opacity-50 ${startup.color}`} />
        <div className={`relative ${startup.color} p-4 rounded-xl text-white shrink-0 h-fit shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <IconComponent size={24} />
        </div>
      </div>
      
      {/* Middle: Content */}
      <div className="relative flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h3 className={`font-semibold transition-colors truncate ${isDark ? 'text-white group-hover:text-[#C8F904]' : 'text-gray-900 group-hover:text-blue-500'}`}>
            {startup.name}
          </h3>
          <div className={`opacity-0 group-hover:opacity-100 transition-all transform translate-x-0 group-hover:translate-x-1 ${isDark ? 'text-[#C8F904]' : 'text-blue-600'}`}>
            <ExternalLink size={14} />
          </div>
        </div>
        <p className={`text-xs mb-2 ${isDark ? 'text-white/40' : 'text-gray-500'}`}>{startup.tagline}</p>
        
        {/* Stats inline */}
        <div className="flex items-center gap-3 flex-wrap">
          {Object.entries(startup.stats).map(([key, value]) => (
            <div key={key} className="flex items-center gap-1">
              <span className={`text-sm font-semibold ${isDark ? 'text-[#C8F904]' : 'text-blue-600'}`}>{String(value)}</span>
              <span className={`text-xs capitalize ${isDark ? 'text-white/40' : 'text-gray-400'}`}>{key}</span>
            </div>
          ))}
        </div>
        
        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {startup.tech.slice(0, 3).map((tech: string, idx: number) => (
            <span 
              key={idx}
              className={`text-xs px-2.5 py-1 rounded-full ${isDark ? 'bg-white/5 text-white/50 border border-white/10' : 'bg-gray-100 text-gray-500'}`}
            >
              {tech}
            </span>
          ))}
          {startup.tech.length > 3 && (
            <span className={`text-xs px-2.5 py-1 rounded-full ${isDark ? 'bg-white/5 text-white/30 border border-white/10' : 'bg-gray-100 text-gray-400'}`}>
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
    <div className={`relative rounded-2xl overflow-hidden mb-8 ${isDark ? 'gradient-border' : 'border border-gray-200 bg-white shadow-sm'}`}>
      {/* Header with glow */}
      <div className={`relative p-5 border-b ${isDark ? 'border-white/10' : 'border-gray-200'}`}>
        {isDark && <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-16 bg-[#6967FB] rounded-full blur-[40px] opacity-20" />}
        <h3 className={`relative text-lg font-semibold flex items-center gap-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          <span className={`p-2 rounded-lg ${isDark ? 'bg-[#6967FB]/20' : 'bg-blue-100'}`}>
            <HelpCircle size={16} className={isDark ? 'text-[#6967FB]' : 'text-blue-600'} />
          </span>
          People also ask
        </h3>
      </div>
      
      {FAQ_DATA.map((item, idx) => (
        <div key={idx} className={`border-b last:border-b-0 ${isDark ? 'border-white/5' : 'border-gray-200'}`}>
          <div 
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            className={`relative px-5 py-5 flex justify-between items-center cursor-pointer group ${isDark ? 'hover:bg-white/5' : 'hover:bg-gray-50'}`}
          >
            {/* Left glow indicator when open */}
            {isDark && openIndex === idx && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#C8F904] rounded-r-full" />
            )}
            
            <span className={`text-sm font-medium transition-colors ${openIndex === idx ? (isDark ? 'text-[#C8F904]' : 'text-blue-600') : (isDark ? 'text-white/70 group-hover:text-white' : 'text-gray-700 group-hover:text-gray-900')}`}>
              {item.question}
            </span>
            <div className={`p-1.5 rounded-lg transition-all ${openIndex === idx ? (isDark ? 'bg-[#C8F904]/20' : 'bg-blue-100') : (isDark ? 'bg-white/5' : 'bg-gray-100')}`}>
              <ChevronDown 
                size={16} 
                className={`transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''} ${openIndex === idx ? (isDark ? 'text-[#C8F904]' : 'text-blue-600') : (isDark ? 'text-white/40' : 'text-gray-500')}`} 
              />
            </div>
          </div>
          {openIndex === idx && (
            <div className={`px-5 pb-5 pt-0 ${isDark ? '' : 'bg-gray-50'}`}>
              <div className={`p-4 rounded-xl ${isDark ? 'bg-white/5 border border-white/5' : 'bg-white border border-gray-100'}`}>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-white/60' : 'text-gray-600'}`}>{item.answer}</p>
              </div>
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
    <div className="fixed inset-0 z-[100] bg-[#0E1A1F] flex items-center justify-center overflow-hidden cursor-default select-none">
      
      {/* Dynamic gradient that follows mouse */}
      <div 
        className="absolute inset-0 transition-all duration-[2000ms] ease-out"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(105, 103, 251, 0.2) 0%, transparent 40%)`,
        }}
      />

      {/* Animated mesh gradient background */}
      <div 
        className={`absolute inset-0 transition-opacity duration-[2000ms] ${stage >= 1 ? 'opacity-100' : 'opacity-0'}`}
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% -20%, rgba(105, 103, 251, 0.2), transparent),
            radial-gradient(ellipse 60% 40% at 100% 100%, rgba(105, 103, 251, 0.15), transparent),
            radial-gradient(ellipse 60% 40% at 0% 100%, rgba(200, 249, 4, 0.08), transparent)
          `
        }}
      />

      {/* Dot pattern background */}
      <div 
        className={`absolute inset-0 dot-pattern transition-opacity duration-1000 ${stage >= 2 ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* Flowing SVG Lines */}
      <svg className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${stage >= 3 ? 'opacity-100' : 'opacity-0'}`} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(105, 103, 251, 0)" />
            <stop offset="50%" stopColor="rgba(105, 103, 251, 0.5)" />
            <stop offset="100%" stopColor="rgba(105, 103, 251, 0)" />
          </linearGradient>
          <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(200, 249, 4, 0)" />
            <stop offset="50%" stopColor="rgba(200, 249, 4, 0.3)" />
            <stop offset="100%" stopColor="rgba(200, 249, 4, 0)" />
          </linearGradient>
        </defs>
        <path 
          d="M0,200 Q200,100 400,200 T800,200 T1200,200 T1600,200" 
          fill="none" 
          stroke="url(#lineGradient1)" 
          strokeWidth="1"
          className="flow-line"
          style={{ opacity: 0.5 }}
        />
        <path 
          d="M0,400 Q300,300 600,400 T1200,400 T1800,400" 
          fill="none" 
          stroke="url(#lineGradient2)" 
          strokeWidth="1"
          className="flow-line"
          style={{ opacity: 0.3, animationDelay: '1s' }}
        />
      </svg>

      {/* Floating orbs with enhanced glow */}
      <div 
        className={`absolute w-[600px] h-[600px] rounded-full transition-all duration-[3000ms] ${stage >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
        style={{
          background: 'radial-gradient(circle, rgba(105, 103, 251, 0.15) 0%, transparent 60%)',
          left: '5%',
          top: '10%',
          filter: 'blur(60px)',
          animation: stage >= 2 ? 'float 8s ease-in-out infinite' : 'none'
        }}
      />
      <div 
        className={`absolute w-[500px] h-[500px] rounded-full transition-all duration-[3000ms] delay-300 ${stage >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
        style={{
          background: 'radial-gradient(circle, rgba(200, 249, 4, 0.08) 0%, transparent 60%)',
          right: '10%',
          bottom: '15%',
          filter: 'blur(50px)',
          animation: stage >= 2 ? 'float 10s ease-in-out infinite reverse' : 'none'
        }}
      />
      
      {/* Additional accent orb */}
      <div 
        className={`absolute w-[300px] h-[300px] rounded-full transition-all duration-[3000ms] delay-500 ${stage >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
        style={{
          background: 'radial-gradient(circle, rgba(105, 103, 251, 0.2) 0%, transparent 70%)',
          right: '30%',
          top: '20%',
          filter: 'blur(40px)',
          animation: stage >= 3 ? 'float 12s ease-in-out infinite' : 'none'
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
            <span className={`inline-block w-2 h-2 rounded-full ${stage >= 2 ? 'animate-pulse' : ''}`} style={{ backgroundColor: '#C8F904' }} />
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
                  background: 'linear-gradient(135deg, #ffffff 0%, #6967FB 100%)',
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
              className={`px-4 py-1.5 text-xs sm:text-sm font-medium rounded-full border border-white/10 text-white/50 backdrop-blur-sm transition-all duration-500 hover:border-[#6967FB]/50 hover:text-[#6967FB]`}
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
            { value: '12+', label: 'Projects' },
            { value: '3', label: 'Startups' }
          ].map((stat, i) => (
            <div key={stat.label} className="text-center" style={{ transitionDelay: `${i * 150}ms` }}>
              <div className="text-3xl sm:text-4xl font-bold" style={{ color: '#C8F904' }}>{stat.value}</div>
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
            className="group relative px-8 py-3 text-sm font-medium text-white/80 rounded-full border border-white/20 hover:border-[#6967FB] transition-all duration-300 hover:text-white overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Portfolio
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-[#6967FB]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
        <span className="inline-block w-1.5 h-1.5 rounded-full mr-2 animate-pulse" style={{ backgroundColor: '#C8F904' }} />
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
      
      <div className={`min-h-screen font-sans transition-all duration-700 ${isDark ? 'bg-[#0E1A1F] text-gray-200' : 'bg-gray-50 text-gray-900'} ${contentVisible ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar />
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <ScrollToTop />
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col-reverse lg:flex-row lg:justify-start gap-[8rem]">
            {/* Left Column (Search Results) */}
            <div id="content-section" className="flex-1 max-w-2xl">
              
              {/* "Did you mean" Context */}
              <div className="mb-8 text-sm">
                <span className={`italic ${isDark ? 'text-white/40' : 'text-gray-400'}`}>Did you mean: </span>
                <a href={`mailto:${PROFILE.email}`} className={`font-medium italic hover:underline ${isDark ? 'text-[#6967FB] hover:text-[#8583fc]' : 'text-blue-600'}`}>
                  Hire this experienced Full Stack Engineer
                </a>
              </div>

              {activeTab === "All" && (
                <>
                  <div className="mb-8">
                      <h2 className={`text-2xl font-light mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Work Experience</h2>
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
                      <h2 className={`text-2xl font-light mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>Key Projects</h2>
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
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2.5 rounded-xl bg-[#6967FB]">
                          <Rocket className="text-white" size={20} />
                        </div>
                        <div>
                          <h2 className={`text-xl font-light ${isDark ? 'text-white' : 'text-gray-900'}`}>My Ventures</h2>
                          <p className={`text-xs ${isDark ? 'text-white/40' : 'text-gray-500'}`}>Products that solve real problems</p>
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
                      <div className="flex items-center gap-3 mb-6">
                        <div className={`p-2.5 rounded-xl ${isDark ? 'bg-[#6967FB]/20' : 'bg-blue-100'}`}>
                          <Sparkles size={20} className={isDark ? 'text-[#6967FB]' : 'text-blue-600'} />
                        </div>
                        <h2 className={`text-2xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Technical Proficiency</h2>
                      </div>
                      <div className="flex flex-wrap gap-3">
                          {SKILLS.map((skill, idx) => (
                              <span 
                                key={skill} 
                                className={`px-5 py-3 rounded-xl border transition-all cursor-default hover:scale-105 ${isDark ? 'bg-white/5 text-white/60 border-white/10 hover:border-[#6967FB]/50 hover:text-[#C8F904] hover:bg-[#6967FB]/10 hover:shadow-lg hover:shadow-[#6967FB]/10' : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:text-gray-900'}`}
                                style={{ animationDelay: `${idx * 30}ms` }}
                              >
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

        <footer className={`relative text-sm py-10 mt-16 border-t overflow-hidden ${isDark ? 'bg-[#0E1A1F] text-white/40 border-white/10' : 'bg-white text-gray-500 border-gray-200'}`}>
          {/* Background effects */}
          {isDark && (
            <>
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6967FB]/30 to-transparent" />
              <div className="absolute bottom-0 left-1/4 w-64 h-32 bg-[#6967FB] rounded-full blur-[100px] opacity-10" />
              <div className="absolute bottom-0 right-1/4 w-48 h-24 bg-[#C8F904] rounded-full blur-[80px] opacity-5" />
            </>
          )}
          
          <div className="relative max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <span className={`text-xl font-bold ${isDark ? '' : ''}`}>
                <span className={isDark ? 'neon-text' : ''} style={{ background: 'linear-gradient(135deg, #ffffff 0%, #6967FB 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>AD</span>
                <span className={isDark ? 'neon-text-accent' : ''} style={{ color: '#C8F904' }}>.</span>
              </span>
              <span className={`text-sm ${isDark ? 'text-white/40' : 'text-gray-500'}`}>© 2024 Abhishek Dandriyal</span>
            </div>
            
            <div className="flex gap-4">
              <a href={`mailto:${PROFILE.email}`} className={`px-4 py-2 rounded-xl transition-all ${isDark ? 'text-white/50 hover:text-[#C8F904] hover:bg-white/5' : 'hover:text-gray-900 hover:bg-gray-100'}`}>Contact</a>
              <a href={PROFILE.socials[0]?.link || "#"} target="_blank" rel="noopener noreferrer" className={`px-4 py-2 rounded-xl transition-all flex items-center gap-2 ${isDark ? 'text-white/50 hover:text-[#C8F904] hover:bg-white/5' : 'hover:text-gray-900 hover:bg-gray-100'}`}>
                <Github size={16} /> GitHub
              </a>
              <a href={PROFILE.socials[1]?.link || "#"} target="_blank" rel="noopener noreferrer" className={`px-4 py-2 rounded-xl transition-all flex items-center gap-2 ${isDark ? 'text-white/50 hover:text-[#C8F904] hover:bg-white/5' : 'hover:text-gray-900 hover:bg-gray-100'}`}>
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </div>
    </ThemeContext.Provider>
  );
}