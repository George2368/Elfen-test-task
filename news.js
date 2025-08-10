let startvisiblenews = 0;
let visiblenews = 3;

function titlesize(chanedwasda, sizecount){
    for(i in chanedwasda){
    var parentTitle= chanedwasda[i].parentNode.offsetWidth;
    var titleSIZEDsize = parentTitle / sizecount;
    //console.log(chanedwasda[i])
    //console.log(chanedwasda[i].style.fontSize)
    chanedwasda[i].style.fontSize=`${titleSIZEDsize}px`
    }
}
function onLoadVisible(){
    if(document.documentElement.clientWidth <=2560  && document.documentElement.clientWidth > 1920){
        visiblenews = 3;
    }
    if(document.documentElement.clientWidth <=1920  && document.documentElement.clientWidth > 1440){
        visiblenews = 3;
    }
    if(document.documentElement.clientWidth <=1440 && document.documentElement.clientWidth > 760){
        visiblenews = 2;
        
    }
    if(document.documentElement.clientWidth <=760){
        visiblenews = 1;
    }
}
class NewsContainer{
    constructor(name, title, date,  timereading, photo, altphoto){
        this.name = name;
        this.title = title;
        this.date = date;
        this.timereading = timereading;
        this.photo = photo;
        this.altphoto = altphoto;
    }
} 
var activepaddingnow= 0;
let stepfornextnews;
window.onload = onLoadVisible()

window.onload = countelemsnews()
const NewsArray= [
    {objectnew:new NewsContainer("Laura Busche", "новая коллекция кресел","14 Января 2023", 3, "/assets/news/firstnews.png", "url2")}, 
    {objectnew:new NewsContainer("New Busche", "Световой дизайн в интерьере","14 Март 2025", 3, "/assets/news/secondnews.png", "url2")},
    {objectnew:new NewsContainer("Old Busche", "как выбрать шкаф в спальню","14 Января 2023", 3, "/assets/news/thirdnews.png", "url2")},
    {objectnew:new NewsContainer("Bella Budsadsche", "новая коллекция кресел","14 Января 2023", 3, "/assets/news/firstnews.png", "url2")},
    {objectnew:new NewsContainer("News Buslache", "Световой дизайн в интерьере","14 Января 2023", 3, "/assets/news/secondnews.png", "url2")},
    {objectnew:new NewsContainer("Laurds Busche", "как выбрать шкаф в спальню","14 Января 2023", 3, "/assets/news/thirdnews.png", "url2")},
    {objectnew:new NewsContainer("Bella Budsadsche", "новая коллекция кресел","14 Января 2023", 3, "/assets/news/firstnews.png", "url2")},
    {objectnew:new NewsContainer("News Buslache", "Световой дизайн в интерьере","14 Января 2023", 3, "/assets/news/secondnews.png", "url2")},
    {objectnew:new NewsContainer("Laurds Busche", "как выбрать шкаф в спальню","14 Января 2023", 3, "/assets/news/thirdnews.png", "url2")}
]
var n=0;
for(var key in NewsArray){
    NewsArray[key].objectnew.id=`IdNs${n++}}`
    NewsArray[key].objectnew.name=NewsArray[key].objectnew.name.replace(" ","<br>")
    NewsArray[key].objectnew.date=NewsArray[key].objectnew.date.replace("20","<br>20")
}

var newsaraea = document.querySelector(".main_news_block_body_card_news_block")
var buttonsnews = document.querySelector(".buttons_news");
for(var i=startvisiblenews; i < visiblenews; i++ ){
    let cardnewscontainer = document.createElement("div");
    cardnewscontainer.className="main_news_block_body_card_news";
    cardnewscontainer.innerHTML=`<div class="main_news_block_body_card_news_leftPart">
    <div class="main_news_block_body_card_news_leftPart_header">
        <span class="card_news_number">0${NewsArray.indexOf(NewsArray[i]) + 1}</span>
        <span style="text-align: right">${NewsArray[i].objectnew.name}</span>
    </div>
    <div class="h2news_leftPart_header">${NewsArray[i].objectnew.title}</div>
    <p>${NewsArray[i].objectnew.date}</p>
    </div>
    <div class="main_news_block_body_card_news_rightPart"><img src=${NewsArray[i].objectnew.photo}></div>
    <button class="reading_time_block button_cansel_setting"><span>${NewsArray[i].objectnew.timereading}</span>мин</button>
    `;
    newsaraea.append(cardnewscontainer)
 
}
  
for(var i=0;i< NewsArray.length/stepfornextnews;i++){
    let paginatornews = document.createElement("button");
    paginatornews.className="paginator_news";
    buttonsnews.append(paginatornews);
    
   
}
var padingarray = document.querySelectorAll(".paginator_news");
function nowactivepadding(){
    for(var i = 0; i < padingarray.length; i++){
        padingarray[i].classList.remove("activepadding")
    }
    console.log(padingarray[activepaddingnow])
    padingarray[activepaddingnow].classList.add("activepadding")
}

