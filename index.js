const numOfDivs = 16;

const containerMain = document.getElementById('mainContainer');

function createDivs(num){
    for(let row = 0; row < num; row++){
        const newDiv = document.createElement("div");
        newDiv.className = "div";
        containerMain.appendChild(newDiv);

        for(let col = 0; col < num; col++){
            const square = document.createElement("div");
            newDiv.appendChild(square);
            square.className = "square";
        }
    }
}

createDivs(numOfDivs);

