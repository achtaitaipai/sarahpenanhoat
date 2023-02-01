import 'viewerjs/dist/viewer.css'
import Viewer from "viewerjs";
export default class ImageGallery extends HTMLElement {
    private _viewer?:Viewer


  connectedCallback(){
    const wrapper = this.querySelector("section");
    const images = wrapper?.querySelectorAll("picture");
    if (wrapper) {
        this._viewer = new Viewer(wrapper, {
          inline: false,
          title: false,
          toolbar: {
            zoomIn: true,
            zoomOut: true,
            oneToOne: false,
            reset: false,
            prev: false,
            play: false,
            next: false,
            rotateLeft: false,
            rotateRight: false,
            flipHorizontal: false,
            flipVertical: false,
          },
        });
  
        images?.forEach((img, index) => {
          img.addEventListener("click", () => {
            this._viewer?.view(index);
          });
        });
      }
  }

  disconnectCallback(){
    this._viewer?.destroy()
  }
}
