import { Route } from "vite-plugin-dedale";

export const routes = (): Route[] => {
  return [
    {
      url: "/",
      template: "accueil",
      data: {
        title: "accueil",
      },
    },
    {
      url: "/infos",
      template: "infos",
      data: {
        title: "infos",
      },
    },
  ];
};
