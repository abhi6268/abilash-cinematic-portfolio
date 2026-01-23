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
        title: "Full Stack Developer",
        techStack: "React, TypeScript, Redux, Node.js, Azure, Docker, CI/CD",
        summaryPoints: [
            "Built scalable SPAs using React + TypeScript with predictable state management.",
            "Made frontend architecture decisions and reusable component patterns across features.",
            "Integrated Node/Express services with distributed Python and .NET microservices.",
            "Deployed and supported cloud solutions on Azure with Docker and CI/CD pipelines.",
            "Improved reliability and performance using production monitoring and debugging."
        ],
        dateRange: "Jun 2024 – Present"
    },
    {
        timelineType: "work",
        name: "Verizon",
        title: "Senior Frontend Developer",
        techStack: "React, TypeScript, Redux, Material UI, Node.js, Python, MySQL, MongoDB",
        summaryPoints: [
            "Built enterprise UI modules with React + TypeScript and accessible design patterns.",
            "Integrated UI with Node/Python APIs and collaborated on API contracts and payloads.",
            "Implemented responsive UIs and performance optimizations for cross-device support.",
            "Maintained quality via code reviews, unit tests, and close collaboration with QA."
        ],
        dateRange: "Feb 2022 – Jun 2024"
    },
    {
        timelineType: "work",
        name: "TechCloudUSA",
        title: "Frontend Developer",
        techStack: "React, React Native, TypeScript, Redux, OAuth2, REST APIs",
        summaryPoints: [
            "Built mobile-first features using React Native and reusable UI components.",
            "Integrated REST APIs with auth flows using OAuth2 and token-based authorization.",
            "Improved performance by reducing re-renders and optimizing component structure."
        ],
        dateRange: "Aug 2021 – Feb 2022"
    },
    {
        timelineType: "work",
        name: "Chakravyuha Technologies",
        title: "Web Developer",
        techStack: "HTML, CSS, JavaScript, React, Redux, REST APIs, Git",
        summaryPoints: [
            "Built responsive interfaces across browsers and device sizes.",
            "Integrated APIs for dynamic data updates and reduced full page reloads.",
            "Improved UI performance with DOM and CSS optimizations."
        ],
        dateRange: "Jan 2019 – May 2021"
    },
    {
        timelineType: "education",
        name: "VTU, India",
        title: "Bachelor’s in Computer Science",
        techStack: "Computer Science",
        summaryPoints: ["Completed Bachelor’s degree in Computer Science."],
        dateRange: "Dec 2018"
    },
    {
        timelineType: "education",
        name: "Texas A&M Commerce",
        title: "Master’s in Business Analytics",
        techStack: "Business Analytics",
        summaryPoints: ["Completed Master’s degree in Business Analytics."],
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
