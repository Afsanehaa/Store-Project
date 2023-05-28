const $=document
const landingTitle =$.querySelector('.landing__title')

window.addEventListener('load',()=> {
    let landingText = "ما به هر قیمتی دوره آموزشی تولید نمیکنیم !";
    let typeIndex =0;
    typewriter(landingText ,typeIndex)

});

function typewriter(text , index){
    if (index < text.length){
        landingTitle.innerHTML += text[index];
        index++;
    }
    setTimeout(()=>{
        typewriter(text , index);
    },100)
}