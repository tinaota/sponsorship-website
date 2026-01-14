import styles from './Hero.module.css';

interface HeroProps {
    children?: React.ReactNode;
}

export default function Hero({ children }: HeroProps) {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1 className={styles.title}>Sponsor a Child.<br />Change a Life.</h1>
                <p className={styles.subtitle}>
                    Your sponsorship brings essentials like clean water, nutrition, education, and hope to a child and their community.
                </p>
            </div>
            {children && (
                <div className={styles.filterWrapper}>
                    {children}
                </div>
            )}
        </section>
    );
}
