const d= document

const $menu=d.querySelector('.menu')
const $navbar=d.querySelector('.navbar')
const $iconMenu=d.querySelector('.menu i')
const $cards=d.querySelectorAll('#container_card .info_card' )


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


function onClick(e){

    // $cards.forEach(card => {
    //     card.classList.remove('active')
    // })

   const evento= e.path[2]
   
   if (evento.className==='info_card') {
    console.log(evento.classList.add('active'))
   }else{ evento.classList.remove('active')}
   }




$cards.forEach(card =>{
    card.addEventListener('click',onClick)
})