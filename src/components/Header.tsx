import Link from 'next/link';
import { User } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>World Hope</div>
            <nav className={styles.nav}>
                <Link href="/sponsorship" className={styles.link}>Sponsor a Child</Link>
                <Link href="#" className={styles.link}>Our Work</Link>
                <Link href="#" className={styles.link}>Ways to Give</Link>
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
