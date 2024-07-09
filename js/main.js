let boxes = document.querySelectorAll('.content')
let view_height = window.innerHeight

function animation(){
    boxes.forEach(box => {
        if (box.getBoundingClientRect().bottom < view_height){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    });
}

window.addEventListener('scroll', animation)
animation()