function appendblognews(){
    for(var i=0;i< NewsArray.length/stepfornextnews;i++){
        let paginatornews = document.createElement("button");
        paginatornews.className="paginator_news"
        buttonsnews.append(paginatornews);
    }
}
window.onload= nowactivepadding()

function appendnewnews(){
    newsaraea.innerHTML="";
    if(stepfornextnews==2 && startvisiblenews>=NewsArray.length - 1){
          document.getElementById("plusbutton").classList.add('disactive');
          document.getElementById('plusbutton').style.pointerEvents = 'none';
        var lastElementNews = NewsArray.length;
        let cardnewscontainer = document.createElement("div");
        cardnewscontainer.className="main_news_block_body_card_news";
        cardnewscontainer.innerHTML=`<div class="main_news_block_body_card_news_leftPart">
        <div class="main_news_block_body_card_news_leftPart_header">
            <span class="card_news_number">0${NewsArray.indexOf(NewsArray[lastElementNews-1]) + 1}</span>
            <span style="text-align: right">${NewsArray[lastElementNews-1].objectnew.name}</span>
        </div>
        <div class="h2news_leftPart_header">${NewsArray[lastElementNews-1].objectnew.title}</div>
        <p>${NewsArray[lastElementNews-1].objectnew.date}</p>
        </div>
        <div class="main_news_block_body_card_news_rightPart"><img src=${NewsArray[lastElementNews-1].objectnew.photo}></div>
        <button class="reading_time_block button_cansel_setting"><span>${NewsArray[lastElementNews-1].objectnew.timereading}</span>мин</button>
        `;
        newsaraea.append(cardnewscontainer)
       
        countelemsnews();
        resetSetntwswidthHeight()
    
    }
    else{
        console.log(2)
        for(var i=startvisiblenews; i < visiblenews; i++ ){
        if(i==NewsArray.length-1){
            document.getElementById("plusbutton").classList.add('disactive');
            document.getElementById('plusbutton').style.pointerEvents = 'none';
        }
        else{
             document.getElementById("plusbutton").classList.remove('disactive');
             document.getElementById('plusbutton').style.pointerEvents = 'all';
        }
        let cardnewscontainer = document.createElement("div");
        cardnewscontainer.className="main_news_block_body_card_news";
        cardnewscontainer.innerHTML=`<div class="main_news_block_body_card_news_leftPart">
        <div class="main_news_block_body_card_news_leftPart_header">
            <span class="card_news_number">0${NewsArray.indexOf(NewsArray[i]) + 1}</span>
            <span style="text-align: right">${NewsArray[i].objectnew.name}</span>
        </div>
        <div class="h2news_leftPart_header">${NewsArray[i].objectnew.title}</div>
        <p>${NewsArray[i].objectnew.date}</p>
        </div>
        <div class="main_news_block_body_card_news_rightPart"><img src=${NewsArray[i].objectnew.photo}></div>
        <button class="reading_time_block button_cansel_setting"><span>${NewsArray[i].objectnew.timereading}</span>мин</button>
        `;
        newsaraea.append(cardnewscontainer)
       
        countelemsnews();
        resetSetntwswidthHeight()
    }  
    }
    
    
}
// const NewsArrayEmpty = NewsArray.map((newselem)=>{
//     let cardnewscontainer = document.createElement("div");
//     cardnewscontainer.className="main_news_block_body_card_news";
//     cardnewscontainer.innerHTML=`<div class="main_news_block_body_card_news_leftPart">
//     <div class="main_news_block_body_card_news_leftPart_header">
//         <span class="card_news_number">0${NewsArray.indexOf(newselem) + 1}</span>
//         <span style="text-align: right">${newselem.objectnew.name}</span>
//     </div>
//     <h2>${newselem.objectnew.title}</h2>
//     <p>${newselem.objectnew.date}</p>    
//     </div>
//     <div class="main_news_block_body_card_news_rightPart"><img src=${newselem.objectnew.photo}></div>
//     <button class="reading_time_block button_card_category button_cansel_setting"><span>${newselem.objectnew.timereading}</span>мин</button>
//     `;
//     newsaraea.append(cardnewscontainer)
// })
function countelemsnews(){
    if(document.documentElement.clientWidth <=2560  && document.documentElement.clientWidth > 1920){
        stepfornextnews = 3;
    }
    if(document.documentElement.clientWidth <=1920  && document.documentElement.clientWidth > 1440){
        stepfornextnews = 3;
    }
    if(document.documentElement.clientWidth <=1440 && document.documentElement.clientWidth > 760){
        stepfornextnews = 2;
    }
    if(document.documentElement.clientWidth <=760){
        stepfornextnews = 1;
    }

}
function slider(idbutton){
    countelemsnews()
    //console.log(stepfornextnews)
    if(idbutton=="plusbutton" && visiblenews !=NewsArray.length){
          if(stepfornextnews==2 && startvisiblenews>=NewsArray.length - 1){
        }
    else{
        startvisiblenews= startvisiblenews + stepfornextnews;
        visiblenews = visiblenews +stepfornextnews;
        activepaddingnow++;
        nowactivepadding()
        appendnewnews()
        resetSetntwswidthHeight();
        document.getElementById(idbutton).innerText=`0${NewsArray.length}`
        document.getElementById('minusbutton').innerText=`0${startvisiblenews+1}`
          var h2News= Array.from(document.querySelectorAll('.h2news_leftPart_header'))
            titlesize(h2News, 9.821)
            if(document.getElementById('minusbutton').classList.contains('disactive')){
                 document.getElementById('minusbutton').classList.remove('disactive');
                 document.getElementById('minusbutton').style.pointerEvents = 'all';
            }
    }
        
    }
    if(idbutton=="minusbutton" && startvisiblenews !=0){
        startvisiblenews= startvisiblenews - stepfornextnews;
        visiblenews = visiblenews -stepfornextnews;
        activepaddingnow--;
        if(activepaddingnow==0){
            document.getElementById('minusbutton').classList.add('disactive');
            document.getElementById('minusbutton').style.pointerEvents = 'none';
        }
        nowactivepadding()
        appendnewnews()
        resetSetntwswidthHeight();
        document.getElementById('plusbutton').innerText=`0${NewsArray.length}`
        document.getElementById(idbutton).innerText=`0${startvisiblenews+1}`
          var h2News= Array.from(document.querySelectorAll('.h2news_leftPart_header'))
            titlesize(h2News, 9.821)
    }
   
}
function resetSetntwswidthHeight(){
    console.log("trueResize")
    if(stepfornextnews==1){
        //console.log(1)
        heightReset(document.querySelectorAll(".main_news_block_body_card_news"), 0.6 , 1)
    }
    if(stepfornextnews==2){
        //console.log(2)
        heightReset(document.querySelectorAll(".main_news_block_body_card_news"), 0.29, 0.49)
    }
    if(stepfornextnews==3){
        //console.log(3)
        heightReset(document.querySelectorAll(".main_news_block_body_card_news"), 0.19, 0.32)
    }
    if(stepfornextnews==4){
        //console.log(4)
        heightReset(document.querySelectorAll(".main_news_block_body_card_news"), 0.19, 0.28)
    }
}
function paddingActive(){
    var el = document.querySelector('.buttons_news').children[1];
}
paddingActive()
function heightReset(elem, number, numberw){
    for(var i=0; i < elem.length; i++){
        const parentwidth = elem[i].parentNode.offsetWidth;
        //console.log(parentwidth)
        console.log(elem[i])
        elem[i].style.height = `${parentwidth * number}px`;
        elem[i].style.width = `${parentwidth * numberw}px`
    }
}
var contactsector = Array.from(document.querySelectorAll('.to_contact'))
window.addEventListener('load', (e)=>{
    resetSetntwswidthHeight();
    heightElem(buttonEelem);
    navButonsResize()
    document.getElementById('plusbutton').innerText=`0${NewsArray.length}`
document.getElementById('minusbutton').innerText=`0${startvisiblenews+1}`
if(document.body.offsetWidth<=900){
    for(var el in contactsector){
        contactsector[el].innerHTML=`<img src="/assets/callsvg.svg">`
    }
}

});

window.addEventListener('resize', (e) => {
//     if(document.body.offsetWidth>500){
//         titlesize(h2News, 9.821)
//     }
// else{
//         titlesize(h2News, 11)
//         //console.log('/edsa')
//     }

    resetSetntwswidthHeight();
    heightElem(buttonEelem);
    buttonsnews.innerHTML = '';
    startvisiblenews=0;
    activepaddingnow=0;
    navButonsResize()
   
    onLoadVisible()
    appendnewnews()
    
    countelemsnews()
    appendblognews()
    
    padingarray = document.querySelectorAll(".paginator_news");
    nowactivepadding()
    var h2News= Array.from(document.querySelectorAll('.h2news_leftPart_header'))
    titlesize(h2News, 9.821)
    if(document.body.offsetWidth<=900){
        for(var el in contactsector){
            contactsector[el].innerHTML=`<img src="/assets/callsvg.svg">`
        }
    }
    else if(document.body.offsetWidth>900){
        for(var el in contactsector){
            contactsector[el].innerHTML=`Контакты`
        }
    }

  });
