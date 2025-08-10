let Products; // Переменная для хранения данных
var slideFirst = document.querySelector(".first_slide");
var slideSecond = document.querySelector(".second_slide");
var slideThird = document.querySelector(".third_slide");


var quentityMirrorsVar = document.getElementById("quentityMirrors")
var quentityLampsVar = document.getElementById("quentityLamps")
var quentityChearsVar = document.getElementById("quentityChears")
var quentityTablesVar = document.getElementById("quentityTables")

fetch('./bd/products.json')
    .then(response => response.json())
    .then(data => {
        Products = data; // Сохраняем данные в переменную
        makeIdProducts()
        colorPut(slideFirst);
        colorPut(slideSecond);
        colorPut(slideThird);
        quentityCardCategory(quentityMirrorsVar)
        quentityCardCategory(quentityLampsVar)
        quentityCardCategory(quentityChearsVar)
        quentityCardCategory(quentityTablesVar)
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });

// ВНИМАНИЕ: этот код выполнится ДО получения данных!
console.log('Этот код выполнится раньше, чем промис разрешится');



var buttonEelem = Array.from(document.querySelectorAll(".ringed_order_button"));
var globalvar = true;
var openmodal=false;
const categoryArea = document.querySelector(".cards_product_container");

function heightElem(buttonEelem){
var buttonwidth = buttonEelem[0].offsetWidth;
 if(document.body.offsetWidth>900){ 
    var elemHeight = Math.round(buttonwidth * 0.437);
 }
 else if(document.body.offsetWidth<=900){
    var elemHeight = Math.round(buttonwidth * 0.3);
 }

for(var elb in buttonEelem){
    buttonEelem[elb].style.height = elemHeight + "px";

}

}



class LampCard {
    constructor(name,category,text,fabricator,price,photo,color,height){
        this.name= name;
        this.category = category;
        this.text = text;
        this.fabricator = fabricator;
        this.price = price;
        this.photo = photo;
        this.color = color;
        this.height = height;
    }
    sayHi(){
        alert(Object.keys(this))
    }
}
var globalcart = [];
var totalprice= totalpricecreate();
function totalpricecreate(){
    var totalpricein=0;
    for(var total in globalcart){

        totalpricein+=globalcart[total].price*globalcart[total].count;
    }
    var totalcontainer = document.querySelector(".end_price_shop");
    totalcontainer.innerHTML=`<div class="end_price_shop_insad">${formatNumberWithSpaces(totalpricein)}<span class="rubl rubl_up">₽</span></div>`;
    return totalpricein;
   
}
function formatNumberWithSpaces(numberString) {
    numberString+="";
    // Удаляем все пробелы, если они есть (для чистоты обработки)
    let cleaned = numberString.replace(/\s/g, '');
    
    // Проверяем, что строка содержит только цифры
    if (!/^\d+$/.test(cleaned)) {
      throw new Error('Входная строка должна содержать только цифры');
    }
    
    // Разбиваем число на тысячи с пробелами
    const formatted = cleaned.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    
    return formatted;
  }
function addcart(id,value){
    //console.log(id)
    for(var elems in Products[value]){
        if(Products[value][elems].id == id){
            globalcart.push(Products[value][elems])
        }
    }  
//     for(i in globalcart){
//         var incart = globalcart.filter(item=> item.id == globalcart[i].id)
//         if(incart.length >0){
//             globalcart[i].count+=1
//             document.getElementById(`${globalcart[i].id}span`).innerHTML= `${globalcart[i].count}`;
//         }
      
            
// }
const duplicates = globalcart.filter((number, index, numbers) => {
    return numbers.indexOf(number) !== index;
    });
    if(duplicates.length > 0){
            
        // globalcart = globalcart.filter((elemdel) => {
        //     if(cc==0){
        //         //console.log(elemdel)
        //         elemdel !== duplicates[0];
        //     }
        //     //console.log(cc)
        //     cc++
        // });
        globalcart.splice(globalcart.indexOf(duplicates[0]), 1)
        globalcart.find((updateelem) => {
            return updateelem === duplicates[0]}).count+=1;
    }
    //console.log(openmodal)
    if(openmodal){
        var shopingcartcontainer = document.querySelector(".shoping_cart_container");
    
        shopingcartcontainer.innerHTML="";
        for(i in globalcart){
            // var incart = globalcart.filter(item=> item.id == globalcart[i].id)
            // if(incart.length >1){
            //     globalcart[i].count+=1
            //     //console.log(globalcart[i].id)
            //     //console.log(document.getElementById(`${globalcart[i].id}span`))
            //     //console.log(globalcart[i].count)
            //     document.getElementById(`${globalcart[i].id}span`).innerHTML= `${globalcart[i].count}`;
            // }
            let shopingcartcard = document.createElement("div");
            shopingcartcard.className="shoping_cart_card";
                shopingcartcard.innerHTML=`<img class="card_cart_img" src=${globalcart[i].photo}>
                <div class="shoping_cart_card_right">
                    <div class="shoping_cart_card_name">
                         <div class="shoping_cart_card_name_area">
                            <div style="background-color:${globalcart[i].color};" class="color_card_sections"></div>
                            <span>${globalcart[i].name}</span>
                         </div>
                         <div class="shoping_cart_card_object_name">
                         ${globalcart[i].category}
                         </div>
                    </div>
                    <button class="button_cansel_setting trashcan" id="${globalcart[i].id}trash" onclick="deletecart(this)"><img src="/assets/trash.svg"></button>
                    <hr class="shoping_cart_card_hr">
                    <div class="shoping_cart_card_total_price price_class">${formatNumberWithSpaces(globalcart[i].price)}<span class="rubl rubl_up">₽</span></div>
                    <div class="shoping_cart_card_change_count">
                        <button class="shop_cart_count_button" id="${globalcart[i].id}minus" onclick="minusbutton(this)">-</button>
                        <span class="shop_cart_count" id="${globalcart[i].id}span">${globalcart[i].count}</span>
                        <button class="shop_cart_count_button" id="${globalcart[i].id}plus" onclick="plusbutton(this)">+</button>
                    </div>
                </div>`;
                //console.log(globalcart[i].id)
                shopingcartcontainer.append(shopingcartcard)
            
           
        }
        buttonspmopeartion()
        totalprice= totalpricecreate()
    }
    
    buttonRingAnim('.ringed_order_button')
    
}

