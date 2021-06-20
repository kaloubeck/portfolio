let menu_btn = document.querySelector(".btn_bar");
let cancel_btn = document.querySelector(".cancel_btn");
let menu_bar = document.querySelector(".menu");

menu_btn.onclick = function() {
    menu_btn.style.opacity = "0";
    menu_btn.style.pointerEvents = "none";
    menu_bar.style.right = "0";

}


cancel_btn.onclick = function() {
    menu_btn.style.opacity = "1";
    menu_btn.style.pointerEvents = "auto";
    menu_bar.style.right = "-100%";
}