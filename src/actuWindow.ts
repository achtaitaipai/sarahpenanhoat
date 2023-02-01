const actuBtn = document.querySelector<HTMLButtonElement>('#actuBtn')
const actuWindow = document.querySelector<HTMLDialogElement>('#actuWindow')
const closeBtn = document.querySelector<HTMLButtonElement>('#close-actus')


export const initActuWindow = ()=>{

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
}