var cardProducts = new Array();

var l=0;
function makeIdProducts(){
for(var key in Products){
    Products[key].map((product)=>{
        product.count = 1;
        return product.id=`GNM${l++}`
    })
}
}


function colorPut(inputSlide){
    if(inputSlide.id == "lampsslide" ){
        Products.Lamps.map((product)=>{
            if(product.isTopProduct){
                inputSlide.querySelector(".lamp_photo").src = product.photo;
                inputSlide.querySelector(".card_information_container h2").innerHTML = `${product.name}`;
                inputSlide.querySelector(".card_information_container p").innerHTML = `${product.text}`;
                inputSlide.querySelector(".card_information_container .numbers").innerHTML = `<div class='price_inDJsa'>${formatNumberWithSpaces(product.price)}</div><span class="rubl rubl_up">₽</span>`;
                inputSlide.querySelector(".title_decoration").innerHTML=`${product.fabricator}`
                inputSlide.querySelector(".title_decoration").style.color = 'rgba(203, 182, 255, 0.6)';
                inputSlide.querySelector('.ringed_order_button').addEventListener("click", function(){
                    addcart(product.id, 'Lamps')


                })
                
            }
        })
    }
    if(inputSlide.id == "chearsslide"){
        Products.Chears.map((product)=>{
            if(product.isTopProduct){
                if(document.body.offsetWidth>900){inputSlide.style.backgroundColor =  product.color;}
                inputSlide.querySelector(".lamp_photo").src = product.photo;
                inputSlide.querySelector(".title_decoration").style.color = 'rgba(255, 168, 246, 1)';
                inputSlide.querySelector(".card_information_container h2").innerHTML = `${product.name}`;
                inputSlide.querySelector(".card_information_container p").innerHTML = `${product.text}`;
                inputSlide.querySelector(".title_decoration").innerHTML=`${product.fabricator}`
                inputSlide.querySelector(".card_information_container .numbers").innerHTML = `<div class='price_inDJsa'>${formatNumberWithSpaces(product.price)}</div><span class="rubl rubl_up">₽</span>`;
                inputSlide.querySelector('.ringed_order_button').addEventListener("click", function(){
                    addcart(product.id, 'Chears')
                    
                })
            }
        })
    }
    if(inputSlide.id == "tablessslide"){
        Products.Tables.map((product)=>{
            if(product.isTopProduct){
                if(document.body.offsetWidth>900){ inputSlide.style.backgroundColor =  product.color;}
             
                inputSlide.querySelector(".lamp_photo").src = product.photo;
                inputSlide.querySelector(".card_information_container h2").innerHTML = `${product.name}`;
                inputSlide.querySelector(".card_information_container p").innerHTML = `${product.text}`;
                inputSlide.querySelector(".title_decoration").innerHTML=`${product.fabricator}`
                inputSlide.querySelector(".card_information_container .numbers").innerHTML = `<div class='price_inDJsa'>${formatNumberWithSpaces(product.price)}</div><span class="rubl rubl_up">₽</span>`;
                inputSlide.querySelector(".title_decoration").style.color = 'rgba(190, 216, 255, 1)';
                inputSlide.querySelector('.ringed_order_button').addEventListener("click", function(){
                    addcart(product.id, 'Tables');
                    
                })
               
                

            }
        })
    }         

   
}


