import "./styles/index.css";
import "@fontsource/archivo-narrow"; // Defaults to weight 400 with normal variant.
import ImageGallery from "./image-gallery";
import ariane from "ariane-router";

const fadeOut = ariane.makeAnim("main", [{ opacity: 1 }, { opacity: 0 }], {
  duration: 300,
  easing: "ease-out",
});
const fadeIn = ariane.makeAnim("main", [{ opacity: 0 }, { opacity: 1 }], {
  duration: 500,
  easing: "ease-out",
});

const slideToLeft = ariane.makeAnim(
  "main",
  [
    { transform: "translate(0,0)" },
    { transform: "translate(-100vw,0)  scaleX(0)" },
  ],
  {
    duration: 300,
    fill: "forwards",
    easing: "ease-in",
  }
);
const slideFromRight = ariane.makeAnim(
  "main",
  [{ transform: "translate(100vw,0)" }, { transform: "translate(0,0)" }],
  {
    duration: 200,
    fill: "forwards",
  }
);
const slideToRight = ariane.makeAnim(
  "main",
  [
    { transform: "translate(0,0)" },
    { transform: "translate(100vw,0) scaleX(0)" },
  ],
  {
    duration: 300,
    fill: "forwards",
  }
);
const slideFromLeft = ariane.makeAnim(
  "main",
  [{ transform: "translate(-100vw,0)" }, { transform: "translate(0,0)" }],
  {
    duration: 200,
    fill: "forwards",
  }
);
ariane.addActions({
  slideFromLeft,
  slideToRight,
  slideToLeft,
  slideFromRight,
  fadeIn,
  fadeOut,
});
ariane.defineConfig({ before: "fadeOut", between: "fadeIn" });
ariane.start();

console.log('oui')

customElements.define('image-gallery',ImageGallery)

const actuBtn = document.querySelector<HTMLButtonElement>('#actuBtn')
const actuWindow = document.querySelector<HTMLDialogElement>('#actuWindow')
const closeBtn = document.querySelector<HTMLButtonElement>('#close-actus')
actuBtn?.addEventListener('click',()=>{
    actuWindow?.showModal()
})

closeBtn?.addEventListener('click',()=>{
    actuWindow?.close()
})

actuWindow?.addEventListener('click',(e)=>{
    const {left,top,width,height} = actuWindow.getBoundingClientRect()
    if(e.clientX<left||e.clientX>left+width||e.clientY<top||e.clientY>top+height)actuWindow.close()

})