const header = document.querySelector("header"); 

const first_skill = document.querySelector(".skill:first-child");
const sk_counter = document.querySelectorAll(".counter span");
const progress_bars = document.querySelectorAll(".skills svg circle");


const prt_section = document.querySelector(".portfolio");
const zoom_icons = document.querySelectorAll(".zoom-icon");
const modal_overlay = document.querySelector(".modal-overlay");


window.addEventListener("scroll", () =>{
    if(!skillsPlayed) skillsCounter();
});



function stickyNavbar(){
    header.classList.toggle("scrolled", window.pageYOffset > 0); 
}

stickyNavbar();


window.addEventListener("scroll", stickyNavbar);


/*-------Reveal Animation---------*/

let sr = ScrollReveal({
    duration: 2500,
    distance: "60px",

});

sr.reveal(".showcase-info", { delay: 600})
sr.reveal(".showcase-image", { origin: "top", delay: 700});

/*-------Skills bar Animation---------*/

function hasReached(el){
    let topPosition = el.getBoundingClientRect().top; 

    if (window.innerHeight >= topPosition + el.offsetHeight)  return true;
        return false;
    


}

function updateCount(num, maxNum){
    let currentNum = +num.innerText;

    if(currentNum < maxNum){
        num.innerText = currentNum + 1;
        setTimeout(() => {
            updateCount(num, maxNum);
        }, 12)
    }
}

let skillsPlayed = false;


function skillsCounter() {
    if (!hasReached(first_skill)) return;

    skillsPlayed = true;

    sk_counter.forEach((counter, i) =>{
        let target = +counter.dataset.target;
        let strokeValue = 427 - 427 * (target / 100);

        progress_bars[i].style.setProperty("--target", strokeValue);

        setTimeout(() => {
            updateCount(counter, target);
        }, 400)
    });

    progress_bars.forEach((p) => (p.style.animation = "progress 2s ease-in-out forwards"))
    ;

}

/*------------------------------------Portfolio Animation--------------------------------------------*/

let mixer = mixitup(".portfolio-gallery", {
    selectors: {
        target: ".prt-card",
    },
    animation: {
        duration: 500,
    },
}) ;  



