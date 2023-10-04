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
            "Developing robust big-data pipelines using Apache Spark, Kafka, Airflow, Spring Boot, Docker, and Kubernetes.",
            "Creating a high-performance backend application capable of handling up to 100 million transactions per day.",
            "Collaborating effectively with cross-functional teams, including designers, product managers, quality engineers, and fellow developers, to deliver top-quality products.",
            "Implementing a comprehensive DevOps pipeline and robust testing strategies.",
            "Actively participating in code reviews and offering valuable feedback to and from fellow developers.",
            "Towards the end of my tenure at UHG, I assumed a senior role with increased responsibilities in design and architecture"
        ],
    },
    {
        title: "Backend Developer",
        company_name: "Telstra",
        icon: telstra1,
        iconBg: "#E6DEDD",
        date: "Nov 2021 - April 2022",
        points: [
            "Engaged in a freelancing project to craft 2 microservices for an Order Tracking Application.",
            "Collaborated closely with a dynamic team, including a product manager, scrum master, and developers based in Australia.",
            "Implemented a robust Test-Driven Development approach leveraging Java 11, Spring Boot 2, Bamboo CI, and PCF.",
            "Active involvement in daily Scrum meetings and bi-weekly sessions for backlog refinement and sprint reviews.",
            "Gained valuable insights into various aspects of the Energy Industry in Australia.",
        ],
    },
    {
        title: "Integration Engineer",
        company_name: "Pega Systems",
        icon: pega,
        iconBg: "#FFFFFF",
        date: "May 2022 - Oct 2022",
        points: [
            "Engaged in a contract job focused on enhancing Pega's cutting-edge platform, built on a reactive microservices architecture for the next generation.",

            "Leveraged modern Java, Kotlin, Micronaut, and AWS technologies to optimize and streamline the end-to-end code-to-production workflows.",

            "Worked closely with business and engineering leaders to strategize and execute iterative feature releases.",

            "Addressed and resolved critical bug fixes for the existing product, ensuring its stability and reliability.",

            "Actively participated in knowledge-sharing initiatives such as share-to-learn programs and hackathons, fostering collaboration and innovation.",
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

            "Utilized the power of the OpenAI API, Databricks, and Python to craft a cutting-edge Healthcare Application, enhancing drug research.",

            "Opted for Langchain as the preferred framework to streamline interactions with language models, facilitating more efficient prompting and extraction.",

            "Carried out work asynchronously, with a focus on minimizing meetings and interruptions, allowing for deep and uninterrupted productivity."
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
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "Remarkable expertise in crafting and fine-tuning data pipelines, and a natural knack for quickly embracing new tech to deliver rock-solid solutions.",
        name: "Olan Banks",
        designation: "Data Engineering Manager",
        company: "Telstra",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "It's uncommon to find team members who are as dedicated and committed to aspects like design, architecture, security, and deployment.",
        name: "Lisa Wang",
        designation: "Principal Software Engineer",
        company: "Pega Systems",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
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