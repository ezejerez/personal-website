export interface Project {
  img: string;
  name: string;
  technologies: string;
  projectUrl?: string;
  projectCode?: string;
}

export const PROJECTS: Project[] = [
  {
    img: "/clothing-customization-app.png",
    name: "Clothing Customization App",
    technologies: "React - ThreeJS - Typescript - NodeJS - OpenAI",
    projectUrl: "https://clothing-customization-app.netlify.app/",
    projectCode: "https://github.com/ezejerez/clothing-customization-app",
  },
  {
    img: "/killer-hotdogs.png",
    name: "Killer hotdogs",
    technologies: "React Native - Typescript - Expo",
    projectUrl: "https://play.google.com/store/apps/details?id=com.ezejerez.killerpanchos",
    projectCode: "https://github.com/ezejerez/killer-hotdogs",
  },

  {
    img: "/ezejedrez.png",
    name: "Ezejedrez",
    technologies: "React Native - Typescript - Expo",
    projectUrl: "https://play.google.com/store/apps/details?id=com.gamesflood.ezejedrez",
    projectCode: "https://github.com/leoflood/ezejedrez",
  },

  {
    img: "/personal-website.png",
    name: "Personal website",
    technologies: "React - Typescript - EmailJS",
    projectCode: "https://github.com/ezejerez/personal-website",
  },
];
