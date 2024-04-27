menu = document.getElementById("menu");
menu.onclick = function(){
    navbar = document.getElementsByClassName("headerMenu")[0];
    navbar.classList.toggle("active");
}