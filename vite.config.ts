import { defineConfig } from "vite";
import { dedale } from "vite-plugin-dedale";
import { routes } from "./ssg/routes";

export default defineConfig({
  plugins: [
    dedale({
      contentDir: "content",
      templateDir: "views",
      templateEngine: "edge",
      configureTemplateEngine: (env) => {
        env.global("siteTitle", "Daedalus's Blog");
        return env;
      },
      routes: routes(),
    }),
  ],

  base: "/sarahpenanhoat/",
});
