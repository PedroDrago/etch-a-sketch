let grid=document.querySelector("#grid");

function generateGrid(size){

    for(let i=0; i<size; i++){
        let divs = document.createElement('div');
        divs.classList.add('square');
        grid.appendChild(divs)
    }

    
    let divs = document.querySelectorAll(".square");
    divs.forEach(div => {
        div.addEventListener('mouseover', function hover(){
            div.classList.add('hover')
        })
    })
}


function generateGridMedium(){
    grid.style.width="864px"
    grid.style.height="864px"
    divs = document.querySelectorAll('.square')
    divs.forEach(div => {
        div.style.height="25px"
        div.style.width="25px"
    })
}
// generateGrid(32*32)
// generateGridMedium()

function generateGridSmall(){
    grid.style.width="928px"
    grid.style.height="928px"
    divs = document.querySelectorAll('.square')
    divs.forEach(div => {
        div.style.height="12.5px"
        div.style.width="12.5px"
    })
}
// generateGrid(64*64)
// generateGridSmall()

function generateGridLarge(){
    grid.style.width="832px"
    grid.style.height="832px"
    divs = document.querySelectorAll('.square')
    divs.forEach(div => {
        div.style.height="50px"
        div.style.width="50px"
    })
}

//small = 64x64 -> square with 12.5px each -> flexbox 928px X 928px
//medium = 32x32 -> square with 25px each -> flexbox with 864px X 864px
//large = 16x16 -> square with 50px each -> flexbox with 832px X 832px