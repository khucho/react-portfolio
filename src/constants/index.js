import project1 from "../assets/projects/apple_juice.jpeg";
import project2 from "../assets/projects/banana_juice.jpeg";
import project3 from "../assets/projects/mango_juice.jpeg";
import project4 from "../assets/projects/kimchi_soup.jpeg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024(Sept) - Present",
    role: "Web Developer",
    company: "Impact Tech Software Solution",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["HTML", "CSS","Bootstrap","JavaScript","Laravel", "mySQL"],
  },
  {
    year: "2023(Nov) - 2024(Aug)",
    role: "OJT + Junior Web Developer",
    company: "Host Myanmar Software Solution",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS","Bootstrap","JavaScript","Laravel", "Vue.js", "mySQL"],
  }
];

export const PROJECTS = [
  {
    title: "Moe San Pan E-Commerce Website",
    image: project1,
    description:
      "The project consists of four main components: an eCommerce website, a POS and production backend, and a backend dashboard for managing eCommerce and POS orders.",
    technologies: ["HTML", "CSS", "JavaScript" ,"Bootstrap" , "Laravel","Vue.js" , "Postman" , "mySQL"],
  },
  {
    title: "Aung Apex ",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap","Laravel" , "mySQL"],
  },
  {
    title: "MEG Transport",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "Tailwind", "JavaScript" , "PrimeVue.js" , "PostgreSQL"],
  },
  {
    title: "GAS Accounting",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS",  "JavaScript", "Bootstrap","Laravel" , "mySQL"],
  },
];

export const CONTACT = {
  address: "No(18) Sattwin Street, Alone Township , Yangon",
  phoneNo: "09 951168541",
  email: "maymyopwint825@gmail.com",
};