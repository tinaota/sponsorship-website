import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.column}>
                        <h3>About Us</h3>
                        <ul>
                            <li><Link href="#" className={styles.link}>Our Story</Link></li>
                            <li><Link href="#" className={styles.link}>Financial Accountability</Link></li>
                            <li><Link href="#" className={styles.link}>Careers</Link></li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <h3>Sponsorship</h3>
                        <ul>
                            <li><Link href="#" className={styles.link}>Sponsor a Child</Link></li>
                            <li><Link href="#" className={styles.link}>How It Works</Link></li>
                            <li><Link href="#" className={styles.link}>FAQ</Link></li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <h3>Get Involved</h3>
                        <ul>
                            <li><Link href="#" className={styles.link}>Donate</Link></li>
                            <li><Link href="#" className={styles.link}>Volunteer</Link></li>
                            <li><Link href="#" className={styles.link}>Partner With Us</Link></li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <h3>Contact</h3>
                        <ul>
                            <li><Link href="#" className={styles.link}>Contact Us</Link></li>
                            <li><Link href="#" className={styles.link}>Media Centre</Link></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p className={styles.copy}>© 2026 World Hope International. All rights reserved.</p>
                    <div className={styles.socials}>
                        <Facebook size={20} color="#CCC" />
                        <Twitter size={20} color="#CCC" />
                        <Instagram size={20} color="#CCC" />
                        <Linkedin size={20} color="#CCC" />
                    </div>
                </div>
            </div>
        </footer>
    );
}
