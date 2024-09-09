const benefits = [
  {
    title: "Flexible Learning Schedule",
    description: "Fit your coursework around your existing commitments and obligations.",
  },
  {
    title: "Expert Instruction",
    description: "Learn from industry experts who have hands-on experience in design and development.",
  },
  {
    title: "Diverse Course Offerings",
    description: "Explore a wide range of design and development courses covering various topics.",
  },
  {
    title: "Updated Curriculum",
    description: "Access courses with up-to-date content reflecting the latest trends and industry practices.",
  },
  {
    title: "Practical Projects and Assignments",
    description: "Develop a portfolio showcasing your skills and abilities to potential employers.",
  },
  {
    title: "Interactive Learning Environment",
    description: "Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.",
  },
];

const courses = [
  {
    author: "John Smith",
    description: "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
    intro:
      "Kickstart your journey into web design with this comprehensive course that covers essential tools and techniques to build beautiful and functional websites. From HTML basics to responsive design, you'll gain a solid foundation to create engaging web experiences.",
    level: "Beginner",
    title: "Web Design Fundamentals",
    weeks: 4,
  },
  {
    author: "Emily Johnson",
    description: "Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.",
    intro:
      "Dive deep into UI/UX design and learn how to craft user-centered experiences. This course will guide you through the entire design process from research and wireframing to prototyping and usability testing, preparing you to create impactful digital products.",
    level: "Intermediate",
    title: "UI/UX Design",
    weeks: 6,
  },
  {
    author: "David Brown",
    description: "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.",
    intro:
      "Explore the exciting field of mobile app development and learn to build robust applications for iOS and Android. This course covers everything from basic programming to advanced techniques, equipping you with the skills needed to create high-quality mobile apps.",
    level: "Intermediate",
    title: "Mobile App Development",
    weeks: 8,
  },
  {
    author: "Sarah Thompson",
    description:
      "Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.",
    intro:
      "Unleash your creativity with a thorough introduction to graphic design. This course covers essential concepts like typography, color theory, and layout design, enabling you to create visually compelling designs for both print and digital media.",
    level: "Beginner",
    title: "Graphic Design for Beginners",
    weeks: 10,
  },
  {
    author: "Michael Adams",
    description: "Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.",
    intro:
      "Enhance your front-end development skills with a deep dive into HTML, CSS, and JavaScript. This course will also introduce you to popular frameworks like Bootstrap and React, empowering you to build dynamic and responsive websites.",
    level: "Intermediate",
    title: "Front-End Web Development",
    weeks: 10,
  },
  {
    author: "Jennifer Wilson",
    description:
      "Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence.",
    intro:
      "Elevate your JavaScript expertise with advanced topics like closures, prototypes, and asynchronous programming. This course will also cover ES6 features and performance optimization, preparing you to tackle complex development challenges with confidence.",
    level: "Advance",
    title: "Advanced JavaScript",
    weeks: 6,
  },
];

const courseImages = [
  { courseId: "1", url: "https://imgbox.com/e1VQwtN6" },
  { courseId: "1", url: "https://imgbox.com/6Mjsy2Td" },
  { courseId: "1", url: "https://imgbox.com/FGaNw16S" },
  { courseId: "2", url: "https://imgbox.com/wz7gQjzs" },
  { courseId: "2", url: "https://imgbox.com/ulCczOCn" },
  { courseId: "2", url: "https://imgbox.com/kIAz6ryP" },
  { courseId: "3", url: "https://imgbox.com/UuFtYXzv" },
  { courseId: "3", url: "https://imgbox.com/b5QNtdbf" },
  { courseId: "3", url: "https://imgbox.com/WyPtYUzz" },
  { courseId: "4", url: "https://imgbox.com/3Pyar7On" },
  { courseId: "4", url: "https://imgbox.com/dxj8VN4n" },
  { courseId: "4", url: "https://imgbox.com/cOi2H1ih" },
  { courseId: "5", url: "https://imgbox.com/xpUVCL15" },
  { courseId: "5", url: "https://imgbox.com/RLvnulCW" },
  { courseId: "5", url: "https://imgbox.com/ckv3fzgW" },
  { courseId: "6", url: "https://imgbox.com/pKVLCt4H" },
  { courseId: "6", url: "https://imgbox.com/MRjzACT9" },
  { courseId: "6", url: "https://imgbox.com/WZVYXUfD" },
];

