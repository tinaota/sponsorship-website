'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ANIMATION_CONFIG, getAnimationDuration } from '@/utils/animationConfig';
import styles from './ChildCard.module.css';

interface ChildCardProps {
    name: string;
    age: number;
    country: string;
    waitingDays: number;
    imageUrl: string;
    bio: string;
}

export default function ChildCard({ name, age, country, waitingDays, imageUrl, bio }: ChildCardProps) {
    const badgeRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Badge pulse animation - continuous subtle pulse
        if (badgeRef.current) {
            gsap.to(badgeRef.current, {
                scale: 1.05,
                duration: getAnimationDuration(1),
                repeat: -1,
                yoyo: true,
                ease: 'power1.inOut',
            });
        }
    });

    return (
        <div className={styles.card} tabIndex={0}>
            <div className={styles.imageContainer}>
                <div ref={badgeRef} className={styles.badge}>{waitingDays} days waiting</div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={imageUrl} alt={`Photo of ${name}`} className={styles.image} />
            </div>
            <div className={styles.content}>
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.details}>
                    {age} years old • {country}
                </p>
                <p className={styles.bio}>&ldquo;{bio}&rdquo;</p>
                <button className={styles.ctaBtn}>Sponsor This Child</button>
            </div>
        </div>
    );
}

