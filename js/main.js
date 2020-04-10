const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");//обращаемся к элементу который имеет класс модал с помощью документ
const close = document.querySelector(".close");


cartButton.addEventListener('click',function(event){
    // console.log("YOu click on the button!")
    // для модального окна повесим класс is open
 modal.classList.add("is-open");//мне нужно у этого модального окна получить список классов и добавить туда свой класс исопен
});

close.addEventListener('click',function(event){
 modal.classList.remove("is-open");//мне нужно у этого модального окна получить список классов и удалить туда свой класс исопен
});

/////////second varian
// cartButton.addEventListener('click',toggleModal;
// close.addEventListener('click',toggleModal);

// function toggleModal(){
//     modal.classList.toggle("is-open"); 
// }

new WOW().init();