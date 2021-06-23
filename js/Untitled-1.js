    document.body.classList.add(localStorage.getItem('pagecolor'));


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

            },
            false);

    }

    console.log(localStorage.getItem('pagecolor'));