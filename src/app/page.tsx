import Header from '@/components/Header';
import FilterSection from '@/components/FilterSection';
import ChildGrid from '@/components/ChildGrid';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export default function SponsorshipPage() {
    return (
        <div className={styles.page}>
            <Header />
            <main className={styles.main}>
                <FilterSection />
                <ChildGrid />
            </main>
            <Footer />
        </div>
    );
}
