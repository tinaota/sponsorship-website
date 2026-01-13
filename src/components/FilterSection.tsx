'use client';

import styles from './FilterSection.module.css';

export default function FilterSection() {
    return (
        <div className={styles.filterContainer}>
            <div className={styles.header}>
                <h2 className={styles.title}>Find Your Match</h2>
                <a href="#" className={styles.clearLink}>Clear All Filters</a>
            </div>

            <div className={styles.controls}>
                <div className={styles.controlGroup}>
                    <label className={styles.label}>Country</label>
                    <select className={styles.select} defaultValue="All Countries">
                        <option>All Countries</option>
                        <option>Kenya</option>
                        <option>Guatemala</option>
                        <option>India</option>
                        <option>Philippines</option>
                    </select>
                </div>

                <div className={styles.controlGroup}>
                    <label className={styles.label}>Age Range</label>
                    <select className={styles.select} defaultValue="All Ages">
                        <option>All Ages</option>
                        <option>0-5</option>
                        <option>6-12</option>
                        <option>13-18</option>
                    </select>
                </div>

                <div className={styles.controlGroup}>
                    <label className={styles.label}>Gender</label>
                    <select className={styles.select} defaultValue="All">
                        <option>All</option>
                        <option>Boy</option>
                        <option>Girl</option>
                    </select>
                </div>

                <div className={styles.controlGroup}>
                    <label className={styles.label}>Sort By</label>
                    <select className={styles.select} defaultValue="Longest Waiting">
                        <option>Longest Waiting</option>
                        <option>Youngest First</option>
                        <option>Oldest First</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
