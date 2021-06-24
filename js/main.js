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

/*sticky navigation bar*/
let nav = document.querySelector("nav");
let val;
window.onscroll = function() {
        if (document.scrollingElement.scrollTop > 20) {
            nav.classList.add("sticky");
        } else {
            nav.classList.remove("sticky");
        }

    }
    /*
    let divtest = document.body;

    if (document.body.innerText.indexOf("Skills") > -1) {
        console.log("yes have");
    } else {
        console.log("non have");
    }

    let mediaicon, linkedinIcon;
    mediaicon = document.querySelector('.media_icon');
    mediaicon.children[1].innerHTML = '<i class="fab fa-twitter ">';
    console.log(mediaicon.children.length);

    linkedinIcon = document.createElement('a');
    linkedinIcon.innerHTML = '<i class="fab fa-linkedin"></i>';
    linkedinIcon.href = 'https://www.linkedin.com/mwlite/in/kamal-ammouri-95b9291b2';
    linkedinIcon.target = '_blink';

    mediaicon.insertBefore(linkedinIcon, mediaicon.children[1]);

    mediaicon.removeChild(mediaicon.lastElementChild);
    let home_centent;
    home_centent = document.querySelector('.home_centent');
    console.log(home_centent.children[0].children[0].textContent);

    /*
    let My_Skills, h2chile, newh2;
    My_Skills = document.querySelector('.My_Skills');
    h2chile = My_Skills.children[0].children[0];
    h2chile.style = 'background-color:white;border:none';
    newh2 = document.createElement('h2');
    newh2.innerHTML = 'text new h2';
    My_Skills.insertBefore(newh2, My_Skills.firstChild);


    let btn_cv;
    btn_cv = document.querySelector('.btn_cv');
    btn_cv.onclick = function() {
        "use strict";
        setTimeout(() => {
            btn_cv.style = 'background-color:white;color:red';

        }, 2000);
    }; */