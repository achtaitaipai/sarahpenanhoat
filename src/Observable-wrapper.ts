export class ObserbleWrapper extends HTMLAnchorElement {
  static _observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entrie) => {
        if (entrie.intersectionRatio > 0)
          entrie.target?.classList.remove("not-visible");
      });
    },
    {
      rootMargin: "0px",
      threshold: 0.5,
    }
  );

  private _observables?: NodeListOf<HTMLElement>;

  connectedCallback() {
    if ("IntersectionObserver" in window) {
      this._observables = this.querySelectorAll<HTMLElement>("[anim-onscroll]");
      this._observables.forEach((observable) => {
        ObserbleWrapper._observer.observe(observable);
        observable.classList.add("not-visible");
      });
    }
  }

  disconnectedCallback() {
    this._observables?.forEach((observable) => {
      ObserbleWrapper._observer.unobserve(observable);
    });
  }
}
