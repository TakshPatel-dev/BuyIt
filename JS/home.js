const drop_down_menu_parent = document.getElementById(`drop-down-menu-parent`);
const drop_down_menu = document.querySelector(`.drop-down-menu`);
let arrow = document.getElementById(`arrow`);
let dot_slider = document.querySelectorAll(`.dot`);
let img_slider = document.querySelectorAll(`.slider`);
let slideIndex = 1;


drop_down_menu_parent.addEventListener(`click`,()=>{if(drop_down_menu.style.display === "flex"){drop_down_menu.style.display = "none";arrow.classList.replace(`fi-rr-angle-small-down`,`fi-rr-angle-small-up`)}else{drop_down_menu.style.display = "flex";arrow.classList.replace(`fi-rr-angle-small-up`,`fi-rr-angle-small-down`)}});
document.addEventListener(`DOMContentLoaded`,()=>{img_slider[slideIndex-1].style.display = `block`;dot_slider[slideIndex-1].classList.add(`active`);genslide = setInterval(next,3000)});
function displaySlides(){
 if(slideIndex > img_slider.length){slideIndex = 1};
 if(slideIndex < 1){slideIndex = img_slider.length};
 img_slider.forEach(Element => {Element.style.display = "none"});
 dot_slider.forEach(Element =>{Element.classList.replace(`active`,"empty")});
 img_slider[slideIndex-1].style.display = "block";
 dot_slider[slideIndex-1].classList.add(`active`);
}
function next(){
    slideIndex ++
    displaySlides()
}
function prev(){
    slideIndex --
    clearInterval(genslide)
    displaySlides()
}
function currentSlide(n){
    slideIndex = n;
    displaySlides()
    clearInterval(genslide)

}
