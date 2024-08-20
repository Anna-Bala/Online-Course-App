import courseDesignImg from "@/public/course-design.png";
import courseJavascriptImg from "@/public/course-javascript.png";
import courseMobileImg from "@/public/course-mobile.png";
import courseUXImg from "@/public/course-UX.png";
import courseWebdesignImg from "@/public/course-webdesign.png";
import courseWebImg from "@/public/course-web.png";

export const benefits = [
  {
    id: "a1b2c3d4",
    title: "Flexible Learning Schedule",
    description: "Fit your coursework around your existing commitments and obligations.",
  },
  {
    id: "e5f6g7h8",
    title: "Expert Instruction",
    description: "Learn from industry experts who have hands-on experience in design and development.",
  },
  {
    id: "i9j0k1l2",
    title: "Diverse Course Offerings",
    description: "Explore a wide range of design and development courses covering various topics.",
  },
  {
    id: "m3n4o5p6",
    title: "Updated Curriculum",
    description: "Access courses with up-to-date content reflecting the latest trends and industry practices.",
  },
  {
    id: "q7r8s9t0",
    title: "Practical Projects and Assignments",
    description: "Develop a portfolio showcasing your skills and abilities to potential employers.",
  },
  {
    id: "u1v2w3x4",
    title: "Interactive Learning Environment",
    description: "Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.",
  },
];

