

const map = document.getElementById("mapPage");
function showMap(mapId){
    map.showModal()
}
function navButonsResize(){
     if(document.body.offsetWidth < 1500 && document.body.offsetWidth > 1100){
        var navResized =  document.querySelector(".disable_slide").offsetWidth;
        var navResizedCount = navResized / 1.8;
        document.querySelector(".user_manipulation_container").style.width=`${navResizedCount}px`;
        document.querySelector(".makeOrderPage .user_manipulation_container").style.width=`${navResizedCount}px`
        document.querySelector(".search_section .user_manipulation_container").style.width=`${navResizedCount}px`
        document.querySelector('.header_d_on_slides_component').style.width = '35%';
     }
    else if(document.body.offsetWidth > 1100){
        var navResized =  document.querySelector(".disable_slide").offsetWidth;
        var navResizedCount = navResized / 2.57575757;
        document.querySelector(".user_manipulation_container").style.width=`${navResizedCount}px`;
        document.querySelector(".makeOrderPage .user_manipulation_container").style.width=`${navResizedCount}px`
        document.querySelector(".search_section .user_manipulation_container").style.width=`${navResizedCount}px`
    }
  
}
var h2News= Array.from(document.querySelectorAll('.h2news_leftPart_header'))
var titleSIZED = Array.from(document.querySelectorAll('.title_decoration'));
function titlesize(chanedwasda, sizecount){
    for(i in chanedwasda){
    var parentTitle= chanedwasda[i].parentNode.offsetWidth;
    var titleSIZEDsize = parentTitle / sizecount;
    //console.log(chanedwasda[i])
    //console.log(chanedwasda[i].style.fontSize)
    chanedwasda[i].style.fontSize=`${titleSIZEDsize}px`
    }
}
window.addEventListener('load', (e)=>{
    titlesize(titleSIZED, 5.1)
    titlesize(h2News, 9.821)
});
window.addEventListener('resize', (e) => {
    //console.log('res')
    navButonsResize()
    titlesize(titleSIZED, 5.1)
    titlesize(h2News, 9.821)
   
  });

//   const scrollContainey = document.getElementById('scrollContainery');
//   const items = document.querySelectorAll('.slide_observe');
//   let isDowny = false;
//   let startY;
//   let scrollTop;
//   let startTime;
//   let velocity = 0;
//   const friction = 0.95;
//   let lastY;
//   let animationId;

// //   function snapToNearest() {
// //     const container = scrollContainey;
// //     const containerRect = container.getBoundingClientRect();
// //     const containerTop = containerRect.top;
// //     const containerHeight = containerRect.height;
    
// //     // Находим первый элемент, чья верхняя граница видна хотя бы на 30%
// //     let targetItem = null;
// //     let minDistance = Infinity;
    
// //     items.forEach(item => {
// //         const itemRect = item.getBoundingClientRect();
// //         const itemTop = itemRect.top;
// //         const itemBottom = itemRect.bottom;
        
// //         // Проверяем, насколько элемент виден в контейнере
// //         const visibleHeight = Math.min(itemBottom, containerTop + containerHeight) - 
// //                             Math.max(itemTop, containerTop);
// //         const visibleRatio = visibleHeight / containerHeight;
        
// //         // Если видно больше 30%, считаем его кандидатом
// //         if (visibleRatio > 0.3) {
// //             const distance = Math.abs(itemTop - containerTop);
// //             if (distance < minDistance) {
// //                 minDistance = distance;
// //                 targetItem = item;
// //             }
// //         }
// //     });
    
// //     // Если не нашли подходящий элемент (крайние случаи), берём первый или последний
// //     if (!targetItem) {
// //         const firstItem = items[0];
// //         const firstItemTop = firstItem.getBoundingClientRect().top;
        
// //         if (firstItemTop >= containerTop) {
// //             targetItem = firstItem;
// //         } else {
// //             targetItem = items[items.length - 1];
// //         }
// //     }
    
// //     if (targetItem) {
// //         const targetPosition = targetItem.offsetTop;
// //         smoothScrollTo(targetPosition, 500);
// //     }

