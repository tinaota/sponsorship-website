'use client';

import { useState } from 'react';
import ChildCard from './ChildCard';
import styles from './ChildGrid.module.css';

const MOCK_CHILDREN = [
    { id: 1, name: 'Amara', age: 9, country: 'Kenya', waitingDays: 156, imageUrl: '/children/child_1.png', bio: 'Loves painting and dreams of being an artist.' },
    { id: 2, name: 'Carlos', age: 12, country: 'Guatemala', waitingDays: 132, imageUrl: '/children/child_2.png', bio: 'Enjoys playing soccer with his friends.' },
    { id: 3, name: 'Priya', age: 11, country: 'India', waitingDays: 203, imageUrl: '/children/child_3.png', bio: 'Wants to be a teacher and help others learn.' },
    { id: 4, name: 'David', age: 8, country: 'Philippines', waitingDays: 98, imageUrl: '/children/child_4.png', bio: 'Likes reading books about adventure.' },
    { id: 5, name: 'Sarah', age: 10, country: 'Uganda', waitingDays: 45, imageUrl: '/children/child_5.png', bio: 'Dreams of becoming a doctor.' },
    { id: 6, name: 'Mateo', age: 13, country: 'Columbia', waitingDays: 12, imageUrl: '/children/child_6.png', bio: 'Loves riding his bicycle and exploring.' },
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
