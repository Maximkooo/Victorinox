let season3 = document.querySelector('.season3')
let offset = document.querySelector('#about-shop .offset-2')

window.addEventListener('resize', function (){
  if(window.outerWidth<992){
    season3.classList.add('p-0') 
    offset.classList.remove('offset-2')
  }else {
    season3.classList.remove('p-0')
    offset.classList.add('offset-2')
  }
})

let checkOnPageLoad = function (){
  if(window.outerWidth>992) {
    season3.classList.remove('p-0')
  }
  else {
    offset.classList.remove('offset-2')
  }
}
checkOnPageLoad()


