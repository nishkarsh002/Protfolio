import { link } from "fs";
import { title } from "process";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#project" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I am experienced in working with React, JS , Tailwind and Nextjs",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Always a team-player who believes in strong network",
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
    description: "I constantly try to improve with the knowledge of",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Have strong problem solving ability with excellent commnunication skills",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a health care website",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "For any Opportunity",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "YC-Directory",
    des: "This is a startup based website where an user can pitch and post about there startup",
    img: "/Pro1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/next.svg", "git.svg"],
    link: "https://backend-project-nu-one.vercel.app/",
  },
  {
    id: 2,
    title: "Animated Website",
    des: "Dynamic website using React and Tailwind CSS with scroll-based animations, CSS clip-path transitions",
    img: "/Project2.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg" ],
    link: "https://animated-project-five.vercel.app/",
  },
  

];

export const workExperience = [
  {
    id: 1,
    title: "Full-Stack Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
   
  },
  {
    id: 2,
    title: "Developer Intern",
    desc: "Utilized APIs to integrate external services and optimize application functionality.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp4.svg",
   
  },
  
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link:  "https://github.com/nishkarsh002",

  },
  {
    id: 2,
    img: "/insta.svg",
    link: "https://www.instagram.com/nish.dixit002/",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://linkedin.com/in/nishkarsh-dixit",
  },
];
