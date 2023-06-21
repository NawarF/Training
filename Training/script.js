let sidebar= document.querySelector(".sidebar");

let bars = document.querySelector(".bar");

let closed = document.querySelector(".fa-close");

console.log(sidebar);
console.log(bars);
console.log(closed);

bars.onclick = ()=>{
    sidebar.style.width = "200px";
    sidebar.style.transition =".4s";
}
closed.onclick = ()=>{
    sidebar.style.width ="0";
    sidebar.style.transition =".4s";
}