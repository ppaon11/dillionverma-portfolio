import { Icons } from "@/components/icons"; // Import Icons

export const DATA = {
  name: "papon",
  initials: "P",
  avatarUrl: "path/to/your/new/image.jpg", // เปลี่ยน URL รูปภาพตรงนี้
  description: "Full Stack Developer",
  summary: `
    I am a full stack developer with a passion for building web applications.
    I have experience working with a variety of technologies, including React, Node.js, and GraphQL.
  `,
  url: "https://your-website-url.com", // Add your website's base URL here
  work: [
    {
      company: "Company A",
      title: "Software Engineer",
      start: "Jan 2020",
      end: "Present",
      logoUrl: "/images/company-a-logo.png",
      href: "https://companya.com",
      badges: ["React", "Node.js", "GraphQL"],
      description: `
        Worked on building and maintaining web applications using React, Node.js, and GraphQL.
        Collaborated with cross-functional teams to deliver high-quality software solutions.
      `,
    },
    // ...other work experiences...
  ],
  education: [
    {
      school: "University A",
      degree: "Bachelor of Science in Computer Science",
      start: "Sep 2015",
      end: "Jun 2019",
      logoUrl: "/images/university-a-logo.png",
      href: "https://universitya.com",
    },
    // ...other education experiences...
  ],
  skills: ["JavaScript", "React", "Node.js", "GraphQL"],
  projects: [
    {
      title: "Project A",
      description: "A web application built with React and Node.js.",
      dates: "Jan 2021 - Present",
      technologies: ["React", "Node.js", "GraphQL"],
      image: "/images/project-a.png",
      video: "/videos/project-a.mp4",
      links: [
        { icon: Icons.github({}), type: "GitHub", href: "https://github.com/project-a" }, // Updated structure
        { icon: Icons.globe({}), type: "Live Demo", href: "https://project-a.com" }, // Updated structure
      ],
    },
    // ...other projects...
    // Ensure all other projects' links follow the new structure:
    // { icon: <SomeIconComponent />, type: "Link Type", href: "URL" }
  ],
  hackathons: [
    {
      title: "Hackathon A",
      description: "Built a web application in 48 hours.",
      location: "City A",
      dates: "Jan 2020",
      image: "/images/hackathon-a.png",
      links: [
        { icon: Icons.github({}), type: "GitHub", href: "https://github.com/hackathon-a" }, // Updated structure
        { icon: Icons.globe({}), type: "Live Demo", href: "https://hackathon-a.com" }, // Updated structure
      ],
    },
    // ...other hackathons...
    // Ensure all other hackathons' links follow the new structure:
    // { icon: <SomeIconComponent />, type: "Link Type", href: "URL" }
  ],
  contact: {
    social: {
      X: { url: "https://twitter.com/dillionverma" },
    },
  },
};