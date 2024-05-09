const navId = document.getElementById("Nav_menu"),
ToggleBtnId = document.getElementById("toggle_btn"),
CloseBtnId = document.getElementById("close_btn");


ToggleBtnId.addEventListener("click",()=>{
    navId.classList.add("show");
});

CloseBtnId.addEventListener("click",()=>{
    navId.classList.remove("show");
});

AOS.init();

gsap.from(".logo",{
    opacity:0,
    y:-10,
    delay:1,
    duration:0.5,
});


gsap.from(".nav_menu_list .nav_menu_item",{
    opacity:0,
    y:-10,
    delay:1,
    duration:0.5,
});


gsap.from(".toggle_btn",{
    opacity:0,
    y:-10,
    delay:1,
    duration:0.5,
});

gsap.from(".main-heading",{
    opacity:0,
    y:20,
    delay:1,
    duration:0.5,
});

gsap.from(".btn_wrapper",{
    opacity:0,
    y:-10,
    delay:1.8,
    duration:0.5,
});