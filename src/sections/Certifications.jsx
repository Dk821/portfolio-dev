import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaAward, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

const certificateBasePath = "/certificates";

const certifications = [
    {
        title: "Fundamentals of UI/UX Design",
        issuer: "Coursera - Microsoft",
        date: "2024",
        link: "#",
        color: "#60a5fa",
        glow: "rgba(96,165,250,0.12)",
        image: `${certificateBasePath}/Fundamentals of UIUX Design.png`,
    },
    {
        title: "Programming for Everybody",
        issuer: "Coursera",
        date: "2024",
        link: "#",
        color: "#fbbf24",
        glow: "rgba(251,191,36,0.12)",
        image: `${certificateBasePath}/Programming for Everybody.png`,
    },
    {
        title: "Foundations of Coding Front-End",
        issuer: "Coursera - Microsoft",
        date: "2024",
        link: "#",
        color: "#22d3ee",
        glow: "rgba(34,211,238,0.12)",
        image: `${certificateBasePath}/Foundations of Coding Front-End.png`,
    },
    {
        title: "Django Masterclass",
        issuer: "Udemy",
        date: "2024",
        link: "#",
        color: "#4ade80",
        glow: "rgba(74,222,128,0.12)",
        image: `${certificateBasePath}/Django Masterclass.png`,
    },
];

