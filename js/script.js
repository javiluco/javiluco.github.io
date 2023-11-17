
const header= document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY >120 );
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = ()=>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
}

window.onscroll = ()=>{
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
}

document.body.addEventListener("pointermove", (e)=>{
    const { currentTarget: el, clientX: x, clientY: y } = e;
    const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
    el.style.setProperty('--posX',  x-l-w/4);
    el.style.setProperty('--posY',  y-t-h/4);
})

const fecha= document.querySelector(".fecha");
let anhoActual = new Date();

fecha.innerHTML=`${anhoActual.getFullYear()}`;