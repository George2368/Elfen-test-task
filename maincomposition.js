var firstslide = document.querySelector(".first_slide");
var second_slide =document.querySelector(".second_slide");
var third_slide =document.querySelector(".third_slide");
var activeslidenow = firstslide;
var slideArr= [firstslide, second_slide, third_slide]
var firstActived = true;
function toggleslide(slide){

    slide.addEventListener("click", function(){
        //if(activeslidenow==undefined && slide==firstslide){}
        if(activeslidenow != slide && document.body.offsetWidth>900 ){
            if(slide.classList.contains('disable_slide')){
                var chilslide = slide.querySelector('.disable_slide_card')
                chilslide.classList.remove('disable_slide_card');
                chilslide.classList.add('active_slide_card');
                slide.classList.remove('disable_slide');
                slide.classList.add('active_slide');
                activeslidenow= slide;
                for(var noelem in slideArr){
                    if(slideArr[noelem] != slide){
                       
                        if(slideArr[noelem].classList.contains('active_slide')){
                            var chilslider = slideArr[noelem].querySelector('.active_slide_card')
                            chilslider.classList.remove('active_slide_card');
                            chilslider.classList.add('disable_slide_card');
                            slideArr[noelem].classList.remove('active_slide');
                            slideArr[noelem].classList.add('disable_slide');
                            
                          
                        }
                    }
                }
            }
            else if(slide.classList.contains('active_slide') && document.body.offsetWidth>900){
                var chilslide = slide.querySelector('.active_slide_card')
                chilslide.classList.remove('active_slide_card');
                chilslide.classList.add('disable_slide_card');
                slide.classList.remove('active_slide');
                slide.classList.add('disable_slide');
                
              
            }
            if(slideArr[0].classList.contains("disable_slide")&& document.body.offsetWidth>900) {
                Products.Lamps.map((product)=>{
                    if(product.isTopProduct){
                        if(slideArr[0].classList.contains("disable_slide")){
                            slideArr[0].style.backgroundColor = product.color;
                        };
                    }
                })
            };
            if(slideArr[0].classList.contains("active_slide")&& document.body.offsetWidth>900){
                Products.Lamps.map((product)=>{
                    if(product.isTopProduct){
                        if(slideArr[0].classList.contains("active_slide")){
                            slideArr[0].style.backgroundColor = 'rgba(255, 255, 255, 0)';
                        };
                    }
                })
            };
        }
        titlesize(titleSIZED, 5.1)
        
    })
}
toggleslide(firstslide);
toggleslide(second_slide); 
toggleslide(third_slide);
var changedSizeWas;


window.addEventListener('resize', (e) => {
    if(document.body.offsetWidth>900){
        toggleslide(firstslide);
        toggleslide(second_slide); 
        toggleslide(third_slide);
    }
    if(document.body.offsetWidth<=900){
        changedSizeWas= true;
        console.log(changedSizeWas)
        for(var noeleme in slideArr){
            if(slideArr[noeleme].classList.contains("disable_slide")){
                var chilslider = slideArr[noeleme].querySelector('.disable_slide_card')
                    //console.log(chilslider)
                    chilslider.classList.remove('disable_slide_card');
                    chilslider.classList.add('active_slide_card');
                    slideArr[noeleme].classList.remove('disable_slide');
                    slideArr[noeleme].classList.add('active_slide');
            }
                
        }
    }
    if(document.body.offsetWidth>900 && changedSizeWas){
        location.reload()
        changedSizeWas= false;
        for(var noeleme in slideArr){
            console.log(slideArr)
            if(slideArr[noeleme]!=firstslide)
          //console.log(slideArr[noeleme])
          console.log(slideArr[noeleme])
                    var chilsliderw = slideArr[noeleme].querySelector('.active_slide_card')
                    console.log(chilsliderw)
                    chilsliderw.classList.remove('active_slide_card');
                    chilsliderw.classList.add('disable_slide_card');
                    slideArr[noeleme].classList.remove('active_slide');
                    slideArr[noeleme].classList.add('disable_slide');
        }
    }

  });
  window.addEventListener('load', (e) => {
    if(document.body.offsetWidth<=900){
        changedSizeWas= true;
        for(var noeleme in slideArr){
            if(slideArr[noeleme].classList.contains("disable_slide")){
                var chilslider = slideArr[noeleme].querySelector('.disable_slide_card')
                    //console.log(chilslider)
                    chilslider.classList.remove('disable_slide_card');
                    chilslider.classList.add('active_slide_card');
                    slideArr[noeleme].classList.remove('disable_slide');
                    slideArr[noeleme].classList.add('active_slide');
            }
                
        }
    }
  });
  const maincomp = document.querySelector('.main_composition')
  const slidesMain = Array.from(document.querySelectorAll('.slide_observe'))
  const buttoninslider =document.getElementById('buttoninslider');
  const scrollArea = document.getElementById('scrollContainery');
//   maincomp.addEventListener('scroll', function() {
//         maincomp.scrollTop
       
