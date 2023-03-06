const leftArrow = document.querySelector(".previous"),
  rightArrow = document.querySelector(".next");
  downArrow = document.querySelector(".down");

 var main = document.querySelector('.mainGrid');
var sections = document.querySelectorAll("section");



let currentPage = 0;
// scrolling Horizontaling
main.addEventListener('wheel', (e)=>{
    //  e.preventDefault();
    // main.scrollLeft += e.deltaY;
    currentPage = Math.round(main.scrollLeft / window.innerWidth);
    console.log(`Current page: ${currentPage}`);
    const direction = Math.sign(e.deltaY);
    
  if (direction === 1 && currentPage < sections.length - 1) {
    currentPage++;

  } else if (direction === -1 && currentPage > 0) {
    currentPage--;
  }


  main.scrollLeft = sections[currentPage].offsetLeft;

  console.log(main.scrollLeft)
})



let menu = document.querySelector('.menu');
// let imgContainer = document.querySelector('.imgContainer');
let centerText = document.querySelector(".nav-text")
let click = document.querySelector('.clicked')

// menu.addEventListener('click', () => {
//     menu.classList.toggle("clicked")
//     imgContainer.classList.add("open")
//     imgContainer.classList.remove("open")
//     centerText.classList.toggle('opacity')

// })

// menu.addEventListener('click',()=>{
//   menu.classList.toggle('clicked');
//   imgContainer.classList.toggle("open")
// })


const open = document.getElementById("open")
const close = document.getElementById("close")
const imgContainer = document.querySelector(".imgContainer")

open.addEventListener("click", () => {
  open.classList.add('opacity')
  imgContainer.classList.add("modal-open")
})

close.addEventListener("click", () => {
  imgContainer.classList.remove("modal-open")
  open.classList.remove('opacity')
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


  main.addEventListener("click", function (e) {
    if (e.target === leftArrow) {
      scrollLeft();
      // resetTimer();
      
    }
  });

  main.addEventListener("click", function (ev) {
    if (ev.target === rightArrow) {
      scrollRight();
      // resetTimer();
      
    }
  });

    // let timerId = setInterval(scrollRight, 5000);

  // function resetTimer() {
  //   clearInterval(timerId);
  //   timerId = setInterval(scrollRight, 5000);
  // }



// its reflecting every front and back animations
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        // let section = document.querySelector(`#${entry.target.id}`);
        // let page = document.querySelector(`#${section.id} .pageNum`)
          console.log(entry)
        if(entry.isIntersecting){
            // page.innerText = section.getAttribute('data-id')
            // page.classList.add('show');
            entry.target.classList.toggle('show');
            // entry.target.classList.add('slow');

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














