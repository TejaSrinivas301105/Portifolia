// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";

import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";

import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";

import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";

import cLogo from "./assets/tech_logo/c.png";

import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";

import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";

import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";

import dsa from "./assets/tech_logo/dsa.jpg";
import ml from "./assets/tech_logo/image.png";


// Experience Section Logo's



// Education Section Logo's
import glaLogo from "./assets/education_logo/image.png";
import bsaLogo from "./assets/education_logo/logo.png";
import vpsLogo from "./assets/education_logo/vit.png";

// Project Section Logo's
import githubdetLogo from "./assets/work_logo/FinMate.jpg";
import TodoListLogo from "./assets/work_logo/TodoList.png";
import TicketSupportLogo from "./assets/work_logo/TickectSuportLogo.png";
import CrowdSense from "./assets/work_logo/CrowdSense.png";


export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },

      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "SpringBoot", logo: springbootLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },

      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
    ],
  },
  {
    title: "Others",
    skills: [
      { name: "Machine Learning", logo: ml },
      { name: "DSA", logo: dsa },
    ],
  },
];


export const education = [
  {
    id: 2,
    img: vpsLogo,
    school: "VIT-AP, Amaravathi",
    date: "August 2023 - March 2027(onGoing)",
    grade: "9.13",
    desc: "I am currently pursuing my Bachelor of Technology (B.Tech) in Computer Science and Engineering (CSE) from VIT AP. Throughout my studies, I have been actively exploring key areas such as Data Structures and Algorithms (DSA), MERN stack development, and Machine Learning (ML). This ongoing learning journey is helping me build a strong foundation in software development and intelligent systems. I am passionate about applying these skills to real-world projects, enhancing both my technical knowledge and problem-solving abilities.",
    degree: "Batchelor of technology-Computer Science",
  },
  {
    id: 1,
    img: bsaLogo,
    school: "Aditya Junior College",
    date: "June 2021 - May 2023",
    grade: "96.8%",
    desc: "I completed my class 12 education from Aditya Junnior, Bhimavaram, West Godavari, under the State board, where I studied Physics, Chemistry, and Mathematics (MPC) .",
    degree: "APSCHE",
  },
  {
    id: 0,
    img: glaLogo,
    school: "Aditya [E.M] High School",
    date: "june 2010 - March 2021",
    grade: "99.16%",
    desc: "I completed my Class 10 education from Aditya [E.M] High school, located in Bhimavaram, WestGodavari, under the [Board Name, e.g., State Board/CBSE/ICSE]. My curriculum included core subjects such as Mathematics, Science, Social Studies, English, and a second language",

    degree: "Andhra Pradesh State Board",
  },
];

export const projects = [
  {
    id: 4,
    title: "FinMate(Finance Tracker)",
    description:
      "Built a full-stack(java backend) finance tracker for students to manage income, expenses, and budgets. Features include JWT auth, encrypted passwords, interactive dashboards (Recharts), recurring transactions, and dynamic filtering. Stack: React.js, Tailwind CSS, Express.js, MongoDB Atlas.",
    image: githubdetLogo,
    role: "Frontend Development using React.js, tailwind css Daisy UI-for css",
    tags: ["HTML", "CSS", "JavaScript", "React JS", "SpringBoot", "MongoDb"],
    github: "https://github.com/TejaSrinivas301105/FinMate_Only_Frontend",
    webapp: "https://studysave.netlify.app/",
  },
  {
  id: 0,
  title: "Ticket Support System",
    description:
      "A full-stack ticket support system designed to streamline issue tracking and customer support workflows. The application allows users to raise, view, and manage support tickets, while admins can monitor ticket status and respond efficiently. Built with a secure backend using Express.js and MongoDB, the system implements JWT-based authentication to ensure role-based access and data security. The intuitive interface improves communication and enhances support management efficiency.",
    image: TicketSupportLogo,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "Node.js", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/TejaSrinivas301105/TicketSupportSystem",
    webapp: "https://graceful-mooncake-f9b332.netlify.app/",
  },
  {
    id: 1,
    title: "CrowdSense",
    description:
      "A machine learning–integrated bus service system designed to analyze passenger crowd density using a YOLO-based object detection model. The system processes visual data to estimate crowd levels and integrates the ML model with a web application for visualization and monitoring. The project focuses on combining computer vision with web technologies to support data-driven decisions in public transportation. The application is currently under active development and is provided via a GitHub repository for further enhancements and experimentation.",
    image: CrowdSense,
    role : "complete Backend and integration of Ml",
    tags: [
      "React JS",
      "Node.js",
      "MongoDB",
      "Express",
      "HTML",
      "CSS",
      "JavaScript",
      "tailwind css",
      "YOLO-11",
    ],
    github: "https://github.com/TejaSrinivas301105/Crowd_Sense",
  },
  {
    id: 5,
    title: "Task Management",
    description:
      "A Task Management system helps you plan, organize, track, and complete tasks efficiently by grouping work into stages like To Do, In Progress, and Completed, improving productivity and clarity",
    image: TodoListLogo,
    tags: [
      "React JS",
      "Node.js",
      "MongoDB",
      "Express",
      "HTML",
      "CSS",
      "JavaScript",
      "tailwind css"
    ],
    github: "https://github.com/TejaSrinivas301105/TaskMangement",
    webapp: "https://iridescent-llama-adac70.netlify.app/",
  },
  {
  id: 2,
  title: "KrushiMithr",
  description:
    "A smart agriculture marketplace platform built with Java and Spring Boot that connects farmers directly with buyers, providing catalog search, inventory management, and live price tracking through secure RESTful APIs",
  image: KrushiMithrLogo,
  tags: [
    "Java",
    "Spring Boot",
    "Spring MVC",
    "REST API",
    "PostgreSQL",
    "Supabase",
    "JPA",
    "Hibernate"
  ],
},
{
  id: 3,
  title: "AI Interview",
  description:
    "An AI-powered technical screening platform that conducts live voice interviews, generates adaptive questions based on resumes, evaluates candidate responses, and provides comprehensive performance reports using RAG and LLM technologies",
  image: AIInterviewLogo,
  tags: [
    "React JS",
    "FastAPI",
    "Python",
    "Groq LLaMA",
    "RAG",
    "ElevenLabs",
    "Tailwind CSS",
    "Framer Motion",
    "DataHaven"
  ],
},
];
