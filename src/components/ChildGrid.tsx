'use client';

import { useState } from 'react';
import ChildCard from './ChildCard';
import styles from './ChildGrid.module.css';

const MOCK_CHILDREN = [
    { id: 1, name: 'Amara', age: 9, country: 'Kenya', waitingDays: 156, icon: '⭐' },
    { id: 2, name: 'Carlos', age: 12, country: 'Guatemala', waitingDays: 132, icon: '⚽' },
    { id: 3, name: 'Priya', age: 11, country: 'India', waitingDays: 203, icon: '🎨' },
    { id: 4, name: 'David', age: 8, country: 'Philippines', waitingDays: 98, icon: '📚' },
    { id: 5, name: 'Sarah', age: 10, country: 'Uganda', waitingDays: 45, icon: '🎵' },
    { id: 6, name: 'Mateo', age: 13, country: 'Columbia', waitingDays: 12, icon: '🚲' },
];

export default function ChildGrid() {
    const [view, setView] = useState<'grid' | 'list'>('grid');

    return (
        <div className={styles.gridWrapper}>
            <div className={styles.header}>
                <span className={styles.count}>Showing {MOCK_CHILDREN.length} children</span>
                <div className={styles.viewToggle}>
                    <button
                        className={`${styles.toggleBtn} ${view === 'grid' ? styles.active : ''}`}
                        onClick={() => setView('grid')}
                    >
                        Grid View
                    </button>
                    <button
                        className={`${styles.toggleBtn} ${view === 'list' ? styles.active : ''}`}
                        onClick={() => setView('list')}
                    >
                        List View
                    </button>
                </div>
            </div>

            <div className={styles.grid}>
                {MOCK_CHILDREN.map((child) => (
                    <ChildCard key={child.id} {...child} />
                ))}
            </div>
        </div>
    );
}
