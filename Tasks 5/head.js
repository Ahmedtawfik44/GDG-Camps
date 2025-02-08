
const service=document.getElementById('service');
const srv=document.getElementById('srv');
for(let i=0 ; i<3 ; i++){
    const clone = srv.cloneNode(true)
    service.appendChild(clone);
}

const ui=document.getElementById('ui');
const box=document.getElementById('box');
for(let i=0 ; i<2 ; i++){
    const clonebox = box.cloneNode(true)
    ui.appendChild(clonebox);
}