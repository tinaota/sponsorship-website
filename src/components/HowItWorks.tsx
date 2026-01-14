import { Search, Heart, MessageCircle } from 'lucide-react';
import styles from './HowItWorks.module.css';

export default function HowItWorks() {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>How Sponsorship Works</h2>
            <div className={styles.grid}>
                <div className={styles.card}>
                    <div className={styles.iconWrapper}>
                        <Search size={32} color="var(--color-sponsor-primary)" />
                    </div>
                    <h3 className={styles.stepTitle}>1. Choose a Child</h3>
                    <p className={styles.description}>
                        Browse profiles of children waiting for a sponsor. Find one that connects with your heart.
                    </p>
                </div>
                <div className={styles.card}>
                    <div className={styles.iconWrapper}>
                        <Heart size={32} color="var(--color-sponsor-primary)" />
                    </div>
                    <h3 className={styles.stepTitle}>2. Sponsor</h3>
                    <p className={styles.description}>
                        Sign up to support them monthly. Your contribution provides essentials like food, education, and healthcare.
                    </p>
                </div>
                <div className={styles.card}>
                    <div className={styles.iconWrapper}>
                        <MessageCircle size={32} color="var(--color-sponsor-primary)" />
                    </div>
                    <h3 className={styles.stepTitle}>3. Connect</h3>
                    <p className={styles.description}>
                        Send letters and photos. Build a relationship and see the difference you're making in their life.
                    </p>
                </div>
            </div>
        </section>
    );
}
