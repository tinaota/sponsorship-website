'use client';

import { useState, useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Link from 'next/link';
import { User, Menu, X } from 'lucide-react';
import { ANIMATION_CONFIG, getAnimationDuration } from '@/utils/animationConfig';
import styles from './Header.module.css';

gsap.registerPlugin(ScrollToPlugin);

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navRef = useRef<HTMLElement>(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const smoothScrollTo = (target: string) => {
        gsap.to(window, {
            duration: getAnimationDuration(ANIMATION_CONFIG.duration.verySlow),
            scrollTo: { y: target, offsetY: 80 },
            ease: ANIMATION_CONFIG.ease.smooth,
        });
        setIsMenuOpen(false);
    };

    // Animate mobile menu with opacity fade
    useEffect(() => {
        if (navRef.current && window.innerWidth <= 1100) {
            if (isMenuOpen) {
                gsap.to(navRef.current, {
                    opacity: 1,
                    duration: getAnimationDuration(0.3),
                    ease: ANIMATION_CONFIG.ease.default,
                    display: 'flex',
                });
            } else {
                gsap.to(navRef.current, {
                    opacity: 0,
                    duration: getAnimationDuration(0.2),
                    ease: ANIMATION_CONFIG.ease.default,
                    onComplete: () => {
                        if (navRef.current && window.innerWidth <= 1100) {
                            gsap.set(navRef.current, { display: 'none' });
                        }
                    },
                });
            }
        }
    }, [isMenuOpen]);

    return (
        <header className={styles.header}>
            <div className={styles.logo}>World Hope</div>

            {/* Mobile Menu Toggle */}
            <button className={styles.mobileToggle} onClick={toggleMenu} aria-label="Toggle menu">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Nav */}
            <nav ref={navRef} className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
                <Link href="/sponsorship" className={styles.link} onClick={() => setIsMenuOpen(false)}>Sponsor a Child</Link>
                <Link href="#" className={styles.link} onClick={() => setIsMenuOpen(false)}>Our Work</Link>
                <Link href="#" className={styles.link} onClick={() => setIsMenuOpen(false)}>Get Involved</Link>
                <Link href="#" className={styles.link} onClick={() => setIsMenuOpen(false)}>About Us</Link>

                {/* Mobile specific actions that might move here or stay in actions */}
                <div className={styles.mobileActions}>
                    <Link href="#" className={styles.donateBtn} onClick={() => setIsMenuOpen(false)}>Donate Now</Link>
                </div>
            </nav>

            <div className={styles.actions}>
                <Link href="#" className={styles.donateBtn}>Donate Now</Link>
            </div>
        </header>
    );
}