function quentityCardCategory(inputSlide){
    if(inputSlide.id == "quentityMirrors" ){
      
        inputSlide.innerHTML= `${Products.Mirrors.length}`
    }
    if(inputSlide.id == "quentityLamps" ){
      
        inputSlide.innerHTML= `${Products.Lamps.length}`
    }
    if(inputSlide.id == "quentityChears" ){
       
        inputSlide.innerHTML= `${Products.Chears.length}`
    }
    if(inputSlide.id == "quentityTables" ){
       
        inputSlide.innerHTML= `${Products.Tables.length}`
    }
   
}

let activedCards;
activedCards = false;
let lastActiveCards;
let buttoncollection = document.getElementsByClassName('button_card_category');
let buttonmasive = Array.from(buttoncollection);
let cardsProductContainerSettingContainer = document.querySelector('.cards_product_container_setting_container');
let oneRingedOrderButton = document.querySelector('.one_ringed_order_button')
//let 
var lastActiveCardsArrow;
var loadMoreState = 5;
var categoryButtonActivateIDLast;
function appendProductCards(activebutton){
    
    const productcardEmptySecond =  Products[categoryButtonActivateLast].map((product)=>{
        if( Products[categoryButtonActivateLast].indexOf(product) >= loadMoreState){
            let cardproductcontainer = document.createElement("div");
            cardproductcontainer.className="card_product_container";
            cardproductcontainer.innerHTML=`<div style="background-color:${product.color};" class="color_card_section"></div>
                        <img class="img_product_card" src=${product.photo} onclick="modalcartFunc'(${categoryButtonActivateLast}', '${product.id}')">
                        <h2 class="h2_in_product_card" onclick="modalcartFunc('${categoryButtonActivateLast}', '${product.id}')">${product.name}</h2>
                        <span class="subtitle subtitle_in_product_card" onclick="modalcartFunc('${categoryButtonActivateLast}', '${product.id}')">${product.category}</span>
                        <hr class="hr_in_product_card">
                        <div class="card_price_in_category">
                            <span class="numbers price">${formatNumberWithSpaces(product.price)}<span class="rubl rubl_up">₽</span></span>
                            <img>
                        </div>
                        <button class="card_buy_button_in_category add-to-cart" onclick="addcart(this.id, this.value)" value="${categoryButtonActivateLast}" id="${product.id}">
                           <img src="/assets/shopping-cart.svg">
                           <div class="card_button_in_cart_indicator"></div>
                           <span>Купить</span> 
                        </button>
                    </div>`;
            categoryArea.append(cardproductcontainer)
        }
     
     })
     loadMoreState+=5;
          var addToCartBtn = Array.from(document.querySelectorAll('.add-to-cart'));
     addToCartBtn.forEach((button) => {
         button.addEventListener('mouseover', function(event) {
        button.querySelector('span').style.textDecoration  = 'underline';
         button.querySelector('span').style.textDecorationColor = "#D9FF5A"  // Меняем цвет фона при наведении
        });
        button.addEventListener('click',function(clicked){
            console.log( button.querySelector('.card_button_in_cart_indicator'))
            if(!button.querySelector('.card_button_in_cart_indicator').classList.contains('add_to_cart')){
                button.querySelector('.card_button_in_cart_indicator').classList.add('add_to_cart');
                setTimeout(function() {
                button.querySelector('.card_button_in_cart_indicator').classList.remove('add_to_cart');
                }, 1000)
            }
            
            
        })

        button.addEventListener('mouseout', function(event) {
         button.querySelector('span').style.textDecoration  = 'none'; // Меняем цвет фона при наведении
        });
})
}
var yellowArray = [];
var greenArray = [];
var blueArray = [];
var pinkArray = [];
var lavandArray = [];
var navyblueArray = [];
//ЦИКЛ


const settingContainer = document.getElementById("settinincludearea");
const colorsArray = ["Зеленный", "Синий", "Оранжевый", "Розовый", "Лавандовый", "Голубой"];
//checkbox
var setingcontainerElem= document.createElement("div")
setingcontainerElem.innerHTML=`<div class="price_filter_container">
<h4 class="filter_container_h4">Цена</h4>
<form class="price_filter_container_form">
    <input type="number" class="price_input_style"> <input type="number" class="price_input_style">
    <input type="range">
</form>
</div>
<div class="colors_filter_container">
<h4 class="filter_container_h4">Цвета</h4>
<form id="checkboxform">
    
    
</form>
</div>`;
// function containsf(arr, elem) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] === elem) {
//             return true;
//         }
//     }
//     return false;
// }
var checkappendetting = true;
function settingappendButton(settingactive){

    //добавление настроек
    if(checkappendetting){
        
        settingContainer.append(setingcontainerElem)
        checkappendetting = false}
    else{
        
        checkappendetting = true;
        settingContainer.innerHTML="";
    }
}

