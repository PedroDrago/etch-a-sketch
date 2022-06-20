// let master=document.querySelector('#master');


// for(let i=0; i<256;i++){
//     master.appendChild(document.createElement('div'));
// }


let master=document.querySelector("#master");

for(let i=0; i<256; i++){
    let divs = document.createElement('div');
    divs.classList.add('pixel');
    master.appendChild(divs)
}

let divs = document.querySelectorAll(".pixel")

divs.forEach(div => {
    div.addEventListener('mouseover', function hover(){
        div.classList.add('hover')
    })
}
)