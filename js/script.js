const leftArrow = document.querySelector(".previous"),
  rightArrow = document.querySelector(".next"),
  downArrow = document.querySelector(".down");

 let  main = document.querySelector('.mainGrid');


// scrolling Horizontaling
main.addEventListener('wheel', (e)=>{
  e.preventDefault();
  main.scrollTop += e.deltaY;
  
})



  function scrollRight() {
    if (main.offsetWidth === main.scrollRight) {
        main.scrollTo({
        left: 0,
        behavior: "smooth"
      });
    } else {
      main.scrollBy({
        left: window.innerWidth,
        behavior: "smooth"
      });
    }
  }

  function scrollLeft() {
    main.scrollBy({
      left: -window.innerWidth,
      behavior: "smooth"
    });
  }

  // let timerId = setInterval(scrollRight, 5000);

  // function resetTimer() {
  //   clearInterval(timerId);
  //   timerId = setInterval(scrollRight, 5000);
  // }

  main.addEventListener("click", function (e) {
    if (e.target === leftArrow) {
      scrollLeft();
      // resetTimer();
      console.log(e)
    }
  });

  main.addEventListener("click", function (ev) {
    if (ev.target === rightArrow) {
      scrollRight();
      // resetTimer();
      
    }
  });

  main.addEventListener("click", function (ev) {
    if (ev.target === downArrow) {
      scrollTop();
      // resetTimer();
      
    }
  });







// its reflecting every front and back animations
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        // let section = document.querySelector(`#${entry.target.id}`);
        // let page = document.querySelector(`#${section.id} .pageNum`)
        if(entry.isIntersecting){
            // page.innerText = section.getAttribute('data-id')
            // page.classList.add('show');
            entry.target.classList.add('show');
            entry.target.classList.add('slow');

        } else {
            entry.target.classList.remove('show');
            // page.classList.add('show');            
        }
    })
})
const hiddenElements = document.querySelectorAll('.highlights');
hiddenElements.forEach((el)=> observer.observe(el));








// window.addEventListener('scroll', ()=>{
//     let content = document.getElementsByTagName('p');
//     let contentPosition = content.getBoundingClientRect().left;
//     let screenPosition = content.innerWidth / 2;
//     if(contentPosition < screenPosition){
//         content.classList.add('active');
//     } else {
//         content.classList.remove('active');
//     }

// })


// Scroll Reveal Method

// ScrollReveal({
//     reset:true,
//     distance:'30px',
//     duration:2000,
//     delay:400
// });

// ScrollReveal().reveal('img , p', {delay: 500, origin:'left'});














