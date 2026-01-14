'use client';

import { useState } from 'react';
import Link from 'next/link';
import { User, Menu, X } from 'lucide-react';
import Header from '@/components/sponsorship/Header';
import Hero from '@/components/sponsorship/Hero';
import FilterSection, { FilterState } from '@/components/sponsorship/FilterSection';
import ChildGrid from '@/components/sponsorship/ChildGrid';
import HowItWorks from '@/components/sponsorship/HowItWorks';
import ImpactStats from '@/components/sponsorship/ImpactStats';
import Testimonials from '@/components/sponsorship/Testimonials';
import FAQ from '@/components/sponsorship/FAQ';
import Footer from '@/components/sponsorship/Footer';
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
