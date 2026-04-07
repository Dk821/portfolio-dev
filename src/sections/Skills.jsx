import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaPython, FaGitAlt, FaFigma, FaBrain, FaMicrosoft, FaWindows } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiMysql, SiCanva, SiPostman, SiDjango, SiAdobephotoshop, SiAdobeillustrator, SiBootstrap, SiFlask, SiFastapi } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
const categories = [
    { id: "all", label: "All" },
    { id: "languages", label: "Languages" },
    { id: "frameworks", label: "Frameworks" },
    { id: "backend", label: "Backend" },
    { id: "database", label: "Databases" },
    { id: "design", label: "Design" },
    { id: "software", label: "Software" },
    { id: "networking", label: "Networking & OS" },
];

const skills = [
    // Languages
    { name: "Python", icon: <FaPython />, iconColor: "#3776AB", category: "languages", desc: "Core & Django" },
    { name: "JavaScript", icon: <SiJavascript />, iconColor: "#F7DF1E", category: "languages", desc: "Web Dev" },
    { name: "HTML5", icon: <FaHtml5 />, iconColor: "#E34F26", category: "languages", desc: "Structure" },
    { name: "CSS3", icon: <FaCss3Alt />, iconColor: "#1572B6", category: "languages", desc: "Styling" },
    // Frameworks
    { name: "React JS", icon: <FaReact />, iconColor: "#61DAFB", category: "frameworks", desc: "UI Library" },
    { name: "Bootstrap", icon: <SiBootstrap />, iconColor: "#7952B3", category: "frameworks", desc: "CSS Framework" },
    // Backend
    { name: "Django", icon: <SiDjango />, iconColor: "#092E20", category: "backend", desc: "Web Framework" },
    { name: "Flask", icon: <SiFlask />, iconColor: "#ffffff", category: "backend", desc: "Micro Framework" },
    { name: "FastAPI", icon: <SiFastapi />, iconColor: "#05998B", category: "backend", desc: "Modern API" },
    // Databases
    { name: "SQL", icon: <SiMysql />, iconColor: "#4479A1", category: "database", desc: "Relational" },
    { name: "Mongo DB", icon: <SiMongodb />, iconColor: "#47A248", category: "database", desc: "NoSQL" },
    // Design
    { name: "Canva", icon: <SiCanva />, iconColor: "#00C4CC", category: "design", desc: "Visual Design" },
    { name: "Photoshop", icon: <SiAdobephotoshop />, iconColor: "#31A8FF", category: "design", desc: "Photo Editing" },
    { name: "Illustrator", icon: <SiAdobeillustrator />, iconColor: "#31A8FF", category: "design", desc: "Photo Editing" },
    { name: "Figma", icon: <FaFigma />, iconColor: "#F24E1E", category: "design", desc: "UI/UX Tool" },
    // Software
    { name: "Git & GitHub", icon: <FaGitAlt />, iconColor: "#F05032", category: "software", desc: "Version Control" },
    { name: "VS Code", icon: <VscVscode />, iconColor: "#007ACC", category: "software", desc: "Code Editor" },
    { name: "MS Office", icon: <FaMicrosoft />, iconColor: "#D83B01", category: "software", desc: "Productivity" },
    { name: "Postman", icon: <SiPostman />, iconColor: "#D83B01", category: "software", desc: "Test" },
    // Networking & OS
    { name: "Basic Networking", icon: <FaBrain />, iconColor: "#94a3b8", category: "networking", desc: "DNS, IP, HTTP" },
    { name: "Windows", icon: <FaWindows />, iconColor: "#0078D6", category: "networking", desc: "OS" },
    { name: "Linux", icon: <FaBrain />, iconColor: "#FCC624", category: "networking", desc: "OS" },
];

const Skills = () => {
    const [active, setActive] = useState("all");

    const filtered = active === "all" ? skills : skills.filter(s => s.category === active);

    return (
        <section id="skills" className="py-16 sm:py-20 md:py-24 bg-secondary relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
            <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(240,192,64,0.05) 0%, transparent 70%)" }} />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)" }} />

            <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 sm:mb-12"
                >
                    <p className="text-accent/70 text-xs uppercase tracking-[0.25em] font-mono mb-3">What I work with</p>
                    <h2 className="section-title mb-3">
                        Technical <span className="text-gradient">Skills</span>
                    </h2>
                    <p className="section-subtitle">
                        Languages, frameworks & tools I use to build intelligent applications.
                    </p>
                </motion.div>

                {/* Category Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-10"
                >
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setActive(cat.id)}
                            className="px-3 sm:px-4 py-2 rounded-full text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer"
                            style={active === cat.id ? {
                                background: "linear-gradient(135deg, #f0c040, #e8a020)",
                                color: "#0a0a0f",
                                boxShadow: "0 4px 16px rgba(240,192,64,0.3)",
                                border: "1px solid transparent",
                            } : {
                                background: "rgba(255,255,255,0.04)",
                                color: "#8a8a9a",
                                border: "1px solid rgba(255,255,255,0.08)",
                            }}
                        >
                            {cat.label}
                        </button>
                    ))}
                </motion.div>

                {/* Skills Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4"
                    >
                        {filtered.map((skill, i) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.25, delay: i * 0.04 }}
                                whileHover={{ y: -6, scale: 1.04 }}
                                className="group flex flex-col items-center gap-2 p-3 sm:p-5 rounded-xl sm:rounded-2xl cursor-default text-center transition-all duration-300"
                                style={{
                                    background: "rgba(255,255,255,0.03)",
                                    border: "1px solid rgba(255,255,255,0.07)",
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.borderColor = `${skill.iconColor}35`;
                                    e.currentTarget.style.boxShadow = `0 8px 30px ${skill.iconColor}18`;
                                    e.currentTarget.style.background = `${skill.iconColor}08`;
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                                    e.currentTarget.style.boxShadow = "none";
                                    e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                                }}
                            >
                                {/* Icon */}
                                <div
                                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center text-xl sm:text-2xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                                    style={{
                                        background: `${skill.iconColor}15`,
                                        border: `1px solid ${skill.iconColor}25`,
                                        color: skill.iconColor,
                                    }}
                                >
                                    {skill.icon}
                                </div>

                                {/* Name + desc */}
                                <div>
                                    <p className="text-text-primary font-semibold text-[11px] sm:text-sm leading-tight group-hover:text-white transition-colors duration-200">
                                        {skill.name}
                                    </p>
                                    <p className="text-text-secondary/60 text-[9px] sm:text-xs mt-0.5 line-clamp-1">{skill.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Count indicator */}
                <motion.p
                    key={active + "-count"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-center text-text-secondary/40 text-xs font-mono mt-8"
                >
                    Showing {filtered.length} skill{filtered.length !== 1 ? "s" : ""}
                    {active !== "all" && ` in ${categories.find(c => c.id === active)?.label}`}
                </motion.p>
            </div>
        </section>
    );
};

export default Skills;
