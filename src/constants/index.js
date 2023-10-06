import { data } from "autoprefixer";
import {
    mobile,
    backend,
    creator,
    web,
    git,
    docker,
    uhg,
    telstra1,
    pega,
    carrent,
    jobit,
    tripguide,
    jnj,
    java,
    airflow,
    cassandra,
    databricks,
    kafka,
    kubernetes,
    langchain,
    openai,
    postgresql,
    python,
    spark,
    springBoot
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Data Engineer",
        icon: web,
    },
    {
        title: "LLM Application Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Software Consultant",
        icon: creator,
    },
];


const technologies = [
    {
        name: "Java",
        icon: java
    },
    {
        name: "Spring Boot",
        icon: springBoot
    },
    {
        name: "Apache Spark",
        icon: spark,
    },
    {
        name: "Apache Kafka",
        icon: kafka,
    },
    {
        name: "Databricks",
        icon: databricks
    },
    {
        name: "PostgreSQL",
        icon: postgresql
    },
    {
        name: "Git",
        icon: git,
    },
    {
        name: "Docker",
        icon: docker
    },
    {
        name: "Python",
        icon: python
    },
    {
        name: "OpenAI",
        icon: openai
    },
    {
        name: "Langchain",
        icon: langchain,
    },
    {
        name: "Kubernetes",
        icon: kubernetes
    },
    {
        name: "Airflow",
        icon: airflow
    },
    {
        name: "Cassandra",
        icon: cassandra
    }
];

const experiences = [
    {
        title: "Software Engineer",
        company_name: "UHG (UnitedHealth Group)",
        icon: uhg,
        iconBg: "#fff",
        date: "May 2019 - Oct 2021",
        points: [
            "Developed big-data pipelines and streaming apps.",
            "Collaborated with cross-functional teams to deliver high-quality products.",
            "Established a robust DevOps pipelines and testing strategies.",
            "Actively engaged in code reviews, providing valuable feedback.",
            "Attained in-depth knowledge of US Healthcare and policies."
        ],
    },
    {
        title: "Backend Developer",
        company_name: "Telstra",
        icon: telstra1,
        iconBg: "#E6DEDD",
        date: "Nov 2021 - April 2022",
        points: [
            "Created 2 microservices for an Order Tracking App as a freelancer.",
            "Worked closely with a dynamic team including a product manager, scrum master, and Australian developers.",
            "Followed a strong Test-Driven Development approach.",
            "Participated in daily Scrum meetings and bi-weekly backlog refinement and sprint reviews.",
            "Gained insights into the Australian Energy Industry."
        ],
    },
    {
        title: "Integration Engineer",
        company_name: "Pega Systems",
        icon: pega,
        iconBg: "#FFFFFF",
        date: "May 2022 - Oct 2022",
        points: [
            "Focused on enhancing Pega's cutting-edge platform, built on a reactive microservices architecture.",

            "Leveraged modern Java, Kotlin, Micronaut, and AWS technologies to optimize and streamline the end-to-end code-to-production workflows.",

            "Worked closely with business and engineering leaders to strategize and execute iterative feature releases.",
        ],
    },
    {
        title: "Data Consultant",
        company_name: "JnJ",
        icon: jnj,
        iconBg: "#FFFFFF",
        date: "Nov 2022 - Present",
        points: [
            "Played a pivotal role in the migration of a legacy Java Compute-Engine to Azure Databricks, ensuring a seamless transition to a modern data processing platform.",

            "Collaborated closely on the development of an automated pipeline that transforms XML data into Scala code, enabling the generation and execution of Spark Jobs within Databricks.",

            "Utilizing the power of the OpenAI API, Databricks, and Python to craft solutions for Canadian HealthCare.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "Rarely have I encountered a developer with such a profound grasp of product development and business requirements.",
        name: "Asia Robinson",
        designation: "Senior Product Owner",
        company: "UHC",
        image: "https://randomuser.me/api/portraits/women/10.jpg",
    },
    {
        testimonial:
            "Remarkable expertise in crafting and fine-tuning data pipelines, and a natural knack for quickly embracing new tech to deliver rock-solid solutions.",
        name: "Olan Banks",
        designation: "Data Engineering Manager",
        company: "Telstra",
        image: "https://randomuser.me/api/portraits/men/14.jpg",
    },
    {
        testimonial:
            "It's uncommon to find team members who are as dedicated and committed to aspects like design, architecture, security, and deployment.",
        name: "Lisa Wang",
        designation: "Principal Software Engineer",
        company: "Pega Systems",
        image: "https://randomuser.me/api/portraits/women/19.jpg",
    },

];

const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, testimonials, projects };