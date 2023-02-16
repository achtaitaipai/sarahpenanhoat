import { defineConfig } from "vite";
import { dedale } from "vite-plugin-dedale";
import { resizeImage } from "./ssg/images";
import { actusPage, routes } from "./ssg/routes";

export default defineConfig({
  plugins: [
    dedale({
      contentDir: "content",
      templateDir: "views",
      templateEngine: "edge",
      configureTemplateEngine: (env) => {
        env.global("actus", actusPage);
        env.global("image", resizeImage);
        return env;
      },
      routes: routes(),
    }),
  ],

  // base: "/sarahpenanhoat/",
});
