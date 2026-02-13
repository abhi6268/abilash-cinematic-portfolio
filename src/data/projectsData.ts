export interface Project {
    id: string;
    title: string;
    description: string;
    tagline: string;
    category: string;
    tech: string[];
    language: string;
    stars?: number;
    forks?: number;
    githubUrl: string;
    liveUrl?: string;
    thumbnail: string;
    featured?: boolean;
    status: 'live' | 'development' | 'archived';
    gradient: string;
}

export const PROJECTS: Project[] = [
    {
        id: 'cinematic-portfolio',
        title: 'Cinematic Portfolio',
        description: 'A Netflix-inspired developer portfolio showcasing real-world engineering work, UI decisions, and product thinking. Built with React, TypeScript, and modern web technologies.',
        tagline: 'Where code meets cinema',
        category: 'Featured',
        tech: ['React', 'TypeScript', 'CSS3', 'React Router'],
        language: 'TypeScript',
        stars: 0,
        githubUrl: 'https://github.com/abhi6268/abilash-cinematic-portfolio',
        liveUrl: 'https://abilashmundlur.com',
        thumbnail: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&h=450&fit=crop',
        featured: true,
        status: 'live',
        gradient: 'linear-gradient(135deg, rgba(229, 9, 20, 0.9), rgba(139, 0, 0, 0.85))',
    },
    {
        id: 'config-ui-platform',
        title: 'Config-Driven UI Platform',
        description: 'An innovative UI renderer with named rules, rule graph visualization, dead rule detection, and a powerful inspector. Enables dynamic, configuration-based interface generation.',
        tagline: 'Build interfaces, not code',
        category: 'Engineering',
        tech: ['React', 'TypeScript', 'D3.js', 'Graph Theory'],
        language: 'TypeScript',
        stars: 0,
        githubUrl: 'https://github.com/abhi6268/config-driven-ui-platform',
        liveUrl: 'https://config-driven-ui-platform.vercel.app/',
        thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=450&fit=crop',
        status: 'live',
        gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.9), rgba(37, 99, 235, 0.85))',
    },
    {
        id: 'resume-craft-ai',
        title: 'Resume Craft AI',
        description: 'AI-powered resume analyzer and career optimization platform. Leverages machine learning to provide intelligent feedback and personalized recommendations for career advancement.',
        tagline: 'Your AI career coach',
        category: 'AI-ML',
        tech: ['JavaScript', 'Node.js', 'OpenAI', 'NLP'],
        language: 'JavaScript',
        stars: 0,
        githubUrl: 'https://github.com/abhi6268/resume-craft-ai',
        liveUrl: 'https://resume-craft-ai-gray.vercel.app/',
        thumbnail: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=450&fit=crop',
        status: 'live',
        gradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.9), rgba(5, 150, 105, 0.85))',
    },
];

export const PROJECT_CATEGORIES = [
    { id: 'featured', label: 'Featured Projects', icon: '⭐' },
    { id: 'engineering', label: 'Engineering', icon: '⚙️' },
    { id: 'ai-ml', label: 'AI & Machine Learning', icon: '🤖' },
];

export const TECH_COLORS: Record<string, string> = {
    TypeScript: '#3178c6',
    JavaScript: '#f7df1e',
    React: '#61dafb',
    'Node.js': '#339933',
    Python: '#3776ab',
    'CSS3': '#1572b6',
    'D3.js': '#f9a03c',
    'OpenAI': '#412991',
    'NLP': '#ff6b6b',
    'React Router': '#ca4245',
    'Graph Theory': '#8b5cf6',
};