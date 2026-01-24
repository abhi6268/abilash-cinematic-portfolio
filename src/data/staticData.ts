import {
    ProfileBanner,
    WorkPermit,
    TimelineItem,
    Project,
    Certification,
    ContactMe,
    Skill,
} from "../types";

export const profileBannerData: ProfileBanner = {
    backgroundImage: { url: "https://placehold.co/1600x900/png" },
    headline: "Abilash Mundlur",
    resumeLink: { url: "https://example.com/your-resume.pdf" },
    linkedinLink: "https://www.linkedin.com/in/your-linkedin/",
    profileSummary:
        "Frontend Developer building React + TypeScript apps. Replace this summary with your real one.",
};

export const certifications: Certification[] = [
    {
        title: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        issuedDate: "2024",
        link: "https://example.com/cert",
        iconName: "aws",
    },
];

export const projects: Project[] = [
    {
        title: "Netflix Portfolio",
        description: "Netflix-style portfolio site built in React + TypeScript.",
        techUsed: "React, TypeScript, CSS",
        image: { url: "https://placehold.co/1200x675/png" },
    },
];

export const skills: Skill[] = [
    {
        name: "JavaScript",
        category: "Languages",
        description: "Async patterns, modern syntax, performance-minded UI code.",
        icon: "SiJavascript",
    },
    {
        name: "TypeScript",
        category: "Languages",
        description: "Strong typing, generics, safer large-scale refactors.",
        icon: "SiTypescript",
    },
    {
        name: "Python",
        category: "Languages",
        description: "APIs, automation, backend services.",
        icon: "SiPython",
    },
    {
        name: "C# (.NET)",
        category: "Languages",
        description: "Enterprise backend services and APIs.",
        icon: "SiCsharp",
    },
    {
        name: "HTML5",
        category: "Languages",
        description: "Semantic, accessible markup.",
        icon: "SiHtml5",
    },
    {
        name: "CSS3",
        category: "Languages",
        description: "Responsive layouts, animations, UI polish.",
        icon: "SiCss3",
    },

    // ======================
    // Frontend
    // ======================
    {
        name: "React",
        category: "Frontend",
        description: "Hooks, reusable components, performance optimization.",
        icon: "FaReact",
    },
    {
        name: "Redux",
        category: "Frontend",
        description: "Scalable state management.",
        icon: "SiRedux",
    },
    {
        name: "Redux-Saga",
        category: "Frontend",
        description: "Complex async orchestration and side effects.",
        icon: "SiReduxsaga",
    },
    {
        name: "Next.js",
        category: "Frontend",
        description: "Routing, SSR/SSG, production-grade React apps.",
        icon: "SiNextdotjs",
    },
    {
        name: "Material UI",
        category: "Frontend",
        description: "Theming, design systems, responsive components.",
        icon: "SiMui",
    },
    {
        name: "Ant Design",
        category: "Frontend",
        description: "Enterprise UI components.",
        icon: "SiAntdesign",
    },
    {
        name: "Bootstrap",
        category: "Frontend",
        description: "Responsive grid and layout system.",
        icon: "SiBootstrap",
    },
    {
        name: "Figma",
        category: "Frontend",
        description: "Design collaboration and UI handoff.",
        icon: "SiFigma",
    },

    // ======================
    // Backend
    // ======================
    {
        name: "Node.js",
        category: "Backend",
        description: "Scalable APIs and backend services.",
        icon: "FaNodeJs",
    },
    {
        name: "Express.js",
        category: "Backend",
        description: "REST APIs, middleware, authentication.",
        icon: "SiExpress",
    },
    {
        name: "Flask / FastAPI",
        category: "Backend",
        description: "Python-based REST services.",
        icon: "SiFastapi",
    },
    {
        name: "ASP.NET Core",
        category: "Backend",
        description: "Enterprise-grade APIs and services.",
        icon: "SiDotnet",
    },
    {
        name: "GraphQL",
        category: "Backend",
        description: "Schema-driven API development.",
        icon: "SiGraphql",
    },
    {
        name: "REST API Design",
        category: "Backend",
        description: "Contracts, pagination, filtering, versioning, error handling.",
        icon: "SiOpenapiinitiative",
    },
    {
        name: "OAuth2 / JWT",
        category: "Backend",
        description: "Secure auth flows, token handling, protected APIs.",
        icon: "SiAuth0",
    },
    {
        name: "Swagger",
        category: "Backend",
        description: "API documentation, schema contracts, and versioned endpoints.",
        icon: "SiSwagger",
    },

    // ======================
    // Databases
    // ======================
    {
        name: "MongoDB",
        category: "Databases",
        description: "Document-based NoSQL data modeling.",
        icon: "SiMongodb",
    },
    {
        name: "MySQL",
        category: "Databases",
        description: "Relational database and SQL queries.",
        icon: "SiMysql",
    },
    {
        name: "SQL Optimization",
        category: "Databases",
        description: "Indexes, query tuning, schema evolution, performance analysis.",
        icon: "SiMysql",
    },

    // ======================
    // Cloud & DevOps
    // ======================
    {
        name: "Microsoft Azure",
        category: "Cloud & DevOps",
        description:
            "App Services, Functions, Storage, Azure AD, CI/CD, DevOps pipelines.",
        icon: "SiMicrosoftazure",
    },
    {
        name: "Docker",
        category: "Cloud & DevOps",
        description: "Containerized development and deployments.",
        icon: "FaDocker",
    },
    {
        name: "Kubernetes",
        category: "Cloud & DevOps",
        description: "Container orchestration and scaling.",
        icon: "SiKubernetes",
    },
    {
        name: "Azure DevOps",
        category: "Cloud & DevOps",
        description: "CI/CD pipelines, build/release automation, environments.",
        icon: "SiAzuredevops",
    },
    {
        name: "CI/CD",
        category: "Cloud & DevOps",
        description: "Automated builds, testing gates, and deployment workflows.",
        icon: "SiGithubactions",
    },
    {
        name: "Azure Storage",
        category: "Cloud & DevOps",
        description: "Blob containers, SAS access patterns, file-based data workflows.",
        icon: "SiDatabricks",
    },

    // ======================
    // Testing & Tools
    // ======================
    {
        name: "Jest",
        category: "Testing & Tools",
        description: "Unit testing and mocking.",
        icon: "SiJest",
    },
    {
        name: "Mocha / Jasmine",
        category: "Testing & Tools",
        description: "JavaScript testing frameworks.",
        icon: "SiMocha",
    },
    {
        name: "Git & GitHub",
        category: "Testing & Tools",
        description: "Version control and collaboration.",
        icon: "FaGitAlt",
    },
    {
        name: "Webpack & Babel",
        category: "Testing & Tools",
        description: "Build tooling and bundling.",
        icon: "SiWebpack",
    },
    {
        name: "Postman",
        category: "Testing & Tools",
        description: "API testing and validation.",
        icon: "SiPostman",
    },
    {
        name: "Jira",
        category: "Testing & Tools",
        description: "Agile workflows and sprint tracking.",
        icon: "SiJira",
    },
    {
        name: "Vite",
        category: "Testing & Tools",
        description: "Modern frontend build tooling and fast dev workflows.",
        icon: "SiVite",
    },

    // ======================
    // AI
    // ======================
    {
        name: "GitHub Copilot",
        category: "AI",
        description: "AI-assisted development and refactoring.",
        icon: "SiGithubcopilot",
    },
];