const Certifications = () => {
    const [selectedCert, setSelectedCert] = useState(null);
    const [imageError, setImageError] = useState(false);

    useEffect(() => {
        if (!selectedCert) {
            document.body.style.overflow = "";
            return undefined;
        }

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setSelectedCert(null);
            }
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedCert]);

    useEffect(() => {
        setImageError(false);
    }, [selectedCert]);

    return (
        <section id="certifications" className="py-16 sm:py-20 md:py-24 bg-secondary relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
            <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(240,192,64,0.05) 0%, transparent 70%)" }} />

            <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 sm:mb-16"
                >
                    <p className="text-accent/70 text-xs uppercase tracking-[0.25em] font-mono mb-3">My Learning Journey</p>
                    <h2 className="section-title mb-4">
                        Certifications <span className="text-gradient">& Awards</span>
                    </h2>
                    <p className="section-subtitle">
                        Tap or click a certification card to open its full preview.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                    {certifications.map((cert, index) => (
                        <motion.button
                            type="button"
                            key={cert.title}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.07, duration: 0.5 }}
                            whileHover={{ y: -6 }}
                            onClick={() => setSelectedCert(cert)}
                            className="group relative rounded-2xl p-5 overflow-hidden cursor-pointer flex flex-col gap-4 transition-all duration-400 text-left"
                            style={{
                                background: "rgba(255,255,255,0.03)",
                                border: "1px solid rgba(255,255,255,0.07)",
                                backdropFilter: "blur(10px)",
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.borderColor = `${cert.color}35`;
                                e.currentTarget.style.boxShadow = `0 8px 30px ${cert.glow}`;
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                                e.currentTarget.style.boxShadow = "none";
                            }}
                        >
                            {/* Top accent bar */}
                            <div
                                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                                style={{ background: `linear-gradient(to right, ${cert.color}, transparent)` }}
                            />

                            {/* Number watermark */}
                            <span
                                className="absolute top-3 right-4 text-xs font-mono font-bold opacity-20"
                                style={{ color: cert.color }}
                            >
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            {/* Icon */}
                            <div
                                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                                style={{
                                    background: cert.glow,
                                    border: `1px solid ${cert.color}30`,
                                }}
                            >
                                <FaAward className="text-xl" style={{ color: cert.color }} />
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <h3 className="font-bold text-text-primary text-sm leading-snug mb-2 pr-6 group-hover:text-white transition-colors duration-300">
                                    {cert.title}
                                </h3>
                                <div className="flex items-center gap-2 flex-wrap">
                                    <span
                                        className="text-xs font-mono px-2 py-0.5 rounded-full"
                                        style={{ background: cert.glow, color: cert.color }}
                                    >
                                        {cert.issuer}
                                    </span>
                                    <span className="text-text-secondary/40 text-xs">•</span>
                                    <span className="text-text-secondary/60 text-xs">{cert.date}</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="text-text-secondary/55 text-xs font-mono uppercase tracking-[0.2em]">
                                    View Certificate
                                </span>
                                <FaExternalLinkAlt
                                    className="text-xs opacity-50 group-hover:opacity-80 transition-opacity duration-300"
                                    style={{ color: cert.color }}
                                />
                            </div>
                        </motion.button>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedCert && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm p-3 sm:p-6"
                        onClick={() => setSelectedCert(null)}
                    >
                        <div className="w-full h-full flex items-center justify-center">
                            <motion.div
                                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 24, scale: 0.96 }}
                                transition={{ duration: 0.25, ease: "easeOut" }}
                                onClick={(event) => event.stopPropagation()}
                                className="relative w-full max-w-5xl max-h-[92vh] overflow-hidden rounded-[28px] border"
                                style={{
                                    background: "rgba(12,12,18,0.96)",
                                    borderColor: `${selectedCert.color}35`,
                                    boxShadow: `0 20px 80px ${selectedCert.glow}`,
                                }}
                            >
                                <button
                                    type="button"
                                    onClick={() => setSelectedCert(null)}
                                    aria-label="Close certificate preview"
                                    className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-10 h-10 rounded-full flex items-center justify-center text-white/80 hover:text-white transition-colors"
                                    style={{
                                        background: "rgba(255,255,255,0.08)",
                                        border: "1px solid rgba(255,255,255,0.12)",
                                    }}
                                >
                                    <FaTimes className="text-sm" />
                                </button>

                                <div className="max-h-[92vh] overflow-y-auto">
                                    <div className="p-4 sm:p-6 md:p-8">
                                        <div
                                            className="rounded-[24px] border p-4 sm:p-6 md:p-8"
                                            style={{
                                                background: `radial-gradient(circle at top left, ${selectedCert.glow} 0%, transparent 30%), linear-gradient(145deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))`,
                                                borderColor: `${selectedCert.color}28`,
                                            }}
                                        >
                                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5 mb-6 sm:mb-8">
                                                <div>
                                                    <p className="text-[11px] sm:text-xs uppercase tracking-[0.28em] font-mono mb-3" style={{ color: selectedCert.color }}>
                                                        Certificate Preview
                                                    </p>
                                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white leading-tight max-w-2xl">
                                                        {selectedCert.title}
                                                    </h3>
                                                </div>

                                                <div
                                                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                                                    style={{
                                                        background: selectedCert.glow,
                                                        border: `1px solid ${selectedCert.color}35`,
                                                    }}
                                                >
                                                    <FaAward className="text-2xl" style={{ color: selectedCert.color }} />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.85fr] gap-4 sm:gap-6">
                                                <div
                                                    className="rounded-[22px] border p-3 sm:p-4 md:p-5 overflow-hidden"
                                                    style={{
                                                        background: "rgba(255,255,255,0.03)",
                                                        borderColor: "rgba(255,255,255,0.08)",
                                                    }}
                                                >
                                                    {imageError ? (
                                                        <div className="min-h-[320px] sm:min-h-[420px] md:min-h-[560px] rounded-[18px] border border-dashed border-white/10 flex flex-col items-center justify-center text-center px-6">
                                                            <FaAward className="text-3xl mb-4" style={{ color: selectedCert.color }} />
                                                            <p className="text-white font-semibold text-lg mb-2">
                                                                Certificate image not found
                                                            </p>
                                                            <p className="text-text-secondary text-sm leading-relaxed max-w-md">
                                                                Add the image file at <span className="text-white font-mono">{selectedCert.image}</span> and this popup will show the certificate here.
                                                            </p>
                                                        </div>
                                                    ) : (
                                                        <img
                                                            src={selectedCert.image}
                                                            alt={selectedCert.title}
                                                            className="w-full h-auto max-h-[72vh] object-contain rounded-[18px] bg-black/20"
                                                            onError={() => setImageError(true)}
                                                        />
                                                    )}
                                                </div>

                                                <div
                                                    className="rounded-[22px] border p-5 sm:p-6 flex flex-col justify-between"
                                                    style={{
                                                        background: "rgba(255,255,255,0.02)",
                                                        borderColor: "rgba(255,255,255,0.08)",
                                                    }}
                                                >
                                                    <div>
                                                        <p className="text-text-secondary/55 text-[11px] uppercase tracking-[0.2em] font-mono mb-3">
                                                            Certificate Details
                                                        </p>
                                                        <div className="space-y-3">
                                                            <div>
                                                                <p className="text-text-secondary/55 text-[11px] uppercase tracking-[0.2em] font-mono mb-1">
                                                                    Issuer
                                                                </p>
                                                                <p className="text-white font-semibold text-sm sm:text-base">
                                                                    {selectedCert.issuer}
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <p className="text-text-secondary/55 text-[11px] uppercase tracking-[0.2em] font-mono mb-1">
                                                                    Year
                                                                </p>
                                                                <p className="text-white font-semibold text-sm sm:text-base">
                                                                    {selectedCert.date}
                                                                </p>
                                                            </div>
                                                            <div>
                                                                <p className="text-text-secondary/55 text-[11px] uppercase tracking-[0.2em] font-mono mb-1">
                                                                    Image Path
                                                                </p>
                                                                <p className="text-text-secondary text-sm break-all">
                                                                    {selectedCert.image}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="mt-6 pt-5 border-t border-white/8 flex flex-col sm:flex-row gap-3">
                                                        <button
                                                            type="button"
                                                            onClick={() => setSelectedCert(null)}
                                                            className="btn-outline w-full sm:w-auto text-center"
                                                        >
                                                            Close
                                                        </button>
                                                        {selectedCert.link !== "#" && (
                                                            <a
                                                                href={selectedCert.link}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="btn-primary w-full sm:w-auto text-center"
                                                            >
                                                                Open Credential
                                                            </a>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Certifications;
