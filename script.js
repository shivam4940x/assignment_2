let elements = [];
elements.push(...document.querySelectorAll('h3'))
elements.push(...document.querySelectorAll('h1'))
elements.push(...document.querySelectorAll('p'))
console.log(elements)
elements.forEach(ele=>{
    ele.classList.add("hidden")
});

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