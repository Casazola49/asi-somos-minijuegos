"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ComicButton } from "@/components/ui/ComicButton";
import { Facebook, Youtube, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Parallax transforms
    const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
    const decorRotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
    const decorScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.5]);

    // Comic action words
    const actionWords = [
        { text: "¡POW!", color: "bg-comic-red", x: "5%", y: "15%", rotate: -15, delay: 0 },
        { text: "¡ZAP!", color: "bg-comic-blue", x: "85%", y: "20%", rotate: 12, delay: 0.2 },
        { text: "¡BOOM!", color: "bg-comic-yellow", x: "10%", y: "75%", rotate: -8, delay: 0.4 },
        { text: "¡WOW!", color: "bg-comic-pink", x: "80%", y: "70%", rotate: 10, delay: 0.6 },
    ];

    return (
        <div ref={containerRef} className="relative w-full overflow-hidden">
            {/* Hero Section with Parallax */}
            <section className="relative w-full min-h-screen bg-comic-purple flex flex-col justify-center items-center overflow-hidden">
                {/* Animated Background Rays */}
                <motion.div
                    className="absolute inset-0 z-0"
                    style={{ rotate: decorRotate, scale: decorScale }}
                >
                    <div className="absolute inset-0 bg-[conic-gradient(from_0deg,_transparent_0deg,_rgba(255,255,255,0.1)_10deg,_transparent_20deg)] bg-center" />
                </motion.div>

                {/* Floating Comic Dots Pattern */}
                <div className="absolute inset-0 z-0 opacity-20">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                    }} />
                </div>

                {/* Animated Action Words */}
                {actionWords.map((word, index) => (
                    <motion.div
                        key={word.text}
                        initial={{ scale: 0, rotate: word.rotate - 20 }}
                        animate={{ scale: 1, rotate: word.rotate }}
                        transition={{
                            delay: word.delay + 0.5,
                            duration: 0.6,
                            type: "spring",
                            stiffness: 200
                        }}
                        className={`absolute ${word.color} text-white font-display text-2xl md:text-4xl px-4 py-2 border-4 border-black shadow-comic z-20 select-none hidden md:block`}
                        style={{ left: word.x, top: word.y }}
                    >
                        {word.text}
                    </motion.div>
                ))}

                {/* Main Hero Image with Parallax */}
                <motion.div
                    style={{ y: heroY, scale: heroScale, opacity: heroOpacity }}
                    className="relative z-10 w-full flex justify-center px-4"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0, y: 50 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                        className="relative"
                    >
                        {/* Glow Effect Behind Image */}
                        <div className="absolute inset-0 bg-comic-pink/30 blur-3xl rounded-full scale-110 animate-pulse" />

                        <Image
                            src="/images/hero-bg.png"
                            alt="Así Somos"
                            width={1024}
                            height={932}
                            className="w-full h-auto max-w-4xl object-contain drop-shadow-2xl relative z-10"
                            priority
                        />
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="flex flex-col items-center gap-2 text-white"
                    >
                        <span className="font-bold uppercase tracking-widest text-sm">Scroll</span>
                        <ChevronDown className="w-8 h-8 animate-bounce" />
                    </motion.div>
                </motion.div>

                {/* Decorative radial gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.3)_100%)] z-0 pointer-events-none" />
            </section>

            {/* Diagonal Divider */}
            <div className="relative h-24 bg-comic-purple z-20">
                <svg className="absolute bottom-0 w-full h-24" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon fill="#F97316" points="0,100 100,0 100,100" />
                </svg>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-black z-10" />
            </div>

            {/* "No te lo pierdas" Section */}
            <section className="relative bg-comic-orange py-20 overflow-hidden">
                {/* Animated Background Bubbles - Fixed positions to avoid hydration errors */}
                <div className="absolute inset-0 overflow-hidden z-0">
                    <motion.div
                        className="absolute rounded-full bg-white/10 border-2 border-white/20"
                        style={{ width: 80, height: 80, left: "10%", top: "20%" }}
                        animate={{ y: [-15, 15] }}
                        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                    />
                    <motion.div
                        className="absolute rounded-full bg-white/10 border-2 border-white/20"
                        style={{ width: 120, height: 120, left: "75%", top: "15%" }}
                        animate={{ y: [10, -20] }}
                        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                    />
                    <motion.div
                        className="absolute rounded-full bg-white/10 border-2 border-white/20"
                        style={{ width: 60, height: 60, left: "30%", top: "70%" }}
                        animate={{ x: [-10, 20] }}
                        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                    />
                    <motion.div
                        className="absolute rounded-full bg-white/10 border-2 border-white/20"
                        style={{ width: 100, height: 100, left: "85%", top: "60%" }}
                        animate={{ y: [20, -10] }}
                        transition={{ duration: 7, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                    />
                    <motion.div
                        className="absolute rounded-full bg-white/10 border-2 border-white/20"
                        style={{ width: 70, height: 70, left: "50%", top: "40%" }}
                        animate={{ scale: [1, 1.15] }}
                        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                    />
                </div>

                {/* Comic Burst Pattern Overlay */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 100, rotate: -5 }}
                        whileInView={{ opacity: 1, y: 0, rotate: -1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, type: "spring" }}
                        className="bg-comic-yellow border-4 border-black p-8 md:p-12 shadow-[12px_12px_0px_0px_#000] transform max-w-4xl mx-auto text-center relative"
                    >
                        {/* "En Vivo" Stamp */}
                        <motion.div
                            initial={{ scale: 0, rotate: 0 }}
                            whileInView={{ scale: 1, rotate: 12 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
                            className="absolute -top-8 -right-8 z-20"
                        >
                            <motion.div
                                animate={{ scale: [1, 1.15, 1] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                                className="bg-comic-red text-white font-display text-2xl md:text-4xl px-6 py-3 border-4 border-black shadow-comic"
                            >
                                ¡EN VIVO!
                            </motion.div>
                        </motion.div>

                        {/* Speech Bubble Tail */}
                        <div className="absolute -bottom-6 left-1/4 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[24px] border-t-comic-yellow z-10" />
                        <div className="absolute -bottom-7 left-1/4 ml-[-2px] w-0 h-0 border-l-[22px] border-l-transparent border-r-[22px] border-r-transparent border-t-[26px] border-t-black -z-10" />

                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-7xl font-display text-comic-purple text-stroke shadow-comic mb-4"
                        >
                            ¡No te lo pierdas!
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="text-xl md:text-3xl font-bold text-comic-black mb-8"
                        >
                            Transmite de lunes a viernes a partir de las 10:30 AM
                        </motion.p>

                        {/* Social Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-col md:flex-row justify-center gap-6"
                        >
                            <a
                                href="https://www.facebook.com/profile.php?id=61573156671692"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transform transition-all duration-300 hover:scale-110 hover:-rotate-3 active:scale-95"
                            >
                                <ComicButton
                                    className="bg-[#1877F2] text-white flex items-center gap-3 px-8 py-4 text-xl w-full md:w-auto justify-center shadow-[6px_6px_0px_0px_#000] hover:shadow-[8px_8px_0px_0px_#000]"
                                >
                                    <Facebook className="w-8 h-8" />
                                    FACEBOOK
                                </ComicButton>
                            </a>
                            <a
                                href="https://www.youtube.com/@QuoreStream"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transform transition-all duration-300 hover:scale-110 hover:rotate-3 active:scale-95"
                            >
                                <ComicButton
                                    className="bg-[#FF0000] text-white flex items-center gap-3 px-8 py-4 text-xl w-full md:w-auto justify-center shadow-[6px_6px_0px_0px_#000] hover:shadow-[8px_8px_0px_0px_#000]"
                                >
                                    <Youtube className="w-8 h-8" />
                                    YOUTUBE
                                </ComicButton>
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Another Diagonal Divider */}
            <div className="relative h-24 bg-comic-orange z-20">
                <svg className="absolute bottom-0 w-full h-24" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon fill="#FFFFFF" points="0,0 0,100 100,100" />
                </svg>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-black z-10" />
            </div>
        </div>
    );
}