const courseSections = [
  {
    courseId: "1",
    title: "Introduction to HTML",
  },
  {
    courseId: "1",
    title: "Styling with CSS",
  },
  {
    courseId: "1",
    title: "Introduction to Responsive Design",
  },
  {
    courseId: "1",
    title: "Design Principles for Web",
  },
  {
    courseId: "1",
    title: "Building a Basic Website",
  },
  {
    courseId: "2",
    title: "Introduction to UI/UX Design",
  },
  {
    courseId: "2",
    title: "User Research and Personas",
  },
  {
    courseId: "2",
    title: "Wireframing and Prototyping",
  },
  {
    courseId: "2",
    title: "Visual Design and Branding",
  },
  {
    courseId: "2",
    title: "Usability Testing and Iteration",
  },
  {
    courseId: "3",
    title: "Introduction to Mobile App Development",
  },
  {
    courseId: "3",
    title: "Fundamentals of Swift Programming (iOS)",
  },
  {
    courseId: "3",
    title: "Fundamentals of Kotlin Programming (Android)",
  },
  {
    courseId: "3",
    title: "Building User Interfaces",
  },
  {
    courseId: "3",
    title: "App Deployment and Testing",
  },
  {
    courseId: "4",
    title: "Introduction to Graphic Design",
  },
  {
    courseId: "4",
    title: "Typography and Color Theory",
  },
  {
    courseId: "4",
    title: "Layout Design and Composition",
  },
  {
    courseId: "4",
    title: "Image Editing and Manipulation",
  },
  {
    courseId: "4",
    title: "Designing for Print and Digital Media",
  },
  {
    courseId: "5",
    title: "HTML Fundamentals",
  },
  {
    courseId: "5",
    title: "CSS Styling and Layouts",
  },
  {
    courseId: "5",
    title: "JavaScript Basics",
  },
  {
    courseId: "5",
    title: "Building Responsive Websites",
  },
  {
    courseId: "5",
    title: "Introduction to Bootstrap and React",
  },
  {
    courseId: "6",
    title: "Advanced JavaScript Concepts",
  },
  {
    courseId: "6",
    title: "JavaScript Design Patterns",
  },
  {
    courseId: "6",
    title: "JavaScript Performance Optimization",
  },
  {
    courseId: "6",
    title: "Testing and Debugging JavaScript",
  },
  {
    courseId: "6",
    title: "JavaScript and Web APIs",
  },
];