var lastActivatedColorArray = [];
function filterOperation(checkbox){
    //при каждом нажатии стирается вложенные фильтры, проверяется условие на наличие галочки у чекбокса, те чекбоксы, которые с галач, будут отображены
    //contains(lastActivatedColorArray, checkbox.id) - проверка на вложенность именно у html элементов
    categoryArea.innerHTML=""
    
    if(checkbox.checked ==false){
        //console.log(lastActivatedColorArray)
            if(checkbox.id == "Зеленный"){
                lastActivatedColorArray = lastActivatedColorArray.filter((element) => element !== greenArray)
            }
            if(checkbox.id == "Синий"){
                lastActivatedColorArray = lastActivatedColorArray.filter((element) => element !== navyblueArray)
            }
            if(checkbox.id == "Оранжевый"){
                lastActivatedColorArray = lastActivatedColorArray.filter((element) => element !== yellowArray)
            }
            if(checkbox.id == "Розовый"){
                lastActivatedColorArray = lastActivatedColorArray.filter((element) => element !== pinkArray)
            }
            if(checkbox.id == "Лавандовый"){
                lastActivatedColorArray = lastActivatedColorArray.filter((element) => element !== lavandArray)
            }
            if(checkbox.id == "Голубой"){
                lastActivatedColorArray = lastActivatedColorArray.filter((element) => element !== blueArray)
            }
      
    }
   
    if(checkbox.checked ==true){
        //console.log("dhua")
        if(checkbox.id == "Зеленный"){
            lastActivatedColorArray.push(greenArray)
        }
        if(checkbox.id == "Синий"){
            lastActivatedColorArray.push(navyblueArray)
        }
        if(checkbox.id == "Оранжевый"){
            lastActivatedColorArray.push(yellowArray); 
        }
        if(checkbox.id == "Розовый"){
            lastActivatedColorArray.push(pinkArray)
        }
        if(checkbox.id == "Лавандовый"){
            lastActivatedColorArray.push(lavandArray)
        }
        if(checkbox.id == "Голубой"){
            lastActivatedColorArray.push(blueArray)
        }
    }
                            let nowcountelem = 0;
                            let dadas = 0;
                            
const productcardEmpty = lastProductActiveMasiive.map((product)=>{
    //если id продукта соответсвует, то вывод карточки, то есть сравн
    dadas++;
        lastActivatedColorArray.forEach((elem)=>{
            
            elem.forEach((el)=>{
                if(product.id == el){
           
                    //попробовать просто скрывать эдементы, через display none
                    if(nowcountelem <= 5){
                       
                        let cardproductcontainer = document.createElement("div");
                        cardproductcontainer.className="card_product_container";
                        cardproductcontainer.innerHTML=`<div style="background-color:${product.color};" class="color_card_section"></div>
                                    <img class="img_product_card" src=${product.photo} onclick="modalcartFunc('${categoryButtonActivateLast}', '${product.id}')">
                                    <h2 class="h2_in_product_card" onclick="modalcartFunc('${categoryButtonActivateLast}', '${product.id}')">${product.name}</h2>
                                    <span class="subtitle subtitle_in_product_card" onclick="modalcartFunc('${categoryButtonActivateLast}', '${product.id}')">${product.category}</span>
                                    <hr class="hr_in_product_card">
                                    <div class="card_price_in_category">
                                        <span class="numbers price">${formatNumberWithSpaces(product.price)}<span class="rubl rubl_up">₽</span></span>
                                        <img>
                                    </div>
                                    <button class="card_buy_button_in_category add-to-cart" onclick="addcart(this.id, this.value)" value="${categoryButtonActivateLast}" id="${product.id}">
                                       <img src="/assets/shopping-cart.svg">
                                       <div class="card_button_in_cart_indicator"></div>
                                       <span>Купить</span> 
                                    </button>
                                </div>`;
                        categoryArea.append(cardproductcontainer)
                    }
                }
            })
            
            
        })
    




})
        
}
var lasdwadaf;
var lastProductActiveMasiive;
function categoryButtonActivate(activebutton){
    var sdadedasdwwa =activebutton.parentNode;
    var edddsadawqsad=Array.from(document.querySelectorAll('.main_categories_card'))
    for(i in edddsadawqsad){
        if(edddsadawqsad[i]!=activebutton.parentNode)
        edddsadawqsad[i].classList.remove("suntActive");}

    if(sdadedasdwwa.classList.contains("suntActive")){
        sdadedasdwwa.classList.remove("suntActive");
        //console.log(sdadedasdwwa)
    }
    else{
        sdadedasdwwa.classList.add("suntActive");
        //console.log(sdadedasdwwa)
    }
    lasdwadaf = activebutton.id;
document.querySelector(".cards_product_container_cover").style.display="block";
yellowArray = [];
greenArray = [];
blueArray = [];
pinkArray = [];
lavandArray = [];
navyblueArray = [];
    categoryButtonActivateLast = activebutton.id;
    for(var key in Products){
       if(key == activebutton.id){
        if (lastActiveCards !== activebutton){
            if(!activedCards){
                if (lastActiveCardsArrow !=null){
                    lastActiveCardsArrow.src = "/assets/VectorArrow.svg";
                }
                
                    Products[key].map((product)=>{
                        if(product.color == '#FFC4A5' || product.color == '#FBE4CA' || product.color == '#F0DFB3' || product.color == '#FFD523'){
                            yellowArray.push(product.id)
                        }
                        if(product.color == '#88E379' || product.color == '#29D0D9' || product.color == '#4A5B40'){
                            greenArray.push(product.id)
                        }
                        if(product.color == '#89D5FF' || product.color == '#A5D4FF' || product.color == '#8ECDFA' || product.color == "#33C9F2"){
                            blueArray.push(product.id)
                        }
                        if(product.color == '#FA8EEF' || product.color == '#F0B3EA' || product.color == '#F0B5FA' || product.color == '#F18EFA' || product.color == '#F88EFA' || product.color == '#FF81C6'){
                            pinkArray.push(product.id)
                        }
                        if(product.color == '#CACFFB' || product.color == '#9381D8' || product.color == '#5C544A'){
                            lavandArray.push(product.id)
                        }
                        if(product.color == '#031D55'){
                            navyblueArray.push(product.id)
                        }
                    })
                    lastProductActiveMasiive= Products[key];
                   

                buttonmasive.forEach(function(item, i ,buttoncollection){
                    item.classList.remove("button_card_category_activate")})
                activebutton.classList.add("button_card_category_activate");
                var childimg = activebutton.querySelector("img");
                childimg.src="/assets/стрелкаae.svg"
                lastActiveCardsArrow = childimg;
                loadMoreState = 5;
                // activedCards = true;
                checkappendetting = true;
                categoryArea.innerHTML='';
                settingContainer.innerHTML="";

            
                const checkboxForm = setingcontainerElem.querySelector('[id=checkboxform]');
                let colorMassiveAr 
                
                //определение цвета
                checkboxForm.innerHTML=""
                colorsArray.forEach((color)=>{
                    if(color == "Зеленный"){
                        colorMassiveAr = greenArray; 
                    }
                    
                    if(color == "Синий"){
                        colorMassiveAr = navyblueArray; 
                    }
                    if(color == "Оранжевый"){
                        colorMassiveAr = yellowArray; 
                    }
                    if(color == "Розовый"){
                        colorMassiveAr = pinkArray; 
                    }
                    if(color == "Лавандовый"){
                        colorMassiveAr = lavandArray; 
                    }
                    if(color == "Голубой"){
                        colorMassiveAr = blueArray; 
                    }
                    //console.log(colorMassiveAr)
                    let colorcontainer = document.createElement("div")
                    colorcontainer.className= "colorcontainer";
                    colorcontainer.innerHTML = `<input class="checkboxColor" onchange="filterOperation(this)" type="checkbox" id="${color}"> <label for="${color}">${color}</label> <span>${colorMassiveAr.length}</span>`;
                   
                    checkboxForm.append(colorcontainer);
                    })
                    //обращение к чекбоксам с цветом
                    var checkboxPsevdoArray= Array.from(checkboxForm.querySelectorAll('.checkboxColor'));
                  
                    //вынести элементы за
                    //for(var i = 0; i < checkboxPsevdoArray.length; i++){
                       // checkboxPsevdoArray[i].onchange= function(){
                            // categoryArea.innerHTML=""
                            // if(this.id == "Зеленный"){
                            //     lastActivatedColorArray.push(greenArray)
                            // }
                            // if(this.id == "Синий"){
                            //     lastActivatedColorArray.push(navyblueArray)
                            // }
                            // if(this.id == "Оранжевый"){
                            //     lastActivatedColorArray.push(yellowArray); 
                            // }
                            // if(this.id == "Розовый"){
                            //     lastActivatedColorArray.push(pinkArray)
                            // }
                            // if(this.id == "Лавандовый"){
                            //     lastActivatedColorArray.push(lavandArray)
                            // }
                            // if(this.id == "Голубой"){
                            //     lastActivatedColorArray.push(blueArray)
                            // }
                            // let nowcountelem = 0;
                            // let dadas = 0;
                            // const productcardEmpty = Products[key].map((product)=>{
                            //     //если id продукта соответсвует, то вывод карточки, то есть сравн
                            //     dadas++;
                            //     //console.log(dadas)
                            //     lastActivatedColorArray.forEach((elem,index,arr)=>{
                                 
                            //         if(product.id == elem[0]){
                            //             nowcountelem++;
                            //             //попробовать просто скрывать эдементы, через display none
                            //             if(nowcountelem <= 5){
                            //                 //console.log(nowcountelem)
                            //                 let cardproductcontainer = document.createElement("div");
                            //                 cardproductcontainer.className="card_product_container";
                            //                 cardproductcontainer.innerHTML=`<div style="background-color:${product.color};" class="color_card_section"></div>
                            //                             <img class="img_product_card" src=${product.photo}>
                            //                             <h2 class="h2_in_product_card">${product.name}</h2>
                            //                             <span class="subtitle subtitle_in_product_card">${product.category}</span>
                            //                             <hr class="hr_in_product_card">
                            //                             <div class="card_price_in_category">
                            //                                 <span class="numbers price">${product.price}</span>
                            //                                 <img>
                            //                             </div>
                            //                             <button class="card_buy_button_in_category" onclick="addcart(this.id, this.value)" value="${Products[categoryButtonActivateLast]}""${Products[key]}" id="${product.id}">
                            //                                <img src="/assets/shopping-cart.svg">
                            //                                <span>Купить</span> 
                            //                             </button>
                            //                         </div>`;
                            //                 categoryArea.append(cardproductcontainer)
                            //             }
                            //         }
                            //     })
                            
                            
                            
                            
                            // })
                            
                       // }
                   // }
                    //верхний элемент с кнопкой фильтров и количеством позиций
                cardsProductContainerSettingContainer.innerHTML=`
                 <button class="cards_product_container_setting_container_left button_cansel_setting" onclick="settingappendButton(this)">
                        <img src="/assets/VectorLe.svg">
                        <span class="uppfontstyle">фильтры</span>
                    </button>
                    <p class="cards_product_container_setting_container_right uppfontstyle">
                        <span >${Products[key].length}</span>
                        позиций в категории
                    </p>`;
                // овальная кнопка загрузки
                oneRingedOrderButton.innerHTML = `<div class="ringed_order_button_in_first"></div>
                <div class="ringed_order_button_in_title ringed_order_button_in_title_one_circle">
                    <span>Загрузить еще</span> 
                    <img src="/assets/arrow-down.svg">
                    
                </div>`;
                
               let nowcountelem = 0;
                 const productcardEmpty = Products[key].map((product)=>{
                    nowcountelem++;
                    if(nowcountelem <= 5){
                        let cardproductcontainer = document.createElement("div");
                        cardproductcontainer.className="card_product_container";
                        cardproductcontainer.innerHTML=`<div style="background-color:${product.color};" class="color_card_section"></div>
                                    <img class="img_product_card" src=${product.photo} onclick="modalcartFunc('${key}', '${product.id}')">
                                    <h2 class="h2_in_product_card" onclick="modalcartFunc('${key}', '${product.id}')">${product.name}</h2>
                                    <span class="subtitle subtitle_in_product_card" onclick="modalcartFunc('${key}', '${product.id}')">${product.category}</span>
                                    <hr class="hr_in_product_card">
                                    <div class="card_price_in_category">
                                        <span class="numbers price"><div class='price_inDJsa'>${formatNumberWithSpaces(product.price)}</div><span class="rubl rubl_up">₽</span></span>
                                    </div>
                                    <button class="card_buy_button_in_category add-to-cart" onclick="addcart(this.id, this.value)" value="${key}" id="${product.id}">
                                       <img src="/assets/shopping-cart.svg">
                                       <div class="card_button_in_cart_indicator"></div>
                                       <span>Купить</span> 
                                    </button>
                                </div>`;
                        categoryArea.append(cardproductcontainer)
                    }
                 
                 })
                
                 lastActiveCards = activebutton;
                 
            }
               
        }
        else if (lastActiveCards == activebutton) {
            loadMoreState=5;
            categoryArea.innerHTML="";
            settingContainer.innerHTML="";
            loadMoreState = false
            cardsProductContainerSettingContainer.innerHTML="";
            oneRingedOrderButton.innerHTML="";
            buttonmasive.forEach(function(item, i ,buttoncollection){
                item.classList.remove("button_card_category_activate")})
                childimg = activebutton.querySelector("img");
                childimg.src="/assets/VectorArrow.svg"
            lastActiveCards = null;
            document.querySelector(".cards_product_container_cover").style.display="none";
        }
      
       }
       
    }//если что при рендеринге немного изменить id на id с препиской button
     var addToCartBtn = Array.from(document.querySelectorAll('.add-to-cart'));
     addToCartBtn.forEach((button) => {
         button.addEventListener('mouseover', function(event) {
        button.querySelector('span').style.textDecoration  = 'underline';
         button.querySelector('span').style.textDecorationColor = "#D9FF5A"  // Меняем цвет фона при наведении
        });
        button.addEventListener('click',function(clicked){
            console.log( button.querySelector('.card_button_in_cart_indicator'))
            if(!button.querySelector('.card_button_in_cart_indicator').classList.contains('add_to_cart')){
                button.querySelector('.card_button_in_cart_indicator').classList.add('add_to_cart');
                setTimeout(function() {
                button.querySelector('.card_button_in_cart_indicator').classList.remove('add_to_cart');
                }, 1000)
            }
            
            
        })

        button.addEventListener('mouseout', function(event) {
         button.querySelector('span').style.textDecoration  = 'none'; // Меняем цвет фона при наведении
        });
})
  
   
}

