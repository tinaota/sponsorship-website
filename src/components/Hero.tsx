'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ANIMATION_CONFIG, getAnimationDuration } from '@/utils/animationConfig';
import styles from './Hero.module.css';

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
    children?: React.ReactNode;
}

export default function Hero({ children }: HeroProps) {
    const heroRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const filterRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const timeline = gsap.timeline({
            defaults: {
                ease: ANIMATION_CONFIG.ease.default,
            },
        });

        // Title reveal - fade in with slide up
        timeline.from(titleRef.current, {
            opacity: 0,
            y: ANIMATION_CONFIG.values.slideDistance,
            duration: getAnimationDuration(ANIMATION_CONFIG.duration.slow),
            delay: 0.3,
        });

        // Subtitle fade - appear after title
        timeline.from(
            subtitleRef.current,
            {
                opacity: 0,
                y: ANIMATION_CONFIG.values.slideDistance / 2,
                duration: getAnimationDuration(ANIMATION_CONFIG.duration.normal),
            },
            '-=0.3' // Start slightly before title finishes
        );

        // Filter section slide up
        if (filterRef.current) {
            timeline.from(
                filterRef.current,
                {
                    opacity: 0,
                    y: ANIMATION_CONFIG.values.slideDistance,
                    duration: getAnimationDuration(ANIMATION_CONFIG.duration.normal),
                },
                '-=0.2'
            );
        }
    }, { scope: heroRef });

    return (
        <section ref={heroRef} className={styles.hero}>
            <video
                className={styles.heroVideo}
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="/hero-video.mp4" type="video/mp4" />
            </video>
            <div className={styles.content}>
                <h1 ref={titleRef} className={styles.title}>
                    Sponsor a Child.<br />Change a Life.
                </h1>
                <p ref={subtitleRef} className={styles.subtitle}>
                    Your sponsorship brings essentials like clean water, nutrition, education, and hope to a child and their community.
                </p>
            </div>
            {children && (
                <div ref={filterRef} className={styles.filterWrapper}>
                    {children}
                </div>
            )}
        </section>
    );
}
