export const metaData = {
  global: {
    navbar: {
      title: "Kira Aziz",
      logo: { icon: "terminal" },
      paths: [
        { name: 'Home', to: '/', icon: 'mdi:home' },
        { name: 'Projects', to: '/project', icon: 'mdi:github' },
        { name: 'Skills', to: '/stack', icon: 'mdi:react' },
        { name: 'Blog', to: '/blog', icon: 'mdi:blog' },
        { name: 'Pricing', to: '/price', icon: 'mdi:github' },
        { name: 'Contact', to: '/contact', icon: 'mdi:gmail' },
      ],
      selectedContacts: ['github', 'Instagram', 'devto']
    }
  },
  home: {
    about: {
      title: "Hi, I’m Kira Aziz",
      description: [
        "A Tunisian 🇹🇳 full-stack developer with a <span class=\"font-medium\">Bachelor's degree in Computer Science</span> and 2.5 years of experience. I have over 55,000 total reads on <a href=\"https://dev.to/kiraaziz\" class=\"text-primary hover:underline mx-1\" target=\"_blank\" rel=\"noopener noreferrer\">dev.to</a> and create apps like <a href=\"https://light-ai.vercel.app/\" class=\"text-primary hover:underline mx-1\" target=\"_blank\" rel=\"noopener noreferrer\">Light AI ✨</a>, <a href=\"https://eyebase.vercel.app/\" class=\"text-primary hover:underline mx-1\" target=\"_blank\" rel=\"noopener noreferrer\">Eyebase 🎉</a>, <a href=\"/project/3\" class=\"text-primary hover:underline mx-1\" target=\"_blank\" rel=\"noopener noreferrer\">Type AI 🤖</a>, and <a href=\"/project/5\" class=\"text-primary hover:underline mx-1\" target=\"_blank\" rel=\"noopener noreferrer\">NeoFlow 🪢</a>. <br />I&apos;ve also built enterprise apps from scratch and shipped features to products with 100k+ users! 🚀"
      ],
      avatarImages: [
        { src: "/images/globals/avatarNoBg.png", className: "w-72 hidden lg:block", alt: "avatar" },
        { src: "/images/globals/avatarNoBg.png", className: "absolute blur-lg -z-10 opacity-40", alt: "avatar blurred" },
        { src: "/images/globals/sin.svg", className: "absolute bottom-0 translate-y-1/2", alt: "decoration" },
        { src: "/images/globals/sin.svg", className: "absolute bottom-0 blur translate-y-1/2", alt: "decoration blurred" },
      ],
      cv: {
        href: "/docs/cv.pdf",
        label: "Download cv"
      },
      announcements: [

        {
          badge: "New Venture",
          title: "Introducing Lymoun - Our Software Engineering Agency",
          icon: "/svg/app/lymoun.svg",
          button: {
            href: "https://lymoun.agency",
            label: "Learn More About Lymoun",
          }
        },
        {
          badge: "New SaaS Launch",
          icon: "/svg/app/healthybase.svg",
          title: "Healthy Base - Never Lose Your Database Again",
          button: {
            href: "https://healthybase.cloud",
            label: "Try Healthy Base",
          }
        }
      ]
    }
  },
  bento: {
    github: {
      title: "Last activities",
      action: "Explore Github",
      titleMobile: "Activities",
      actionMobile: "Explore",
    },
    topApp: {
      title: "Top apps",
      more: "Read more"
    }
  },
  stack: {
    title: "Current Tech Stack",
    list: [
      { name: 'Next JS', icon: 'next.svg' },
      { name: 'React', icon: 'react.svg' },
      { name: 'Tailwind', icon: 'tailwindcss.svg' },
      { name: 'Expo', icon: 'expo.svg' },
      { name: 'Electron', icon: 'electron.svg' },
      { name: 'Postgresql', icon: 'postgresql.svg' },
      { name: 'Prisma', icon: 'prisma.svg' },
      { name: 'Firebase', icon: 'supabase.svg' }
    ]
  },
  porjects: {
    title: "Check out my latest work",
    text: "I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.",
    page: {
      important: {
        title: "Featured Projects",
        text: "A selection of my most important and impactful work, demonstrating key accomplishments and cutting-edge technology."
      },
      old: {
        title: "Older Work",
        text: "Some older projects that reflect my journey and growth in software development, from foundational to unique undertakings."
      }
    }
  },
  experience: {
    "title": "Work Experience",
    "description": "Since 2023, I've worked with various companies and clients, constantly seeking new challenges.",
    "active": [0, 1],
    "jobs": [
      {
        "title": "Software Engineer ",
        "company": "Délib",
        "description": "I started my journey as a software engineer at Better Player Win, where I was responsible for maintaining a production-ready application that has been used by thousands of users.",
        "date": "Oct 2025 - Present (Paris, France)",
        "image": "/experience/delib.svg",
        "tech": ["firebase", "react", "vite", "scss"]
      },
      {
        "title": "Software Engineer ",
        "company": "Capyxis ",
        "description": "I worked at Capyxis as a mobile developer, where I built a mobile app with significant growth potential and other exciting applications. It was here that I learned the importance of AI and how to incorporate it into my projects.",
        "date": "July 2024 - Present (Paris, France)",
        "image": "/experience/capyxis.png",
        "tech": ["next js", "tailwind", "openai api", "express", "prisma", "postgresql", "firebase", "electron", "expo"]
      },
      {
        "title": "Software Engineer ",
        "company": "Better Player Win",
        "description": "I started my journey as a software engineer at Better Player Win, where I was responsible for maintaining a production-ready application that has been used by thousands of users.",
        "date": "Jan 2025 - Sept 2025 (Montreal, Canada)",
        "image": "/experience/better.svg",
        "tech": ["firebase", "react", "vite", "scss"]
      },
      {
        "title": "Software Engineer ",
        "company": "Kombas Net ",
        "description": "This is where I started my journey as a software engineer. My first project involved migrating a PrestaShop website to a Next.js website. I also built projects and apps from scratch, including e-commerce platforms, content management systems, and more.",
        "date": "July 2023 - July 2024 (Monastir, Tunisia)",
        "image": "/experience/kombas.png",
        "tech": ["next js", "tailwind", "react native", "express", "prisma", "postgresql", "firebase", "electron", "expo", "prestashop", "mongo"]
      }
    ]
  },
  design: {
    title: "My Design System",
    text: "I've been working on a design system for my side projects that makes the apps load quickly and efficiently from the start.",
    options: [
      {
        name: "Custom",
        class: "w-[100%] mt-10 mx-auto",
        image: "prototype-2.png"
      },
      {
        name: "Supabase",
        class: "w-[100%] mt-10 mx-auto",
        image: "prototype-1.png"
      },
      {
        name: "Firebase",
        class: "w-[100%] mt-10 mx-auto",
        image: "prototype-3.png"
      },
      {
        name: "Desktop",
        class: "w-[80%] mx-auto",
        image: "prototype-5.png"
      },
      {
        name: "Mobile",
        class: "w-[90%] mx-auto",
        image: "prototype-4.png"
      },
    ]
  },
  contact: {
    "gmail": {
      "title": "Gmail",
      "name": "mailto:kiraaziz2020@gmail.com",
    },
    "phone": {
      "title": "Phone",
      "name": "tel:+216 93 989 486",
    },
    "whatsup": {
      "title": "Whats app",
      "name": "https://wa.me/93989486",
    },
    "github": {
      "title": "Github",
      "name": "https://github.com/kiraaziz",
    },
    "facebook": {
      "title": "Facebook",
      "name": "https://www.facebook.com/aziz.kira.581/",
    },
    "instagram": {
      "title": "Instagram",
      "name": "https://www.instagram.com/kiracancode/",
    },
    "linkedin": {
      "title": "Linkedin",
      "name": "https://www.linkedin.com/in/med-aziz-rjeibi-3b07832a5/",
    },
    "devto": {
      "title": "DEV.to",
      "name": "https://dev.to/kiraaziz",
    }
  },
  blogPage: {
    badge: "New Announcement",
    title: "We’ve just launched our brand new blog - check it out!",
    extraClass: "row-span-2 justify-center bg-primary/5 border-primary/10 ",
    description: "Welcome to my digital playground—where I share my coding journey, creative projects, and lessons learned !",
    button: {
      href: "https://blog.kiraaziz.club",
      label: "Get Started"
    }
  },
  pricePage: {
    title: "Plans & Pricing",
    description: "Flexible options for every client: from code review and consulting to full-scale SaaS development. Choose what fits you best.",
    plans: [
      {
        name: "Consultation",
        description: "One-on-one session for advice, code review, or troubleshooting your project.",
        priceLabel: 50,
        scale: "hour",
        features: [
          "Video or chat session",
          "Direct Q&A",
          "Code review or bug fix",
          "Actionable next steps"
        ],
        orderClass: ""
      },
      {
        name: "Basic",
        description: "Perfect for personal portfolios, landing pages, or small businesses seeking an online presence.",
        priceLabel: 2000,
        scale: "project",
        features: [
          "Professional showcase website",
          "Up to 5 uniquely designed pages",
          "Responsive design (mobile & desktop)",
          "Delivered in 3 days",
          "20 days of free bug fixes & support"
        ],
        orderClass: ""
      },
      {
        name: "Custom",
        description: "Enterprise-grade, scalable SaaS solutions with advanced integrations.",
        priceLabel: 15000,
        scale: "project",
        features: [
          "Custom SaaS application built from scratch",
          "AI integration & automation features",
          "Full project lifecycle: from concept to deployment",
          "3 to 12 months of agile development",
          "1 year of free premium maintenance & support"
        ],
        orderClass: "order-2 lg:order-1",
        isFeatured: true
      },
      {
        name: "Pro",
        description: "Dynamic multi-page website for growing businesses needing advanced features.",
        priceLabel: 7000,
        scale: "project",
        features: [
          "E-commerce integration (shop & cart)",
          "Comprehensive management system (admin panel, dashboard)",
          "Custom, dynamic content (CMS integration)",
          "Up to 60 days of collaborative development",
          "90 days of free post-launch maintenance"
        ],
        orderClass: "order-1 lg:order-2"
      },
    ]
  },
  contactPage: {
    title: "Get in Touch ",
    description: "Have a question, feedback, or just want to say hello? We'd love to hear from you! Feel free to reach out using the contact information below, and we'll get back to you as soon as possible."
  }
}