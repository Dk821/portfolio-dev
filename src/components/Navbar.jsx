import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", to: "about" },
        { name: "Experience", to: "experience" },
        { name: "Skills", to: "skills" },
        { name: "Projects", to: "projects" },
        { name: "Certifications", to: "certifications" },
        { name: "Contact", to: "contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
                    ? "glass-navbar shadow-[0_4px_30px_rgba(0,0,0,0.4)] py-3"
                    : "bg-transparent py-4 md:py-5"
                }`}
        >
            <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center gap-4">
                {/* Logo */}
                <Link
                    to="hero"
                    smooth={true}
                    duration={600}
                    className="cursor-pointer group"
                >
                    <span className="text-lg sm:text-xl font-heading font-bold text-text-primary group-hover:text-accent transition-colors duration-300">
                        Dineshkumar
                    </span>
                    <span
                        className="text-accent text-2xl font-extrabold"
                        style={{ textShadow: "0 0 20px rgba(240,192,64,0.5)" }}
                    >
                        .
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={600}
                            spy={true}
                            activeClass="nav-link-active"
                            offset={-60}
                            className="text-text-secondary hover:text-accent cursor-pointer transition-all duration-300 font-medium text-sm relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-accent to-transparent group-hover:w-full transition-all duration-300" />
                        </Link>
                    ))}
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-sm py-2.5 px-6"
                    >
                        Resume
                    </a>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl glass-card text-text-primary hover:text-accent transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <AnimatePresence mode="wait">
                        {isOpen ? (
                            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                                <FaTimes className="text-lg" />
                            </motion.div>
                        ) : (
                            <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                                <FaBars className="text-lg" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden overflow-hidden glass-navbar border-t border-glass-border"
                    >
                        <div className="container mx-auto px-4 sm:px-6 py-6 flex flex-col gap-5">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.07 }}
                                >
                                    <Link
                                        to={link.to}
                                        smooth={true}
                                        duration={600}
                                        offset={-60}
                                        className="block text-lg text-text-primary hover:text-accent font-medium cursor-pointer transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <span className="text-accent/40 text-sm font-mono mr-2">0{i + 1}.</span>
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: navLinks.length * 0.07 }}
                            >
                                <a
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary inline-block text-center text-sm py-3"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Download Resume
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
