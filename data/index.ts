import { links } from "@/config";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "Building trust through consistent communication and client-centered collaboration",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Always in sync — no matter the zone.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building an Ai Resume Builder",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Let’s get your project off the ground.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "Gramchat- One to One Chatting Application",
    des: "A Application with real-time chatting and a responsive UI.",
    img: "/p1.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.png","/node.png"],
    link: "https://chat-app-jtx2.onrender.com/login",
    sourceCode: "https://github.com/chirag-singhh/Chat-app",
  },
  {
    id: 2,
    title: "Duocortex Landing Page",
    des: "Simple Landing Page with responsive UI",
    img: "/p2.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.png"],
    link: "https://duocortex.in/",
    sourceCode: "https://github.com/chirag-singhh/Duocortex-Landing",
  },
  {
    id: 3,
    title: "SteadySteps-A habit tracker App",
    des: "A WebApp which manages and track your Habit.",
    img: "/p3.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.png","/node.png"],
    link: "https://github.com/chirag-singhh/HABIT-TRACKER",
    sourceCode: "https://github.com/chirag-singhh/HABIT-TRACKER",
  },
  {
    id: 4,
    title: "AI Resume Builder",
    des: "A Application For making Resume's.",
    img: "/p4.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.png","/node.png", "/three.svg"],
    link: "https://github.com/chirag-singhh/Ai-resume",
    sourceCode: "https://github.com/chirag-singhh/Ai-resume",
  },
] as const;

export const testimonials = [
  {
    quote: `Working with ${links.ownerName} was an absolute pleasure. Their professionalism, responsiveness, and commitment to excellence were evident from start to finish. ${links.ownerName} brings genuine passion to every aspect of development, making them stand out in the field. If you're looking to elevate your website and build a strong digital presence, ${links.ownerName} is the partner you can trust.
 `,
    name: "Ankit Singh ",
    title: "Founder of Duocortex ",
  },
  {
    quote: `Working with ${links.ownerName} was an absolute pleasure. Their professionalism, responsiveness, and commitment to excellence were evident from start to finish. ${links.ownerName} brings genuine passion to every aspect of development, making them stand out in the field. If you're looking to elevate your website and build a strong digital presence, ${links.ownerName} is the partner you can trust.



 `,
    name: "Ankit Singh ",
    title: "Founder of Duocortex ",
  },
  {
    quote: `Working with ${links.ownerName} was an absolute pleasure. Their professionalism, responsiveness, and commitment to excellence were evident from start to finish. ${links.ownerName} brings genuine passion to every aspect of development, making them stand out in the field. If you're looking to elevate your website and build a strong digital presence, ${links.ownerName} is the partner you can trust.



 `,
    name: "Ankit Singh ",
    title: "Founder of Duocortex ",
  },
  {
    quote: `Working with ${links.ownerName} was an absolute pleasure. Their professionalism, responsiveness, and commitment to excellence were evident from start to finish. ${links.ownerName} brings genuine passion to every aspect of development, making them stand out in the field. If you're looking to elevate your website and build a strong digital presence, ${links.ownerName} is the partner you can trust.



 `,
    name: "Ankit Singh ",
    title: "Founder of Duocortex ",
  },
  {
    quote: `Working with ${links.ownerName} was an absolute pleasure. Their professionalism, responsiveness, and commitment to excellence were evident from start to finish. ${links.ownerName} brings genuine passion to every aspect of development, making them stand out in the field. If you're looking to elevate your website and build a strong digital presence, ${links.ownerName} is the partner you can trust.



 `,
    name: "Ankit Singh ",
    title: "Founder of Duocortex ",
  },
] as const;

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "Hosr",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  // {
  //   id: 4,
  //   name: "stream",
  //   img: "/s.svg",
  //   nameImg: "/streamName.svg",
  // },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
] as const;

export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Web App Developer",
    desc: "Designed and developed web app using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Project",
    desc: "Freelancing for clients .",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Owasp TCET Web Team",
    desc: "Developed and maintained user-facing features.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
] as const;

export const socialMedia = [
  {
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/chirag-singhh",
  },
  {
    name: "Twitter",
    img: "/twit.svg",
    link: "https://twitter.com/",
  },
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/chirag-singhh/",
  },
] as const;

export const techStack = {
  stack1: ["React.js", "Node.js", "Javascript"],
  stack2: ["Figma", "AWS", "MongoDB"],
} as const;
