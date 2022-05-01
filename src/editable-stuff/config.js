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
  message: " Data Science | Machine Learning | Data Engineer  ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/iamAngelSH",
    },
    // {
    //   image: "fa-facebook",
    //   url: "https://www.facebook.com/hashirshoaeb",
    // },
    // {
    //   image: "fa-instagram",
    //   url: "https://www.instagram.com/hashirshoaeb/",
    // },
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
  heading: "About Me",
  // imageLink: require("../editable-stuff/angel_faceshot.jpg"),
  imageLink: "",
  imageSize: 375,
  message:
    "My name is Angel Santana Hernandez. I am a 2021 graduate from University of Colorado (Leed's School of Business) with a Master of Science in Business Analytics with a focus on Big Data and Security Analytics. I am also a graduate from University of Colorado (College of Engineering and Applied Science) with a Bachelors in Computer Science with a concentration in entrepreneurship.",
  message2: "I am passionate about giving back to the community, learning in public, helping others achieve their goals in Data Science/Machine Learning. In my free time I like to work on projects and enjoy life.",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "iamAngelSH", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["Used_Car_Project","Data-Science-Portfolio", "streamlit_stockPrice", "flask-docker-hello-world"],
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
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// FIND A WAY TO ADD THE BLOG
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences};
