import "./styles/index.css";
import "@fontsource/archivo-narrow";
import { ImageGallery } from "./Image-gallery";
import { initPageTransition } from "./pageTransitions";
import { initActuWindow } from "./actuWindow";
import { ObserbleWrapper } from "./Observable-wrapper";

customElements.define("image-gallery", ImageGallery);
customElements.define("observable-wrapper", ObserbleWrapper, { extends: "a" });

initActuWindow();
initPageTransition();
