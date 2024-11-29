const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder','통합검색');
});

searchInputEl.addEventListener('blur',function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder','');
});

const badgeEl = document.querySelector('header','.badges');
const toTopEl = document.querySelector('#to-top');


window.addEventListener('scroll', function(){
    // console.log(window.scrollY);

    if (this.window.scrollY > 500) {

    gsap.to(badgeEl, .6,{
        opacity: 0,
        display: 'none'
    });

    gsap.to(toTopEl, .6, {
        opacity:1, 
        x:0
    });

    }else {
    gsap.to(badgeEl,.6, {
        opacity: 1,
        display: 'block'    
    });
    
    gsap.to(toTopEl, .6, {
        opacity: 0,
        x: 100
    });

    }   

});



toTopEl.addEventListener('click', 
    function(){
        console.log(window.scrollY);
        gsap.to(window, .6 ,{
            scrollTo: 0
        })
    }
);



new Swiper('.notice .swiper', {
    direction: 'vertical',
    autoplay: true,
    loop: true 
});


new Swiper('.promotion .swiper',{
    autoplay: true,
    loop: true,
    slidesPerView: true,
    spaceBetween: 10,
    centerSlides: true
}
);

new Swiper('.promotion .swiper', {
    autoplay: true,
    loop: true,
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    pagination: {
        el: '.promotion .swiper-pagination',
        clickable: true 
    },
    navigation: {
        prevEl: '.promotion .swiper-button-prev',
        nextEl: '.promotion .swiper-button-next'
    }

});

const promotionEl = document.querySelector('section.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');

promotionToggleBtn.addEventListener('click',function(){

    if(promotionEl.classList.contains('hide')){
        promotionEl.classList.remove('hide');
    }else {
        promotionEl.classList.add('hide');
    }
})

gsap.to('.floating1', 1.5, {
    delay: 1,
    y: 15,
    repeat: -1,
    yoyo: true, 
    ease: Power1.easeInOut 
});

gsap.to('.floating2',2,{
    delay: .5,
    y: 15,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut
});

gsap.to('.floating3',2.5,{
    delay: 1.5,
    y:20, 
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut 
});
// 아래의 코드는 무언가 문제가 있는거 같다. 
// const spyEls = document.querySelectorAll('section.scroll-spy');
// spyEls.forEach(function(spyEl){
//     new ScrollMagic.Scene({
//             triggerElement: spyEl,
//             triggerHook: .8
//     })
//     .setClassToggle(spyEl, 'show')
//     .add(new ScrollMagic.Controller());
// });

// console.log(new Date().getFullYear()); not okay 
new Swiper('awards .swiper',{
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5
})



new Swiper('.awards .swiper',{
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        prevEl: '.awards .swiper-button-prev',
        nextEl: '.awards .swiper-button-next'
    }
});

console.log(new Date().getFullYear());
const thisYear = document.querySelector('.this-year');
thisYear.innerHTML = new Date().getFullYear();