var ribbonF = document.getElementById("firstRibbon")
var ribbonS = document.getElementById("secondRibbon")
function getFontSizeAsNumber(element) {
    const fontSizeString = window.getComputedStyle(element).fontSize;
    // Если не пиксели, то ничего не делаем
    if (!fontSizeString.endsWith('px')) {
      return null;
    }
    // Удаляем 'px' и преобразуем в число
    return parseFloat(fontSizeString);
  }
function ribsize(){
    if(document.body.offsetWidth>1020){
        ribbonF.style.fontSize="2.083335vw"
        ribbonS.style.fontSize="2.083335vw"
    }
    if(document.body.offsetWidth<=1020 && document.body.offsetWidth>570){
        ribbonF.style.fontSize="3.19vw"
        ribbonS.style.fontSize="3.19vw"
    }
    if (document.body.offsetWidth<=670 && document.body.offsetWidth>410){
        ribbonF.style.fontSize="4.19vw"
        ribbonS.style.fontSize="4.19vw"
    } 
    if (document.body.offsetWidth<=410 && document.body.offsetWidth>300){
        ribbonF.style.fontSize="8.19vw"
        ribbonS.style.fontSize="8.19vw"
    }
    if (document.body.offsetWidth<=300){
        ribbonF.style.fontSize="10.19vw"
        ribbonS.style.fontSize="10.19vw"
    }
    //console.log((getFontSizeAsNumber(ribbonS) * 21))
    var ribbbonwidth = window.screen.width / (getFontSizeAsNumber(ribbonS) * 20);
    //console.log(ribbbonwidth)
    ribbonF.innerHTML= ` `;
    ribbonS.innerHTML= ` `;
    for (let i = 0; i <= ribbbonwidth + 3; i++){
        ribbonF.innerHTML += `<div>creating a great art</div>
                            <img src="/assets/Star 3.svg">`;
        ribbonS.innerHTML += `<div>creating a great art</div>
                            <img src="/assets/Star 3.svg">`;
    }
}

