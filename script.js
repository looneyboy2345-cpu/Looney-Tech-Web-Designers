const menuBtn = document.querySelector("#menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.onclick = () => {
    navbar.classList.toggle("active");
};

window.onscroll = () => {
    navbar.classList.remove("active");
};

// Automatic Copyright Year
const year = document.getElementById("year");
if (year) {
    year.textContent = new Date().getFullYear();
}
// Back to Top Button

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};
// Scroll Animation

const hiddenElements = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

});

hiddenElements.forEach((el)=>{

    el.classList.add("hidden");
    observer.observe(el);

});// Dark Mode

const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", ()=>{

    document.body.classList.toggle("dark-mode");

});