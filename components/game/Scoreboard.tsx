"use client";

import { motion } from "framer-motion";

interface ScoreboardProps {
    score: number;
    highScore?: number;
}

export function Scoreboard({ score, highScore }: ScoreboardProps) {
    return (
        <div className="fixed top-4 right-4 z-40 flex gap-4">
            <motion.div
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="bg-white border-4 border-black p-4 rounded-xl shadow-comic"
            >
                <p className="text-sm font-bold uppercase text-gray-500">Puntaje</p>
                <p className="text-4xl font-display text-comic-blue">{score}</p>
            </motion.div>

            {highScore !== undefined && (
                <motion.div
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-comic-yellow border-4 border-black p-4 rounded-xl shadow-comic hidden md:block"
                >
                    <p className="text-sm font-bold uppercase text-black/60">Récord</p>
                    <p className="text-4xl font-display text-black">{highScore}</p>
                </motion.div>
            )}
        </div>
    );
}
