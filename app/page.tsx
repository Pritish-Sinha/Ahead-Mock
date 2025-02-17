'use client';
import Image from 'next/image';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Build from "@/components/Build";
import SelfImprovement from "@/components/SelfImprovement";
import AboutOthers from "@/components/AboutOthers";
import TakeTest from "@/components/TakeTest";
import WorkWithUs from "@/components/WorkWithUs";
import Vacancies from "@/components/Vacancies";
import Download from "@/components/Download";
import SubFeature from "@/components/SubFeature";
import { useEffect, useState } from "react";
import { motion } from 'framer-motion';

export default function Home() {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });

    useEffect(() => {
        const mouseMove = (e: MouseEvent): void => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    return (
        <main className={'overflow-hidden'}>
            {/* Remove or comment out this motion.div for the custom cursor */}
            {/* <motion.div
                className='hidden sm:block cursor'
                variants={cursorVariants}
                animate={cursorVariant}
            /> */}
            <Navbar />
            <Hero />
            <Features />
            <Build />
            <SelfImprovement />
            <SubFeature
                sectionOne={'Now having your own emotions under control might be holding you back'}
                sectionTwo={'Additionally, not understanding those of others stops you from being parent, friend you can be.'}
            />
            <AboutOthers />
            <TakeTest />
            <WorkWithUs />
            <Vacancies />
            <Download />
        </main>
    );
}
