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

type actusFrontmatter = {
  thumbnail : string
  activ:boolean
  legende:string
}

const projectsRoutes = loadAllMdFilesFrom<ProjectFrontmatter>('content/projets').map((p,index)=>({
  url:encodeURI('/projets/'+p.filename.replace('.md','')+'/'),
  template:"projet",
  data:{
    frontmatter:p.frontmatter,
    content:p.content,
    index
  }
}))satisfies Route[]

const infosPage = loadMdFile<infosFrontmatter>('content/infos.md')

export const actusPage = loadMdFile<actusFrontmatter>('content/actualites.md')

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
