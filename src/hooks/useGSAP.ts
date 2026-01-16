'use client';

import { useGSAP as useGSAPOriginal } from '@gsap/react';
import { useRef, useEffect } from 'react';
import { prefersReducedMotion } from '@/utils/animationConfig';
import gsap from 'gsap';

/**
 * Custom GSAP hook with automatic cleanup and accessibility support
 * Wraps @gsap/react's useGSAP with reduced motion detection
 */
export function useGSAP(
    callback: (context: gsap.Context) => void,
    dependencies?: unknown[]
) {
    const shouldAnimate = !prefersReducedMotion();

    return useGSAPOriginal(
        () => {
            if (!shouldAnimate) {
                // Skip animations if user prefers reduced motion
                return;
            }
            callback(gsap.context(() => { }));
        },
        { dependencies: dependencies || [] }
    );
}

/**
 * Hook to register GSAP plugins on client side only
 */
export function useGSAPPlugins(plugins: any[]) {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            plugins.forEach((plugin) => {
                gsap.registerPlugin(plugin);
            });
        }
    }, [plugins]);
}
