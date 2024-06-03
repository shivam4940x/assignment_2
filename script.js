let elements = [];
elements.push(...document.querySelectorAll('h3'))
elements.push(...document.querySelectorAll('h1'))
elements.push(...document.querySelectorAll('p'));


elements.forEach(ele=>{
    ele.classList.add("hidden")
});

if (window.innerWidth > 400){

    const observer = new IntersectionObserver(entities=>{
        entities.forEach(ent=>{
            if(ent.isIntersecting){
                ent.target.classList.add("show")
            }else{
                ent.target.classList.remove("show")
            }
        })
    })
    
    elements.forEach(ele=>{
        observer.observe(ele)
    })
}