// // //console.log('Target item:', targetItem, 'Position:', targetItem.offsetTop);
// // }
// function snapToNearest() {
//     const containerRect = scrollContainer.getBoundingClientRect();
//     const containerCenter = containerRect.top + containerRect.height / 2;
    
//     let closestItem = null;
//     let minDistance = Infinity;
    
//     items.forEach(item => {
//         const itemRect = item.getBoundingClientRect();
//         const itemCenter = itemRect.top + itemRect.height / 2;
//         const distance = Math.abs(itemCenter - containerCenter);
        
//         if (distance < minDistance) {
//             minDistance = distance;
//             closestItem = item;
//         }
//     });
    
//     if (closestItem) {
//         const targetPosition = closestItem.offsetTop;
//         smoothScrollTo(targetPosition, 500);
//     }
    
// }
//   function smoothScrollTo(targetPosition, duration) {
//       const startPosition = scrollContainey.scrollTop;
//       const distance = targetPosition - startPosition;
//       const startTime = performance.now();
      
//       function step(currentTime) {
//           const elapsed = currentTime - startTime;
//           const progress = Math.min(elapsed / duration, 1);
//           const ease = easeInOutQuad(progress);
//           scrollContainey.scrollTop = startPosition + distance * ease;
          
//           if (progress < 1) {
//               animationId = requestAnimationFrame(step);
//           }
//       }
      
//       cancelAnimationFrame(animationId);
//       animationId = requestAnimationFrame(step);
//   }

//   function easeInOutQuad(t) {
//       return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
//   }

//   scrollContainey.addEventListener('mousedown', (e) => {
//       isDowny = true;
//       scrollContainey.classList.add('grabbing');
//       startY = e.pageY;
//       scrollTop = scrollContainey.scrollTop;
//       startTime = performance.now();
//       lastY = startY;
//       cancelAnimationFrame(animationId);
//   });

//   scrollContainey.addEventListener('mouseleave', () => {
//       if (isDowny) {
//           isDowny = false;
//           scrollContainey.classList.remove('grabbing');
//           snapToNearest();
//       }
//   });

//   scrollContainey.addEventListener('mouseup', (e) => {
//       if (isDowny) {
//           isDowny = false;
//           scrollContainey.classList.remove('grabbing');
          
//           const endTime = performance.now();
//           const elapsed = endTime - startTime;
          
//           if (elapsed < 100) {
//               // Быстрый свайп - учитываем скорость
//               const endY = e.pageY;
//               velocity = (endY - lastY) / elapsed * 100;
//               inertialScroll();
//           } else {
//               // Медленное перемещение - просто фиксируем на ближайшем элементе
//               snapToNearest();
//           }
//       }
//   });

//   scrollContainey.addEventListener('mousemove', (e) => {
//       if(!isDowny) return;
//       e.preventDefault();
//       const y = e.pageY;
//       const walky = y - startY;
//       scrollContainey.scrollTop = scrollTop - walky;
//       lastY = y;
//   });

//   function inertialScroll() {
//       if (Math.abs(velocity) > 0.5) {
//           scrollContainey.scrollTop -= velocity;
//           velocity *= friction;
//           animationId = requestAnimationFrame(inertialScroll);
//       } else {
//           velocity = 0;
//           snapToNearest();
//       }
//   }

//   // Touch events
//   scrollContainey.addEventListener('touchstart', (e) => {
//       isDowny = true;
//       startY = e.touches[0].pageY;
//       scrollTop = scrollContainey.scrollTop;
//       startTime = performance.now();
//       lastY = startY;
//       cancelAnimationFrame(animationId);
//   });

//   scrollContainey.addEventListener('touchend', (e) => {
//       if (isDowny) {
//           isDowny = false;
          
//           const endTime = performance.now();
//           const elapsed = endTime - startTime;
          
//           if (elapsed < 100 && e.changedTouches) {
//               const endY = e.changedTouches[0].pageY;
//               velocity = (endY - lastY) / elapsed * 100;
//               inertialScroll();
//           } else {
//               snapToNearest();
//           }
//       }
//   });

//   scrollContainey.addEventListener('touchmove', (e) => {
//       if(!isDowny) return;
//       const y = e.touches[0].pageY;
//       const walky = y - startY;
//       scrollContainey.scrollTop = scrollTop - walky;
//       lastY = y;
//   });
  
