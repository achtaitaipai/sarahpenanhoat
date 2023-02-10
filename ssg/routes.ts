import { loadMdFile, Route } from "vite-plugin-dedale";
import {loadAllMdFilesFrom} from "vite-plugin-dedale"

type ProjectFrontmatter = {
  title:string,
  legende:string,
  resume:string,
  thumbnail:string,
  gallery:string[]
  date:string
}

type infosFrontmatter = {
  thumbnail:string
}

const projects = loadAllMdFilesFrom<ProjectFrontmatter>('content/projets')

const projectsRoutes = loadAllMdFilesFrom<ProjectFrontmatter>('content/projets').map((p)=>({
  url:encodeURI('/projets/'+p.filename.replace('.md','')+'/'),
  template:"projet",
  data:{
    frontmatter:p.frontmatter,
    content:p.content
  }
}))satisfies Route[]

const infosPage = loadMdFile<infosFrontmatter>('content/infos.md')

export const routes = (): Route[] => {
  return [
    {
      url: "/",
      template: "accueil",
      data: {
        title: "accueil",
        projects
      },
    },
    {
      url: "/infos/",
      template: "infos",
      data: {
        title: "infos",
        ...infosPage
      },
    },
    ...projectsRoutes
  ];
};
