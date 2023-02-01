let options = {
    rootMargin: '0px',
    threshold: 0.4
  }
  
//   let observer = new IntersectionObserver((entries)=>{
//     entries.forEach(entrie=>{
//         if(entrie.intersectionRatio>0)console.log(entrie)
//     })
//   }, options);

//   const obserbables = document.querySelectorAll<HTMLElement>('[on-scroll]')

//   obserbables.forEach(observable=>{
//     observer.observe(observable) =new IntersectionObserver((entries)=>{
//     entries.forEach(entrie=>{
//         if(entrie.intersectionRatio>0)console.log(entrie)
//     })
//   }, options);
//   })

export class ObserbleWrapper extends HTMLElement{
    static _options = {
        rootMargin: '0px',
        threshold: 0.4
      }
    static _observer= new IntersectionObserver((entries)=>{
        entries.forEach(entrie=>{
            if(entrie.intersectionRatio>0)entrie.target?.classList.remove('not-visible')
        })
      }, options);

      private _observables?:NodeListOf<HTMLElement>

    connectedCallback(){
        if ('IntersectionObserver' in window) {
            this._observables = this.querySelectorAll<HTMLElement>('[anim-onscroll]')
            this._observables.forEach(observable=>{
                ObserbleWrapper._observer.observe(observable)
                observable.classList.add('not-visible')
                
            })
        } 
    }

    disconnectedCallback(){
        this._observables?.forEach(observable=>{
            ObserbleWrapper._observer.unobserve(observable)
            
        })
    }
}