import {
    FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaReact, FaNodeJs, FaHtml5, FaCss3Alt,
    FaPython, FaGitAlt, FaFigma, FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaAward, FaJs, FaBrain
} from "react-icons/fa";
import {
    SiTailwindcss, SiJavascript, SiExpress, SiMongodb, SiMysql, SiCanva, SiPostman, SiOpenai, SiPython
} from "react-icons/si";
import { BsChatSquareQuote } from "react-icons/bs";

export const PERSONAL_INFO = {
    name: "Dineshkumar N",
    fullName: "Dineshkumar N",
    role: "Full Stack Developer",
    location: "Coimbatore, India",
    email: "dhineshkumarn6353@gmail.com",
    phone: "+91 8072211434",
    resumeUrl: "/Dineshkumar N.pdf",
    typewriterRoles: ["Full Stack Developer", "Python Developer", "React Specialist", "AI App Developer"],
    description: "Motivated Full Stack Developer with strong skills in React, Python (Django/Flask), and database management. Seeking to contribute to scalable, user-focused solutions while growing as a professional developer.",
};

export const SOCIAL_LINKS = [
    { href: "https://github.com/Dk821", icon: <FaGithub />, label: "GitHub" },
    { href: "https://www.linkedin.com/in/n-dineshkumar/", icon: <FaLinkedin />, label: "LinkedIn" },
    { href: `mailto:${PERSONAL_INFO.email}`, icon: <FaEnvelope />, label: "Email" },
];

export const NAV_LINKS = [
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Experience", to: "experience" },
    { name: "Certifications", to: "certifications" },
    { name: "Contact", to: "contact" },
];

export const TECH_STACK = [
    { icon: <FaReact className="text-[#61DAFB]" />, label: "React" },
    { icon: <SiPython className="text-[#3776AB]" />, label: "Python" },
    { icon: <FaJs className="text-[#F7DF1E]" />, label: "JS" },
    { icon: <SiMongodb className="text-[#47A248]" />, label: "MongoDB" },
    { icon: <SiJavascript className="text-[#3178C6]" />, label: "FastAPI" },
    { icon: <FaNodeJs className="text-[#339933]" />, label: "Django" },
    { icon: <SiCanva className="text-[#00C4CC]" />, label: "Canva" },
];

export const STATS = [
    { value: "2", label: "Core Projects", desc: "Built & deployed", color: "#f0c040" },
    { value: "Python", label: "Core Stack", desc: "React & Django", color: "#a855f7" },
    { value: "∞", label: "Commitment", desc: "Lifelong learning", color: "#14b8a6" },
];

export const SKILL_CATEGORIES = [
    { id: "all", label: "All" },
    { id: "languages", label: "Languages" },
    { id: "frameworks", label: "Frameworks" },
    { id: "backend", label: "Backend" },
    { id: "database", label: "Databases" },
    { id: "design", label: "Design" },
    { id: "software", label: "Software" },
    { id: "networking", label: "Networking & OS" },
];

export const SKILLS = [
    // Languages
    { name: "Python", icon: <FaPython />, iconColor: "#3776AB", category: "languages", desc: "Core & Django" },
    { name: "JavaScript", icon: <SiJavascript />, iconColor: "#F7DF1E", category: "languages", desc: "Web Dev" },
    { name: "HTML5", icon: <FaHtml5 />, iconColor: "#E34F26", category: "languages", desc: "Structure" },
    { name: "CSS3", icon: <FaCss3Alt />, iconColor: "#1572B6", category: "languages", desc: "Styling" },
    // Frameworks
    { name: "React JS", icon: <FaReact />, iconColor: "#61DAFB", category: "frameworks", desc: "UI Library" },
    { name: "Bootstrap", icon: <SiJavascript />, iconColor: "#7952B3", category: "frameworks", desc: "CSS Framework" },
    // Backend
    { name: "Django", icon: <FaNodeJs />, iconColor: "#092E20", category: "backend", desc: "Web Framework" },
    { name: "Flask", icon: <SiExpress />, iconColor: "#ffffff", category: "backend", desc: "Micro Framework" },
    { name: "FastAPI", icon: <SiJavascript />, iconColor: "#05998B", category: "backend", desc: "Modern API" },
    // Databases
    { name: "SQL", icon: <SiMysql />, iconColor: "#4479A1", category: "database", desc: "Relational" },
    { name: "Mongo DB", icon: <SiMongodb />, iconColor: "#47A248", category: "database", desc: "NoSQL" },
    // Design
    { name: "Canva", icon: <SiCanva />, iconColor: "#00C4CC", category: "design", desc: "Visual Design" },
    { name: "Photoshop", icon: <SiJavascript />, iconColor: "#31A8FF", category: "design", desc: "Photo Editing" },
    { name: "Figma", icon: <FaFigma />, iconColor: "#F24E1E", category: "design", desc: "UI/UX Tool" },
    // Software
    { name: "Git & GitHub", icon: <FaGitAlt />, iconColor: "#F05032", category: "software", desc: "Version Control" },
    { name: "VS Code", icon: <SiJavascript />, iconColor: "#007ACC", category: "software", desc: "Code Editor" },
    { name: "MS Office", icon: <SiJavascript />, iconColor: "#D83B01", category: "software", desc: "Productivity" },
    // Networking & OS
    { name: "Basic Networking", icon: <FaBrain />, iconColor: "#94a3b8", category: "networking", desc: "DNS, IP, HTTP" },
    { name: "Windows", icon: <SiJavascript />, iconColor: "#0078D6", category: "networking", desc: "OS" },
    { name: "Linux", icon: <FaBrain />, iconColor: "#FCC624", category: "networking", desc: "OS" },
];

