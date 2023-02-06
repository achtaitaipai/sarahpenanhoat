import "../styles/index.css";
import "@fontsource/archivo-narrow";
import "@fontsource/archivo-narrow/700.css";
import { ImageGallery } from "./ImageGallery";
import { initPageTransition } from "./pageTransitions";
import { initActuWindow } from "./actuWindow";
import { ProjectCard } from "./ProjectCard";

customElements.define("image-gallery", ImageGallery, { extends: "div" });
customElements.define("project-card", ProjectCard, {
  extends: "a",
});

initActuWindow();
initPageTransition();
