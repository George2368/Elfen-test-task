var searchareain = document.getElementById('searcharea');
const searchResultContainer = document.querySelector('.search_result_container');
function opensearchFunc(search){
    for(var dial in allDialogs){
        if(allDialogs[dial].id != search.value){
            allDialogs[dial].close()
        }
    }
    opensearch = true;
    searchpage.showModal()
   
    

}
function closesearchevre(){
    searchpage.close()
}

searchareain.onkeyup = function(event){
    searchResultContainer.innerHTML="";
    var foundedelem = event.target.value.trim();
    var regexp = new RegExp(`${foundedelem}`, "gi");
   
   if(foundedelem!=""){
    
    for(key in Products){
        var findersddsadadaad= Products[key].filter((eventsearch, index ,array)=>{ 
            if(regexp.test(eventsearch.name.trim())){
              return eventsearch
            }
          })
          for(i in findersddsadadaad){
            let cardproductcontainersearch = document.createElement("div");
            cardproductcontainersearch.className="card_product_container";
            cardproductcontainersearch.innerHTML=`<div style="background-color:${findersddsadadaad[i].color};" class="color_card_section"></div>
                        <img class="img_product_card" src=${findersddsadadaad[i].photo} onclick="modalcartFunc('${key}', '${findersddsadadaad[i].id}')">
                        <h2 class="h2_in_product_card" onclick="modalcartFunc('${key}', '${findersddsadadaad[i].id}')">${findersddsadadaad[i].name}</h2>
                        <span class="subtitle subtitle_in_product_card" onclick="modalcartFunc('${key}', '${findersddsadadaad[i].id}')">${findersddsadadaad[i].category}</span>
                        <hr class="hr_in_product_card">
                        <div class="card_price_in_category">
                            <span class="numbers price">${formatNumberWithSpaces(findersddsadadaad[i].price)}<span class="rubl rubl_up">₽</span></span>
                            <img>
                        </div>
                        <button class="card_buy_button_in_category add-to-cart" onclick="addcart(this.id, this.value)" value="${key}" id="${findersddsadadaad[i].id}">
                           <img src="/assets/shopping-cart.svg">
                           <div class="card_button_in_cart_indicator"></div>
                           <span>Купить</span> 
                        </button>
                    </div>`;
            searchResultContainer.append(cardproductcontainersearch)
           }
    }

   }
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
    // //console.log(findersddsadadaad)
    // //console.log(foundedelem)
}
// searchareain.oninput= function(event){
//         //console.log(Products.Mirrors.find((eventsearch, index ,array)=>{ 
//             const foundedelem = event.target.value;
//             regexp = new RegExp(`${foundedelem}`, "i");
//             return eventsearch.name.search(foundedelem)}))
//     }
