import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCheck } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

const experiences = [
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

const cardVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: (i) => ({
        opacity: 1,
        x: 0,
        transition: { duration: 0.55, delay: i * 0.15, ease: "easeOut" },
    }),
};

const Experience = () => {
    return (
        <section id="experience" className="py-16 sm:py-20 md:py-24 bg-primary relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
            <div
                className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
                style={{
                    background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)",
                    transform: "translateY(-50%)",
                }}
            />
            <div
                className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
                style={{
                    background: "radial-gradient(circle, rgba(168,85,247,0.05) 0%, transparent 70%)",
                }}
            />

            <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10">
                {/* Section Heading */}
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
                            borderColor: "rgba(99,102,241,0.25)",
                            background: "rgba(99,102,241,0.08)",
                        }}
                    >

                        My Journey
                    </span>
                    <h2 className="section-title mt-1">
                        Work <span className="text-gradient">Experience</span>
                    </h2>
                </motion.div>

                {/* Timeline Cards */}
                <div className="relative">
                    {/* Vertical track line */}
                    <div
                        className="absolute left-[22px] top-4 bottom-4 w-px hidden sm:block"
                        style={{
                            background:
                                "linear-gradient(to bottom, transparent, rgba(99,102,241,0.3) 15%, rgba(99,102,241,0.3) 85%, transparent)",
                        }}
                    />

                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                custom={index}
                                variants={cardVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-60px" }}
                                className="flex gap-4 sm:gap-8 group"
                            >
                                {/* Step indicator — visible on sm+ */}
                                <div className="hidden sm:flex flex-col items-center flex-shrink-0">
                                    <motion.div
                                        whileHover={{ scale: 1.15 }}
                                        className="w-11 h-11 rounded-full flex items-center justify-center font-mono font-bold text-sm z-10 border flex-shrink-0 transition-all duration-300"
                                        style={{
                                            background: `radial-gradient(circle at 40% 40%, ${exp.glowColor}, transparent)`,
                                            borderColor: exp.borderColor,
                                            color: exp.accentColor,
                                            boxShadow: `0 0 18px ${exp.glowColor}`,
                                        }}
                                    >
                                        {exp.id}
                                    </motion.div>
                                </div>

                                {/* Card */}
                                <motion.div
                                    whileHover={{ y: -4, scale: 1.005 }}
                                    transition={{ duration: 0.25 }}
                                    className="flex-1 relative rounded-2xl overflow-hidden"
                                    style={{
                                        background: "rgba(255,255,255,0.03)",
                                        border: `1px solid rgba(255,255,255,0.07)`,
                                        backdropFilter: "blur(12px)",
                                        boxShadow: "0 4px 30px rgba(0,0,0,0.2)",
                                    }}
                                >
                                    {/* Colored left accent bar */}
                                    <div
                                        className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                                        style={{ background: exp.accentColor }}
                                    />

                                    {/* Hover glow overlay */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                                        style={{
                                            background: `linear-gradient(135deg, ${exp.glowColor} 0%, transparent 60%)`,
                                        }}
                                    />

                                    <div className="relative z-10 p-5 sm:p-6 pl-6 sm:pl-8">
                                        {/* Top row: role + badges */}
                                        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                                            <div>
                                                <h3
                                                    className="text-lg sm:text-xl font-bold text-text-primary transition-colors duration-300 group-hover:text-white mb-1"
                                                >
                                                    {exp.role}
                                                </h3>
                                                <div className="flex flex-wrap items-center gap-3 text-sm text-text-secondary">
                                                    <span className="flex items-center gap-1.5">
                                                        <FaBriefcase
                                                            className="text-xs"
                                                            style={{ color: exp.accentColor }}
                                                        />
                                                        {exp.company}
                                                    </span>
                                                    <span className="opacity-30">|</span>
                                                    <span className="flex items-center gap-1.5">
                                                        <FaMapMarkerAlt
                                                            className="text-xs"
                                                            style={{ color: exp.accentColor }}
                                                        />
                                                        {exp.location}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Badges */}
                                            <div className="flex flex-wrap gap-2 flex-shrink-0">
                                                <span
                                                    className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full border"
                                                    style={{
                                                        color: exp.tagText,
                                                        background: exp.tagBg,
                                                        borderColor: exp.borderColor,
                                                    }}
                                                >
                                                    <FaCalendarAlt className="text-[9px]" />
                                                    {exp.duration}
                                                </span>
                                                <span
                                                    className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full border"
                                                    style={{
                                                        color: exp.tagText,
                                                        background: exp.tagBg,
                                                        borderColor: exp.borderColor,
                                                    }}
                                                >
                                                    {exp.type}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Divider */}
                                        <div
                                            className="mb-4 h-px"
                                            style={{
                                                background: `linear-gradient(to right, ${exp.borderColor}, transparent)`,
                                            }}
                                        />

                                        {/* Description bullets */}
                                        <ul className="space-y-2">
                                            {exp.desc.map((item, i) => (
                                                <li
                                                    key={i}
                                                    className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed"
                                                >
                                                    <span
                                                        className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                                                        style={{ background: exp.accentColor }}
                                                    />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
