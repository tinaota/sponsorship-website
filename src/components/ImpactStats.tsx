'use client';

import { useEffect, useState, useRef } from 'react';
import { Calendar, Heart, TrendingUp } from 'lucide-react';
import styles from './ImpactStats.module.css';

export default function ImpactStats() {
    const [yearsCount, setYearsCount] = useState(0);
    const [childrenCount, setChildrenCount] = useState(0);
    const [fundsCount, setFundsCount] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true);

                    // Animate years
                    let years = 0;
                    const yearsInterval = setInterval(() => {
                        years += 1;
                        setYearsCount(years);
                        if (years >= 60) clearInterval(yearsInterval);
                    }, 20);

                    // Animate children
                    let children = 0;
                    const childrenInterval = setInterval(() => {
                        children += 2000;
                        setChildrenCount(children);
                        if (children >= 100000) {
                            setChildrenCount(100000);
                            clearInterval(childrenInterval);
                        }
                    }, 20);

                    // Animate funds
                    let funds = 0;
                    const fundsInterval = setInterval(() => {
                        funds += 1;
                        setFundsCount(funds);
                        if (funds >= 85) clearInterval(fundsInterval);
                    }, 30);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [hasAnimated]);

    return (
        <section className={styles.section} ref={sectionRef}>
            <div className={styles.grid}>
                <div className={styles.stat}>
                    <div className={styles.iconWrapper}>
                        <Calendar size={40} color="white" />
                    </div>
                    <span className={styles.number}>{yearsCount}+</span>
                    <span className={styles.label}>Years of Service</span>
                </div>
                <div className={styles.stat}>
                    <div className={styles.iconWrapper}>
                        <Heart size={40} color="white" />
                    </div>
                    <span className={styles.number}>{childrenCount.toLocaleString()}+</span>
                    <span className={styles.label}>Children Supported</span>
                </div>
                <div className={styles.stat}>
                    <div className={styles.iconWrapper}>
                        <TrendingUp size={40} color="white" />
                    </div>
                    <span className={styles.number}>{fundsCount}%</span>
                    <span className={styles.label}>Funds to Programs</span>
                </div>
            </div>
        </section>
    );
}
