const grid=document.querySelector("#grid");
const buttons = document.querySelectorAll('.size-button')
const eraseButton = document.querySelector('#erase')
const colorButtons = document.querySelectorAll('.color-button')
let mode = "black"
const blackButton = document.querySelector(".black")
const rainbowButton = document.querySelector(".rainbow")

generateGrid(32*32)
generateGridMedium()

blackButton.addEventListener('click', () => {
    blackButton.classList.add("black-clicked")
    rainbowButton.classList.remove("rainbow-clicked")
})
rainbowButton.addEventListener('click', () => {
    rainbowButton.classList.add("rainbow-clicked")
    blackButton.classList.remove("black-clicked")

})




function colorMode(){
    let divs = document.querySelectorAll(".square");

    divs.forEach((div) => {
        div.addEventListener('mouseover', () => {
            if(mode==="black"){
                div.style.backgroundColor = "#000000";
            }
            else if(mode==="rainbow"){
                const rainbowColors = ['#772D8B', '#20A4F3', "#F03A47", "#2DD881", "#F75C03"];
                const randomColor = Math.floor(Math.random() * rainbowColors.length);
                div.style.backgroundColor = rainbowColors[randomColor];
            }

        })
    })
}

function generateGrid(size){

    for(let i=0; i<size; i++){
        let divs = document.createElement('div');
        divs.classList.add('square');
        grid.appendChild(divs)
    }

    colorMode();
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
    let divs = document.querySelectorAll('.square')
    divs.forEach(div => {
        div.style.backgroundColor = "#FFFFFF";
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

