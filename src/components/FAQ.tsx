'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import styles from './FAQ.module.css';

const FAQS = [
    {
        q: "Where does my money go?",
        a: "85% of your donation goes directly to community programs supporting your sponsored child, providing clean water, healthcare, and education. 15% covers administration and fundraising."
    },
    {
        q: "Can I write to my sponsored child?",
        a: "Yes! Building a relationship is encouraged. You can send letters and photos through our portal, and you'll receive updates and replies from your child."
    },
    {
        q: "How long is the sponsorship commitment?",
        a: "While you can cancel at any time, we encourage long-term sponsorship to see a child through their education and into adulthood, maximizing the impact of your support."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Frequently Asked Questions</h2>
                {FAQS.map((faq, i) => (
                    <div key={i} className={styles.item}>
                        <button
                            className={styles.question}
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        >
                            {faq.q}
                            {openIndex === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </button>
                        {openIndex === i && (
                            <div className={styles.answer}>
                                <p>{faq.a}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
