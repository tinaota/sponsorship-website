'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, Heart, TrendingUp } from 'lucide-react';
import { ANIMATION_CONFIG, getAnimationDuration } from '@/utils/animationConfig';
import styles from './ImpactStats.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function ImpactStats() {
    const sectionRef = useRef<HTMLElement>(null);
    const yearsRef = useRef<HTMLSpanElement>(null);
    const childrenRef = useRef<HTMLSpanElement>(null);
    const fundsRef = useRef<HTMLSpanElement>(null);
    const statsRef = useRef<HTMLDivElement[]>([]);

    useGSAP(() => {
        // Entrance animation - fade + scale
        gsap.from(statsRef.current, {
            opacity: 0,
            scale: 0.95,
            y: 30,
            duration: getAnimationDuration(ANIMATION_CONFIG.duration.slow),
            stagger: ANIMATION_CONFIG.stagger.slow,
            ease: ANIMATION_CONFIG.ease.default,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
        });

        // Counter animations
        const counterDuration = getAnimationDuration(1.5);

        // Years counter
        if (yearsRef.current) {
            gsap.to(yearsRef.current, {
                textContent: 60,
                duration: counterDuration,
                ease: 'power1.out',
                snap: { textContent: 1 },
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
                onUpdate: function () {
                    if (yearsRef.current) {
                        yearsRef.current.textContent = Math.ceil(Number(yearsRef.current.textContent)) + '+';
                    }
                },
            });
        }

        // Children counter
        if (childrenRef.current) {
            gsap.to(childrenRef.current, {
                textContent: 100000,
                duration: counterDuration,
                ease: 'power1.out',
                snap: { textContent: 1000 },
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
                onUpdate: function () {
                    if (childrenRef.current) {
                        const value = Math.ceil(Number(childrenRef.current.textContent));
                        childrenRef.current.textContent = value.toLocaleString() + '+';
                    }
                },
            });
        }

        // Funds counter
        if (fundsRef.current) {
            gsap.to(fundsRef.current, {
                textContent: 85,
                duration: counterDuration,
                ease: 'power1.out',
                snap: { textContent: 1 },
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none none',
                },
                onUpdate: function () {
                    if (fundsRef.current) {
                        fundsRef.current.textContent = Math.ceil(Number(fundsRef.current.textContent)) + '%';
                    }
                },
            });
        }
    }, { scope: sectionRef });

    return (
        <section className={styles.section} ref={sectionRef}>
            <div className={styles.grid}>
                <div className={styles.stat} ref={(el) => { if (el) statsRef.current[0] = el; }}>
                    <div className={styles.iconWrapper}>
                        <Calendar size={40} color="white" />
                    </div>
                    <span ref={yearsRef} className={styles.number}>0+</span>
                    <span className={styles.label}>Years of Service</span>
                </div>
                <div className={styles.stat} ref={(el) => { if (el) statsRef.current[1] = el; }}>
                    <div className={styles.iconWrapper}>
                        <Heart size={40} color="white" />
                    </div>
                    <span ref={childrenRef} className={styles.number}>0+</span>
                    <span className={styles.label}>Children Supported</span>
                </div>
                <div className={styles.stat} ref={(el) => { if (el) statsRef.current[2] = el; }}>
                    <div className={styles.iconWrapper}>
                        <TrendingUp size={40} color="white" />
                    </div>
                    <span ref={fundsRef} className={styles.number}>0%</span>
                    <span className={styles.label}>Funds to Programs</span>
                </div>
            </div>
        </section>
    );
}

