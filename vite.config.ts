import { defineConfig } from "vite";
import { dedale } from "vite-plugin-dedale";
import { actusPage, routes } from "./ssg/routes";

export default defineConfig({
  plugins: [
    dedale({
      contentDir: "content",
      templateDir: "views",
      templateEngine: "edge",
      configureTemplateEngine: (env) => {
        env.global("actus", actusPage);
        return env;
      },
      routes: routes(),
    }),
  ],

  // base: "/sarahpenanhoat/",
});
