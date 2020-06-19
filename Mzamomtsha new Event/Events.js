const EventsSlide = document.querySelector('.EventsSlide');
const EventsImages = document.querySelectorAll('.EventsSlide.img');

const prevOpt = document.querySelector('#prevOpt');
const nextOpt = document.querySelector('#nextOpt');

let counter = 1;
const size = EventsImages[0].clientWidth;

EventsSlide.style.transform = 'translateX('+ (-size * counter)+'px)';

nextOpt.addEventListener('click',()=> {
    EventsSlide.style.transition = "transform 0.5s ease-in-out";
    counter++;
    EventsSlide.style.transform = 'translateX('+(-sixe * counter) + 'px)';
}
);
prevOpt.addEventListener('click',()=> {
    EventsSlide.style.transition = "transform 0.5s ease-in-out";
    counter--;
    EventsSlide.style.transform = 'translateX('+(-sixe * counter) + 'px)';
}
);
EventsSlide.addEventListener('transitioned',()=>{
    if (EventsImages[counter].id === 'lastClone'){
        EventsSlide.styles.transition= "none";
        counter = EventsImages.length - 2;
        EventsSlide.style.transform= 'translateX('+(-size * counter)+'px)';
    }
    if (EventsImages[counter].id === 'firstClone'){
        EventsSlide.styles.transition= "none";
        counter = EventsImages.length - counter;
        EventsSlide.style.transform= 'translateX('+(-size * counter)+'px)';
    }
});