export const courses = [
  {
    id: "c1a2b3",
    author: "John Smith",
    description: "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
    image: courseWebdesignImg,
    level: "Beginner",
    title: "Web Design Fundamentals",
    weeks: 4,
    sections: [
      {
        id: "s1x9y8",
        title: "Introduction to HTML",
        lessons: [
          {
            id: "l1u2v3",
            title: "HTML Basics",
            duration: "30 Minutes",
          },
          {
            id: "l4t5r6",
            title: "HTML Elements and Attributes",
            duration: "40 Minutes",
          },
        ],
      },
      {
        id: "s2w3e4",
        title: "Styling with CSS",
        lessons: [
          {
            id: "l7f8g9",
            title: "CSS Syntax and Selectors",
            duration: "45 Minutes",
          },
          {
            id: "l0p1q2",
            title: "Box Model and Layout Techniques",
            duration: "50 Minutes",
          },
        ],
      },
      {
        id: "s3z4a5",
        title: "Introduction to Responsive Design",
        lessons: [
          {
            id: "l3b4n5",
            title: "Responsive Design Principles",
            duration: "1 Hour",
          },
          {
            id: "l6m7c8",
            title: "Media Queries and Breakpoints",
            duration: "45 Minutes",
          },
        ],
      },
      {
        id: "s4d5f6",
        title: "Design Principles for Web",
        lessons: [
          {
            id: "l9h0i1",
            title: "Color Theory and Typography",
            duration: "50 Minutes",
          },
          {
            id: "l2j3k4",
            title: "Visual Hierarchy in Web Design",
            duration: "40 Minutes",
          },
        ],
      },
      {
        id: "s5g6h7",
        title: "Building a Basic Website",
        lessons: [
          {
            id: "l5l6m7",
            title: "Creating a Simple Website from Scratch",
            duration: "1 Hour 30 Minutes",
          },
          {
            id: "l8n9o0",
            title: "Testing and Launching Your Website",
            duration: "1 Hour",
          },
        ],
      },
    ],
  },
  {
    id: "c2p3q4",
    author: "Emily Johnson",
    description: "Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.",
    image: courseUXImg,
    level: "Intermediate",
    title: "UI/UX Design",
    weeks: 6,
    sections: [
      {
        id: "s6r7t8",
        title: "Introduction to UI/UX Design",
        lessons: [
          {
            id: "l9u0v1",
            title: "Understanding UI/UX Design Principles",
            duration: "45 Minutes",
          },
          {
            id: "l2w3x4",
            title: "Importance of User-Centered Design",
            duration: "1 Hour",
          },
          {
            id: "l5y6z7",
            title: "The Role of UI/UX Design in Product Development",
            duration: "45 Minutes",
          },
        ],
      },
      {
        id: "s7v8w9",
        title: "User Research and Personas",
        lessons: [
          {
            id: "l8x9y0",
            title: "Conducting User Research and Interviews",
            duration: "1 Hour",
          },
          {
            id: "l1a2b3",
            title: "Analyzing User Needs and Behavior",
            duration: "1 Hour",
          },
          {
            id: "l4c5d6",
            title: "Creating User Personas and Scenarios",
            duration: "45 Minutes",
          },
        ],
      },
      {
        id: "s8x9y0",
        title: "Wireframing and Prototyping",
        lessons: [
          {
            id: "l7e8f9",
            title: "Introduction to Wireframing Tools and Techniques",
            duration: "1 Hour",
          },
          {
            id: "l0g1h2",
            title: "Creating Low-Fidelity Wireframes",
            duration: "1 Hour",
          },
          {
            id: "l3i4j5",
            title: "Prototyping and Interactive Mockups",
            duration: "1 Hour",
          },
        ],
      },
      {
        id: "s9k0l1",
        title: "Visual Design and Branding",
        lessons: [
          {
            id: "l6m7n8",
            title: "Color Theory and Typography in UI Design",
            duration: "1 Hour",
          },
          {
            id: "l9o0p1",
            title: "Visual Hierarchy and Layout Design",
            duration: "1 Hour",
          },
          {
            id: "l2q3r4",
            title: "Creating a Strong Brand Identity",
            duration: "45 Minutes",
          },
        ],
      },
      {
        id: "s0a1b2",
        title: "Usability Testing and Iteration",
        lessons: [
          {
            id: "l5c6d7",
            title: "Usability Testing Methods and Techniques",
            duration: "1 Hour",
          },
          {
            id: "l8e9f0",
            title: "Analyzing Usability Test Results",
            duration: "45 Minutes",
          },
          {
            id: "l1g2h3",
            title: "Iterating and Improving UX Designs",
            duration: "45 Minutes",
          },
        ],
      },
    ],
  },
  {
    id: "c3r4t5",
    author: "David Brown",
    description: "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.",
    image: courseMobileImg,
    level: "Intermediate",
    title: "Mobile App Development",
    weeks: 8,
    sections: [
      {
        id: "s1g2h3",
        title: "Introduction to Mobile App Development",
        lessons: [
          {
            id: "l4i5j6",
            title: "Overview of Mobile Platforms",
            duration: "1 Hour",
          },
          {
            id: "l7k8l9",
            title: "Setting Up Development Environments",
            duration: "45 Minutes",
          },
        ],
      },
      {
        id: "s4m5n6",
        title: "Fundamentals of Swift Programming (iOS)",
        lessons: [
          {
            id: "l0o1p2",
            title: "Swift Syntax and Basics",
            duration: "1 Hour",
          },
          {
            id: "l3q4r5",
            title: "Control Flow and Functions in Swift",
            duration: "1 Hour",
          },
        ],
      },
      {
        id: "s7s8t9",
        title: "Fundamentals of Kotlin Programming (Android)",
        lessons: [
          {
            id: "l6u7v8",
            title: "Kotlin Basics",
            duration: "1 Hour",
          },
          {
            id: "l9w0x1",
            title: "Object-Oriented Programming in Kotlin",
            duration: "1 Hour",
          },
        ],
      },
      {
        id: "s0y1z2",
        title: "Building User Interfaces",
        lessons: [
          {
            id: "l3a4b5",
            title: "Creating UI with SwiftUI (iOS)",
            duration: "1 Hour 30 Minutes",
          },
          {
            id: "l6c7d8",
            title: "Building UI with XML (Android)",
            duration: "1 Hour 30 Minutes",
          },
        ],
      },
      {
        id: "s3e4f5",
        title: "App Deployment and Testing",
        lessons: [
          {
            id: "l9g0h1",
            title: "Testing and Debugging Apps",
            duration: "1 Hour",
          },
          {
            id: "l2i3j4",
            title: "Deploying Apps to App Store and Google Play",
            duration: "1 Hour",
          },
        ],
      },
    ],
  },
  {
    id: "c4u5v6",
    author: "Sarah Thompson",
    description:
      "Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.",
    image: courseDesignImg,
    level: "Beginner",
    title: "Graphic Design for Beginners",
    weeks: 10,
    sections: [
      {
        id: "s6k7l8",
        title: "Introduction to Graphic Design",
        lessons: [
          {
            id: "l9m0n1",
            title: "History and Evolution of Graphic Design",
            duration: "1 Hour",
          },
          {
            id: "l2o3p4",
            title: "Key Elements of Graphic Design",
            duration: "1 Hour",
          },
        ],
      },
      {
        id: "s9q0r1",
        title: "Typography and Color Theory",
        lessons: [
          {
            id: "l5s6t7",
            title: "Understanding Typography",
            duration: "45 Minutes",
          },
          {
            id: "l8u9v0",
            title: "Color Theory Basics",
            duration: "1 Hour",
          },
        ],
      },
      {
        id: "s2w3x4",
        title: "Layout Design and Composition",
        lessons: [
          {
            id: "l1y2z3",
            title: "Principles of Layout Design",
            duration: "1 Hour",
          },
          {
            id: "l4a5b6",
            title: "Designing Balanced Compositions",
            duration: "45 Minutes",
          },
        ],
      },
      {
        id: "s5c6d7",
        title: "Image Editing and Manipulation",
        lessons: [
          {
            id: "l8e9f0",
            title: "Basics of Image Editing",
            duration: "1 Hour",
          },
          {
            id: "l1g2h3",
            title: "Advanced Image Manipulation Techniques",
            duration: "1 Hour 15 Minutes",
          },
        ],
      },
      {
        id: "s8i9j0",
        title: "Designing for Print and Digital Media",
        lessons: [
          {
            id: "l4k5l6",
            title: "Designing for Print",
            duration: "1 Hour",
          },
          {
            id: "l7m8n9",
            title: "Creating Digital Graphics",
            duration: "1 Hour",
          },
        ],
      },
    ],
  },
  {
    id: "c5o6p7",
    author: "Michael Adams",
    description: "Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.",
    image: courseWebImg,
    level: "Intermediate",
    title: "Front-End Web Development",
    weeks: 10,
    sections: [
      {
        id: "s1q2r3",
        title: "HTML Fundamentals",
        lessons: [
          {
            id: "l4s5t6",
            title: "HTML Tags and Structure",
            duration: "45 Minutes",
          },
          {
            id: "l7u8v9",
            title: "Semantic HTML",
            duration: "1 Hour",
          },
        ],
      },
      {
        id: "s4w5x6",
        title: "CSS Styling and Layouts",
        lessons: [
          {
            id: "l0y1z2",
            title: "CSS Grid and Flexbox",
            duration: "1 Hour",
          },
          {
            id: "l3a4b5",
            title: "Advanced CSS Techniques",
            duration: "1 Hour",
          },
        ],
      },
      {
        id: "s7c8d9",
        title: "JavaScript Basics",
        lessons: [
          {
            id: "l6e7f8",
            title: "JavaScript Syntax and Basics",
            duration: "1 Hour",
          },
          {
            id: "l9g0h1",
            title: "DOM Manipulation and Events",
            duration: "1 Hour",
          },
        ],
      },
      {
        id: "s0i1j2",
        title: "Building Responsive Websites",
        lessons: [
          {
            id: "l3k4l5",
            title: "Responsive Web Design with Media Queries",
            duration: "1 Hour 15 Minutes",
          },
          {
            id: "l6m7n8",
            title: "Mobile-First Design",
            duration: "1 Hour",
          },
        ],
      },
      {
        id: "s3o4p5",
        title: "Introduction to Bootstrap and React",
        lessons: [
          {
            id: "l9q0r1",
            title: "Getting Started with Bootstrap",
            duration: "1 Hour",
          },
          {
            id: "l2s3t4",
            title: "Introduction to React",
            duration: "1 Hour 30 Minutes",
          },
        ],
      },
    ],
  },
  {
    id: "c6g7h8",
    author: "Jennifer Wilson",
    description:
      "Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence.",
    image: courseJavascriptImg,
    level: "Advance",
    title: "Advanced JavaScript",
    weeks: 6,
    sections: [
      {
        id: "s1j2k3",
        title: "Advanced JavaScript Concepts",
        lessons: [
          {
            id: "l4l5m6",
            title: "Understanding Closures",
            duration: "1 Hour",
          },
          {
            id: "l7n8o9",
            title: "Prototypes and Inheritance",
            duration: "1 Hour 15 Minutes",
          },
          {
            id: "l0p1q2",
            title: "Asynchronous JavaScript and Promises",
            duration: "1 Hour",
          },
          {
            id: "l3r4s5",
            title: "Modern ES6+ Features",
            duration: "1 Hour",
          },
        ],
      },
    ],
  },
];