const courseLessons = [
  {
    courseSectionId: "1",
    title: "HTML Basics",
    duration: "30 Minutes",
  },
  {
    courseSectionId: "1",
    title: "HTML Elements and Attributes",
    duration: "40 Minutes",
  },
  {
    courseSectionId: "2",
    title: "CSS Syntax and Selectors",
    duration: "45 Minutes",
  },
  {
    courseSectionId: "2",
    title: "Box Model and Layout Techniques",
    duration: "50 Minutes",
  },
  {
    courseSectionId: "3",
    title: "Responsive Design Principles",
    duration: "1 Hour",
  },
  {
    courseSectionId: "3",
    title: "Media Queries and Breakpoints",
    duration: "45 Minutes",
  },
  {
    courseSectionId: "4",
    title: "Color Theory and Typography",
    duration: "50 Minutes",
  },
  {
    courseSectionId: "4",
    title: "Visual Hierarchy in Web Design",
    duration: "40 Minutes",
  },
  {
    courseSectionId: "5",
    title: "Creating a Simple Website from Scratch",
    duration: "1 Hour 30 Minutes",
  },
  {
    courseSectionId: "5",
    title: "Testing and Launching Your Website",
    duration: "1 Hour",
  },
  {
    courseSectionId: "6",
    title: "Understanding UI/UX Design Principles",
    duration: "45 Minutes",
  },
  {
    courseSectionId: "6",
    title: "Importance of User-Centered Design",
    duration: "1 Hour",
  },
  {
    courseSectionId: "6",
    title: "The Role of UI/UX Design in Product Development",
    duration: "45 Minutes",
  },
  {
    courseSectionId: "7",
    title: "Conducting User Research and Interviews",
    duration: "1 Hour",
  },
  {
    courseSectionId: "7",
    title: "Analyzing User Needs and Behavior",
    duration: "1 Hour",
  },
  {
    courseSectionId: "7",
    title: "Creating User Personas and Scenarios",
    duration: "45 Minutes",
  },
  {
    courseSectionId: "8",
    title: "Introduction to Wireframing Tools and Techniques",
    duration: "1 Hour",
  },
  {
    courseSectionId: "8",
    title: "Creating Low-Fidelity Wireframes",
    duration: "1 Hour",
  },
  {
    courseSectionId: "8",
    title: "Prototyping and Interactive Mockups",
    duration: "1 Hour",
  },
  {
    courseSectionId: "9",
    title: "Color Theory and Typography in UI Design",
    duration: "1 Hour",
  },
  {
    courseSectionId: "9",
    title: "Visual Hierarchy and Layout Design",
    duration: "1 Hour",
  },
  {
    courseSectionId: "9",
    title: "Creating a Strong Brand Identity",
    duration: "45 Minutes",
  },
  {
    courseSectionId: "10",
    title: "Usability Testing Methods and Techniques",
    duration: "1 Hour",
  },
  {
    courseSectionId: "10",
    title: "Analyzing Usability Test Results",
    duration: "45 Minutes",
  },
  {
    courseSectionId: "10",
    title: "Iterating and Improving UX Designs",
    duration: "45 Minutes",
  },
  {
    courseSectionId: "11",
    title: "Overview of Mobile Platforms",
    duration: "1 Hour",
  },
  {
    courseSectionId: "11",
    title: "Setting Up Development Environments",
    duration: "45 Minutes",
  },
  {
    courseSectionId: "12",
    title: "Swift Syntax and Basics",
    duration: "1 Hour",
  },
  {
    courseSectionId: "12",
    title: "Control Flow and Functions in Swift",
    duration: "1 Hour",
  },
  {
    courseSectionId: "13",
    title: "Kotlin Basics",
    duration: "1 Hour",
  },
  {
    courseSectionId: "13",
    title: "Object-Oriented Programming in Kotlin",
    duration: "1 Hour",
  },
  {
    courseSectionId: "14",
    title: "Creating UI with SwiftUI (iOS)",
    duration: "1 Hour 30 Minutes",
  },
  {
    courseSectionId: "14",
    title: "Building UI with XML (Android)",
    duration: "1 Hour 30 Minutes",
  },
  {
    courseSectionId: "15",
    title: "Testing and Debugging Apps",
    duration: "1 Hour",
  },
  {
    courseSectionId: "15",
    title: "Deploying Apps to App Store and Google Play",
    duration: "1 Hour",
  },
  {
    courseSectionId: "16",
    title: "History and Evolution of Graphic Design",
    duration: "1 Hour",
  },
  {
    courseSectionId: "16",
    title: "Key Elements of Graphic Design",
    duration: "1 Hour",
  },
  {
    courseSectionId: "17",
    title: "Understanding Typography",
    duration: "45 Minutes",
  },
  {
    courseSectionId: "17",
    title: "Color Theory Basics",
    duration: "1 Hour",
  },
  {
    courseSectionId: "18",
    title: "Principles of Layout Design",
    duration: "1 Hour",
  },
  {
    courseSectionId: "18",
    title: "Designing Balanced Compositions",
    duration: "45 Minutes",
  },
  {
    courseSectionId: "19",
    title: "Basics of Image Editing",
    duration: "1 Hour",
  },
  {
    courseSectionId: "19",
    title: "Advanced Image Manipulation Techniques",
    duration: "1 Hour 15 Minutes",
  },
  {
    courseSectionId: "20",
    title: "Designing for Print",
    duration: "1 Hour",
  },
  {
    courseSectionId: "20",
    title: "Creating Digital Graphics",
    duration: "1 Hour",
  },
  {
    courseSectionId: "21",
    title: "HTML Tags and Structure",
    duration: "45 Minutes",
  },
  {
    courseSectionId: "21",
    title: "Semantic HTML",
    duration: "1 Hour",
  },
  {
    courseSectionId: "22",
    title: "CSS Grid and Flexbox",
    duration: "1 Hour",
  },
  {
    courseSectionId: "22",
    title: "Advanced CSS Techniques",
    duration: "1 Hour",
  },
  {
    courseSectionId: "23",
    title: "JavaScript Syntax and Basics",
    duration: "1 Hour",
  },
  {
    courseSectionId: "23",
    title: "DOM Manipulation and Events",
    duration: "1 Hour",
  },
  {
    courseSectionId: "24",
    title: "Responsive Web Design with Media Queries",
    duration: "1 Hour 15 Minutes",
  },
  {
    courseSectionId: "24",
    title: "Mobile-First Design",
    duration: "1 Hour",
  },
  {
    courseSectionId: "25",
    title: "Getting Started with Bootstrap",
    duration: "1 Hour",
  },
  {
    courseSectionId: "25",
    title: "Introduction to React",
    duration: "1 Hour 30 Minutes",
  },
  {
    courseSectionId: "26",
    title: "Prototypes and Inheritance",
    duration: "1 Hour 15 Minutes",
  },
  {
    courseSectionId: "26",
    title: "Asynchronous JavaScript and Promises",
    duration: "1 Hour",
  },
  {
    courseSectionId: "26",
    title: "Modern ES6+ Features",
    duration: "1 Hour",
  },
  {
    courseSectionId: "27",
    title: "Introduction to Design Patterns",
    duration: "1 Hour",
  },
  {
    courseSectionId: "27",
    title: "Factory and Singleton Patterns",
    duration: "1 Hour 20 Minutes",
  },
  {
    courseSectionId: "27",
    title: "Observer and Mediator Patterns",
    duration: "1 Hour 15 Minutes",
  },
  {
    courseSectionId: "27",
    title: "Module and Revealing Module Patterns",
    duration: "1 Hour",
  },
  {
    courseSectionId: "28",
    title: "Understanding the Event Loop",
    duration: "1 Hour 10 Minutes",
  },
  {
    courseSectionId: "28",
    title: "Optimizing Loops and Conditions",
    duration: "1 Hour",
  },
  {
    courseSectionId: "29",
    title: "Introduction to Testing Frameworks",
    duration: "1 Hour",
  },
  {
    courseSectionId: "29",
    title: "Unit Testing with Mocha and Chai",
    duration: "1 Hour 20 Minutes",
  },
  {
    courseSectionId: "29",
    title: "End-to-End Testing with Selenium",
    duration: "1 Hour 15 Minutes",
  },
  {
    courseSectionId: "30",
    title: "Introduction to Web APIs",
    duration: "1 Hour",
  },
  {
    courseSectionId: "30",
    title: "Working with the Fetch API",
    duration: "1 Hour 10 Minutes",
  },
  {
    courseSectionId: "30",
    title: "Using the Canvas API for Graphics",
    duration: "1 Hour",
  },
];

const pricingPlans = [
  {
    isFree: true,
    monthyPrice: 0,
    yearlyPrice: 0,
    availableFeatures: ["Access to selected free courses.", "Limited course materials and resources.", "Basic community support.", "No certification upon completion.", "Ad-supported platform."],
    unavailableFeatures: ["Access to exclusive Pro Plan community forums.", "Early access to new courses and updates."],
  },
  {
    isFree: false,
    monthyPrice: 79,
    yearlyPrice: 850,
    availableFeatures: [
      "Unlimited access to all courses.",
      "Unlimited course materials and resources.",
      "Priority support from instructors.",
      "Course completion certificates.",
      "Ad-free experience.",
      "Access to exclusive Pro Plan community forums.",
      "Early access to new courses and updates.",
    ],
    unavailableFeatures: [],
  },
];

const testimonials = [
  {
    author: "Sarah L",
    content:
      "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
  },
  {
    author: "Jason M",
    content:
      "The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!",
  },
  {
    author: "Emily R",
    content: "The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!",
  },
  {
    author: "Michael K",
    content:
      "I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!",
  },
];

module.exports = {
  benefits,
  courseImages,
  courseLessons,
  courses,
  courseSections,
  pricingPlans,
  testimonials,
};
