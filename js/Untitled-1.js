    document.body.classList.add(localStorage.getItem('pagecolor'));

    document.styleSheets
    let el;
    el = document.querySelectorAll('.color-switcher li');
    let classlist;

    classlist = [];

    for (let i = 0; i < el.length; i++) {

        //classlist array push = add 
        classlist.push(el[i].getAttribute('data-color'));

        //add event click for each li
        el[i].addEventListener(
            'click',
            function() {
                //remove all old classlist
                document.body.classList.remove(...classlist);
                //add classlsit 
                document.body.classList.add(this.getAttribute('data-color'));
                // add localstorage
                localStorage.setItem('pagecolor', this.getAttribute('data-color'));

                document.documentElement.style.setProperty('--main-color', localStorage.getItem('pagecolor'));
            },
            false);


        let color_theme = document.querySelector(".theme-color");
        el[i].addEventListener(
            'click',
            () => {
                color_theme.classList.toggle('hidden');
            },
            false);

        el[i].addEventListener(
            'click',
            () => {
                btn_theme.style = "display: fixed;";
            },
            false);
    }

    document.documentElement.style.setProperty('--main-color', localStorage.getItem('pagecolor'));



    let btn_theme = document.querySelector(".btn_theme");
    let color_theme = document.querySelector(".theme-color");

    btn_theme.addEventListener(
        'click',
        () => {
            color_theme.classList.toggle('hidden');
        }, false);


    btn_theme.addEventListener('click', function() {
        btn_theme.style = "display: none;"
    }, false);