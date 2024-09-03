const items = document.querySelectorAll('.item')
const box1 = document.querySelector('.box1')
const box2 = document.querySelector('.box2')
const box3 = document.querySelector('.box3')
const message = document.querySelector('.message')
const boxes = document.querySelectorAll('.box')
const boxes2 = document.querySelectorAll('.box-part-2')

items.forEach(item=>{
    item.addEventListener('click',(e)=>{
        removeItem(e)
    })
})


function removeItem(e){
    e.target.remove()
    const content = document.createElement('div')
    content.classList.add('content')
    content.setAttribute('value',e.target.innerHTML)
    content.innerHTML = e.target.getAttribute('value')
    box1.appendChild(content)
    const contents = document.querySelectorAll('.content')
    console.log(contents)
    contents.forEach(content=>{
        content.addEventListener('click',()=>{
            contents.forEach(i=> i.classList.remove('active'))
            content.classList.add('active')           
        })
        boxes.forEach(box=>{
            box.addEventListener('click',()=>{
                if(content.classList.contains('active') && !box.contains(content)){
                    box.appendChild(content)
                    if(content.classList.contains('active')){
                        content.classList.remove('active')
                    }
                }
            })

            box1.addEventListener('click',()=>{
                if(content.classList.contains('active') && !box1.contains(content)){
                    box1.appendChild(content)
                    if(content.classList.contains('active')){
                        content.classList.remove('active')
                    }
                }
            })

            
        })
        
    })
}








