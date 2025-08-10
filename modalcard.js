function modalcartFunc(categorymodal, idmodal){
    var modalcard = document.getElementById('cardmodal');
    modalcard.showModal()
    var novmodalcard;
    for(var elems in Products[categorymodal]){
        if(Products[categorymodal][elems].id == idmodal){
            
            novmodalcard = Products[categorymodal][elems]
        }
    }  
function imnWidrtasdh(textEld){
    if(document.body.offsetWidth>900){
        return textEld
    }
    else {
        return ""
    }
}
    //console.log(novmodalcard)
    modalcard.innerHTML =`
    <div class="product_modal_container_in">
                    <img class="lamp_photo modal_lamp_photo" src="${novmodalcard.photo}">
                    <button class="product_modal_in_close button_cansel_setting" value="cardmodal" onclick="closedialog(this)">закрыть <img src="/assets/x.svg"></button>
                    <div class="art_area">Арт. ${novmodalcard.id}</div>
                    <button class="like_it_button like_it_button_disactive button_cansel_setting" id="${novmodalcard.id}favor"onclick="addFavoriteArray('${novmodalcard.name}','${novmodalcard.id}', '${novmodalcard.photo}', '${novmodalcard.price}', '${novmodalcard.category}', '${novmodalcard.color}')"></button>
                    <div class="color_modal_in_area">${imnWidrtasdh("Цвет:")} <div class="color_sec_in_modal" style="background-color: ${novmodalcard.color};"></div><span>Лаванадла</span></div>
                    <div class="height_modal_in_area">Высота:
                    ${novmodalcard.height}СМ</div>
                    <span class="title_decoration_modal">${novmodalcard.fabricator}</span>
                    <span class="modal_in_description_area">${novmodalcard.text}</span>
                    <h2 class="name_price_container_modal_in">${novmodalcard.name}</h2>
                    <span class="numbers">
                    ${formatNumberWithSpaces(novmodalcard.price)}<span class="rubl rubl_up">₽</span>
                    </span>
                    <button class="button_cansel_setting ringed_order_button_inmodal" onclick="addcart('${idmodal}', '${categorymodal}')">
                        <div class="ringed_order_button_in_first"></div>
                        <div class="ringed_order_button_in_second"></div>
                        <div class="ringed_order_button_in_title">  
                            <img src="/assets/shopping-cart.svg">
                            <span>Купить</span> 
                        </div>
                    </button>
                </div>
    `;
    buttonRingAnim('.ringed_order_button_inmodal')
    var modalInTiel = modalcard.querySelector('.title_decoration_modal')
    modalInTiel.style.fontSize=`${modalInTiel.parentNode.offsetWidth /5.1}px`
    if(containsf(favoriteArray, novmodalcard)){
        
        modalcard.querySelector(".like_it_button").innerHTML = `<img src="/assets/heartba.svg">`;
         modalcard.querySelector(".like_it_button").classList.remove('like_it_button_disactive');
         modalcard.querySelector(".like_it_button").classList.add('like_it_button_active');

  
    }
    else{
        modalcard.querySelector(".like_it_button").innerHTML = `<img src="/assets/heartb.svg">`;
        modalcard.querySelector(".like_it_button").classList.remove('like_it_button_active');
        modalcard.querySelector(".like_it_button").classList.add('like_it_button_disactive');
        }
    // //console.log(document.getElementsByClassName("like_it_button"))
    // if(document.querySelector("like_it_button").classList.contains("like_it_button_disactive")){
    //     document.querySelector("like_it_button").innerHTML = `<img src="/assets/heartb.svg">`
    // }
    // else if(document.querySelector("like_it_button").classList.contains("like_it_button_active")){
    //     document.querySelector("like_it_button").innerHTML = `<img src="/assets/heartba.svg">`
    // }
    // let modalcardcontainer = document.createElement("div");
    // modalcardcontainer.className="product_modal_container_in";
    // modalcardcontainer.innerHTML=`<div style="background-color:${product.color};" class="color_card_section"></div>
    //             <img class="img_product_card" src=${product.photo} onclick="modalcartFunc(${categoryButtonActivateLast}, ${product.id})">
    //             <h2 class="h2_in_product_card" onclick="modalcartFunc(${categoryButtonActivateLast}, ${product.id})">${product.name}</h2>
    //             <span class="subtitle subtitle_in_product_card" onclick="modalcartFunc(${categoryButtonActivateLast}, ${product.id})">${product.category}</span>
    //             <hr class="hr_in_product_card">
    //             <div class="card_price_in_category">
    //                 <span class="numbers price">${product.price}</span>
    //                 <img>
    //             </div>
    //             <button class="card_buy_button_in_category" onclick="addcart(this.id, this.value)" value="${categoryButtonActivateLast}" id="${product.id}">
    //                <img src="/assets/shopping-cart.svg">
    //                <span>Купить</span> 
    //             </button>
    //         </div>`;
    // categoryArea.append(modalcard)
}