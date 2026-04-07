import { FaMapMarkerAlt, FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";
import aboutAvatar from "../assets/about-me-removebg-preview.png";

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.55, delay, ease: "easeOut" },
});

const cardBase = {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.07)",
    backdropFilter: "blur(12px)",
};

const techStack = [
    "React",
    "JavaScript",
    "Python",
    "Django",
    "Flask",
    "FastAPI",
    "HTML5",
    "CSS3",
    "MySQL",
    "MongoDB",
    "Git & GitHub",
    "Figma",
];

const About = () => {
    return (
        <section id="about" className="py-16 sm:py-20 md:py-24 bg-secondary relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
            <div
                className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(240,192,64,0.06) 0%, transparent 70%)" }}
            />
            <div
                className="absolute -bottom-40 left-0 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%)" }}
            />

            <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10">
                <motion.div {...fadeUp(0)} className="mb-10 sm:mb-12 text-center md:text-left">
                    <p className="text-accent/70 text-xs uppercase tracking-[0.25em] font-mono mb-3">Who am I</p>
                    <h2 className="section-title">
                        About <span className="text-gradient">Me</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
                    <motion.div
                        {...fadeUp(0.1)}
                        className="md:row-span-2 rounded-3xl overflow-hidden relative flex flex-col items-center justify-end p-5 sm:p-6 min-h-[320px] sm:min-h-[380px]"
                        style={{
                            ...cardBase,
                            background: "linear-gradient(160deg, rgba(240,192,64,0.08) 0%, rgba(255,255,255,0.02) 60%)",
                        }}
                    >
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <img
                                src={aboutAvatar}
                                alt="Dineshkumar N"
                                className="w-full h-full object-contain"
                                style={{ padding: "8% 12% 30%", filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.5))" }}
                            />
                        </div>

                        <div className="relative z-10 w-full text-center">
                            <div
                                className="rounded-2xl p-4"
                                style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(16px)" }}
                            >
                                <h3 className="text-text-primary font-bold text-lg leading-tight">Dineshkumar.N</h3>
                                <p className="text-accent/80 text-xs font-mono mt-1">Full Stack Developer</p>
                                <div className="flex items-center justify-center gap-1.5 mt-2 text-text-secondary/60 text-xs">
                                    <FaMapMarkerAlt className="text-accent/50" />
                                    Erode, Tamil Nadu, India
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        {...fadeUp(0.15)}
                        className="md:col-span-2 rounded-3xl p-5 sm:p-7"
                        style={cardBase}
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-accent/70 text-xs font-mono uppercase tracking-widest">Introduction</span>
                        </div>
                        <p className="text-text-secondary text-[15px] leading-relaxed mb-3">
                            I&apos;m a <span className="text-text-primary font-semibold">Full Stack Developer</span> with strong skills in React, Python (Django/Flask), and database management. Experienced in building AI-powered web applications and responsive user interfaces.
                        </p>
                        <p className="text-text-secondary text-[15px] leading-relaxed">
                            I focus on contributing to <span className="text-accent font-semibold">scalable, user-focused solutions</span> while growing as a professional developer.
                        </p>
                    </motion.div>

                    <motion.div
                        {...fadeUp(0.2)}
                        className="md:col-span-2 rounded-3xl p-5 sm:p-6"
                        style={cardBase}
                    >
                        <div className="grid grid-cols-3" style={{ divideColor: "rgba(255,255,255,0.06)" }}>
                            {[
                                { value: "2", label: "Core Projects", desc: "Built & deployed", color: "#f0c040" },
                                { value: "Python", label: "Core Stack", desc: "React & Django", color: "#a855f7" },
                                { value: "Infinity", label: "Commitment", desc: "Lifelong learning", color: "#14b8a6" },
                            ].map(({ value, label, desc, color }, i) => (
                                <div
                                    key={label}
                                    className="flex flex-col items-center justify-center py-3 sm:py-4 px-2 sm:px-4 text-center"
                                    style={{
                                        borderRight: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none",
                                        borderBottom: "none",
                                    }}
                                >
                                    <span className="text-xl sm:text-2xl md:text-3xl font-extrabold font-heading break-words" style={{ color }}>
                                        {value}
                                    </span>
                                    <span className="text-text-primary text-xs sm:text-sm font-semibold leading-tight mt-1">{label}</span>
                                    <span className="text-text-secondary/60 text-[10px] sm:text-xs mt-0.5 leading-snug">{desc}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* <motion.div
                        {...fadeUp(0.25)}
                        className="rounded-3xl p-5 sm:p-6 flex flex-col gap-3"
                        style={{
                            ...cardBase,
                            background: "linear-gradient(135deg, rgba(168,85,247,0.08) 0%, rgba(255,255,255,0.02) 100%)",
                        }}
                    >
                        <div className="flex items-center gap-2 mb-1">
                            <div
                                className="w-8 h-8 rounded-xl flex items-center justify-center"
                                style={{ background: "rgba(168,85,247,0.15)", border: "1px solid rgba(168,85,247,0.25)" }}
                            >
                                <FaGraduationCap className="text-purple-400 text-sm" />
                            </div>
                            <span className="text-text-secondary/60 text-xs font-mono uppercase tracking-widest">Education</span>
                        </div>
                        <div>
                            <p className="text-text-primary font-semibold text-sm leading-snug">MCA - Master of Computer Application</p>
                            <p className="text-text-secondary/70 text-xs mt-1">Excel Engineering College</p>
                        </div>
                    </motion.div>

                    <motion.div
                        {...fadeUp(0.3)}
                        className="md:col-span-2 rounded-3xl p-5 sm:p-6"
                        style={cardBase}
                    >
                        <div
                            className="relative overflow-hidden rounded-2xl p-4 sm:p-6 md:p-7"
                            style={{
                                background: "linear-gradient(135deg, rgba(240,192,64,0.08) 0%, rgba(255,255,255,0.02) 55%, rgba(255,255,255,0.03) 100%)",
                                border: "1px solid rgba(240,192,64,0.14)",
                            }}
                        >
                            <div
                                className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-2xl"
                                style={{ background: "linear-gradient(to bottom, #f0c040, rgba(240,192,64,0.25))" }}
                            />
                            <p className="text-accent/80 text-[11px] sm:text-xs font-mono uppercase tracking-[0.28em] mb-3 pl-4">
                                Tech I Work With
                            </p>
                            <p className="pl-4 text-text-secondary text-sm sm:text-base leading-relaxed max-w-2xl">
                                I work across frontend, backend, databases, and design tools to build responsive and practical web applications.
                            </p>
                            <div className="pl-4 mt-5 flex flex-wrap gap-2.5">
                                {techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-2 rounded-full text-xs sm:text-sm font-medium text-text-primary"
                                        style={{
                                            background: "rgba(255,255,255,0.05)",
                                            border: "1px solid rgba(255,255,255,0.08)",
                                        }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div> */}
                </div>
            </div>
        </section>
    );
};

export default About;
