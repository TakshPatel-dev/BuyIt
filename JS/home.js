const drop_down_menu_parent = document.getElementById(`drop-down-menu-parent`)
const drop_down_menu = document.querySelector(`.drop-down-menu`)
let arrow = document.getElementById(`arrow`)
drop_down_menu_parent.addEventListener(`click`,()=>{if(drop_down_menu.style.display === "flex"){drop_down_menu.style.display = "none";arrow.classList.replace(`fi-rr-angle-small-down`,`fi-rr-angle-small-up`)}else{drop_down_menu.style.display = "flex";arrow.classList.replace(`fi-rr-angle-small-up`,`fi-rr-angle-small-down`)}})