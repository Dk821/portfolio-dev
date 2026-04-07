import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

const navLinks = [
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Experience", to: "experience" },
    { name: "Certifications", to: "certifications" },
    { name: "Contact", to: "contact" },
];

const socials = [
    { href: "https://github.com/Dk821", icon: <FaGithub />, label: "GitHub" },
    { href: "https://www.linkedin.com/in/n-dineshkumar/", icon: <FaLinkedin />, label: "LinkedIn" },
    { href: "mailto:dhineshkumar6353@gmail.com", icon: <FaEnvelope />, label: "Email" },
];

const Footer = () => {
    return (
        <footer className="relative bg-secondary border-t overflow-hidden" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
            {/* Top glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-24 blur-3xl rounded-full pointer-events-none"
                style={{ background: "radial-gradient(ellipse, rgba(240,192,64,0.06) 0%, transparent 70%)" }} />

            {/* Rainbow top border line */}
            <div className="h-px w-full"
                style={{ background: "linear-gradient(to right, transparent, rgba(240,192,64,0.4), rgba(139,92,246,0.3), rgba(96,165,250,0.25), transparent)" }} />

            <div className="container mx-auto px-4 sm:px-6 py-10 relative z-10">
                {/* Main footer row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 items-center text-center md:text-left">

                    {/* Brand */}
                    <div>
                        <Link to="hero" smooth duration={600} className="cursor-pointer inline-block mb-2">
                            <span className="text-xl font-heading font-bold text-text-primary hover:text-accent transition-colors">
                                Dineshkumar<span className="text-accent">.</span>
                            </span>
                        </Link>
                        <p className="text-text-secondary text-sm">Full Stack Developer</p>
                        <p className="text-text-secondary/50 text-xs mt-1 font-mono">Coimbatore, India</p>
                    </div>

                    {/* Nav links */}
                    <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
                        {navLinks.map(link => (
                            <Link
                                key={link.name}
                                to={link.to}
                                smooth
                                duration={600}
                                offset={-60}
                                className="text-text-secondary hover:text-accent text-sm cursor-pointer transition-colors duration-300 font-medium"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Socials + Back to top */}
                    <div className="flex items-center justify-center md:justify-end gap-3">
                        {socials.map(({ href, icon, label }) => (
                            <motion.a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                whileHover={{ y: -3, scale: 1.1 }}
                                transition={{ duration: 0.2 }}
                                className="w-9 h-9 rounded-xl flex items-center justify-center text-text-secondary hover:text-accent transition-colors duration-300 text-base"
                                style={{
                                    background: "rgba(255,255,255,0.04)",
                                    border: "1px solid rgba(255,255,255,0.08)",
                                }}
                            >
                                {icon}
                            </motion.a>
                        ))}

                        <Link
                            to="hero"
                            smooth
                            duration={700}
                            aria-label="Back to top"
                            className="w-9 h-9 rounded-xl flex items-center justify-center text-text-secondary hover:text-accent transition-colors duration-300 cursor-pointer ml-2"
                            style={{
                                background: "rgba(240,192,64,0.07)",
                                border: "1px solid rgba(240,192,64,0.18)",
                            }}
                        >
                            <FaArrowUp className="text-sm" />
                        </Link>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="h-px mb-6" style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)" }} />

                <p className="text-center text-text-secondary/50 text-xs font-mono">
                    © {new Date().getFullYear()} Dineshkumar.N · Built with{" "}
                    <FaHeart className="inline text-accent/60 text-xs mx-0.5" />
                    using React & Tailwind CSS
                </p>
            </div>
        </footer>
    );
};

export default Footer;
