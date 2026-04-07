import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />,   href: "https://github.com/DineshKumarN",          label: "GitHub"   },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/n-dineshkumar/", label: "LinkedIn" },
    { icon: <FaTwitter />,  href: "https://twitter.com/",                       label: "Twitter"  },
];

const Contact = () => (
    <section id="contact" className="relative py-16 md:py-20 bg-primary overflow-hidden">

        {/* ── Background layers ── */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent" />

        {/* Large soft blobs */}
        <div
            className="absolute -top-24 -left-24 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(240,192,64,0.1) 0%, transparent 70%)" }}
        />
        <div
            className="absolute -bottom-24 -right-24 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)" }}
        />

        <div className="dot-grid absolute inset-0 opacity-[0.08] pointer-events-none" />

        {/* ── Content ── */}
        <div className="relative z-10 container mx-auto px-6 max-w-xl">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-3xl overflow-hidden text-center px-6 py-10 md:px-12 md:py-12"
                style={{
                    background: "rgba(255,255,255,0.035)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
                }}
            >
                {/* Rainbow top accent strip */}
                <div
                    className="absolute top-0 inset-x-0 h-[2px]"
                    style={{
                        background: "linear-gradient(90deg, #f0c040, #e8a020, #a855f7, #60a5fa)",
                    }}
                />

                {/* Soft inner glow */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(240,192,64,0.06) 0%, transparent 70%)",
                    }}
                />

                {/* Content */}
                <div className="relative z-10">

                    {/* Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="font-heading font-bold text-text-primary leading-tight mb-4"
                        style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
                    >
                        Let's Work <span className="text-gradient">Together</span>
                    </motion.h2>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="text-text-secondary text-sm md:text-base leading-relaxed mb-8 max-w-xs mx-auto"
                    >
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </motion.p>

                    {/* CTA Button */}
                    <motion.a
                        href="mailto:dineshkumarn821@gmail.com"
                        initial={{ opacity: 0, scale: 0.96 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-flex items-center gap-2 font-bold rounded-full px-8 py-3 text-sm mb-8"
                        style={{
                            background: "linear-gradient(135deg, #f0c040, #e8a020)",
                            color: "#0a0a0f",
                            boxShadow: "0 4px 20px rgba(240,192,64,0.3)",
                        }}
                    >
                        <FaEnvelope className="text-xs" />
                        Say Hello
                    </motion.a>

                    {/* Divider */}
                    <motion.div
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.25 }}
                        className="w-10 h-px mx-auto mb-6"
                        style={{ background: "rgba(255,255,255,0.1)" }}
                    />

                    {/* Social Icons */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className="flex items-center justify-center gap-4"
                    >
                        {socials.map(({ icon, href, label }, i) => (
                            <motion.a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                initial={{ opacity: 0, y: 8 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.35 + i * 0.05 }}
                                whileHover={{ y: -2, scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-9 h-9 rounded-xl flex items-center justify-center text-base transition-all duration-200"
                                style={{
                                    background: "rgba(255,255,255,0.05)",
                                    border: "1px solid rgba(255,255,255,0.08)",
                                    color: "#8a8a9a",
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.borderColor = "rgba(240,192,64,0.3)";
                                    e.currentTarget.style.color = "#f0c040";
                                    e.currentTarget.style.background = "rgba(240,192,64,0.06)";
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                                    e.currentTarget.style.color = "#8a8a9a";
                                    e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                                }}
                            >
                                {icon}
                            </motion.a>
                        ))}
                    </motion.div>

                </div>
            </motion.div>
        </div>
    </section>
);

export default Contact;
