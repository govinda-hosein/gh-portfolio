// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Govinda Hosein";
export const SITE_DESCRIPTION = "Welcome to my site!";

export const EXPERIENCES = [
  {
    title: "ICT Technologist",
    company_name: "Caribbean Industrial Research Institute",
    icon: "/icons/cariri.jpg",
    iconBg: "#FFFFFF",
    date: "September 2014 - September 2017",
    points: [
      "Team member of the Data Innovations Solutions Centre (DISC)",
      "Provided IT support to the Centre for Enterprise Development (CED)",
      "Delivered numerous programming workshops at the Microsoft Innovation Centre (MIC)",
      "Maintained all company websites",
      "Supervised the development of an Electronic Health Record (EHR) system",
      "Developed the prototype and supported subsequent release of the Hyperglycemia in Pregnancy Trinidad and Tobago (HiPTT) online platform",
    ],
  },
  {
    title: "Associate Professional",
    company_name: "Department of Electrical and Computer Engineering, UWI",
    icon: "/icons/uwi.jpg",
    iconBg: "#FFFFFF",
    date: "February 2019 - February 2020",
    points: [
      "Designed and supervised the installation of the first Electric Vehicle (EV) charging station for the University of the West Indies (UWI), St. Augustine campus",
      "Wrote and submitted 6 research papers for publication in the field of renewable energy, EVs and Machine Learning (ML)",
      "Delivered training workshops for power system modelling in the PowerFactory software",
      "Facilitated an external PhD study by partially modelling Trinidad and Tobago's transmission and distribution system",
    ],
  },
  {
    title: "Electrical and Computer Engineer",
    company_name: "FaSoVe",
    icon: "/icons/fasove.png",
    iconBg: "#FFFFFF",
    date: "February 2020 - October 2020",
    points: [
      "Designed, developed and deployed the ProTool; an online assessment productivity measurement tool for the National Competitiveness and Producitivty Council (NCPC) of St. Lucia.",
      "Performed code refactoring and visual updates to the Percussion Harmonic Instrument (P.H.I.) table app",
      "Designed, developed and deployed and online platform to remotely monitor boats",
    ],
  },
  {
    title: "Software Development and Design Engineer",
    company_name: "Digicel",
    icon: "/icons/digicel.png",
    iconBg: "#FFFFFF",
    date: "November 2020 - Present",
    points: [
      "A core developer of the MyDigicel App. Built in flutter and published to both google play and ios stores. Has more than 10 million downloads",
      "Designed, developed and deployed DigiAssist, a platform for both customers and internal agents to troubleshoot modem issues with an automated flow. UI/UX designs were created in figma",

      "Automated manual tasks across the entire company (using primarily python)",
      "Effectively deployed numerous web applications to meet business needs",
    ],
  },
];

export const FRAMEWORKS = [
  {
    name: "Tailwind CSS",
    icon: "/icons/tailwind.png",
  },
  {
    name: "React",
    icon: "/icons/reactjs.png",
  },
  {
    name: "Laravel",
    icon: "/icons/laravel.png",
  },
  {
    name: "Django",
    icon: "/icons/django.png",
  },
  {
    name: "Flask",
    icon: "/icons/flask.png",
  },
  {
    name: "Flutter",
    icon: "/icons/flutter.png",
  },
  {
    name: "Unity",
    icon: "/icons/unity.png",
  },
];

export const LANGUAGES = [
  {
    name: "HTML 5",
    icon: "/icons/html.png",
  },
  {
    name: "PHP",
    icon: "/icons/php.png",
  },
  {
    name: "C#",
    icon: "/icons/csharp.png",
  },
  {
    name: "Python",
    icon: "/icons/python.jpg",
  },
  {
    name: "Java",
    icon: "/icons/java.png",
  },
  {
    name: "Dart",
    icon: "/icons/dart.png",
  },
  {
    name: "JavaScript",
    icon: "/icons/javascript.png",
  },
];

export const PROJECTS = [
  {
    name: "All Fours Mobile",
    description:
      "Hang ah Jack! Kick ah Six! All Fours Mobile is completely free to play. Release provides players a strong AI to play with and against during spare time in this tradition four (4) player game.",
    tags: ["Unity", "MobileGame"],
    image: "/icons/allfoursmobile.webp",
    links: [
      {
        icon: "/icons/applestore.png",
        href: "https://apps.apple.com/gb/app/all-fours-mobile/id1573349538",
        title: "Apple Store Link",
      },
    ],
  },
  {
    name: "DigiAssist",
    description:
      "DigiAssist is the ultimate solution hub for all your Digicel product and service issues. With a comprehensive list of automated tools, you can troubleshoot any problem from the comfort of your own home.",
    tags: ["Django", "React", "Tailwind"],
    image: "/icons/digiassist.webp",
    links: [
      {
        icon: "/icons/link.png",
        href: "https://service.digiceltt.com/digiassist/",
        title: "Link",
      },
    ],
  },
  {
    name: "MyDigicel App",
    description:
      "Manage your account and complete all your Digicel transactions. Features include activate plans and subscriptions, pay your Digicel Bills using your credit/debit card, Top-up your account, check your balance and data usage, send credit to family & friends",
    tags: ["Flutter", "RestAPI"],
    image: "/icons/mydigicel.webp",
    links: [
      {
        icon: "/icons/applestore.png",
        href: "https://apps.apple.com/gb/app/mydigicel/id1039460951",
        title: "Apple Store Link",
      },
      {
        icon: "/icons/googleplay.png",
        href: "https://play.google.com/store/apps/details?id=com.digicel.selfcare.mobile",
        title: "Google Play Link",
      },
    ],
  },
  {
    name: "FarmVue",
    description:
      "FarmVue is a mobile app built for farmers to track their produce",
    tags: ["Flutter", "RestAPI"],
    image: "/icons/farmvue.jpeg",
    links: [
      {
        icon: "/icons/applestore.png",
        href: "https://apps.apple.com/us/app/good-agricultural-practices/id1569043989",
        title: "Apple Store Link",
      },
      {
        icon: "/icons/googleplay.png",
        href: "https://play.google.com/store/apps/details?id=com.raziel619.gaptt_mobile",
        title: "Google Play Link",
      },
      {
        icon: "/icons/link.png",
        href: "https://farmvue.app/",
        title: "Link",
      },
    ],
  },
];

export const SERVICES = [
  {
    title: "Full Stack Web Developer",
    icon: "/icons/web.png",
  },
  {
    title: "UI/UX Designer (Figma)",
    icon: "/icons/web.png",
  },
  {
    title: "Content Creator",
    icon: "/icons/creator.png",
  },
  {
    title: "Game Developer (Unity)",
    icon: "/icons/web.png",
  },
  {
    title: "Mobile App Developer (Flutter)",
    icon: "/icons/mobile.png",
  },
  {
    title: "Automation Engineer",
    icon: "/icons/backend.png",
  },
];

export const TOOLBOX = [
  {
    name: "Node JS",
    icon: "/icons/nodejs.png",
  },
  {
    name: "Git",
    icon: "/icons/git.png",
  },
  {
    name: "Figma",
    icon: "/icons/figma.png",
  },
  {
    name: "Docker",
    icon: "/icons/docker.png",
  },
];
