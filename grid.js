const grid = document.querySelector('#grid');
const btn = document.querySelector('#chose');
createGrid();
// Create 16x16 grid
function createGrid(num = 16){
    grid.innerHTML = '';
    let length = num*5;
    num = num*num;
    grid.style.width =`${num*5}px`;
    grid.style.width = `${num*5}px`;
    for (let i = 0; i < num; i++) { // 16 * 16 = 256
        const cell = document.createElement('div'); 
        cell.className = 'cell';
        cell.style.width = `${length}px`;
        cell.style.height = `${length}px`;
        cell.style.color = "red";
        cell.addEventListener("mouseenter", (event) =>{
            event.target.style.backgroundColor= "blue";
        });
        /*cell.addEventListener("mouseleave", (event) =>{
            event.target.style.backgroundColor= "red";
        });*/  //to turn off the blue lights
        cell.addEventListener("click", (event) =>{
            event.target.style.backgroundColor= "red";
        });
        grid.appendChild(cell);
    }
}


btn.addEventListener("click", (e)=> {
    let num = parseInt(prompt("enter a num from 1-100 for new sizing"));
    while(num>100){
        num = parseInt(prompt("enter a new num from 1-100 for new sizing"));
    }
    createGrid(num);
});




