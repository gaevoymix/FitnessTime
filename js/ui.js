class UI {
    constructor(){
        this.sliderImages = document.querySelectorAll('.slide');
        this.current = 0;
        this.header = document.querySelector('.header');
        this.banner = document.querySelector('.top-banner');
        this.xPos = 0;
        this.line = document.querySelector('.carousel-holder');
        this.nav = document.querySelector('.header-nav');
    }
    // slider
    reset() {
        for(let i = 0; i < this.sliderImages.length; i++) {
            this.sliderImages[i].style.display = 'none';
        }
    }
    // init slider
    startSlide() {
        this.reset();
        this.sliderImages[0].style.display = 'block';
    }

    //show prev
    slideLeft() {
        this.reset();
        this.sliderImages[this.current - 1].style.display = 'block';
        this.current--;
    }

    //show next 
    slideRight() {
        this.reset();
        this.sliderImages[this.current + 1].style.display = 'block';
        this.current++;
    }

    //parallax effect
    parallax() {
        let yPos = window.pageYOffset;
        //this.banner.style.top = yPos * 1  + 'px';
        this.banner.style.transform = `translate3d(0, ${yPos * 0.25}px, 0)`;
    }

    //stiky header 
    stikyHeadr() {
        let yPos = window.pageYOffset;
        if(yPos >= 100) {
            this.header.classList.add('fixed-header');
        } else if(yPos < 100) {
            this.header.classList.remove('fixed-header');
        }
    }

    //init carousel position
    posCarousel() {
        this.line.style.left = '0';
    }

    //slide carousel to left
    slideToLeft() {
        //get slide X state
        let slideState = this.line.style.left.split('px');
        //convert state to number
        let numState = parseFloat(slideState[0]);

        numState = numState -70;
        if(numState > -210) {
            // numState = 0;
            this.line.style.left = numState + 'px';
        }
        
    }

    //slide carousel to right
    slideToRight() {
        //get slide X state
        let slideState = this.line.style.left.split('px');
        //convert state to number
        let numState = parseFloat(slideState[0]);

        numState = numState + 70;
        if(numState > 0) {
            numState = 0;
        }
        this.line.style.left = numState + 'px';
    }

    //hamburger 
    navOpen() {
        this.nav.classList.toggle('display-header');
    }
}