
const thanksElems = Array.from(document.querySelectorAll('.first_Layer_center_thanks'))
var scrennWidth= window.innerWidth;
var screenHeight = window.innerHeight;
const firstLayercenter = document.querySelector('.first_Layer_center');
function thanksElemsSize(thanksElems){
    let sizeWH = (scrennWidth/ screenHeight) * 119;
    firstLayercenter.style.height=`${sizeWH + 10}px`;
    for(let i in thanksElems){
        thanksElems[i].style.fontSize = `${sizeWH}px`
    }
}
thanksElemsSize(thanksElems)