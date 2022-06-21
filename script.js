const grid=document.querySelector("#grid");
const buttons = document.querySelectorAll('.size-button')
const eraseButton = document.querySelector('#erase')
const colorButtons = document.querySelectorAll('.color-button')
let mode = "black"
console.log(buttons)

function generateGrid(size){

    for(let i=0; i<size; i++){
        let divs = document.createElement('div');
        divs.classList.add('square');
        grid.appendChild(divs)
    }

    
    // let divs = document.querySelectorAll(".square");
    // divs.forEach(div => {
    //     div.addEventListener('mouseover', function hover(){
    //         div.classList.add('hover')
    //     })
    // })

    let divs = document.querySelectorAll(".square");
    divs.forEach((div) => {
        div.addEventListener('mouseover', () => {
            if(mode==="black"){
                div.style.backgroundColor = "#000000";
            }
            else if(mode==="rainbow"){
                const rainbowColors = ['#004F2D', '#F4BFDB', "#47A8BD", "#F5E663", "#DB5A42"];
                const randomColor = Math.floor(Math.random() * rainbowColors.length);
                div.style.backgroundColor = rainbowColors[randomColor];
            }

        })
    })
}


function generateGridMedium(){
    divs = document.querySelectorAll('.square')
    divs.forEach(div => {
        div.style.height="25px"
        div.style.width="25px"
    })
}


function generateGridSmall(){
    divs = document.querySelectorAll('.square')
    divs.forEach(div => {
        div.style.height="11.5px"
        div.style.width="11.5px"
    })
}


function generateGridLarge(){
    divs = document.querySelectorAll('.square')
    divs.forEach(div => {
        div.style.height="52px"
        div.style.width="52px"
    })
}

function cleanGrid(){
    const divs = document.querySelectorAll('.square')
    divs.forEach(div => {
        div.remove();
    })
}

function cleanDraw(){
    let divs = document.querySelectorAll('.hover')
    divs.forEach(div => {
        div.classList.remove('hover')
    })

}





buttons.forEach(button => {
    button.addEventListener('click', () => {
        let choice = button.id
        if(choice==='small'){
            cleanGrid()
            generateGrid(64*64)
            generateGridSmall()
        }
        else if (choice==='medium'){
            cleanGrid()
            generateGrid(32*32)
            generateGridMedium()
        }
        else if(choice==='large'){
            cleanGrid()
            generateGrid(16*16)
            generateGridLarge()
        }
        
    })
})

eraseButton.addEventListener('click', () => {
    cleanDraw()
})

colorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if(button.classList.contains("black")){
            mode = "black";
        } else if(button.classList.contains("rainbow")){
            mode = "rainbow"
        }
    })
})

colorMode()