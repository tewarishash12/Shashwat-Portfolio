export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Education", link: "#education" },
    { name: "Tech Stack", link: "#techstack" },
    { name: "Contact", link: "#contact" },
];

export const gridItems = [
    {
        id: 1,
        title: "I'm looking for my first work in the industry",
        description: "",
        className: "lg:col-span-2 md:col-span-6 md:row-span-2 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/b1.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "I'm explorative by nature",
        description: "",
        className: "lg:col-span-1 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "My tech stack",
        description: "I constantly try to improve",
        className: "lg:col-span-1 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Tech enthusiast with a passion for development.",
        description: "",
        className: "lg:col-span-1 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },

    {
        id: 5,
        title: "Currently working on improving my current skill levels",
        description: "The Inside Scoop",
        className: "md:col-span-2 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Do you want to start a project together?",
        description: "",
        className: "lg:col-span-1 md:col-span-3 md:row-span-1",
        imgClassName: "h-full w-full",
        titleClassName: "justify-center md:max-w-full max-w-60",
        img: "",
        spareImg: "",
    },
];

export const projects = [
    {
        id: 1,
        title: "Foodilicious: Cafeteria Management WebApp",
        des: "A webapp that manages various counters and their menu's with multiple roles working in the background",
        img: "/foodilicious.png",
        iconLists: ["/re.svg", "/tail.svg", "/node_icon.svg", "/mongodb.svg", "/express.svg", "/redux.svg"],
        link: "https://cafeteria-web-app-frontend.vercel.app/",
    },
    {
        id: 1,
        title: "BiteDash: Food Delivery Website",
        des: "Explore a new way of ordering food online while getting proper authentication, verification, and safety.",
        img: "/Bitedash.png",
        iconLists: ["/re.svg", "/boot.svg", "/node_icon.svg", "/express.svg", "/mongodb.svg"],
        link: "https://frontend-food-del.onrender.com/",
    },
    {
        id: 3,
        title: "Termify: A personal terminal",
        des: "A personalised terminal that contains all the relevant information with regrads to professional world.",
        img: "/terminal.png",
        iconLists: ["/html.svg", "/css.svg", "/js.svg"],
        link: "https://tewarishash12.github.io/Terminal/",
    },
    {
        id: 4,
        title: "PeakPlanner: Task Management Platform",
        des: "Website that is used to keep track of all the projects and the tasks of all projects while creating role based authentication.",
        img: "/peakplanner.png",
        iconLists: ["/re.svg", "/tail.svg", "/node_icon.svg", "/mongodb.svg", "/express.svg"],
        link: "/ui.aiimg.com",
    },
];

export const education = [
    {
        institute: "Moradabad Institute of Technology, Moradabad",
        degree: "B.Tech Computer Science and Engineering",
        year: "2021-25",
        logo:'/mit.jpg'
    },
    {
        institute: "Vishal Bharti Public School, Delhi",
        degree: "Senior Secondary School",
        year: "2019-20",
        logo:'/vbps.png'
    },
    {
        institute: "Vishal Bharti Public School, Delhi",
        degree: "High School",
        year: "2017-18",
        logo:'/vbps.png'
    }
];

export const techstack = [
    {
        id: 1,
        heading: "Frontend Technology",
        tech: ["HTML", "CSS", "React", "Next"],
        img: ["/html.svg","/css.svg", "re.svg", "next.svg"]
    },
    {
        id: 2,
        heading: "Backend Technology",
        tech: ["Node.js", "Express", "MongoDB", "MySQL"],
        img: ["/node_icon.svg", "express.svg", "mongodb.svg","/mysql.svg"]
    },
    {
        id: 3,
        heading: "Programming Languages",
        tech: ["JavaScript", "C++", "Java", "Python", "C", "SQL"],
        img: ["/js.svg","cpp.svg","/java.svg","/python.svg","/c.svg", "/sql.svg"]
    },
    {
        id: 4,
        heading: "Tools/FrameWorks",
        tech: ["Redux", "Material UI", "BootStrap", "Tailwind CSS", "Postman"],
        img: ["/redux.svg","mui.svg","/boot.svg","/tail.svg","/postman.svg"]
    }
];

export const workExperience = [
    {
        id: 1,
        title: "Frontend Engineer Intern",
        desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Mobile App Dev - JSM Tech",
        desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp2.svg",
    },
    {
        id: 3,
        title: "Freelance App Dev Project",
        desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp3.svg",
    },
    {
        id: 4,
        title: "Lead Frontend Developer",
        desc: "Developed and maintained user-facing features using modern frontend technologies.",
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
    },
];

export const socialMedia = [
    {
        id: 1,
        name:"Github",
        link:"https://github.com/tewarishash12",
        img: "/git.svg",
    },
    {
        id: 2,
        name:"Instagram",
        link:"https://www.instagram.com/tewarishash_12",
        img: "/insta.svg",
    },
    {
        id: 3,
        name:"LinkedIn",
        link:"https://www.linkedin.com/in/shashwat-tewari-5460b4263/",
        img: "/link.svg",
    },
];