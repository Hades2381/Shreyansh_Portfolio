/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shreyansh Sharma",
  title: "Hey everyone, welcome to my Portfolio!",
  subTitle: emoji(
    "A passionate Robotics and Perception Engineer 🚀 specializing in developing cutting-edge sensor fusion techniques, computer vision algorithms, and motion planning strategies."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Hades2381",
  linkedin: "https://www.linkedin.com/in/shreyansh-sharma-718496210/",
  gmail: "shreyansh238hwr@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "INNOVATIVE ROBOTICS AND PERCEPTION ENGINEER EXPLORING THE FRONTIERS OF AUTONOMOUS SYSTEMS",
  skills: [
    emoji(
      "⚡ Develop advanced perception systems using camera-LiDAR fusion and computer vision techniques"
    ),
    emoji("⚡ Design and implement motion planning algorithms for autonomous robots"),
    emoji(
      "⚡ Integrate and optimize sensor fusion systems for seamless navigation in dynamic environments"
    )
    
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Carnegie Mellon University",
      subHeader: "Master of Science in Mechanical Engineering with Concentration in Robotics",
      duration: "August 2022 - May 2025",
      desc: "Focused on robotic systems, control algorithms, and perception techniques.",
      descBullets: [
        "Selected courses: Computer Vision, SLAM, Introduction to Machine Learning, Visual Learning and Recognition, Modern Control",
        "Conducted advanced research in camera-LiDAR fusion, achieving accurate environmental perception for drones"
      ]
    },
    {
      schoolName: "Veermata Jijabai Technological Institute (V.J.T.I.)",
      subHeader: "Bachelor of Technology in Mechanical Engineering",
      duration: "June 2019 - June 2023",
      desc: "Acquired a strong foundation in engineering principles with a focus on robotics and manufacturing.",
      descBullets: [
        "Research on depth estimation using 360° cameras for dynamic object tracking",
        "Ranked among the top performers in the program"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    { 
      Stack: "Cuda", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Perception Intern",
      company: "CERLAB, Carnegie Mellon University",
      date: "May 2024 – September 2024",
      desc: "Developed and integrated advanced camera-LiDAR fusion systems for drone applications, enabling complete 360-degree environmental coverage.",
      descBullets: [
        "Revamped drone chassis to integrate sensors, enhancing protection against dynamic obstacles",
        "Achieved ±2 cm distance precision and 87% accuracy in object detection using custom YOLO algorithms",
        "Enabled accurate distance estimation up to 100 meters"
      ]
    },
    {
      role: "Research Intern",
      company: "Indian Institute of Technology, Mumbai",
      date: "July 2022 – February 2023",
      desc: "Led the development of cost-efficient additive manufacturing projects and innovative medical solutions.",
      descBullets: [
        "Designed and implemented a cost-efficient lymphoedema massage mechanism using additive manufacturing",
        "Reduced operational costs by 75% and training time for new operators by 25% with improved protocols"
      ]
    },
    {
      role: "Perception and Design Intern",
      company: "Siemens",
      date: "May 2022 – July 2022",
      desc: "Engineered robust drones and perception systems for factory and disaster area applications.",
      descBullets: [
        "Designed a shock-resistant drone chassis, sustaining stresses up to 1075 MPa",
        "Interfaced infrared cameras with base stations to track worker movements with 90% accuracy"
      ]
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SIGNIFICANT PROJECTS DEMONSTRATING MY EXPERTISE IN ROBOTICS AND PERCEPTION",
  projects: [
    {
      projectName: "Camera-LiDAR Fusion for Drones",
      projectDesc:
        "Developed a fusion system combining fisheye cameras and Livox LiDAR to enable accurate object detection and navigation for drones, achieving a distance precision of ±2 cm and 87% detection accuracy.",
      footerLink: [
        {
          name: "Learn More",
          url: "https://github.com/your-repository-link"
        }
      ]
    },
    {
      projectName: "Depth Estimation Using 360° Cameras",
      projectDesc:
        "Designed and implemented a system for depth estimation of dynamic objects using a single 360° camera, optimizing navigation in complex, dynamic environments.",
      footerLink: [
        {
          name: "Learn More",
          url: "https://github.com/your-repository-link"
        }
      ]
    },
    {
      projectName: "Gain-Scheduled LQR for Crazyflie Drone",
      projectDesc:
        "Implemented and tested a Gain-Scheduled LQR controller for a Crazyflie 2.1 drone, enabling stabilization and control during aggressive maneuvers, including mid-air throws.",
      footerLink: [
        {
          name: "Learn More",
          url: "https://github.com/your-repository-link"
        }
      ]
    },
    {
      projectName: "Modular Controller for Wheeled Robots",
      projectDesc:
        "Developed a modular control strategy to optimize step-climbing in wheeled robots by dynamically adjusting the approach angle based on terrain and robot parameters.",
      footerLink: [
        {
          name: "Learn More",
          url: "https://github.com/your-repository-link"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // false Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "412-330-8633",
  email_address: "shreyansh238hwr@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
