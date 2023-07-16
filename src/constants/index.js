/* eslint-disable no-unused-vars */
import {
    abhay,
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    starbucks,
    shopify,
    carrent,
    jobit,
    tripguide,
    gym,
    resound,
    youtube,
    drum,
    tindog,
    uiuxportfolio,
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
        title: "Front-end Web Developer",
        icon: web,
    },
    {
        title: "React JS Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "UI/UX Designer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
];

const experiences = [
    {
        title: "Front-end Web Developer",
        company_name: "Cosmonueral pvt. ltd.",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2022 - September 2022",
        points: [
            "Developed and maintained web applications using Next.js and other related technologies.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
        ],
    },
    {
        title: "Back-end Web Developer",
        company_name: "Ghar Pe Shiksha",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jan 2023 - March 2023",
        points: [
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Participated in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Archit proved me wrong.",
        name: "Abhay Phougat",
        designation: "CEO",
        company: "Cosmonueral pvt. ltd.",
        image: abhay,
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Lakshay",
        designation: "COO",
        company: "Ghar Pe Shiksha",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
];

const projects = [
    {
        name: "Gym Fitness App",
        description:
            "Ah! The most needed! A full stack app with modern UI/UX design which is all set to be your fitness guide.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "ui/ux",
                color: "green-text-gradient",
            },
            {
                name: "exercise api",
                color: "pink-text-gradient",
            },
        ],
        image: gym,
        source_code_link: "https://github.com/Archits436/Fitness-App",
        demo_link: "https://archit-fitness-gym.netlify.app/",
    },
    {
        name: "Resound",
        description:
            "A full-stack E-commerce website to help you buy latest audio products.",
        tags: [
            {
                name: "next js",
                color: "blue-text-gradient",
            },
            {
                name: "sanity backend",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: resound,
        source_code_link: "https://github.com/Archits436/resound",
        demo_link: "https://resound-store.vercel.app/",
    },
    {
        name: "YouTube 2.0",
        description:
            "A full-stack youtube clone application developed using modern technologies.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "youtube api",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: youtube,
        source_code_link: "https://github.com/Archits436/Youtube_2.0",
        demo_link: "https://archit-youtube2.netlify.app/",
    },
    {
        name: "Drum Kit",
        description:
            "A drum kit website made using javascript. Rock on!",
        tags: [
            {
                name: "javascript",
                color: "blue-text-gradient",
            },
            {
                name: "html",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: drum,
        source_code_link: "https://github.com/Archits436/Drum-Kit",
        demo_link: "https://archits436.github.io/Drum-Kit/",
    },
    {
        name: "TinDog",
        description:
            "Find the perfect partner for your dog with TinDog. Paw paw!",
        tags: [
            {
                name: "html",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tindog,
        source_code_link: "https://github.com/Archits436/TinDog",
        demo_link: "https://archits436.github.io/TinDog/",
    },
    {
        name: "UI/UX Portfolio",
        description:
            "Just a small portfolio of me to represent the modern UI/UX design techniques.",
        tags: [
            {
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: uiuxportfolio,
        source_code_link: "https://github.com/Archits436/My-Site",
        demo_link: "https://archits436.github.io/My-Site/",
    },
];

export { services, technologies, experiences, testimonials, projects };