var opann = document.querySelector('.menu-mobali');
var closee = document.querySelector('.x');

const Modal = {
    open(){
        document.querySelector('.menu')
        .classList.add('actions')
    },
    close(){
        document.querySelector('.menu')
        .classList.remove('actions')
    }
};

opann.addEventListener('click', ()=>{
    Modal.open();
});

closee.addEventListener('click', ()=>{
    Modal.close();
});