//       });
  const callback = (entries, observer) => {
    entries.forEach((entry) => {if(document.body.offsetWidth<=900){
        if (entry.isIntersecting) {
            if(entry.target.classList.contains('first_slide')){
                entry.target.style.visibility= 'visible';
                for(dsai in slidesMain){
                    //console.log(slidesMain[dsai])
                    if(slidesMain[dsai]!= entry.target && slidesMain[dsai]!= document.getElementById('tocatalog' )){
                        slidesMain[dsai].style.visibility="hidden"
                        
                    }
                }
                Products.Lamps.map((product)=>{
                    if(product.isTopProduct){
                    document.body.style.backgroundColor=`#AE97E8`   
                    }})
                    
                    buttoninslider.innerHTML=`01`;
                    // maincomp.addEventListener('scroll', function() {
                    //     maincomp.scrollBy({
                    //         bottom: 100,
                    //         left: 0,
                    //         behavior: 'smooth'
                    //       });
                       
                    //   });
            }
            if(entry.target.classList.contains('second_slide')){
                entry.target.style.visibility= 'visible';
                for(dsai in slidesMain){
                    if(slidesMain[dsai]!= entry.target && slidesMain[dsai]!= document.getElementById('tocatalog' )){
                        slidesMain[dsai].style.visibility="hidden"
                    }
                }
                Products.Chears.map((product)=>{
                    if(product.isTopProduct){
                    document.body.style.backgroundColor=`${product.color}`   
                    }})
                    buttoninslider.innerHTML=`02`
                    maincomp.style.scrollSnapType= 'y mandatory'
                    // maincomp.addEventListener('scroll', function() {
                    //     maincomp.scrollBy({
                    //         top: 100,
                    //         left: 0,
                    //         behavior: 'smooth'
                    //       });
                      
                    //   });
                    
            }
            if(entry.target.classList.contains('third_slide')){
                for(dsai in slidesMain){
                    if(slidesMain[dsai]!= entry.target && slidesMain[dsai]!= document.getElementById('tocatalog' )){
                        slidesMain[dsai].style.visibility="hidden"
                    }
                }
                entry.target.style.visibility= 'visible';
                Products.Tables.map((product)=>{
                    if(product.isTopProduct){
                    document.body.style.backgroundColor=`${product.color}`   
                    }})
                    buttoninslider.innerHTML=`03`;
                    scrollArea.addEventListener('wheel', function(e) {
                              // Проверяем, можем ли прокрутить элемент дальше
                              const canScrollUp = this.scrollTop > 0;
                              const canScrollDown = this.scrollTop < this.scrollHeight - this.clientHeight;
                              
                              // Если пытаемся скроллить вниз, но элемент уже внизу
                              if (e.deltaY > 0 && !canScrollDown) {
                                  document.getElementById('tocatalog').scrollIntoView(true);
                              } 
                              // Если пытаемся скроллить вверх, но элемент уже вверху
                            //   else if (e.deltaY < 0 && !canScrollUp) {
                            //       e.preventDefault();
                            //       window.scrollBy(0, e.deltaY);
                            //   }
                        })
                        scrollArea.addEventListener('touchstart', function(e) {
                            startY = e.touches[0].clientY;
                            isScrolling = true;
                        }, { passive: true });
                        
                        scrollArea.addEventListener('touchmove', function(e) {
                          
                            if (!isScrolling) return;
                           
                            const y = e.touches[0].clientY;
                            const deltaYd = startY - y;
                            const canScrollDowny = this.scrollTop < this.scrollHeight - this.clientHeight;
                            
                            // Если пытаемся скроллить вниз, но элемент уже внизу
                            if (deltaYd > 0 && !canScrollDowny) {
                                document.getElementById('tocatalog').scrollIntoView(true);
                            } 
                            // Если пытаемся скроллить вверх, но элемент уже вверху
                            
    
                        }, { passive: false });
                    // maincomp.style.scrollSnapType= 'y proximity'
                    // maincomp.addEventListener('scroll', function() {
                    //     maincomp.scrollBy({
                    //         bottom: 100,
                    //         left: 0,
                    //         behavior: 'smooth'
                    //       });
                       
                    //   });
                          
                    // maincomp.addEventListener('wheel', function(event) {
                    //     // Останавливаем поведение по умолчанию,
                    //     // то есть прокрутку
                    //     event.preventDefault()
                    //   })
            }
           if(entry.target.classList.contains('main_categories')){
            document.body.style.backgroundColor=`#AE97E8`
           }
          }     
    }
   
    })
  }
  const options = {
    // root: по умолчанию window,
    // но можно задать любой элемент-контейнер
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.5,
  }
  
  const observer = new IntersectionObserver(callback, options)
  
  slidesMain.forEach((slide) => {observer.observe(slide)
})
// const scrollArea = document.getElementById('scrollContainery');
//   let startY = 0;
//   let isScrolling = false;
  
//   // Для колесика мыши
//   scrollArea.addEventListener('wheel', function(e) {
//       // Проверяем, можем ли прокрутить элемент дальше
//       const canScrollUp = this.scrollTop > 0;
//       const canScrollDown = this.scrollTop < this.scrollHeight - this.clientHeight;
      
//       // Если пытаемся скроллить вниз, но элемент уже внизу
//       if (e.deltaY > 0 && !canScrollDown) {
//           e.preventDefault();
//           window.scrollBy(0, e.deltaY);
//       } 
//       // Если пытаемся скроллить вверх, но элемент уже вверху
//       else if (e.deltaY < 0 && !canScrollUp) {
//           e.preventDefault();
//           window.scrollBy(0, e.deltaY);
//       }
//       // В остальных случаях - обычный скролл элемента
//   }, { passive: false });
  
//   // Для тач-устройств

  
//   scrollArea.addEventListener('touchend', function() {
//       isScrolling = false;
//   }, { passive: true });