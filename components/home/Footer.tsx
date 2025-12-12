"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function Footer() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const imageRotate = useTransform(scrollYProgress, [0, 1], [5, 0]);
    const imageOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

    return (
        <div ref={containerRef} className="relative">
            {/* Diagonal Divider from White to Yellow */}
            <div className="relative h-32 bg-white z-20">
                <svg className="absolute bottom-0 w-full h-32" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon fill="#FACC15" points="0,100 100,0 100,100" />
                </svg>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-black z-10" />
            </div>

            {/* Footer Section */}
            <section className="bg-comic-yellow py-20 px-4 relative overflow-hidden">
                {/* Animated Background Elements */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-20 -right-20 w-64 h-64 border-8 border-black/10 rounded-full"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-10 -left-10 w-48 h-48 border-8 border-black/10 rounded-full"
                />

                {/* Halftone Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                    backgroundImage: 'radial-gradient(circle, #000 1.5px, transparent 1.5px)',
                    backgroundSize: '20px 20px'
                }} />

                {/* Floating Comic Words */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="absolute top-10 left-10 bg-comic-blue text-white font-display text-2xl px-4 py-2 border-4 border-black shadow-comic transform -rotate-12 hidden lg:block"
                >
                    ¡GRACIAS!
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, type: "spring" }}
                    className="absolute top-20 right-10 bg-comic-pink text-white font-display text-2xl px-4 py-2 border-4 border-black shadow-comic transform rotate-6 hidden lg:block"
                >
                    ¡NOS VEMOS!
                </motion.div>

                <div className="container mx-auto relative z-10">
                    <motion.div
                        style={{
                            scale: imageScale,
                            rotate: imageRotate,
                            opacity: imageOpacity
                        }}
                        className="max-w-6xl mx-auto"
                    >
                        <motion.div
                            whileHover={{ rotate: -1, scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="bg-white border-4 border-black p-4 md:p-6 shadow-[16px_16px_0px_0px_#000] transform rotate-1"
                        >
                            <Image
                                src="/images/final-bg.png"
                                alt="Así Somos - Final"
                                width={1920}
                                height={800}
                                className="w-full h-auto object-contain border-4 border-black"
                            />
                        </motion.div>
                    </motion.div>

                    {/* Footer Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-center mt-16"
                    >
                        <p className="font-display text-4xl md:text-6xl text-comic-purple text-stroke mb-4">
                            ¡SÍGUENOS!
                        </p>
                        <p className="text-xl md:text-2xl font-bold text-comic-black">
                            De lunes a viernes a las 10:30 AM 🎙️
                        </p>
                    </motion.div>
                </div>

                {/* Bottom Comic Strip Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-black flex items-center justify-center overflow-hidden">
                    <motion.div
                        animate={{ x: [0, -1000] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="flex gap-8 text-white font-bold uppercase tracking-widest whitespace-nowrap"
                    >
                        {[...Array(10)].map((_, i) => (
                            <span key={i} className="flex items-center gap-8">
                                <span>★ ASÍ SOMOS ★</span>
                                <span>🎮 MINIJUEGOS 🎮</span>
                                <span>📺 EN VIVO 📺</span>
                            </span>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
