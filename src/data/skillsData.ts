export interface Skill {
    id: string;
    name: string;
    icon: string;
    category: string;
    proficiency: number; // 1-100
    yearsOfExperience: number;
    description: string;
}

export const skillsData: Skill[] = [
    // Languages
    {
        id: "js",
        name: "JavaScript",
        icon: "SiJavascript",
        category: "Languages",
        proficiency: 95,
        yearsOfExperience: 7,
        description: "ES6+, Async/Await, Promises"
    },
    {
        id: "ts",
        name: "TypeScript",
        icon: "SiTypescript",
        category: "Languages",
        proficiency: 90,
        yearsOfExperience: 5,
        description: "Advanced Types, Generics"
    },
    {
        id: "python",
        name: "Python",
        icon: "SiPython",
        category: "Languages",
        proficiency: 85,
        yearsOfExperience: 4,
        description: "FastAPI, Django, Data Processing"
    },
    {
        id: "csharp",
        name: "C#",
        icon: "SiCsharp",
        category: "Languages",
        proficiency: 75,
        yearsOfExperience: 3,
        description: ".NET Core, ASP.NET"
    },
    {
        id: "html",
        name: "HTML5",
        icon: "SiHtml5",
        category: "Languages",
        proficiency: 95,
        yearsOfExperience: 7,
        description: "Semantic Markup, Accessibility"
    },
    {
        id: "css",
        name: "CSS3",
        icon: "SiCss3",
        category: "Languages",
        proficiency: 90,
        yearsOfExperience: 7,
        description: "Flexbox, Grid, Animations"
    },

    // Frontend Frameworks & Libraries
    {
        id: "react",
        name: "React",
        icon: "FaReact",
        category: "Frontend",
        proficiency: 95,
        yearsOfExperience: 6,
        description: "Hooks, Context, Performance"
    },
    {
        id: "redux",
        name: "Redux",
        icon: "SiRedux",
        category: "Frontend",
        proficiency: 85,
        yearsOfExperience: 5,
        description: "State Management, Thunks"
    },
    {
        id: "redux-saga",
        name: "Redux Saga",
        icon: "SiReduxsaga",
        category: "Frontend",
        proficiency: 80,
        yearsOfExperience: 4,
        description: "Side Effects, Async Actions"
    },
    {
        id: "nextjs",
        name: "Next.js",
        icon: "SiNextdotjs",
        category: "Frontend",
        proficiency: 85,
        yearsOfExperience: 3,
        description: "SSR, SSG, API Routes"
    },
    {
        id: "mui",
        name: "Material UI",
        icon: "SiMui",
        category: "Frontend",
        proficiency: 90,
        yearsOfExperience: 5,
        description: "Component Library, Theming"
    },
    {
        id: "antd",
        name: "Ant Design",
        icon: "SiAntdesign",
        category: "Frontend",
        proficiency: 80,
        yearsOfExperience: 3,
        description: "Enterprise UI Components"
    },
    {
        id: "tailwind",
        name: "Tailwind CSS",
        icon: "SiTailwindcss",
        category: "Frontend",
        proficiency: 90,
        yearsOfExperience: 3,
        description: "Utility-First CSS Framework"
    },
    {
        id: "bootstrap",
        name: "Bootstrap",
        icon: "SiBootstrap",
        category: "Frontend",
        proficiency: 85,
        yearsOfExperience: 5,
        description: "Responsive Design System"
    },
    {
        id: "figma",
        name: "Figma",
        icon: "SiFigma",
        category: "Frontend",
        proficiency: 75,
        yearsOfExperience: 4,
        description: "UI/UX Design, Prototyping"
    },
    {
        id: "sass",
        name: "Sass/SCSS",
        icon: "SiSass",
        category: "Frontend",
        proficiency: 85,
        yearsOfExperience: 5,
        description: "CSS Preprocessing, Mixins"
    },

    // Backend
    {
        id: "nodejs",
        name: "Node.js",
        icon: "FaNodeJs",
        category: "Backend",
        proficiency: 90,
        yearsOfExperience: 6,
        description: "Async I/O, Event-Driven"
    },
    {
        id: "express",
        name: "Express",
        icon: "SiExpress",
        category: "Backend",
        proficiency: 90,
        yearsOfExperience: 6,
        description: "RESTful APIs, Middleware"
    },
    {
        id: "fastapi",
        name: "FastAPI",
        icon: "SiFastapi",
        category: "Backend",
        proficiency: 80,
        yearsOfExperience: 3,
        description: "High-Performance Python APIs"
    },
    {
        id: "django",
        name: "Django",
        icon: "SiDjango",
        category: "Backend",
        proficiency: 75,
        yearsOfExperience: 2,
        description: "Full-Stack Python Framework"
    },
    {
        id: "dotnet",
        name: ".NET Core",
        icon: "SiDotnet",
        category: "Backend",
        proficiency: 75,
        yearsOfExperience: 3,
        description: "Cross-Platform Framework"
    },
    {
        id: "graphql",
        name: "GraphQL",
        icon: "SiGraphql",
        category: "Backend",
        proficiency: 80,
        yearsOfExperience: 3,
        description: "Query Language for APIs"
    },
    {
        id: "swagger",
        name: "Swagger",
        icon: "SiSwagger",
        category: "Backend",
        proficiency: 85,
        yearsOfExperience: 4,
        description: "API Documentation"
    },
    {
        id: "restapi",
        name: "REST APIs",
        icon: "SiRestapi",
        category: "Backend",
        proficiency: 95,
        yearsOfExperience: 7,
        description: "RESTful Architecture"
    },

    // Databases
    {
        id: "mongodb",
        name: "MongoDB",
        icon: "SiMongodb",
        category: "Databases",
        proficiency: 85,
        yearsOfExperience: 5,
        description: "NoSQL, Document Database"
    },
    {
        id: "postgresql",
        name: "PostgreSQL",
        icon: "SiPostgresql",
        category: "Databases",
        proficiency: 80,
        yearsOfExperience: 4,
        description: "Relational Database, ACID"
    },
    {
        id: "mysql",
        name: "MySQL",
        icon: "SiMysql",
        category: "Databases",
        proficiency: 80,
        yearsOfExperience: 5,
        description: "Relational Database"
    },
    {
        id: "redis",
        name: "Redis",
        icon: "SiRedis",
        category: "Databases",
        proficiency: 75,
        yearsOfExperience: 3,
        description: "In-Memory Cache, Pub/Sub"
    },
    {
        id: "azureblob",
        name: "Azure Blob",
        icon: "SiMicrosoftazure",
        category: "Databases",
        proficiency: 80,
        yearsOfExperience: 4,
        description: "Object Storage Service"
    },

    // Cloud & DevOps
    {
        id: "azure",
        name: "Microsoft Azure",
        icon: "SiMicrosoftazure",
        category: "Cloud & DevOps",
        proficiency: 85,
        yearsOfExperience: 5,
        description: "Cloud Platform, Functions, VMs"
    },
    {
        id: "docker",
        name: "Docker",
        icon: "FaDocker",
        category: "Cloud & DevOps",
        proficiency: 85,
        yearsOfExperience: 4,
        description: "Containerization, Images"
    },
    {
        id: "kubernetes",
        name: "Kubernetes",
        icon: "SiKubernetes",
        category: "Cloud & DevOps",
        proficiency: 75,
        yearsOfExperience: 3,
        description: "Container Orchestration"
    },
    {
        id: "azuredevops",
        name: "Azure DevOps",
        icon: "VscAzureDevops",
        category: "Cloud & DevOps",
        proficiency: 80,
        yearsOfExperience: 4,
        description: "CI/CD Pipelines"
    },
    {
        id: "githubactions",
        name: "GitHub Actions",
        icon: "SiGithubactions",
        category: "Cloud & DevOps",
        proficiency: 80,
        yearsOfExperience: 3,
        description: "Workflow Automation"
    },
    {
        id: "nginx",
        name: "Nginx",
        icon: "SiNginx",
        category: "Cloud & DevOps",
        proficiency: 70,
        yearsOfExperience: 3,
        description: "Reverse Proxy, Load Balancer"
    },
    {
        id: "terraform",
        name: "Terraform",
        icon: "SiTerraform",
        category: "Cloud & DevOps",
        proficiency: 70,
        yearsOfExperience: 2,
        description: "Infrastructure as Code"
    },

    // Testing & Tools
    {
        id: "jest",
        name: "Jest",
        icon: "SiJest",
        category: "Testing & Tools",
        proficiency: 85,
        yearsOfExperience: 5,
        description: "Unit Testing, Mocking"
    },
    {
        id: "mocha",
        name: "Mocha",
        icon: "SiMocha",
        category: "Testing & Tools",
        proficiency: 75,
        yearsOfExperience: 3,
        description: "JavaScript Test Framework"
    },
    {
        id: "cypress",
        name: "Cypress",
        icon: "SiCypress",
        category: "Testing & Tools",
        proficiency: 80,
        yearsOfExperience: 3,
        description: "E2E Testing"
    },
    {
        id: "git",
        name: "Git",
        icon: "FaGitAlt",
        category: "Testing & Tools",
        proficiency: 95,
        yearsOfExperience: 7,
        description: "Version Control, Branching"
    },
    {
        id: "webpack",
        name: "Webpack",
        icon: "SiWebpack",
        category: "Testing & Tools",
        proficiency: 80,
        yearsOfExperience: 5,
        description: "Module Bundler"
    },
    {
        id: "vite",
        name: "Vite",
        icon: "SiVite",
        category: "Testing & Tools",
        proficiency: 85,
        yearsOfExperience: 2,
        description: "Fast Build Tool"
    },
    {
        id: "postman",
        name: "Postman",
        icon: "SiPostman",
        category: "Testing & Tools",
        proficiency: 90,
        yearsOfExperience: 6,
        description: "API Testing Platform"
    },
    {
        id: "jira",
        name: "Jira",
        icon: "SiJira",
        category: "Testing & Tools",
        proficiency: 85,
        yearsOfExperience: 6,
        description: "Project Management"
    },
    {
        id: "copilot",
        name: "GitHub Copilot",
        icon: "SiGithubcopilot",
        category: "Testing & Tools",
        proficiency: 90,
        yearsOfExperience: 2,
        description: "AI Pair Programming"
    },
    {
        id: "eslint",
        name: "ESLint",
        icon: "SiEslint",
        category: "Testing & Tools",
        proficiency: 90,
        yearsOfExperience: 6,
        description: "Code Linting, Quality"
    },
    {
        id: "prettier",
        name: "Prettier",
        icon: "SiPrettier",
        category: "Testing & Tools",
        proficiency: 95,
        yearsOfExperience: 5,
        description: "Code Formatting"
    },
];