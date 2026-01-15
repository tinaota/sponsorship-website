'use client';

import { useState } from 'react';
import Link from 'next/link';
import { User, Menu, X } from 'lucide-react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FilterSection, { FilterState } from '@/components/FilterSection';
import ChildGrid from '@/components/ChildGrid';
import HowItWorks from '@/components/HowItWorks';
import ImpactStats from '@/components/ImpactStats';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export default function SponsorshipPage() {
    const [filters, setFilters] = useState<FilterState>({
        country: 'All Countries',
        age: 'All Ages',
        gender: 'All',
        sort: 'Longest Waiting'
    });

    const handleFilterChange = (key: keyof FilterState, value: string) => {
        setFilters(prev => ({ ...prev, [key]: value }));
    };

    const clearFilters = () => {
        setFilters({
            country: 'All Countries',
            age: 'All Ages',
            gender: 'All',
            sort: 'Longest Waiting'
        });
    };

    return (
        <div className={styles.page}>
            <Header />
            <Hero>
                <FilterSection
                    filters={filters}
                    onFilterChange={handleFilterChange}
                    onClearFilters={clearFilters}
                />
            </Hero>
            <ImpactStats />
            <main className={styles.content}>
                <ChildGrid filters={filters} />
                <Testimonials />
                <HowItWorks />
                <FAQ />
            </main>
            <Footer />
        </div>
    );
}
