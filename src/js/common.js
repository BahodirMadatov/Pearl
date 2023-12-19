export default function() {
    const headerBtn = document.querySelector('.header__btn'),
        headerItems = document.querySelector('.header__list'),
        shadow = document.querySelector('.shadow');
    function openClose(){
        const bool = !headerBtn.classList.contains('active');
        headerBtn.classList[bool ? 'add' : 'remove']('active');
        shadow.classList[bool ? 'add' : 'remove']('active');
        headerItems.classList[bool ? 'add' : 'remove']('active');
        document.body.classList[bool ? 'add' : 'remove']('hidden');
    };
    headerBtn.addEventListener('click', function(e) {
        e.preventDefault();
        openClose();
    })
    shadow.addEventListener('click', openClose);
}

// menu completed

//slider

class Slider{
    constructor({el ,active}) {
        this.slider = el instanceof HTMLElement ? el : document.querySelector(el);
        this.sliderItems = this.slider.querySelectorAll('.slider__item');
        this.active = active;
        this.sliderPagination = this.slider.querySelector('.slider__pagination');
        this.sliderPagination.innerHTML = '';
        for (let i = 0; i < this.sliderItems.length; i++) {
            let li = '<li></li>';
            this.sliderPagination.innerHTML += li;
        }
        this.dots = [...this.sliderPagination.children];
        this.dots.forEach(item => {
            item.addEventListener('click', (e) => this.clickDots(e));
        })
        this.setClass();
    }
    setClass() {
        this.sliderItems.forEach((item, i) => {
            item.classList.remove('active');
            this.dots[i].classList.remove('active');
        });
            this.sliderItems[this.active].classList.add('active');
            this.dots[this.active].classList.add('active');
    }
    clickDots(e) {
        let ido = this.dots.indexOf(e.target);
        this.active = ido;
        this.setClass();
    }
}
const slider1 = document.querySelector('.pug1');
if(slider1) {
    const mySlider1 = new Slider({
        el: slider1,
        active: 0
    })
    
}

const slider2 = document.querySelector('.pug2');
if(slider2) {
    const mySlider2 = new Slider({
        el: slider2,
        active: 0
    })
}

const slider3 = document.querySelector('.pug3');
if(slider3) {
    const mySlider3 = new Slider({
        el: slider3,
        active: 0
    })
}