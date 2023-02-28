let  main = document.querySelector('.mainGrid');

// scrolling Horizontaling 
main.addEventListener('wheel', (e)=>{
    let left = main.scrollLeft += e.deltaY;
    let Top = main.scrollTop += e.deltaY;
    return (main.scrollWidth >= 968 ? 'left' : 'Top');
})




// its reflecting every front and back animations
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        // let section = document.querySelector(`#${entry.target.id}`);
        // let page = document.querySelector(`#${section.id} .pageNum`)
        if(entry.isIntersecting){
            // page.innerText = section.getAttribute('data-id')
            // page.classList.add('show');
            // entry.target.classList.add('show');
            entry.target.classList.add('slow');

        } else {
            entry.target.classList.remove('show');
            // page.classList.add('show');            
        }
    })
})
const hiddenElements = document.querySelectorAll('.highlights');
hiddenElements.forEach((el)=> observer.observe(el));

