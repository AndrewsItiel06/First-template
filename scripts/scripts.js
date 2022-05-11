window.addEventListener("scroll", onScroll);

/*===NAV'S COLOR TOGGLE AND TO THE TOP BUTTON === */
const navigation = document.getElementsByTagName("nav");
const navHeight= 7.2;
const ToTopButton = document.querySelector(".toTheTopButton");

function onScroll(){
        navToggle()
        showToTheTopButton()
        activateMenuAtCurrentSection(home)
        activateMenuAtCurrentSection(services)
        activateMenuAtCurrentSection(about)
        activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section){
        const targetLine = scrollY + innerHeight / 2;

        const sectionTop = section.offsetTop;
        const sectionHeigth = section.offsetHeight;
        const SectionEndsAt = sectionTop + sectionHeigth;

        const sectionId = section.getAttribute('id');
        const menuElement = document.querySelector(`.menu a[href*= ${sectionId}]`);
        
        const sectionTopReachOrPassedTargeLine = targetLine >= sectionTop;
        const sectionEndPassedTheLine = targetLine >= SectionEndsAt;
        
        const sectionBounderies = sectionTopReachOrPassedTargeLine && !sectionEndPassedTheLine;
        
        if(sectionBounderies){
                menuElement.classList.add('active')
        } else{ menuElement.classList.remove("active")}
}

function showToTheTopButton(){
        if(scrollY > 1400){
                ToTopButton.classList.add("show")}
            
            else{ToTopButton.classList.remove("show")};
        
        document.addEventListener('load', () => {
            if(scrollY > 1400){
                ToTopButton.classList.add("show")}});
}

function navToggle(){  
        if(scrollY > navHeight){
            navigation[0].classList.add("scroll")}
        
        else{navigation[0].classList.remove("scroll")};
    
    document.addEventListener('load', () => {
        if(scrollY > navHeight){
        navigation[0].classList.add("scroll")}});
};

onScroll()
/*===OPEN AND CLOSE MENU===*/
const body = document.body;
const bodyClass = "menu-expanded";


function openMenu(){   
        body.classList.add(bodyClass);
}

function closeMenu(){
        body.classList.remove(bodyClass);
}

/*===SCROLL REVEAL===*/
ScrollReveal({
        origin: 'right',
        distance: '30px',
        duration: 700,  
}).reveal(`
        #home,
        #home .cardImage,
        #home .stats,
        #services,
        #services header,
        #services .card,
        #about,
        #about header,
        #about .content p,
        #about .content img,
        #contact header,
        #contact ul,
        #contact a,
        #contact p,
        #contact img`);