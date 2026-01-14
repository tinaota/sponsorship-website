'use client';

import { useState } from 'react';
import ChildCard from './ChildCard';
import styles from './ChildGrid.module.css';

const MOCK_CHILDREN = [
    { id: 1, name: 'Amara', age: 9, country: 'Kenya', waitingDays: 156, imageUrl: 'https://images.unsplash.com/photo-1515434126000-961d90c046bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', bio: 'Loves painting and dreams of being an artist.' },
    { id: 2, name: 'Carlos', age: 12, country: 'Guatemala', waitingDays: 132, imageUrl: 'https://images.unsplash.com/photo-1489702932289-406b7782113c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', bio: 'Enjoys playing soccer with his friends.' },
    { id: 3, name: 'Priya', age: 11, country: 'India', waitingDays: 203, imageUrl: 'https://images.unsplash.com/photo-1478098711619-5ab0b4d5dc75?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', bio: 'Wants to be a teacher and help others learn.' },
    { id: 4, name: 'David', age: 8, country: 'Philippines', waitingDays: 98, imageUrl: 'https://images.unsplash.com/photo-1503944583220-79d7153a5689?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', bio: 'Likes reading books about adventure.' },
    { id: 5, name: 'Sarah', age: 10, country: 'Uganda', waitingDays: 45, imageUrl: 'https://images.unsplash.com/photo-1540479859555-17af45c78602?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', bio: 'Dreams of becoming a doctor.' },
    { id: 6, name: 'Mateo', age: 13, country: 'Columbia', waitingDays: 12, imageUrl: 'https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', bio: 'Loves riding his bicycle and exploring.' },
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
