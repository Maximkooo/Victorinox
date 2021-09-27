let season3 = document.querySelector('.season3')
let offset = document.querySelector('#about-shop .offset-2')

window.addEventListener('resize', function (){ // проверка при изменении размера экрана
  if(window.outerWidth<992){
    season3.classList.add('p-0') // добавление класса который делает padding=0
    offset.classList.remove('offset-2')
  }else {
    season3.classList.remove('p-0')
    offset.classList.add('offset-2')// добавление класса который делает пустые 2 колонки(отступ)
  }
})

let checkOnPageLoad = function (){
  if(window.outerWidth>992) { //  проверка при загрузке страницы
    season3.classList.remove('p-0')
  }
  else {
    offset.classList.remove('offset-2')
  }
}
checkOnPageLoad()


