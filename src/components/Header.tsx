'use client';

import { useState } from 'react';
import Link from 'next/link';
import { User, Menu, X } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>World Hope</div>

            {/* Mobile Menu Toggle */}
            <button className={styles.mobileToggle} onClick={toggleMenu} aria-label="Toggle menu">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Nav */}
            <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
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
                <div className={styles.userIcon}>
                    <User size={20} color="#333" />
                </div>
            </div>
        </header>
    );
}
