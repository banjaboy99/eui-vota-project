// Blog Module Exports
// Copy this entire /blog folder to integrate into another project

export { default as BlogPage } from './BlogPage';
export { default as BlogHeader } from './BlogHeader';
export { default as BlogHero } from './BlogHero';
export { default as BlogSection } from './BlogSection';
export { default as BlogCard } from './BlogCard';
export { default as BlogCategories } from './BlogCategories';
export { default as BlogAbout } from './BlogAbout';
export { default as BlogFooter } from './BlogFooter';

// Re-export types
export type { BlogPost, BlogCategory } from './types';