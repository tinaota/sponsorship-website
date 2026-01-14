'use client';

import { useState } from 'react';
import styles from './FilterSection.module.css';

export default function FilterSection() {
    const [filters, setFilters] = useState({
        country: 'All Countries',
        age: 'All Ages',
        gender: 'All',
        sort: 'Longest Waiting'
    });

    const hasActiveFilters =
        filters.country !== 'All Countries' ||
        filters.age !== 'All Ages' ||
        filters.gender !== 'All';

    // Debug log to trace why it might be true initially
    // console.log('Filters:', filters, 'HasActive:', hasActiveFilters);

    const handleFilterChange = (key: string, value: string) => {
        setFilters(prev => ({ ...prev, [key]: value }));
    };

    const clearFilters = (e: React.MouseEvent) => {
        e.preventDefault();
        setFilters({
            country: 'All Countries',
            age: 'All Ages',
            gender: 'All',
            sort: 'Longest Waiting'
        });
    };

    return (
        <div className={styles.filterContainer}>
            <div className={styles.header}>
                <h2 className={styles.title}>Find Your Match</h2>
                {hasActiveFilters && (
                    <a href="#" onClick={clearFilters} className={styles.clearLink}>
                        Clear All Filters
                    </a>
                )}
            </div>

            <div className={styles.controls}>
                <div className={styles.controlGroup}>
                    <label className={styles.label}>Country</label>
                    <select
                        className={`${styles.select} ${filters.country !== 'All Countries' ? styles.activeSelect : ''}`}
                        value={filters.country}
                        onChange={(e) => handleFilterChange('country', e.target.value)}
                    >
                        <option>All Countries</option>
                        <option>Kenya</option>
                        <option>Guatemala</option>
                        <option>India</option>
                        <option>Philippines</option>
                    </select>
                </div>

                <div className={styles.controlGroup}>
                    <label className={styles.label}>Age Range</label>
                    <select
                        className={`${styles.select} ${filters.age !== 'All Ages' ? styles.activeSelect : ''}`}
                        value={filters.age}
                        onChange={(e) => handleFilterChange('age', e.target.value)}
                    >
                        <option>All Ages</option>
                        <option>0-5</option>
                        <option>6-12</option>
                        <option>13-18</option>
                    </select>
                </div>

                <div className={styles.controlGroup}>
                    <label className={styles.label}>Gender</label>
                    <select
                        className={`${styles.select} ${filters.gender !== 'All' ? styles.activeSelect : ''}`}
                        value={filters.gender}
                        onChange={(e) => handleFilterChange('gender', e.target.value)}
                    >
                        <option>All</option>
                        <option>Boy</option>
                        <option>Girl</option>
                    </select>
                </div>

                <div className={styles.controlGroup}>
                    <label className={styles.label}>Sort By</label>
                    <select
                        className={styles.select}
                        value={filters.sort}
                        onChange={(e) => handleFilterChange('sort', e.target.value)}
                    >
                        <option>Longest Waiting</option>
                        <option>Youngest First</option>
                        <option>Oldest First</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
