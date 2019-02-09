class Carousel {
    constructor(element) {
        this.element = element;
        this.leftButton = this.element.querySelector('.left-button');
        this.rightButton = this.element.querySelector('.right-button');
        this.imgs = this.element.querySelectorAll('img');
        this.index = 0;
        this.currImg = this.imgs[this.index];
        this.currImg.style.display = 'flex';

        this.leftButton.addEventListener('click', this.shiftLeft.bind(this));
        this.rightButton.addEventListener('click', this.shiftRight.bind(this));
    }

    shiftLeft() {
        let prevImg = this.currImg;
        prevImg.style.display = 'none';
        if (this.index === 0) {
            this.index = this.imgs.length - 1;
        } else {
            this.index --;
        }
        this.currImg = this.imgs[this.index];
        this.currImg.style.display = 'flex';
    }

    shiftRight() {
        let prevImg = this.currImg;
        prevImg.style.display = 'none';
        if (this.index === this.imgs.length - 1) {
            this.index = 0;
        } else {
            this.index++;
        }
        this.currImg = this.imgs[this.index];
        this.currImg.style.display = 'flex';
    }
}

let carousel = document.querySelector('.carousel');
(() => new Carousel(carousel))();

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/