function fun1() {
    var chbox;
    chbox = document.getElementById('one');
    
    if (chbox.checked) {
        alert('Yes');
    }
    else {
        alert('No');
    }
    }
    
    
    function fun2() {
        var radi = document.getElementsByName('r1');
        for (var i = 0; i < radi.length; i++) {
            if (radi[i].checked) {
                alert('Выбран ' + i + ' элемент');
            }
        }
    }
    
    
    
    
    function fun3() {
        var sel = document.getElementById('mySelect').selectedIndex;
        var options = document.getElementById('mySelect').options;
        alert('Выбрана опция ' + options[sel].text);
    }
    
    
    function fun4() {
        var rng = document.getElementById('r2');
        var p = document.getElementById('one');
        p.innerHTML = rng.value;
    }
    function fun5() {
        var rtl = document.getElementById('rtl').value;
        var rtr = document.getElementById('rtr').value;
        var rbr = document.getElementById('rbr').value;
        var rbl = document.getElementById('rbl').value;
    
        var ttl = document.getElementById('ttl');
        var ttr = document.getElementById('ttr');
        var tbr = document.getElementById('tbr');
        var tbl = document.getElementById('tbl');
    
        var block = document.getElementById('block');
    
        ttl.value = rtl;
        ttr.value = rtr;
        tbr.value = rbr;
        tbl.value = rbl;
    
        block.style.borderRadius = rtl + 'px ' + rtr + 'px ' + rbr + 'px ' + rbl + 'px ';
    }
    
    
    document.getElementById('nav').onmouseover = function (event) {
        var target = event.target;
        if (target.className == 'menu-item') {
            var s = target.getElementsByClassName('submenu');
            closeMenu();
            s[0].style.display = "block";
        }
    }
    
    document.onmouseover = function (event) {
        var target = event.target;
        console.log(event.target);
        if (target.className != 'menu-item' && target.className != 'submenu') {
            closeMenu();
        }
    }
    
    function closeMenu() {
        var menu = document.getElementById('nav');
        var subm = document.getElementsByClassName('submenu');
        for (var i = 0; i < subm.lenght; i++) {
            subm[i].style.display = "none";
        }
    }
    
    var tab;
    var tabContent;
    
    window.onload = function () {
        tabContent = document.getElementsByClassName('tabContent');
        tab = document.getElementsByClassName('tab');
        hideTabsContent(1);
    }
    
    function hideTabsContent(a) {
        for (var i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
            tab[i].classList.remove('whiteborder');
        }
    }
    
    document.getElementById('tabs').onclick = function (event) {
        var target = event.target;
        if (target.className == 'tab') {
            for (var i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    showTabsContent(i);
                    break;
                }
            }
        }
    }
    
    function showTabsContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            hideTabsContent(0);
            tab[b].classList.add('whiteborder');
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }
    
    
    
    var modal = document.getElementById("my_modal");
    var btn = document.getElementById("btn_modal_window");
    var span = document.getElementsByClassName("close")[0];
    
    
    btn.onclick = function () {
        modal.style.display = "block";
    }
    
    modal.onclick = function () {
        modal.style.display = "none";
    }
    
    //клик вокруг модального окна
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    
    
    
    function myMove() {
        var elem = document.getElementById("myAnimation");
        var pos = 0;
        var id = setInterval(frame, 10);
        function frame() {
            if (pos == 350) {
                clearInterval(id);
            } else {
                pos++;
                elem.style.top = pos + 'px';
                elem.style.left = pos + 'px';
            }
        }
    }
    
    
    var slideIndex = 1;
    showSlides(slideIndex);
    
    
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    
    
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
    
    
    function myFunction() {
        var input, filter, ul, li, a, i;
        input = document.getElementById('myInput');
        filter = input.value.toUpperCase();
        ul = document.getElementById("myUL");
        li = ul.getElementsByTagName('li');
    
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }
    
    
    
    function plus() {
    
        var num1, num2, result;
    
        num1 = document.getElementById('n1').value;
        num1 = parseInt(num1);
    
        num2 = document.getElementById('n2').value;
        num2 = parseInt(num2);
    
        result = num1 + num2;
    
        document.getElementById('out').innerHTML = result;
    }
    
    function minus() {
    
        var num1, num2, result;
    
        num1 = document.getElementById('n1').value;
        num1 = parseInt(num1);
    
        num2 = document.getElementById('n2').value;
        num2 = parseInt(num2);
    
        result = num1 - num2;
    
        document.getElementById('out').innerHTML = result;
    }
    
    function multiplication() {
    
        var num1, num2, result;
    
        num1 = document.getElementById('n1').value;
        num1 = parseInt(num1);
    
        num2 = document.getElementById('n2').value;
        num2 = parseInt(num2);
    
        result = num1 * num2;
    
        document.getElementById('out').innerHTML = result;
    }
    
    function division() {
    
        var num1, num2, result;
    
        num1 = document.getElementById('n1').value;
        num1 = parseInt(num1);
    
        num2 = document.getElementById('n2').value;
        num2 = parseInt(num2);
    
        result = num1 / num2;
    
        document.getElementById('out').innerHTML = result;
    }
    
    
    let map;
    
    function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8,
        });
    }
