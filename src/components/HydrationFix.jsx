"use client"
import { useEffect } from 'react';

export default function HydrationFix() {
  useEffect(() => {
    // Handle hydration mismatch by removing browser extension attributes
    const html = document.documentElement;
    const attributesToRemove = ['data-darkreader-mode', 'data-darkreader-scheme', 'data-darkreader-proxy-injected'];
    attributesToRemove.forEach(attr => html.removeAttribute(attr));
  }, []);

  return null;
}
