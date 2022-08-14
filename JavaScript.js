const d= document

const $menu=d.querySelector('.menu')
const $navbar=d.querySelector('.navbar')
const $iconMenu=d.querySelector('.menu i')

$menu.addEventListener('click',()=>{
    if($navbar.className==='navbar active'){
        $navbar.classList.remove('active')
        $iconMenu.classList.add('bx-dots-vertical-rounded')
        $iconMenu.classList.remove('bx-dots-horizontal-rounded')
    }else{
        $navbar.classList.add('active')
        $iconMenu.classList.remove('bx-dots-vertical-rounded')
        $iconMenu.classList.add('bx-dots-horizontal-rounded')
    }
})


//Counter
$(d).ready(function(){
    $('.contador').counterUp({
        delay:13,
        time:1600
    })
})