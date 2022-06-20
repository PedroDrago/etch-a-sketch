let master=document.querySelector("#master");

let height = prompt('Set wich grid height you wish: ')
let width = prompt('set wich grid width you wish: ')
size = height*width
console.log(size)

for(let i=0; i<size; i++){
    let divs = document.createElement('div');
    divs.classList.add('pixel');
    master.appendChild(divs)
}

let divs = document.querySelectorAll(".pixel")

divs.forEach(div => {
    div.addEventListener('mouseover', function hover(){
        div.classList.add('hover')
    })
})