function scrollToelement(scrolling){
    document.getElementById(`${scrolling.value}`).scrollIntoView()
}
const scrollContainer = document.getElementById('scrollContainer');
let isDown = false;
let startX;
let scrollLeft;

scrollContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    scrollContainer.classList.add('grabbing');
    startX = e.pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
});

scrollContainer.addEventListener('mouseleave', () => {
    isDown = false;
    scrollContainer.classList.remove('grabbing');
});

scrollContainer.addEventListener('mouseup', () => {
    isDown = false;
    scrollContainer.classList.remove('grabbing');
});

scrollContainer.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 2; // Умножаем для более быстрого скролла
    scrollContainer.scrollLeft = scrollLeft - walk;
});
scrollContainer.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
});

scrollContainer.addEventListener('touchend', () => {
    isDown = false;
});

scrollContainer.addEventListener('touchmove', (e) => {
    if(!isDown) return;
    const x = e.touches[0].pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainer.scrollLeft = scrollLeft - walk;
});
var heroblock = document.querySelector('.main_composition');
var slernad = document.querySelector('.slider_main_composition');
var headerHs = document.querySelector('header');
console.log(headerHs)
function getElementBottom(element) {
    const rect = element.getBoundingClientRect();
    console.log(rect.bottom)
    return rect.bottom;
  }
  buttonRingAnim('.ringed_order_button')
