let plusbutton = document.querySelector(".icon_container");
let sheetlists= document.querySelector(".sheetlist_container");
let firstsheet = document.querySelector(".sheet");
firstsheet.addEventListener("click",handleclick);
plusbutton.addEventListener("click",function(e){
    //create newsheet
    let newsheet = document.createElement("div");
    //create element set attribute
    let allsheet = document.querySelectorAll(".sheet");
    let lastsheet = allsheet[allsheet.length - 1];
    let idx = lastsheet.getAttribute("idx");
    //text set 
    idx = Number(idx);
    newsheet.setAttribute("idx",idx+1);
    newsheet.innerHTML=`Sheet-${idx+2}`;
    //class set
    newsheet.setAttribute("class","sheet")
    //append child
    sheetlists.appendChild(newsheet);
    //remove color from all and give to last sheet
        allsheet=document.querySelectorAll(".sheet");
        for(let i=0;i<allsheet.length;i++){
          allsheet[i].classList.remove("active");
        }
        allsheet[allsheet.length-1].classList.add("active");
    //by clicking any sheet that sheet will be active
    newsheet.addEventListener("click",handleclick);
})
function handleclick(e){
    let currentsheet =e.currentTarget;
    let allsheet= document.querySelectorAll(".sheet");
    for(let i=0;i<allsheet.length;i++){
        allsheet[i].classList.remove("active");
    }
    currentsheet.classList.add("active");
}