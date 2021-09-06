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
    let col = document.createElement("div");
    col.setAttribute("class","cell");
    //to give row and coloum unique id we used setattribute
    col.setAttribute("rid",i);
    col.setAttribute("cid",j);
    col.setAttribute("contenteditable","true")
    row.appendChild(col);
}
grid.appendChild(row);
}
//here we search allcells from grid
let allcells = document.querySelectorAll(".grid .cell");
let adresselements = document.querySelector(".adress");
for(let i = 0; i < allcells.length; i++){
    allcells[i].addEventListener("click",function(){
        //find out rid and cid from all cells
        let rid = allcells[i].getAttribute("rid");
        let cid = allcells[i].getAttribute("cid");
        // convert rid and cid into number
        rid = Number(rid);
        cid = Number(cid);
        //put the rowid and cid in adress box we used 65 bcz 65==A 
        adresselements.value = `${String.fromCharCode(65+cid)}${1+rid} `
    })
}


