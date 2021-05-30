let toprow=document.querySelector(".top_row");
let leftcolumn=document.querySelector(".left_column");
let grid = document.querySelector(".grid");
let coloum =26;
let row = 100;
for(let i=0;i<coloum;i++) {
    let div = document.createElement("div");
    div.innerText = String.fromCharCode(65+i);
    div.setAttribute("class","cell");
    toprow.appendChild(div);

}
for(let i=0;i<=row;i++) {
    let div = document.createElement("div");
    div.innerText = i;
    div.setAttribute("class","block");
    leftcolumn.appendChild(div);

}
for(let i=0;i<=row;i++) {
let row = document.createElement("div");
row.setAttribute("class","row");
for(let j=0;j<coloum;j++){
    let div = document.createElement("div");
    div.innerText = `${i} ${String.fromCharCode(65+j)}`;
    div.setAttribute("class","cell");
    row.appendChild(div);
}
grid.appendChild(row);
}