export const EXPERIENCES = [
    {
        id: "01",
        role: "Fullstack development",
        company: "Systech",
        location: "Coimbatore",
        type: "Internship",
        duration: "2024",
        accentColor: "#f59e0b",
        glowColor: "rgba(245,158,11,0.15)",
        borderColor: "rgba(245,158,11,0.35)",
        tagBg: "rgba(245,158,11,0.1)",
        tagText: "#f59e0b",
        desc: [
            "Developed full-stack web applications using modern frameworks",
            "Worked on responsive user interfaces and backend logic",
            "Collaborated on database design and API integration",
        ],
    },
    {
        id: "02",
        role: "Graphic designer",
        company: "Hillborn Technologies",
        location: "Remote",
        type: "Part-time",
        duration: "2024",
        accentColor: "#a855f7",
        glowColor: "rgba(168,85,247,0.15)",
        borderColor: "rgba(168,85,247,0.35)",
        tagBg: "rgba(168,85,247,0.1)",
        tagText: "#a855f7",
        desc: [
            "Created professional designs, concepts, and sample layouts",
            "Based designs on knowledge of layout and aesthetic design concepts",
            "Collaborated with teams to deliver high-quality visual content",
        ],
    },
    {
        id: "03",
        role: "Python FullStack Internship",
        company: "Offline course",
        location: "Coimbatore",
        type: "Internship",
        duration: "2023 - 2024",
        accentColor: "#14b8a6",
        glowColor: "rgba(20,184,166,0.15)",
        borderColor: "rgba(20,184,166,0.35)",
        tagBg: "rgba(20,184,166,0.1)",
        tagText: "#14b8a6",
        desc: [
            "Gained hands-on experience in HTML, CSS, MySQL, and Tkinter",
            "Focused on Python Core and Django for web development",
            "Developed database management skills and responsive web design",
        ],
    },
];

export const PROJECTS = [
    {
        title: "Creatix — AI Content Automation",
        desc: "Developed an AI-powered web application to automate social media content creation including calendars, captions, and engagement strategies. Built using React, FastAPI, and reliable content generation.",
        tech: ["React", "FastAPI", "Python", "OpenAI"],
        live: "#",
        github: "https://github.com/Dk821/Creatix",
        accentColor: "#8b5cf6",
        glowColor: "rgba(139,92,246,0.15)",
        borderColor: "rgba(139,92,246,0.3)",
        tag: "Featured",
        number: "01",
    },
    {
        title: "Web Audit Project",
        desc: "A comprehensive web auditing tool built with Python and Flask to analyze website performance, SEO, and security vulnerabilities with automated reporting.",
        tech: ["Python", "Flask", "BeautifulSoup", "SEO API"],
        live: "#",
        github: "https://github.com/Dk821/web-audit",
        accentColor: "#10b981",
        glowColor: "rgba(16,185,129,0.15)",
        borderColor: "rgba(16,185,129,0.3)",
        tag: "Python / Flask",
        number: "02",
    },
];

export const CERTIFICATIONS = [
    { title: "Fundamentals of UI/UX Design", issuer: "Coursera - Microsoft", date: "2024", link: "#", color: "#60a5fa", glow: "rgba(96,165,250,0.12)" },
    { title: "Web Development Professional Certification", issuer: "Coursera - Microsoft", date: "2024", link: "#", color: "#fbbf24", glow: "rgba(251,191,36,0.12)" },
    { title: "Foundations of Coding Front-End", issuer: "Coursera - Microsoft", date: "2024", link: "#", color: "#22d3ee", glow: "rgba(34,211,238,0.12)" },
    { title: "MySQL Database Masterclass", issuer: "Udemy", date: "2023", link: "#", color: "#4ade80", glow: "rgba(74,222,128,0.12)" },
    { title: "Figma UI/UX Design Essentials", issuer: "Udemy", date: "2023", link: "#", color: "#a3e635", glow: "rgba(163,230,53,0.12)" },
    { title: "Backend Development with Python", issuer: "Coursera", date: "2024", link: "#", color: "#c084fc", glow: "rgba(192,132,252,0.12)" },
];

export const CONTACT_ITEMS = [
    {
        icon: <FaEnvelope />,
        label: "Email",
        value: PERSONAL_INFO.email,
        href: `mailto:${PERSONAL_INFO.email}`,
        accentColor: "#fbbf24",
        glow: "rgba(251,191,36,0.12)",
    },
    {
        icon: <FaLinkedin />,
        label: "LinkedIn",
        value: "n-dineshkumar",
        href: PERSONAL_INFO.linkedin,
        accentColor: "#60a5fa",
        glow: "rgba(96,165,250,0.12)",
    },
];

PERSONAL_INFO.linkedin = "https://www.linkedin.com/in/n-dineshkumar/";

export const EMAILJS_CONFIG = {
    SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
    TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
    PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY",
};