function heroSize(){
    console.log('resized')
    console.log(`${heroblock.offsetHeight} start heroblock`)
if(document.body.offsetWidth<=900){
    var elemInMainHeight = document.querySelector('.first_slide').offsetHeight ;
    console.log(elemInMainHeight)
    var elemInMainHeightBottom = getElementBottom(document.getElementById('lampsslide'));
       if(elemInMainHeight != window.outerHeight) {
        console.log(elemInMainHeight, window.outerWidth * 0.45, `${elemInMainHeight + window.outerWidth * 0.45}`, window.outerHeight)
        if(elemInMainHeight + window.outerWidth * 0.45 >= window.outerHeight * 0.8 ) {
            var actInSlide = Array.from(document.querySelectorAll('.obs_acive_slide'));
            var lamsPhotos = Array.from(document.querySelectorAll('.lamp_photo'))
            console.log(lamsPhotos)
                for(var ie in actInSlide){
                    console.log(actInSlide)
                    actInSlide[ie].style.height = `${window.outerHeight - window.outerWidth * 0.45}px`;
                }
                for(var esda in lamsPhotos){
                    console.log(actInSlide)
                    lamsPhotos[esda].style.height = `57%`;
                    lamsPhotos[esda].style.top = `22%`;
                }
                heroblock.style.height = "100vh";
                console.log(`${heroblock.offsetHeight} if heroblock`)
                console.log(heroblock.offsetHeight - slernad.offsetHeight * 2)
                // slernad.style.top=`${elemInMainHeight - headerHs.offsetHeight  - slernad.offsetHeight}px`
            
                slernad.style.top=`${heroblock.offsetHeight - slernad.offsetHeight * 2}px`
           }
        else{ 
            var lamsPhotos = Array.from(document.querySelectorAll('.lamp_photo'))
            for(var esda in lamsPhotos){
                console.log(actInSlide)
                lamsPhotos[esda].style.height = `65%`;
                lamsPhotos[esda].style.top = `22%`;
            }
            heroblock.style.height= `${elemInMainHeight + window.outerWidth * 0.45}px`; 
            console.log(`${heroblock.offsetHeight} else heroblock`)
            console.log(elemInMainHeight)
            slernad.style.top=`${(elemInMainHeight + (window.outerWidth * 0.45)) - headerHs.offsetHeight  - slernad.offsetHeight -  headerHs.offsetHeight/2.1 }px`
        }
       }

    
    // else if(Math.trunc(document.body.offsetWidth / 100) == Math.trunc(window.outerHeight / 100)){
    //     heroblock.style.height=`${heightDef}vh`
    //     console.log(1)
    // }
    // else if(document.body.offsetWidth>window.outerHeight){ 
    //     var sizeH = window.outerHeight;
    //     var sizeW = window.outerWidth;
    //     var sizeinCo = sizeW - sizeH;
    //     heroblock.style.height=`${heightDef - Math.trunc(sizeinCo / 100)}vh`;
    //     console.log(2)
    // }
    // else if(document.body.offsetWidth<window.outerHeight){
    //     var sizeHe = window.outerHeight;
    //     var sizeWe = window.outerWidth;
    //     var sizeinCoe = sizeWe - sizeHe;
    //     heroblock.style.height=`${heightDef - Math.trunc(sizeinCoe / 100)}vh`;
    //     console.log(3)
    // }
}
}
   var rotateAprove = true;
