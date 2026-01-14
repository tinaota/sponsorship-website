'use client';

import styles from './FilterSection.module.css';

export interface FilterState {
    country: string;
    age: string;
    gender: string;
    sort: string;
}

interface FilterSectionProps {
    filters?: FilterState;
    onFilterChange?: (key: keyof FilterState, value: string) => void;
    onClearFilters?: () => void;
}

export default function FilterSection({
    filters = { country: 'All Countries', age: 'All Ages', gender: 'All', sort: 'Longest Waiting' },
    onFilterChange,
    onClearFilters
}: FilterSectionProps) {

    const handleChange = (key: keyof FilterState, value: string) => {
        if (onFilterChange) {
            onFilterChange(key, value);
        }
    };

    return (
        <div className={styles.filterContainer}>
            <div className={styles.header}>
                <h2 className={styles.title}>Find Your Match</h2>
                <a onClick={onClearFilters} className={styles.clearLink} style={{ cursor: 'pointer' }}>Clear All Filters</a>
            </div>

            <div className={styles.controls}>
                <div className={styles.controlGroup}>
                    <label className={styles.label}>Country</label>
                    <select
                        className={styles.select}
                        value={filters.country}
                        onChange={(e) => handleChange('country', e.target.value)}
                    >
                        <option>All Countries</option>
                        <option>Kenya</option>
                        <option>Guatemala</option>
                        <option>India</option>
                        <option>Philippines</option>
                        <option>Uganda</option>
                        <option>Columbia</option>
                    </select>
                </div>

                <div className={styles.controlGroup}>
                    <label className={styles.label}>Age Range</label>
                    <select
                        className={styles.select}
                        value={filters.age}
                        onChange={(e) => handleChange('age', e.target.value)}
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
                        className={styles.select}
                        value={filters.gender}
                        onChange={(e) => handleChange('gender', e.target.value)}
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
                        onChange={(e) => handleChange('sort', e.target.value)}
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
