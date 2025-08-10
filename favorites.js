var favoriteArray = [];
var openfavorit = false;
function openfavoritesmodal(favorite){
    closesearchevre()
    for(var dial in allDialogs){
        if(allDialogs[dial].id != favorite.value){
            allDialogs[dial].close()
        }
    }
    openfavorit = true;
    if(document.body.offsetWidth<=900){
        favoritetocartpage.showModal()
    }
    else{favoritetocartpage.show()}
    var favoritecarcont = document.querySelector('.favorite_cart_container');
    favoritecarcont.innerHTML=""
    for (var i in favoriteArray){
        let favoritecard = document.createElement("div");
        favoritecard.className="favorite_card";
        favoritecard.innerHTML=`
        <img class="card_cart_img" src=${favoriteArray[i].photo}>
                <div class="favor_cart_card_right">
                    <div class="favor_cart_card_name">
                         <div class="shoping_cart_card_name_area">
                            <div style="background-color:${favoriteArray[i].color};" class="color_card_sections"></div>
                            <span>${favoriteArray[i].name}</span>
                         </div>
                         <div class="shoping_cart_card_object_name">
                         ${favoriteArray[i].category}
                         </div>
                    </div>
                    <button class="favor_trashcan like_it_button like_it_button_active button_cansel_setting" id="${favoriteArray[i].id}favor" onclick="addFavoriteArray('${favoriteArray[i].name}','${favoriteArray[i].id}', '${favoriteArray[i].photo}', '${favoriteArray[i].price}', '${favoriteArray[i].category}')"><img src="/assets/heartba.svg"></button>
                    <hr class="favor_shoping_cart_card_hr">
                    <div class="fshoping_cart_card_total_price price_class">${formatNumberWithSpaces(favoriteArray[i].price)}<span class="rubl rubl_up">₽</span></div>
                    
                </div>`;
           
            favoritecarcont.append(favoritecard)
    }
    

}
function containsf(arr, elem) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].id === elem.id) {
            return true;
        }
    }
    return false; 
}
function addFavoriteArray(name, id, photo, price, category, color){
  const Favorelem={
    name:name,
    id:id,
    photo:photo,
    price:price,
    category:category,
    color:color,
  }
 
  if(containsf(favoriteArray, Favorelem)){
    for(var elems in favoriteArray){
        if(favoriteArray[elems].id == Favorelem.id){
            favoriteArray.splice(favoriteArray.indexOf(favoriteArray[elems]), 1);
        }
    }
    document.getElementById(`${Favorelem.id}favor`).classList.remove('like_it_button_active')
    document.getElementById(`${Favorelem.id}favor`).classList.add('like_it_button_disactive')
    document.getElementById(`${Favorelem.id}favor`).innerHTML = `<img src="/assets/heartb.svg">`;
    if(openfavorit){
        var favoritecarcont = document.querySelector('.favorite_cart_container');
        favoritecarcont.innerHTML=""
        for (var i in favoriteArray){
            let favoritecard = document.createElement("div");
            favoritecard.className="favorite_card";
            favoritecard.innerHTML=`
            <img class="card_cart_img" src=${favoriteArray[i].photo}>
                    <div class="favor_cart_card_right">
                        <div class="favor_cart_card_name">
                             <div class="shoping_cart_card_name_area">
                                <div style="background-color:${favoriteArray[i].color};" class="color_card_sections"></div>
                                <span>${favoriteArray[i].name}</span>
                             </div>
                             <div class="shoping_cart_card_object_name">
                             ${favoriteArray[i].category}
                             </div>
                        </div>
                        <button class="favor_trashcan like_it_button like_it_button_active button_cansel_setting" id="${favoriteArray[i].id}favor" onclick="addFavoriteArray('${favoriteArray[i].name}','${favoriteArray[i].id}', '${favoriteArray[i].photo}', '${favoriteArray[i].price}', '${favoriteArray[i].category}')"><img src="/assets/heartba.svg"></button>
                        <hr class="favor_shoping_cart_card_hr">
                        <div class="fshoping_cart_card_total_price price_class">${formatNumberWithSpaces(favoriteArray[i].price)}<span class="rubl rubl_up">₽</span></div>
                        
                    </div>`;
               
                favoritecarcont.append(favoritecard)
     }
    }
  }
  else{
    favoriteArray.push(Favorelem);
    document.getElementById(`${Favorelem.id}favor`).classList.remove('like_it_button_disactive');
    document.getElementById(`${Favorelem.id}favor`).classList.add('like_it_button_active');
    document.getElementById(`${Favorelem.id}favor`).innerHTML = `<img src="/assets/heartba.svg">`;
    if(openfavorit){
        var favoritecarcont = document.querySelector('.favorite_cart_container');
        favoritecarcont.innerHTML=""
        for (var i in favoriteArray){
            let favoritecard = document.createElement("div");
            favoritecard.className="favorite_card";
            favoritecard.innerHTML=`
            <img class="card_cart_img" src=${favoriteArray[i].photo}>
                    <div class="favor_cart_card_right">
                        <div class="favor_cart_card_name">
                             <div class="shoping_cart_card_name_area">
                                <div style="background-color:${favoriteArray[i].color};" class="color_card_sections"></div>
                                <span>${favoriteArray[i].name}</span>
                             </div>
                             <div class="shoping_cart_card_object_name">
                             ${favoriteArray[i].category}
                             </div>
                        </div>
                        <button class="favor_trashcan like_it_button like_it_button_active button_cansel_setting" id="${favoriteArray[i].id}favor" onclick="addFavoriteArray('${favoriteArray[i].name}','${favoriteArray[i].id}', '${favoriteArray[i].photo}', '${favoriteArray[i].price}', '${favoriteArray[i].category}')"><img src="/assets/heartba.svg"></button>
                        <hr class="favor_shoping_cart_card_hr">
                        <div class="fshoping_cart_card_total_price price_class">${formatNumberWithSpaces(favoriteArray[i].price)}<span class="rubl rubl_up">₽</span></div>
                        
                    </div>`;
               
                favoritecarcont.append(favoritecard)
     }
    }
  }

}

