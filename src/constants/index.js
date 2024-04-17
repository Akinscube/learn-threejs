import {
    mobile,
    backend,
    creator,
    web,
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
    expensePro,
    fitMum,
    inerd,
    freelance,
    radisson,
    brooi,
    esca,
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
      title: "Frontend Web Developer",
      icon: web,
    },
    {
      title: "Creative Designer",
      icon: mobile,
    },
    // {
    //   title: "React Native Developer",
    //   icon: mobile,
    // },
    // {
    //   title: "Backend Developer",
    //   icon: backend,
    // },
    // {
    //   title: "Content Creator",
    //   icon: creator,
    // },
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
      name: "TypeScript",
      icon: typescript,
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
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Creative Manager",
      company_name: "iNERD360",
      icon: inerd,
      iconBg: "#E6DEDD",
      date: "Feb 2018 - August 2018",
      points: [
        "Providing creative design solutions for clients in a variety of industries.",
        "Creating eye-catching designs for websites, logos, marketing materials, and other visual media.",
        "Creating original designs using software such as Adobe Illustrator, Photoshop, CorelDraw.",
      ],
    },
    {
      title: "Cluster Creative Designer",
      company_name: "Radisson Hotel Group",
      icon: radisson,
      iconBg: "#383E56",
      date: "Sept 2018 - Nov 2022",
      points: [
        "Developing and executing creative design concepts and ideas for various marketing materials, such as advertisements, brochures, packaging, and websites.",
        "Collaborating with cross-functional teams, including marketing, sales, and other department, to ensure designs align with company's goals.",
        "Staying up-to-date with industry trends and incorporating them into design work.",
        "Setting up design presentation for internal teams.",
      ],
    },
    {
      title: "React.js Developer",
      company_name: "BROOI HQ",
      icon: brooi,
      iconBg: "#383E56",
      date: "Nov 2022 - Feb 2023",
      points: [
        "Developing user-facing features with React.js; improving existing processes to drive business results.",
        "Collaborating with the development team on coding standards, best practices and code reviews.",
        "Constructing reusable components for current and future use.",
        "Enhancing application features for an optimized user experience.",
      ],
    },
    {
      title: "Frontend Web Developer",
      company_name: "Esca",
      icon: esca,
      iconBg: "#E6DEDD",
      date: "April 2023 - Present",
      points: [
        "Designing and developing visually appealing front-end web pages using HTML, CSS, and JavaScript.",
        "Optimizing and maintaining the company's website, improving its performance and search engine ranking.",
        "Creating necessary company imagery and ensuring brand identity consistency across all graphic design materials.",
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
      name: "expensePro",
      description:
        "A web application that allows users to set a budget for the month, input their daily expenses and view their total expenses.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Redux",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "blue-text-gradient",
        },
        {
          name: "scss",
          color: "blue-text-gradient",
        },
      ],
      image: expensePro,
      source_code_link: "https://github.com/Akinscube/expenses-app.git",
      live_link: "https://extraordinary-stardust-92fa76.netlify.app/",
    },
    {
      name: "Fitmum",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
        {
          name: "MaterialUI",
          color: "green-text-gradient",
        },
      ],
      image: fitMum,
      source_code_link: "https://github.com/Akinscube/fit-mum.git",
      live_link: "https://fitmum.netlify.app/",
    },
    // {
    //   name: "Trip Guide",
    //   description:
    //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "supabase",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };