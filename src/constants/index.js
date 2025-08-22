
import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  // ✅ Add these 4 icons
  webIcon,
  designIcon,
  dataIcon,
  devopsIcon,
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
    title: "Web Development",
    icon: webIcon,
  },
  {
    title: "Graphic Design",
    icon: designIcon,
  },
  {
    title: "Data Management",
    icon: dataIcon,
  },
  {
    title: "DevOps Engineering",
    icon: devopsIcon,
  },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  { name: "figma", icon: figma },
  { name: "docker", icon: docker },
];

const experiences = [
  {
    title: "Frontend Developer ",
    company_name: "",
    icon: "",
    iconBg: "#383E56",
    date: "March 2024 - April 2025",
    points: [
      "I specialize in building modern, responsive, and user-friendly web applications using React.js and Next.js. With React",
      "I create dynamic UI components, manage application state efficiently using hooks and context API",
      "and ensure smooth user experiences through component-based architecture. Leveraging the power of Next.js",
      "I implement server-side rendering (SSR), static site generation (SSG), and optimized routing to build SEO-friendly",
      "and high-performance web applications. I follow best practices like code splitting, lazy loading, and responsive design with TailwindCSS",
    ],
  },
  {
    title: "Open Source Contributor",
    company_name: "GitHub",
    icon: git,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Feb 2026",
    points: [
      "I actively contribute to open-source projects on GitHub to improve real-world codebases and",
      "collaborate with global developers. My contributions include resolving UI/UX bugs",
      "fixing accessibility issues, improving component logic, and refining documentation for React-based libraries ",
      "This hands-on involvement has sharpened my debugging skills, introduced me to industry-level code practices, and helped me understand the importance of writing clean, maintainable code.",
      "I regularly explore issues labeled “good first issue” and submit meaningful pull requests while communicating with project maintainers to ensure high-quality merges.",
    ],
  },
  {
    title: "📊 Logic Building & Problem Solving",
    company_name: "",
    icon: "",
    iconBg: "#383E56",
    date: "Jan 2025 - Jan 2026",
    points: [
      "I've been actively strengthening my problem-solving abilities through Data Structures and Algorithms",
      "platforms like LeetCode, CodeStudio, and GeeksforGeeks",
      "I regularly solve problems on arrays, strings, recursion, linked lists, trees, dynamic programming, and graph theory",
      "My focus is not just on getting the right answer, but writing optimal, readable, and scalable code",
      "Practicing DSA has enhanced my logic-building skills and prepared me to approach real-world technical problems with structured thinking and efficiency",
      "🔗 100+ DSA problems solved | Languages: C++",
    ],
  },
  {
    title: "⚙️ Frontend Dev Turning DevOps Enthusiast",
    company_name: "",
    icon: docker,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Present",
    points: [
      "I'm currently focused on frontend development using React.js and Next.js but",
      "I'm deeply passionate about exploring the world of DevOps",
      "I'm actively learning the foundations of cloud infrastructure, CI/CD pipelines, Docker, Linux, and Kubernetes",
      "My goal is to bridge the gap between development and deployment by automating workflows, improving system reliability",
      "and enabling faster, scalable product delivery. With a strong interest in problem-solving and system design",
      "I look forward to mastering tools like Jenkins, GitHub Actions, Terraform, and AWS to become a well-rounded DevOps Engineer",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "restapi", color: "green-text-gradient" },
      { name: "scss", color: "pink-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "supabase", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
