// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Angel",
  middleName: "",
  lastName: "Santana Hernandez",
  userName: "iamAngelSH",
  message: " Content Creator ~ Data Science, Data Engineering, Machine Learning  ",
  icons: [
    {
      image: "fa-youtube",
      url: "https://www.youtube.com/channel/UC_wflkTmHOsQ0gTrDhOs7bQ?sub_confirmation=1",
    },
    {
      image: "fa-twitch",
      url: "https://www.twitch.tv/iamangelsh",
    },
    {
      image: "fa-github",
      url: "https://github.com/iamAngelSH",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/angelsantanahernandez/",
    },
    {
      image: "fa-twitter",
      url: "https://www.twitter.com/iamAngelSH/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "Computer Scientist ~ The Engineer",
  // imageLink: require("../editable-stuff/angel_faceshot.jpg"),
  imageLink: "",
  imageSize: 375,
  message:
    "Angel is a data enthusiast in Data Engineering/Data Science with a passion in developing in Python. He started his journey in software engineering where he co-founded and worked in a started up that streamlined productivity tools for patent lawyers. Tech can be overwhelming for many as I experienced it first hand as a first generation college graduate and entering the industry. As a minority working in tech, Angel see's a gap to help people ease into the advantages that has to offer. He brings value, trust, and credibility to his audience by maintaining authenticity and realness through his life's journey. He hopes that sharing projects, resources, day to day experiences, and much more will help build a community where other's can seek guidance. Let's have fun, be real, learn, grow, and most importantly, enjoy life day by day.",
  message2: "I am passionate about giving back to the community, learning in public, helping others achieve their goals in Data Science/Machine Learning. In my free time I like to work on projects and enjoy life.",
  resume: require("../editable-stuff/resume.pdf"),
};



// CONTENT SECTIONS
const content = {
  show: true,
  heading: "Content Creator",
  icons: [
    {
      image: "fa-youtube",
      url: "https://www.youtube.com/channel/UC_wflkTmHOsQ0gTrDhOs7bQ?sub_confirmation=1",
    },
    {
      image: "fa-twitch",
      url: "https://www.twitch.tv/iamangelsh",
    },
    {
      image: "fa-github",
      url: "https://github.com/iamAngelSH",
    }
  ],
  message: "Weekly Youtube Videos, Twitch Streams, and Project Tutorials on Github.",
  comingSoon: "Blog coming soon.",
  yt_text: 'Projects, Tech, Career, Life!',




}

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Github Projects",
  gitHubUsername: "iamAngelSH", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["AngelInTech","phishing_url", "Data-Science-Portfolio", "DataBases"],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/angel_faceshot.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/angel_faceshot.jpg"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "PySpark", value: 80 },
    { name: "SparkSQL", value: 80 },
    { name: "R", value: 85 },
    { name: "MySQL", value: 85 },
    { name: "Data Structures", value: 80 },
    { name: "Algorithms", value: 85 },
  ],
  cloudSkills: [
    { name: "Docker", value: 85 },
    { name: "AWS EMR", value: 80 },
    { name: "AWS S3", value: 85 },
    { name: "GCP", value: 80 },
    { name: "Hadoop", value: 75 },
  ],
  visSkills: [
    { name: "Python Libraries", value: 85 },
    { name: "Streamlit", value: 90 },
    { name: "R Libraries", value: 80 },
    { name: "Tableau", value: 85 },
  ],
  environmentSkills: [
    { name: "Jupyter Notebooks", value: 90 },
    { name: "Github", value: 90 },
    { name: "Git", value: 85 },
    { name: "Google Colab", value: 85 },
    { name: "Visual Studio", value: 85 },
  ],
  competencies: [
    { name: "Machine Learning", value: 85 },
    { name: "Data Preprocessing", value: 90 },
    { name: "Data Mining", value: 85 },
    { name: "Research", value: 95 },
    { name: "Analysis", value: 85 },
    { name: "Agile Methdology", value: 85 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Data Science, Machine Learning, or Data Engineering opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "angelash303@gmail.com",
  message2: "You can also reach me at twitter",
  twitterUser: "iamAngelSH",
  message3: "Or on LinkedIn",
  linkedInUser: "Angel Santana Hernandez"
};

// ANGEL --- REVIEW AND FIX THIS
const experiences = {
  show: true,
  heading: "Experiences",
  message: "My experiences include Data Science, Machine Learning, and Data Engineering.",
  message2: "I also have experience in entrepreneuriship and community management.",
  comingSoon: "Experience cards COMING SOON.",
  data: [
    {
      role: 'Data Scientist Intern',// Here Add Company Name
      companylogo: require('../assets/img/t5c.png'),
      date: 'Jan 2022 – Apr 2022',
    },
    {
      role: 'CTO ~ Data Consultant',
      companylogo: require('../assets/img/rds.png'),
      date: 'Apr 2021 – Aug 2021',
    },
    {
      role: 'Co-Founder ~ CXO ~ Software Engineer Lead',
      companylogo: require('../assets/img/pds.png'),
      date: 'Sept 2017 – Oct 2021',
    },
  ]
}

// Blog SECTION
// FIND A WAY TO ADD THE BLOG
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences, content};
