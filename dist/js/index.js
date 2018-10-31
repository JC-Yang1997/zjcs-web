var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal', 
    loop: true,        
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    on:{
        init: function(){
            swiperAnimateCache(this);
            swiperAnimate(this);
        }, 
        slideChangeTransitionEnd: function(){ 
            swiperAnimate(this);
        } 
    }
})        

$("li",".zjzx-leftbox-nav").on("click",function(){
    $(this.parentNode).children("li").removeClass("active");
    $(this).addClass("active");
})