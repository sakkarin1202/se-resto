let menu =document.querySelector("#menu-bars");
console.log(menu)
let navbar =document.querySelector("header .flex .navbar");

menu.onclick = () => {
    console.log("click")
    menu.classList.toggle("fa-xmark");
    navbar.classList.toggle("active");
}
let search = document.querySelector("#search-icon");
search.onclick = () =>{
    let search_form = document.querySelector("#search-form");
    search_form.classList.toggle("active");
}

let close_icon = document.querySelector("#close");
close_icon.onclick = () =>{
    let search_form = document.querySelector("#search-form");
    search_form.classList.remove("active");
}