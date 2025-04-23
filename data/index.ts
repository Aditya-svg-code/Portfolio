export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I've hands-on experience building responsive and scalable Web applications ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
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
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
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
    title: "Online Auctioning Website",
    des: "Real-time auction platform with dynamic bidding and crypto support using MERN and Socket.IO.",
    img: "/prj1.png",
    iconLists: ["/re.svg", "/tail.svg", "/nodejs.svg", "/mongodb.svg", "/expressjs.svg"],
    link: "https://github.com/Aditya-svg-code/AuctionHunter",
    pin: "auctionhunter.com",
  },
  {
    id: 2,
    title: "Real-Time Chat App",
    des: "Secure real-time 1:1 and group messaging using WebSockets, JWT auth, and REST APIs.",
    img: "/prj2.png",
    iconLists: ["/re.svg", "/tail.svg", "/nodejs.svg", "/socketio.svg", "/mongodb.svg"],
    link: "https://github.com/Aditya-svg-code/Realtime-NodeJs-Chat-App-MySpace",
    pin: "myspace.com",
  },
  {
    id: 3,
    title: "Product Rental Website",
    des: "AngularJS e-commerce platform with user authentication and seller dashboard.",
    img: "/prj3.png",
    iconLists: ["/angularjs.svg", "/nodejs.svg", "/expressjs.svg", "/mongodb.svg", "/tail.svg"],
    link: "https://github.com/Aditya-svg-code/My-Shopping-Website",
    pin: "rental.com",
  },
  {
    id: 4,
    title: "Stock Management System",
    des: "It is designed to streamline and automate the process of inventory management...",
    img: "/prj4.png",
    iconLists: ["/php.svg", "/tail.svg", "/mongodb.svg", "/expressjs.svg", "/nodejs.svg"],
    link: "https://github.com/Aditya-svg-code/Stock-Management-System",
    pin: "mysms.com",
  },
];

export const testimonials = [
  {
    quote:
      "Aditya’s ability to translate complex requirements into clean, maintainable code was impressive. During our real‑time chat app project, he took the lead on the WebSocket integration and delivered it ahead of schedule. I’d hire him again in a heartbeat!",
    name: "Anirudh Tiwari",
    title: "Student, Lovely Professional University",
    profile: "/profile1.svg",
  },
  {
    quote:
      "Working with Aditya on the auction platform was seamless—his Socket.IO expertise and attention to detail helped us support 500+ concurrent users without a hitch. He’s a true team player and a natural problem‑solver.",
    name: "Rohan Mehta",
    title: "Instructor, Udemy",
    profile: "/profile2.svg",
  },
  {
    quote:
      "Aditya’s mentorship during our MERN‑stack training sessions was invaluable. He breaks down complex concepts in an engaging way and always follows through on his commitments.",
    name: "Sunita Verma",
    title: "Instructor, Cipher Schools",
    profile: "/profile3.svg",
  },
  {
    quote:
      "Aditya’s ability to translate complex requirements into clean, maintainable code was impressive. During our real‑time chat app project, he took the lead on the WebSocket integration and delivered it ahead of schedule. I’d hire him again in a heartbeat!",
    name: "Anirudh Tiwari",
    title: "Student, Lovely Professional University",
    profile: "/profile1.svg",
  },
  {
    quote:
      "Working with Aditya on the auction platform was seamless—his Socket.IO expertise and attention to detail helped us support 500+ concurrent users without a hitch. He’s a true team player and a natural problem‑solver.",
    name: "Rohan Mehta",
    title: "Instructor, Udemy",
    profile: "/profile2.svg",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "Visual Studio",
    img: "/vs.svg",
    nameImg: "/vstext.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "GitHub",
    img: "/github.svg",
    nameImg: "/githubtext.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full-Stack Development - Cipher Schools",
    desc: "Developed practical skills using React libraries such as JWT, Bcrypt, express.js and real-world applications",
    date: "June 24 - Aug 24",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    link: "",
  },
  {
    id: 2,
    title: "Server-side JavaScript with Node.js",
    desc: "- Coursera(NIIT)",
    date: "February 24 - April 24",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
    link: "https://www.coursera.org/account/accomplishments/verify/FVCGC9RPC9H3?utm_product=course",
  },
  {
    id: 3,
    title: "Mastering Data Structures & Algorithm",
    desc: "- Udemy",
    date: "May 23 - October 23",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
    link: "https://www.udemy.com/certificate/UC-15ba3a7d-7a27-4dc1-9e9d-149dd07aa57c/",
  },
  {
    id: 4,
    title: "Getting Started with AI and Machine Learning",
    desc: "- Linkedin",
    date: "November 22 - February 23",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
    link: "https://www.linkedin.com/learning/certificates/4c938248f1f5dbdb44e9111e708244c1b1cbcb6a7b7f2793a0e6a6e689934c21?trk=share_certificate",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Aditya-svg-code",
  },
  {
    id: 2,
    img: "/leetcode.svg",
    link: "https://leetcode.com/u/adi_tya_028/",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/aditya-son-i/",
  },
];
