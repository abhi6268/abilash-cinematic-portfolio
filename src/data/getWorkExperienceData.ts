// Complete work experience data extracted from resume

export interface WorkExperienceItem {
    id: string;
    company: string;
    title: string;
    location: string;
    dateRange: string;
    startDate: string;
    endDate: string;
    isCurrent: boolean;
    isFeatured: boolean;
    type: 'work' | 'education';
    techStack: string[];
    highlights: string[];
    color: string;
    gradient: string;
}

export const WORK_EXPERIENCE: WorkExperienceItem[] = [
    {
        id: 'ziosk',
        company: 'Ziosk',
        title: 'Full Stack Software Engineer',
        location: 'Plano, TX',
        dateRange: 'Jun 2024 - Present',
        startDate: '2024-06',
        endDate: 'Present',
        isCurrent: true,
        isFeatured: true,
        type: 'work',
        techStack: [
            'React',
            'TypeScript',
            'Node.js',
            'Express',
            'Python',
            'FastAPI',
            'Django',
            'MongoDB',
            'MySQL',
            'Azure',
            'Docker',
            'Next.js',
            'OAuth2',
        ],
        highlights: [
            'Architected and delivered large-scale React and TypeScript applications powering enterprise restaurant platforms used nationwide',
            'Led frontend system design, defining reusable component libraries, shared state management and performance optimization strategies',
            'Built backend services using Node.js and Express, integrating with distributed Python and .NET microservices',
            'Designed and implemented data models and schemas in MongoDB and MySQL to support high-volume transactional and analytical workloads',
            'Designed and implemented event-driven ingestion and aggregation pipelines processing 500k+ transactions per day',
            'Built and maintained Python-based services using FastAPI and Django-style architecture patterns',
            'Contributed to frontend architecture using React and Next.js patterns, optimizing rendering strategies and build performance',
            'Reduced API response time by 35% through query optimization, indexing strategies, and API payload restructuring',
            'Deployed cloud-native services on Azure using Docker and automated CI/CD pipelines',
            'Decreased frontend bundle size by 20% using code splitting and build optimization',
            'Implemented secure authentication and authorization using OAuth2 and Azure Active Directory',
            'Monitored production systems using Application Insights, identifying performance bottlenecks across UI, API and database layers',
            'Mentored engineers through code reviews, design discussions, and best-practice guidance',
        ],
        color: '#e50914',
        gradient: 'linear-gradient(135deg, rgba(229, 9, 20, 0.15), rgba(139, 0, 0, 0.10))',
    },
    {
        id: 'verizon',
        company: 'Verizon',
        title: 'Senior Frontend Engineer',
        location: 'Irving, TX',
        dateRange: 'Feb 2022 - Jun 2024',
        startDate: '2022-02',
        endDate: '2024-06',
        isCurrent: false,
        isFeatured: false,
        type: 'work',
        techStack: [
            'React',
            'TypeScript',
            'Node.js',
            'Python',
            'MongoDB',
            'Material UI',
            'REST APIs',
            'Docker',
            'CI/CD',
        ],
        highlights: [
            'Built and maintained enterprise-scale React and TypeScript applications supporting high-traffic internal and customer-facing platforms',
            'Collaborated with backend and database teams to design REST APIs, data models and payload contracts backed by MongoDB',
            'Contributed to backend API enhancements in Node.js and Python services, collaborating on schema evolution and service-layer validation logic',
            'Supported high-traffic platforms serving 100k+ users by improving performance, reliability, and API coordination',
            'Built accessible, responsive interfaces following modern accessibility standards and enterprise UI guidelines',
            'Consumed and validated data via RESTful services, implementing client-side pagination, filtering, sorting and transformation logic',
            'Supported database-driven features by coordinating schema changes and backward-compatible API updates',
            'Delivered accessible, responsive UIs using Material UI and modern CSS standards',
            'Supported containerized deployments and CI/CD workflows',
            'Improved data reliability and UI stability through testing, logging and cross-team reviews',
        ],
        color: '#0066CC',
        gradient: 'linear-gradient(135deg, rgba(0, 102, 204, 0.15), rgba(0, 51, 153, 0.10))',
    },
    {
        id: 'techcloudusa',
        company: 'Impossible Foods',
        title: 'Frontend / Mobile Engineer',
        location: 'Atlanta, GA',
        dateRange: 'Aug 2021 - Feb 2022',
        startDate: '2021-08',
        endDate: '2022-02',
        isCurrent: false,
        isFeatured: false,
        type: 'work',
        techStack: [
            'React',
            'React Native',
            'JavaScript',
            'REST APIs',
            'SQL',
            'NoSQL',
            'Android',
        ],
        highlights: [
            'Developed React and React Native applications supporting Android phones and tablets',
            'Built reusable UI components and shared state management solutions',
            'Contributed to end-to-end system development across frontend and backend layers',
            'Integrated REST APIs backed by SQL and NoSQL databases, handling authentication and secure data access',
            'Implemented efficient client-side caching and data-fetching strategies',
            'Optimized rendering performance and reduced unnecessary re-renders',
        ],
        color: '#00C896',
        gradient: 'linear-gradient(135deg, rgba(0, 200, 150, 0.15), rgba(0, 150, 100, 0.10))',
    },
    {
        id: 'chakravyuha',
        company: 'Chakravyuha Technologies',
        title: 'Software Engineer',
        location: 'India',
        dateRange: 'Jan 2019 - May 2021',
        startDate: '2019-01',
        endDate: '2021-05',
        isCurrent: false,
        isFeatured: false,
        type: 'work',
        techStack: [
            'React',
            'JavaScript',
            'Redux',
            'HTML',
            'CSS',
            'REST APIs',
        ],
        highlights: [
            'Developed responsive web applications using React, JavaScript, HTML and CSS',
            'Implemented Redux-based state management for complex UI flows',
            'Integrated REST APIs and worked with backend teams to align data contracts',
            'Supported database-backed features and ensured consistent data presentation across browsers',
            'Optimized application performance and ensured cross-browser compatibility',
            'Collaborated with QA teams to validate data accuracy and resolve production issues',
        ],
        color: '#8B5CF6',
        gradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(109, 40, 217, 0.10))',
    },
];

export const EDUCATION: WorkExperienceItem[] = [
    {
        id: 'tamu',
        company: 'Texas A&M University, Commerce',
        title: "Master's in Business Analytics",
        location: 'Commerce, TX',
        dateRange: '2021 - 2022',
        startDate: '2021',
        endDate: '2022',
        isCurrent: false,
        isFeatured: false,
        type: 'education',
        techStack: [],
        highlights: [
            'Business Analytics',
            'Data Science',
            'Statistical Analysis',
        ],
        color: '#500000',
        gradient: 'linear-gradient(135deg, rgba(80, 0, 0, 0.15), rgba(50, 0, 0, 0.10))',
    },
    {
        id: 'vtu',
        company: 'VTU, India',
        title: "Bachelor's in Computer Science",
        location: 'India',
        dateRange: '2015 - 2019',
        startDate: '2015',
        endDate: '2019',
        isCurrent: false,
        isFeatured: false,
        type: 'education',
        techStack: [],
        highlights: [
            'Computer Science',
            'Software Engineering',
            'Algorithms & Data Structures',
        ],
        color: '#500000',
        gradient: 'linear-gradient(135deg, rgba(80, 0, 0, 0.15), rgba(50, 0, 0, 0.10))',
    },
];

export const ALL_TIMELINE_ITEMS = [...WORK_EXPERIENCE, ...EDUCATION];