'use client';

import { useState } from 'react';
import ChildCard from './ChildCard';
import styles from './ChildGrid.module.css';

// Added gender to mock data for filtering
const MOCK_CHILDREN = [
    { id: 1, name: 'Amara', age: 9, country: 'Kenya', waitingDays: 156, imageUrl: '/children/child_1.png', bio: 'Loves painting and dreams of being an artist.', gender: 'Girl' },
    { id: 2, name: 'Carlos', age: 12, country: 'Guatemala', waitingDays: 132, imageUrl: '/children/child_2.png', bio: 'Enjoys playing soccer with his friends.', gender: 'Boy' },
    { id: 3, name: 'Priya', age: 11, country: 'India', waitingDays: 203, imageUrl: '/children/child_3.png', bio: 'Wants to be a teacher and help others learn.', gender: 'Girl' },
    { id: 4, name: 'David', age: 8, country: 'Philippines', waitingDays: 98, imageUrl: '/children/child_4.png', bio: 'Likes reading books about adventure.', gender: 'Boy' },
    { id: 5, name: 'Sarah', age: 10, country: 'Uganda', waitingDays: 45, imageUrl: '/children/child_5.png', bio: 'Dreams of becoming a doctor.', gender: 'Girl' },
    { id: 6, name: 'Mateo', age: 13, country: 'Columbia', waitingDays: 12, imageUrl: '/children/child_6.png', bio: 'Loves riding his bicycle and exploring.', gender: 'Boy' },
];

interface FilterState {
    country: string;
    age: string;
    gender: string;
    sort: string;
}

interface ChildGridProps {
    filters?: FilterState;
}

export default function ChildGrid({ filters }: ChildGridProps) {
    const [view, setView] = useState<'grid' | 'list'>('grid');

    const filteredChildren = MOCK_CHILDREN.filter(child => {
        if (!filters) return true;

        // Filter by Country
        if (filters.country !== 'All Countries' && child.country !== filters.country) return false;

        // Filter by Gender
        if (filters.gender !== 'All' && child.gender !== filters.gender) return false;

        // Filter by Age
        if (filters.age !== 'All Ages') {
            if (filters.age === '0-5' && (child.age < 0 || child.age > 5)) return false;
            if (filters.age === '6-12' && (child.age < 6 || child.age > 12)) return false;
            if (filters.age === '13-18' && (child.age < 13 || child.age > 18)) return false;
        }

        return true;
    });

    const sortedChildren = [...filteredChildren].sort((a, b) => {
        if (!filters) return 0;
        if (filters.sort === 'Longest Waiting') return b.waitingDays - a.waitingDays;
        if (filters.sort === 'Youngest First') return a.age - b.age;
        if (filters.sort === 'Oldest First') return b.age - a.age;
        return 0;
    });

    return (
        <div className={styles.gridWrapper}>
            <div className={styles.header}>
                <span className={styles.count}>Showing {sortedChildren.length} children</span>
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
                {sortedChildren.map((child) => (
                    <ChildCard key={child.id} {...child} />
                ))}
                {sortedChildren.length === 0 && (
                    <div className={styles.noResults} style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px' }}>
                        <p>No children match your search criteria. Try adjusting your filters.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
