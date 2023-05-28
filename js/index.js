const $=document
const landingTitle =$.querySelector('.landing__title')
const landingCoursesCount=$.querySelector('#courses-count')
const landingMiutesCounte=$.querySelector('#miutes-counter')
const landingUsersCounte=$.querySelector('#user-counter')



window.addEventListener('load',()=> {
    let landingText = "ما به هر قیمتی دوره آموزشی تولید نمیکنیم !";
    let typeIndex = 0;
    typewriter(landingText ,typeIndex);
    makeCounter(40 , landingCoursesCount);
    makeCounter(1098 , landingMiutesCounte);
    makeCounter(310 , landingUsersCounte);

});

function typewriter(text , index){
    if (index < text.length){
        landingTitle.innerHTML += text[index];
        index++;
    }
    setTimeout(()=>{
        typewriter(text , index);
    },100);
};
function makeCounter(max ,elem){
    let counter = 0;
    const interval = setInterval(()=>{
        if(counter === max){
            clearInterval(interval);
        }
        elem.innerHTML = counter;
        counter++;
        
    },0.5);
};