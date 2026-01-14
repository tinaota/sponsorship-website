import { Star } from 'lucide-react';
import styles from './Testimonials.module.css';

export default function Testimonials() {
    const StarRating = () => (
        <div className={styles.rating}>
            {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#FFB800" color="#FFB800" />
            ))}
        </div>
    );

    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Stories of Change</h2>
            <div className={styles.grid}>
                <div className={styles.card}>
                    <StarRating />
                    <p className={styles.quote}>
                        "Sponsoring Maria changed my life as much as hers. Seeing her grow and succeed in school brings me so much joy."
                    </p>
                    <div className={styles.author}>
                        <div className={styles.avatar}>SM</div>
                        <div className={styles.authorInfo}>
                            <h4>Sarah Mitchell</h4>
                            <p>Sponsor since 2018</p>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <StarRating />
                    <p className={styles.quote}>
                        "The letters I get from David make my day. I know that my contribution is actually making a real difference."
                    </p>
                    <div className={styles.author}>
                        <div className={styles.avatar}>JW</div>
                        <div className={styles.authorInfo}>
                            <h4>James Wilson</h4>
                            <p>Sponsor since 2021</p>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <StarRating />
                    <p className={styles.quote}>
                        "World Hope's transparency is why I chose them. I know my money is going exactly where it's needed most."
                    </p>
                    <div className={styles.author}>
                        <div className={styles.avatar}>EC</div>
                        <div className={styles.authorInfo}>
                            <h4>Emily Chen</h4>
                            <p>Sponsor since 2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
