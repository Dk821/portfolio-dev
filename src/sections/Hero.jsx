import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaDownload, FaArrowDown } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import heroAvatar from "../assets/hero-avatar-removebg-preview.png";

const resumeFilePath = "/Dineshkumar N.pdf";

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay, ease: "easeOut" },
});

const Hero = () => {
    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center relative overflow-hidden bg-primary pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24 lg:p-20"
        >
            {/* ── Background Orbs ── */}
            <div
                className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full blur-[180px] pointer-events-none animate-glow-pulse"
                style={{ background: "radial-gradient(circle, rgba(240,192,64,0.08) 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
            />
            <div
                className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[160px] pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(139,92,246,0.09) 0%, transparent 70%)", transform: "translate(-25%, 30%)" }}
            />
            <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

            {/* ── Content ── */}
            <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10 w-full">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-8">

                    {/* ════ LEFT: Text ════ */}
                    <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left max-w-xl">

                        {/* Status pill */}
                        <motion.div {...fadeUp(0.1)} className="mb-5 sm:mb-6">
                            <span
                                className="inline-flex items-center justify-center gap-2 text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] sm:tracking-widest px-3 sm:px-4 py-2 rounded-full border text-center"
                                style={{
                                    color: "#f0c040",
                                    background: "rgba(240,192,64,0.08)",
                                    borderColor: "rgba(240,192,64,0.22)",
                                }}
                            >
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                Open to Opportunities
                            </span>
                        </motion.div>

                        {/* Name */}
                        <motion.div {...fadeUp(0.2)}>
                            <p className="text-text-secondary text-sm sm:text-base md:text-lg font-medium mb-1">Hi, I'm</p>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-text-primary leading-[1.05] mb-4 break-words">
                                Dineshkumar<span className="text-accent">.</span>
                            </h1>
                        </motion.div>

                        {/* Typewriter Role */}
                        <motion.div {...fadeUp(0.35)} className="mb-5 flex items-center justify-center md:justify-start gap-2 sm:gap-3 w-full">
                            <div
                                className="w-6 sm:w-8 h-0.5 rounded-full flex-shrink-0"
                                style={{ background: "linear-gradient(to right, #f0c040, transparent)" }}
                            />
                            <div
                                className="text-base sm:text-xl md:text-2xl font-heading font-semibold min-w-0"
                                style={{
                                    background: "linear-gradient(135deg, #f0c040, #c084fc)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    minHeight: "1.5em",
                                }}
                            >
                                <Typewriter
                                    options={{
                                        strings: ["Full Stack Developer", "Python Developer", "Graphic Designer", "UI/UX Designer", "AI Enthusiast"],
                                        autoStart: true,
                                        loop: true,
                                        delay: 60,
                                        deleteSpeed: 35,
                                    }}
                                />
                            </div>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            {...fadeUp(0.45)}
                            className="text-text-secondary text-sm sm:text-base leading-relaxed mb-7 sm:mb-8 max-w-md"
                        >
                            Motivated <span className="text-text-primary font-semibold">Full Stack Developer</span> with strong skills in React, Python (Django/Flask), and database management. Seeking to contribute to scalable, user-focused solutions while growing as a professional developer.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div {...fadeUp(0.55)} className="flex flex-col sm:flex-row w-full sm:w-auto gap-3 mb-8">
                            <a
                                href={resumeFilePath}
                                download="Dineshkumar N Resume.pdf"
                                className="btn-primary flex items-center justify-center gap-2 text-sm w-full sm:w-auto"
                            >
                                <FaDownload className="text-xs" />
                                Download CV
                            </a>
                            <Link
                                to="contact"
                                smooth={true}
                                duration={600}
                                className="btn-outline cursor-pointer text-sm text-center w-full sm:w-auto"
                            >
                                Hire Me
                            </Link>
                        </motion.div>

                        {/* Social + quick stats */}
                        <motion.div {...fadeUp(0.65)} className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
                            {/* Socials */}
                            <div className="flex gap-2">
                                {[
                                    { href: "https://github.com/Dk821", icon: <FaGithub />, label: "GitHub" },
                                    { href: "https://www.linkedin.com/in/n-dineshkumar/", icon: <FaLinkedin />, label: "LinkedIn" },
                                ].map(({ href, icon, label }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                        className="w-10 h-10 rounded-xl flex items-center justify-center text-text-secondary hover:text-accent transition-all duration-300 text-lg group"
                                        style={{
                                            background: "rgba(255,255,255,0.04)",
                                            border: "1px solid rgba(255,255,255,0.08)",
                                        }}
                                        onMouseEnter={e => {
                                            e.currentTarget.style.borderColor = "rgba(240,192,64,0.3)";
                                            e.currentTarget.style.boxShadow = "0 0 16px rgba(240,192,64,0.12)";
                                        }}
                                        onMouseLeave={e => {
                                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                                            e.currentTarget.style.boxShadow = "none";
                                        }}
                                    >
                                        <span className="group-hover:scale-110 transition-transform inline-block">{icon}</span>
                                    </a>
                                ))}
                            </div>

                            {/* Divider */}
                            {/* <div className="hidden sm:block w-px h-8 bg-white/10" /> */}

                            {/* Mini stats */}
                            {/* <div className="flex gap-4">
                                {[
                                    { value: "3+", label: "Projects" },
                                    { value: "MERN", label: "Stack" },
                                ].map(({ value, label }) => (
                                    <div key={label} className="text-center">
                                        <p className="text-accent font-bold text-sm font-heading leading-tight">{value}</p>
                                        <p className="text-text-secondary/60 text-xs font-mono">{label}</p>
                                    </div>
                                ))}
                            </div> */}
                        </motion.div>
                    </div>

                    {/* ════ RIGHT: Avatar ════ */}
                    <motion.div
                        initial={{ opacity: 0, x: 50, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.85, delay: 0.2, ease: "easeOut" }}
                        className="flex-shrink-0 flex justify-center items-center relative w-full md:w-auto"
                    >
                        <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[360px] md:h-[360px] flex items-center justify-center">

                            {/* Outer slow-spin ring */}
                            <div
                                className="absolute inset-0 rounded-full border border-dashed animate-spin-slow"
                                style={{ borderColor: "rgba(240,192,64,0.15)" }}
                            />

                            {/* Static ring */}
                            <div
                                className="absolute inset-5 rounded-full"
                                style={{
                                    border: "1px solid rgba(240,192,64,0.1)",
                                    boxShadow: "0 0 80px rgba(240,192,64,0.08), inset 0 0 40px rgba(240,192,64,0.04)",
                                }}
                            />

                            {/* Inner glow */}
                            <div
                                className="absolute inset-16 rounded-full blur-3xl"
                                style={{ background: "rgba(240,192,64,0.12)" }}
                            />

                            {/* Avatar image */}
                            <motion.img
                                src={heroAvatar}
                                alt="Dineshkumar.N"
                                className="relative z-10 w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 object-contain animate-float"
                                style={{ filter: "drop-shadow(0 20px 60px rgba(0,0,0,0.8))" }}
                                whileHover={{ scale: 1.04 }}
                                transition={{ duration: 0.4 }}
                            />

                            {/* Floating chips */}
                            {[
                                { label: "React", emoji: "⚛️", pos: { top: "8%", left: "-4%" }, delay: 0 },
                                { label: "AI", emoji: "🤖", pos: { top: "12%", right: "-4%" }, delay: 1.2 },
                                { label: "Node", emoji: "🟩", pos: { bottom: "18%", left: "-8%" }, delay: 0.7 },
                                { label: "Gen AI", emoji: "✨", pos: { bottom: "12%", right: "-4%" }, delay: 1.8 },
                            ].map(({ label, emoji, pos, delay }) => (
                                <motion.div
                                    key={label}
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ repeat: Infinity, duration: 3 + delay * 0.5, ease: "easeInOut", delay }}
                                    className="absolute z-20 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                                    style={{
                                        background: "rgba(255,255,255,0.06)",
                                        border: "1px solid rgba(255,255,255,0.12)",
                                        backdropFilter: "blur(12px)",
                                        color: "#f0f0f5",
                                        ...pos,
                                    }}
                                >
                                    <span>{emoji}</span>
                                    {label}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* ── Scroll Indicator ── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
            >
                <span className="text-text-secondary/50 text-[10px] tracking-[0.2em] uppercase font-mono">Scroll</span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                >
                    <FaArrowDown className="text-accent/40 text-xs" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