export const timeline: TimelineItem[] = [
    {
        timelineType: "work",
        name: "Ziosk",
        title: "Full Stack Software Engineer",
        techStack:
            "React, TypeScript, Redux, Node.js, Express, MongoDB, MySQL, Azure, Docker, CI/CD",
        summaryPoints: [
            "Architected and delivered large-scale React + TypeScript applications used across enterprise restaurant platforms.",
            "Owned frontend system design including reusable component libraries, state management, and performance optimizations.",
            "Built and integrated Node.js/Express APIs with distributed Python and .NET microservices.",
            "Designed MongoDB and MySQL schemas to support transactional data and analytics use cases.",
            "Implemented event ingestion and aggregation pipelines to power reporting and operational insights.",
            "Improved end-to-end performance by optimizing API payloads, database queries, and indexing strategies.",
            "Deployed and monitored cloud-native services on Azure using Docker and automated CI/CD pipelines."
        ],
        dateRange: "Jun 2024 – Present"
    },
    {
        timelineType: "work",
        name: "Verizon",
        title: "Senior Frontend Engineer",
        techStack:
            "React, TypeScript, Redux, Material UI, Node.js, Python, MongoDB, MySQL",
        summaryPoints: [
            "Developed enterprise-scale React + TypeScript applications supporting high-traffic internal and customer-facing systems.",
            "Partnered with backend and database teams to design REST APIs, data models, and payload contracts.",
            "Implemented data-heavy UI workflows including pagination, filtering, sorting, and transformations.",
            "Worked closely with backend teams on schema evolution and backward-compatible API changes.",
            "Delivered accessible, responsive UIs while maintaining performance and data consistency.",
            "Improved UI performance and reliability by optimizing client-side data fetching, caching, and rendering patterns."
        ],
        dateRange: "Feb 2022 – Jun 2024"
    },
    {
        timelineType: "work",
        name: "TechCloudUSA",
        title: "Frontend / Mobile Engineer",
        techStack:
            "React, React Native, TypeScript, Redux, REST APIs, OAuth2, SQL, NoSQL",
        summaryPoints: [
            "Built React and React Native applications supporting mobile and tablet platforms.",
            "Integrated REST APIs backed by SQL and NoSQL databases with secure OAuth2 authentication.",
            "Implemented efficient data-fetching and client-side caching strategies.",
            "Improved application performance by reducing re-renders and optimizing component lifecycles."
        ],
        dateRange: "Aug 2021 – Feb 2022"
    },
    {
        timelineType: "work",
        name: "Chakravyuha Technologies",
        title: "Software Engineer",
        techStack: "React, JavaScript, HTML, CSS, Redux, REST APIs, SQL, Git",
        summaryPoints: [
            "Developed responsive web applications with React and modern JavaScript.",
            "Integrated REST APIs and worked with backend teams to align data contracts.",
            "Supported database-driven features and ensured consistent data rendering across browsers.",
            "Optimized UI performance and collaborated with QA to resolve production issues."
        ],
        dateRange: "Jan 2019 – May 2021"
    },
    {
        timelineType: "education",
        name: "VTU, India",
        title: "Bachelor’s in Computer Science",
        techStack: "Computer Science",
        summaryPoints: [
            "Completed coursework in data structures, databases, operating systems, and software engineering."
        ],
        dateRange: "Dec 2018"
    },
    {
        timelineType: "education",
        name: "Texas A&M University – Commerce",
        title: "Master’s in Business Analytics",
        techStack: "Business Analytics",
        summaryPoints: [
            "Focused on data analysis, reporting, and translating business problems into data-driven solutions."
        ],
        dateRange: "Dec 2022"
    }
];

export const workPermit: WorkPermit = {
    visaStatus: "U.S. Permanent Resident (Green Card)",
    expiryDate: new Date("2099-12-31"),
    summary: "Authorized to work in the United States with no sponsorship required.",
    additionalInfo: "Does not require current or future visa sponsorship.",
};


export const contactMe: ContactMe = {
    profilePicture: { url: "https://placehold.co/400x400/png" },
    name: "Abilash Mundlur",
    title: "Full Stack Developer",
    summary: "Reach out for frontend or full-stack roles and collaborations.",
    companyUniversity: "Ziosk / Texas A&M University",
    linkedinLink: "https://www.linkedin.com/in/abilash-mundlur",
    email: "abhimundlur@gmail.com",
    phoneNumber: "+1 (980) 888-6622",
};
