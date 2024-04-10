import { MSUartsandletters, navercafe, accenture, dhrnt } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    github,
    html,
    javascript,
    linkedin,
    nodejs,
    pricewise,
    react,
    snapgram,
    summiz,
    tailwindcss,
    threads
} from "../assets/icons";

export const skills = [
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "UX Researcher",
        company_name: "Michigan State University College of Arts and Letters",
        icon: MSUartsandletters,
        iconBg: "#accbe1",
        date: "Aug 2019 - Dec 2019",
        points: [
            "Created a clear, visual prototype design of the new library/cyber cafe, based on user feedback collected from surveys, focus groups, and interviews. The resulting model achieved 24% higher customer satisfaction than the current design.",
            "Applied user-centered design principles in conducting quantitative research and analysis, gaining insights, and defining criteria for the design of the new layout",
            "Facilitated a 20% decrease in search time by designing navigation structure, menu layout, and content becomes clear and intuitive.",
        ],
    },
    {
        title: "UX Researcher",
        company_name: "Naver Community Café",
        icon: navercafe,
        iconBg: "#fbc3bc",
        date: "Feb 2019 - Jan 2021",
        points: [
            "Carried out a study about graphics aspects of online community café elements typically involved and helpful in successful community management.",
            "Conducted 300 remote user interviews to understand user needs and behaviors, identified significant insights, and actively alerted UX design recommendations.",
            "Reduced user frustration by 16% and improved user engagement by 18% by creating an easy-to-navigate website interface.",
        ],
    },
    {
        title: "Content Review",
        company_name: "Accenture",
        icon: accenture,
        iconBg: "#b7e4c7",
        date: "May 2022 - May 2023",
        points: [
            "Maintained and promoted a positive attitude while meeting productivity and quality goals by achieving 95% accuracy and reaching 105% required producing.",
            "Monitored content, flagged and reported content violations for removal while upholding policies and standards.",
            "Reduced time to review and flag content violations by 80% resulting in increased product and team performance."
        ],
    },
    {
        title: "Intern Program Manager",
        company_name: "Daeheung Rubber & Technology",
        icon: dhrnt,
        iconBg: "#a2d2ff",
        date: "Oct 2023 - Present",
        points: [
            "Developing and maintaining scientific calculator tool for company using Node.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Participating in code reviews and providing constructive feedback to other Product Designers."
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/vite-react-3dportfolio/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/fysay',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/jae-won-lee-68250b177',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'MSU Cyber Cafe Project',
        description: 'Created a clear, visual prototype design of the new library/cyber cafe, based on user feedback collected from surveys, focus groups, and interviews.',
        link: 'https://docs.google.com/presentation/d/1IH901y-NoTOnU_b5bqcFfOzutKbWsInxQNZHVNABqnA/edit?usp=sharing',
        detail: 'https://sites.google.com/view/msu-cyber-cafe-jae'
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Community Management',
        description: 'Focused on improving the overall quality and creating a comprehensive set of graphical elements to be used with the User Experience research.',
        link: 'https://cafe.naver.com/duellinks',
        detail: 'https://sites.google.com/view/dl-onlinecommunity-jaewonlee/home'
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'DIAMBRA Logo Graphic Design',
        description: 'Focused on designing the company logo by studying and improving.',
        link: 'https://diambra.ai/',
        detail: 'https://sites.google.com/view/diambrarobot-jaewonlee/home'
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'MSU M.A. Research Project',
        description: 'Project EDGE (Elders Delightful Game Entrance) to develop an accessible digital gaming platform to promote cognitive health and prevent dementia among older adults (age around 60+).',
        link: 'https://shorturl.at/fps17',
        detail: ''
    }
];