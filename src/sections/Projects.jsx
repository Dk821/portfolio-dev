import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

const projects = [
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

const Projects = () => {
    return (
        <section id="projects" className="py-16 sm:py-20 md:py-24 bg-primary relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)" }} />
            <div className="dot-grid absolute inset-0 opacity-20 pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 sm:mb-16"
                >
                    <span
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-mono mb-4 px-4 py-1.5 rounded-full border"
                        style={{
                            color: "var(--accent)",
                            borderColor: "rgba(240,192,64,0.2)",
                            background: "rgba(240,192,64,0.07)",
                        }}
                    >
                        {/* <HiSparkles /> */}
                        What I've Built
                    </span>
                    <h2 className="section-title mt-1 mb-4">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="section-subtitle">
                        Real-world AI-powered solutions built with modern technology stacks.
                    </p>
                </motion.div>

                {/* Stacked Project Rows */}
                <div className="space-y-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.55, delay: index * 0.1 }}
                            whileHover={{ y: -4 }}
                            className="group relative rounded-2xl overflow-hidden flex flex-col md:flex-row gap-0"
                            style={{
                                background: "rgba(255,255,255,0.025)",
                                border: "1px solid rgba(255,255,255,0.07)",
                                backdropFilter: "blur(12px)",
                                transition: "box-shadow 0.4s ease, border-color 0.4s ease",
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.borderColor = project.borderColor;
                                e.currentTarget.style.boxShadow = `0 8px 50px ${project.glowColor}`;
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                                e.currentTarget.style.boxShadow = "none";
                            }}
                        >
                            {/* Left number accent panel */}
                            <div
                                className="hidden md:flex flex-col items-center justify-center w-24 flex-shrink-0 py-8"
                                style={{
                                    background: `linear-gradient(160deg, ${project.glowColor}, transparent)`,
                                    borderRight: `1px solid ${project.borderColor}`,
                                }}
                            >
                                <span
                                    className="text-4xl font-extrabold font-heading opacity-25"
                                    style={{ color: project.accentColor }}
                                >
                                    {project.number}
                                </span>
                            </div>

                            {/* Main content */}
                            <div className="flex-1 p-5 sm:p-6 md:p-7">
                                {/* Top row */}
                                <div className="flex flex-col sm:flex-row flex-wrap items-start justify-between gap-3 mb-4">
                                    <div>
                                        <span
                                            className="inline-block md:hidden text-[11px] font-mono px-2.5 py-1 rounded-full border mb-2"
                                            style={{
                                                color: project.accentColor,
                                                background: project.glowColor,
                                                borderColor: project.borderColor,
                                            }}
                                        >
                                            {project.number}
                                        </span>
                                        <span
                                            className="inline-block text-xs font-mono px-2.5 py-1 rounded-full border mb-2"
                                            style={{
                                                color: project.accentColor,
                                                background: project.glowColor,
                                                borderColor: project.borderColor,
                                            }}
                                        >
                                            {project.tag}
                                        </span>
                                        <h3
                                            className="text-xl font-bold text-text-primary group-hover:text-white transition-colors duration-300 leading-snug"
                                        >
                                            {project.title}
                                        </h3>
                                    </div>

                                    {/* Action icons */}
                                    <div className="flex gap-2 flex-shrink-0">
                                        <a
                                            href={project.github}
                                            aria-label="Source Code"
                                            className="w-9 h-9 rounded-lg flex items-center justify-center text-text-secondary hover:text-white transition-all duration-300"
                                            style={{
                                                background: "rgba(255,255,255,0.05)",
                                                border: "1px solid rgba(255,255,255,0.1)",
                                            }}
                                        >
                                            <FaGithub className="text-sm" />
                                        </a>
                                        <a
                                            href={project.live}
                                            aria-label="Live Demo"
                                            className="w-9 h-9 rounded-lg flex items-center justify-center text-text-secondary hover:text-white transition-all duration-300"
                                            style={{
                                                background: "rgba(255,255,255,0.05)",
                                                border: "1px solid rgba(255,255,255,0.1)",
                                            }}
                                        >
                                            <FaExternalLinkAlt className="text-xs" />
                                        </a>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-text-secondary text-sm leading-relaxed mb-5">
                                    {project.desc}
                                </p>

                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-xs rounded-full font-mono"
                                            style={{
                                                background: "rgba(240,192,64,0.07)",
                                                border: "1px solid rgba(240,192,64,0.18)",
                                                color: "rgba(240,192,64,0.8)",
                                            }}
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Right color accent bar */}
                            <div
                                className="w-1.5 flex-shrink-0 hidden md:block"
                                style={{ background: `linear-gradient(to bottom, ${project.accentColor}, transparent)` }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