function buttonRingAnim(animEl){
    console.log(animEl)
    var allButtonsRinged = Array.from(document.querySelectorAll(animEl));
    allButtonsRinged.forEach((ringButton) => {
       
        ringButton.addEventListener('click',function(clicked){
            rotateAprove = false;
            if(!ringButton.classList.contains('one_ringed_order_button')){
                if(!ringButton.querySelector('.ringed_order_button_in_second').classList.contains('ringedButton_Second_variant')){
                    ringButton.querySelector('.ringed_order_button_in_second').classList.add('ringedButton_Second_variant');
                    console.log(rotateAprove)
                    
                setTimeout(function() {
                    ringButton.querySelector('.ringed_order_button_in_second').classList.remove('ringedButton_Second_variant');
                    console.log(rotateAprove)
                    rotateAprove = true;
                     ringButton.querySelector('.ringed_order_button_in_first').style.transform = 'rotate(-13deg)';
                }, 1000)
            }
            
    }
        })
  ringButton.addEventListener('mouseover', function(event) {
            if(!ringButton.classList.contains('one_ringed_order_button')){
                 ringButton.querySelector('.ringed_order_button_in_first').style.transform = 'rotate(0deg)';
            }
        ringButton.querySelector('span').style.textDecoration = 'underline';
        ringButton.querySelector('span').style.textDecorationColor = '#D9FF5A';

        });
        ringButton.addEventListener('mouseout', function(event) {
            if(!ringButton.classList.contains('one_ringed_order_button')){
                if(rotateAprove){
                    console.log(rotateAprove)
                     ringButton.querySelector('.ringed_order_button_in_first').style.transform = 'rotate(-13deg)';
                }
            }
           ringButton.querySelector('span').style.textDecoration = 'none';
        });
   
    
})
}
window.addEventListener('load', (e) => {
    ribsize()
    heroSize()
    
  });
window.addEventListener('resize', (e) => {
    ribsize()
    heroSize()
    // if(document.body.offsetWidth<= 900){
    //     colorPut(slideFirst);
    //     colorPut(slideSecond);
    //     colorPut(slideThird);
    // }
  });