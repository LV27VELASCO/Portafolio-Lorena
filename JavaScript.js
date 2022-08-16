const d= document

const $menu=d.querySelector('.menu')
const $navbar=d.querySelector('.navbar')
const $iconMenu=d.querySelector('.menu i')
const $cards=d.querySelectorAll('#container_card .item' )
const $nadena=d.getElementById('nadena')


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
   

   const evento= e.path[2].children[1]
   

   if(evento.className==='info_item nadena'){
    evento.classList.add('active')
    evento.innerHTML=`
        <span><i class='bx bx-video-recording'></i>Jul 26, 2022</span>
        <h3>MODEL IN SONG</h3>
        <p> "NA DE NA"</p>
        <iframe width="100%" height="250" src="https://www.youtube.com/embed/3fwNh5AVWJY" 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
        clipboard-write;encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
}


   else if(evento.className==='info_item sexy'){
    evento.classList.add('active')
    evento.innerHTML=`
    <span><i class='bx bx-music'></i> May 28, 2022</span>
    <h3>NEW SINGLE </h3>
    <p>"SEXY MALOSO"</p>
    <iframe width="100%" height="250" src="https://www.youtube.com/embed/AmeBTKrKM8U" 
    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
    clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
    `
}
   else if(evento.className==='info_item stuck'){
    evento.classList.add('active')
    evento.innerHTML=`
    <span><i class='bx bx-music'></i> May 19, 2020</span>
    <h3>SINGLE (COVER) spanish</h3>
    <p> "STUCK-WITH"</p>
    <iframe width="100%" height="250" src="https://www.youtube.com/embed/HWJOxr5jv90" 
    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
    clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
}
   else if(evento.className==='info_item creeme'){
    evento.classList.add('active')
    evento.innerHTML=`
    <span><i class='bx bx-music'></i> Dic 7, 2018</span>
    <h3>SINGLE (COVER)</h3>
    <p>"CRÉEME"</p>
    <iframe width="100%" height="250" src="https://www.youtube.com/embed/FabzV5JTijQ?start=4" 
    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
    clipboard-write;encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
}
   else{
    evento.classList.remove('active') 
    evento.innerHTML=''
   }
   }


$cards.forEach(card =>{
    card.addEventListener('click',onClick)
})