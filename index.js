const numOfDivs = 16;

const containerMain = document.getElementById('mainContainer');

function createDivs(num){
    for(let i = 0; i < num; i++){
        const newDiv = document.createElement("div");
        newDiv.className = "div";
        containerMain.appendChild(newDiv);

        for(let i=0; i < num; i++){
            const square = document.createElement("div");
            newDiv.appendChild(square);
            square.className = "square";
        }
    }
}

createDivs(numOfDivs);
ß
