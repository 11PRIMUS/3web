import cancer from "../assets/cancer.png";
import sar from "../assets/sar.png";
import game from "../assets/game.png";


export {cancer,sar , game};

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Projects",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "XR Developer",
    company_name: "GDG KIET",
    date: "Jan 2024 - Present",
    details: [
      "Built a 3d games and the one <span style='color: white;'>unreal world</span> which gained 5000 downloads within few days of its release.",
      "Crafted visually appealling 3d world videos that have garnered over <span style='color: white;'>10000 views</span>.",
      "Orchestrated the development of comprehensive <span style='color: white;'>marker less visuals</span> which helps to breakdown complex thing into smaller.",
    ],
  },
  {
    title: "Contributer",
    company_name: "Kaggle",
    date: "Sep 2024 - Present",
    details: [
      "Built a Ml model which predicts Degenerative Spine Classification and obtained <span style='color: white;'>a score of 4 out of 5</span> in Kaggle contest.",
      "Developed and maintained <span style='color: white;'>SAR colorisation model </span>, ensuring high availability for critical business applications.",
      "Conducted exploratory data analysis to verify data distributions, spot anomalies, and maintain balance across categories.",
    
    ],
  },
  {
    title: "UI/UX Designer",
    company_name: "TBI KIET",
    date: "May 2024 - June 2024",
    details: [
      "Spearheaded the <span style='color: white;'>redesign of an outdated website </span>for an early-stage startup, transforming it into a visually engaging and user-friendly platform.",
      "Created clean, modern, and <span style='color: white;'>responsive UI designs</span> tailored to the target audience's preferences, ensuring compatibility across devices.",
      "The redesign contributed significantly to user <span style='color: white;'> growth</span>, <span style='color: white;'> improved retention rates</span>, and <span style='color: white;'>increased engagement</span>.",
    ],
  },
  {
    title: "gaudmire",
    company_name: "BuildSpace",
    date: "May 2024 - July 2024",
    details: [
      "Established a <span style='color: white;'>freelance agency </span> from scratch, creating its brand identity and building a professional global presence.",
      "Provided <span style='color: white;'>video editing </span>, <span style='color: white;'>graphic design</span>, <span style='color: white;'>sound design</span>, and <span style='color: white;'>freelance shoots </span> helping clients double their audience reach through high-quality, engaging content.",
      "Built a connection of <span style='color: white;'> over 1,000 clients worldwide </span>, delivering impactful solutions that enhanced their brands and ensured repeat business.",
    ],
  },
];

const portfolio = [
  {
    name: "Early Stage Cancer Classififcation",
    description:
      "A CNN based ML model which detects and classifies brain, breast, skin Cancer using MRI scans uses mobilenet architecture to acccurately classify cancer(the trained model has an accuracy of 92 percent).",
    image: cancer,
  },
  {
    name: "SAR Image Colorisation",
    description:
      "A DL model which colors the SAR images, as a result a high definition SAR image is obtaiend and can be further used for visual interpretation and data analysis. ",
    image: sar,
    
  },
  {
    name: "Unreal World",
    description:
      "It delivers a hyper-realistic 3D experience with dynamic environments and seamless character movement for unmatched immersion.",
    image: game,
  },
];

export { experiences, portfolio };

