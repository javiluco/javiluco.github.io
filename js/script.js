
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 120);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
}


//Fondo
document.body.addEventListener("pointermove", (e) => {
    const { currentTarget: el, clientX: x, clientY: y } = e;
    const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
    el.style.setProperty('--posX', x - l - w / 4);
    el.style.setProperty('--posY', y - t - h / 4);
})


//Fecha footer
const fecha = document.querySelector(".fecha");
let anhoActual = new Date();

fecha.innerHTML = `${anhoActual.getFullYear()}`;


//EMAIL JS
const popup = document.querySelector('.popup');
const btn = document.getElementById('button');

document.querySelector('.btn-dismiss').addEventListener('click', function(){
    popup.classList.remove('active');
});


window.onload = function () {
    document.getElementById('form').addEventListener('submit', function (event) {
        event.preventDefault();

        const serviceID = 'service_6l9lemr';
        const templateID = 'template_ai32xyg';

        btn.value = 'Enviando...';
        btn.disabled = true;

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                console.log('SUCCESS!');
                btn.value = 'Enviar';
                btn.disabled = false;

                popup.classList.add('active');
                this.reset();


            }, (error) => {
                console.log('FAILED...', error);
                btn.value = 'Enviar';
                btn.disabled = false;
            });
    });
}