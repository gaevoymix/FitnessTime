//init ui
const ui = new UI();

ui.startSlide();

ui.posCarousel();

//left arrow click
document.getElementById('arrow-left').addEventListener('click', function() {
    if(ui.current === 0) {
        ui.current = ui.sliderImages.length;
    }
    ui.slideLeft();
})

// right arrow click
document.getElementById('arrow-right').addEventListener('click', function() {
    if(ui.current === ui.sliderImages.length - 1) {
        ui.current = -1;
    }
    ui.slideRight();
})

window.addEventListener('scroll', function() {
    ui.parallax();

    ui.stikyHeadr();
})

//carousel left arrow click
document.querySelector('.car-arr-left').addEventListener('click', function(){
    ui.slideToRight();
    
})

//carousel right arrow click
document.querySelector('.car-arr-right').addEventListener('click', function(){
    ui.slideToLeft();
})

//open hamburger 
document.querySelector('.hamburger-btn').addEventListener('click', function() {
    ui.navOpen();
})