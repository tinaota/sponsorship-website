import styles from './ChildCard.module.css';

interface ChildCardProps {
    name: string;
    age: number;
    country: string;
    waitingDays: number;
    icon: string; // e.g., '⭐', '⚽', '🎨' to match the design's playful placeholders
}

export default function ChildCard({ name, age, country, waitingDays, icon }: ChildCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <div className={styles.badge}>{waitingDays} days waiting</div>
                <div className={styles.icon}>{icon}</div>
            </div>
            <div className={styles.content}>
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.details}>
                    {age} years old • {country}
                </p>
            </div>
        </div>
    );
}
