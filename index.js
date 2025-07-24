const numOfDivs = 16;
const containerMain = document.getElementById('mainContainer');
const resizeBtn = document.getElementById('resizeBtn')


function createDivs(num){
    for(let row = 0; row < num; row++){
        const newDiv = document.createElement("div");
        newDiv.className = "div";
        containerMain.appendChild(newDiv);

        for(let col = 0; col < num; col++){
            const square = document.createElement("div");
            newDiv.appendChild(square);
            square.className = "square";
            square.addEventListener("mouseover", () => {
                let greenColor = Math.floor(Math.random() * 256);
                let redColor = Math.floor(Math.random() * 256);
                let blueColor = Math.floor(Math.random() * 256);
                let color = `rgb(${redColor}, ${greenColor}, ${blueColor})`;
                square.style.background = color;
            })
        }
    }
}

resizeBtn.addEventListener("click", () => {
    let userInput = prompt("Enter grid size");
    let newSize = parseInt(userInput);
    if (isNaN(newSize) || newSize < 1  || newSize > 100){
        alert("Please enter a valid number between 1 and 100");
        return;
    }
    containerMain.innerHTML = '';
    createDivs(newSize)
});




createDivs(numOfDivs);

