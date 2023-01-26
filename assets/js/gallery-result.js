const krasota_gallery_test_wrap = document.querySelector(".krasota-gallery-test_wrap")
const works_gallery_test_wrap = document.querySelector(".works-gallery-test_wrap")
const health_gallery_test_wrap = document.querySelector(".health-gallery-test_wrap")
const finance_gallery_test_wrap = document.querySelector(".finance-gallery-test_wrap")
const gallery_test_wrap = document.querySelector(".relationship-gallery-test_wrap")
const business_gallery_test_wrap = document.querySelector(".business-gallery-test_wrap")
const spiritual_gallery_test_wrap = document.querySelector(".spiritual-gallery-test_wrap")
const personal_gallery_test_wrap = document.querySelector(".personal-gallery-test_wrap")
const hobby_gallery_test_wrap = document.querySelector(".hobby-gallery-test_wrap")
// const gallery_swiper = document.querySelectorAll(".relationship-gallery_test")


document.getElementById('spheres-button').style.display = 'flex'

document.getElementById('spheres-button').addEventListener("click", ()=> {
  document.getElementById('spheres-block').style.display = 'flex'
})

const swiperFunc = () => {
  const swiper = new Swiper('.gallery .swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
    320: {
        slidesPerView: 2,
        spaceBetween: 8
    },
    480: {
        slidesPerView: 2,
        spaceBetween: 8            
    },
    640: {
        slidesPerView: 3,
        spaceBetween: 8
    },
    1100: {
        slidesPerView: 5,
        spaceBetween: 8,
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    }},           
  })
} 

//krasota blocks
function gallery_krasota_figure() {
  document.getElementById('krasota-gallery_block').style.display = "block"
  let relationship_parents = document.createElement('div')
  relationship_parents.innerHTML += `
  <section class="gallery gallery-swiper">
    <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>фигура</span></h1> <a href="#">Смотреть все</a></div>                    
    <div class="wrapper swiper">
        <div class="swiper">
        <div class="swiper-wrapper gallery_cont"> 
            <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                <h1>Бесплатно</h1>
                <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img2.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                <h1>9800 ₽</h1>
                <p>Сексуальный интеллект</p>
                <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img3.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                <h1>Бесплатно</h1>
                <p>Мастер-класс «Я такая одна: удобная или уникальная?</p>
                <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img4.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                <h1>Бесплатно</h1>
                <p>Руководство «Как выйти замуж за Любимого»</p>
                <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img5.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                <h1>Бесплатно</h1>
                <p>Руководство «Как выйти замуж за Любимого»</p>
                <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                <h1>Бесплатно</h1>
                <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                <h1>Бесплатно</h1>
                <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
        </div>	
        <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>     
        </div>
    </div>
  </section>`
  krasota_gallery_test_wrap.prepend(relationship_parents)                  
  swiperFunc()
}

function gallery_krasota_heir() {
  document.getElementById('krasota-gallery_block').style.display = "block"
  let relationship_parents = document.createElement('div')
  relationship_parents.innerHTML += `
  <section class="gallery gallery-swiper">
    <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>волосы</span></h1> <a href="#">Смотреть все</a></div>                    
    <div class="wrapper swiper">
        <div class="swiper">
        <div class="swiper-wrapper gallery_cont"> 
            <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child1.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">отношения детьми</div>
                <h1>Бесплатно</h1>
                <p>Памятка «Есть ли у моего ребёнка травмы детства?»</p>
                <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child2.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>500 ₽</h1>
                <p>Цикл лекций «Если с ребёнком трудно»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child3.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Вебинар «Мама на нуле – 2.0»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child4.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Памятка «Привязанность, а не оковы»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>   
            <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-school5.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Конференция «Поговорим о школе»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child3.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Вебинар «Мама на нуле – 2.0»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child4.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Памятка «Привязанность, а не оковы»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div> 
        </div>	
        <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>   
      <div class="swiper-pagination"></div>          
        </div>
    </div>
  </section>`
  krasota_gallery_test_wrap.prepend(relationship_parents)                  
  swiperFunc()
}

function gallery_krasota_face() {
  document.getElementById('krasota-gallery_block').style.display = "block"
  let relationship_parents = document.createElement('div')
  relationship_parents.innerHTML += `
  <section class="gallery gallery-swiper">
    <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>лицо</span></h1> <a href="#">Смотреть все</a></div>                    
    <div class="wrapper swiper">
        <div class="swiper">
        <div class="swiper-wrapper gallery_cont"> 
            <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child1.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">отношения детьми</div>
                <h1>Бесплатно</h1>
                <p>Памятка «Есть ли у моего ребёнка травмы детства?»</p>
                <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child2.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>500 ₽</h1>
                <p>Цикл лекций «Если с ребёнком трудно»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child3.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Вебинар «Мама на нуле – 2.0»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child4.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Памятка «Привязанность, а не оковы»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>   
            <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-school5.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Конференция «Поговорим о школе»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child3.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Вебинар «Мама на нуле – 2.0»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child4.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Памятка «Привязанность, а не оковы»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div> 
        </div>	
        <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>   
      <div class="swiper-pagination"></div>          
        </div>
    </div>
  </section>`
  krasota_gallery_test_wrap.prepend(relationship_parents)                  
  swiperFunc()
}

function gallery_krasota_fashion() {
  document.getElementById('krasota-gallery_block').style.display = "block"
  let relationship_parents = document.createElement('div')
  relationship_parents.innerHTML += `
  <section class="gallery gallery-swiper">
    <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>мода и стиль</span></h1> <a href="#">Смотреть все</a></div>                    
    <div class="wrapper swiper">
        <div class="swiper">
        <div class="swiper-wrapper gallery_cont"> 
            <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child1.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">отношения детьми</div>
                <h1>Бесплатно</h1>
                <p>Памятка «Есть ли у моего ребёнка травмы детства?»</p>
                <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child2.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>500 ₽</h1>
                <p>Цикл лекций «Если с ребёнком трудно»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child3.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Вебинар «Мама на нуле – 2.0»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child4.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Памятка «Привязанность, а не оковы»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>   
            <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-school5.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Конференция «Поговорим о школе»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child3.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Вебинар «Мама на нуле – 2.0»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child4.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Памятка «Привязанность, а не оковы»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div> 
        </div>	
        <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>   
      <div class="swiper-pagination"></div>          
        </div>
    </div>
  </section>`
  krasota_gallery_test_wrap.prepend(relationship_parents)                  
  swiperFunc()
}

//works blocks
function gallery_works_creative() {
  document.getElementById('works-gallery_block').style.display = "block"
  let parents_before = document.createElement('div')
  parents_before.innerHTML += `
  <section class="gallery gallery-swiper">
    <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>творческая работа</span></h1> <a href="#">Смотреть все</a></div>                    
    <div class="wrapper swiper">
        <div class="swiper">
        <div class="swiper-wrapper gallery_cont"> 
            <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child1.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">отношения детьми</div>
                <h1>Бесплатно</h1>
                <p>Памятка «Есть ли у моего ребёнка травмы детства?»</p>
                <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child2.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>500 ₽</h1>
                <p>Цикл лекций «Если с ребёнком трудно»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child3.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Вебинар «Мама на нуле – 2.0»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child4.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Памятка «Привязанность, а не оковы»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>   
            <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-school5.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Конференция «Поговорим о школе»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child3.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Вебинар «Мама на нуле – 2.0»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child4.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Памятка «Привязанность, а не оковы»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div> 
        </div>	
        <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>   
      <div class="swiper-pagination"></div>          
        </div>
    </div>
  </section>`
  works_gallery_test_wrap.prepend(parents_before)                  
  swiperFunc()
}

function gallery_works_workIt() {
  document.getElementById('works-gallery_block').style.display = "block"
  let parents_before = document.createElement('div')
  parents_before.innerHTML += `
  <section class="gallery gallery-swiper">
    <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>работа в сфере IT</span></h1> <a href="#">Смотреть все</a></div>                    
    <div class="wrapper swiper">
        <div class="swiper">
        <div class="swiper-wrapper gallery_cont"> 
            <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child1.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">отношения детьми</div>
                <h1>Бесплатно</h1>
                <p>Памятка «Есть ли у моего ребёнка травмы детства?»</p>
                <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child2.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>500 ₽</h1>
                <p>Цикл лекций «Если с ребёнком трудно»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child3.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Вебинар «Мама на нуле – 2.0»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child4.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Памятка «Привязанность, а не оковы»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>   
            <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-school5.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Конференция «Поговорим о школе»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child3.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Вебинар «Мама на нуле – 2.0»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child4.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Памятка «Привязанность, а не оковы»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div> 
        </div>	
        <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>   
      <div class="swiper-pagination"></div>          
        </div>
    </div>
  </section>`
  works_gallery_test_wrap.prepend(parents_before)                  
  swiperFunc()
}

function gallery_works_finance() {
  document.getElementById('works-gallery_block').style.display = "block"
  let parents_before = document.createElement('div')
  parents_before.innerHTML += `
  <section class="gallery gallery-swiper">
    <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>финансами</span></h1> <a href="#">Смотреть все</a></div>                    
    <div class="wrapper swiper">
        <div class="swiper">
        <div class="swiper-wrapper gallery_cont"> 
            <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child1.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">отношения детьми</div>
                <h1>Бесплатно</h1>
                <p>Памятка «Есть ли у моего ребёнка травмы детства?»</p>
                <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child2.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>500 ₽</h1>
                <p>Цикл лекций «Если с ребёнком трудно»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child3.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Вебинар «Мама на нуле – 2.0»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child4.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Памятка «Привязанность, а не оковы»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>   
            <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-school5.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Конференция «Поговорим о школе»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child3.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Вебинар «Мама на нуле – 2.0»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child4.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Памятка «Привязанность, а не оковы»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div> 
        </div>	
        <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>   
      <div class="swiper-pagination"></div>          
        </div>
    </div>
  </section>`
  works_gallery_test_wrap.prepend(parents_before)                  
  swiperFunc()
}

function gallery_works_organization() {
  document.getElementById('works-gallery_block').style.display = "block"
  let parents_before = document.createElement('div')
  parents_before.innerHTML += `
  <section class="gallery gallery-swiper">
    <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>организация и управление</span></h1> <a href="#">Смотреть все</a></div>                    
    <div class="wrapper swiper">
        <div class="swiper">
        <div class="swiper-wrapper gallery_cont"> 
            <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child1.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">отношения детьми</div>
                <h1>Бесплатно</h1>
                <p>Памятка «Есть ли у моего ребёнка травмы детства?»</p>
                <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child2.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>500 ₽</h1>
                <p>Цикл лекций «Если с ребёнком трудно»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child3.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Вебинар «Мама на нуле – 2.0»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child4.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Памятка «Привязанность, а не оковы»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>   
            <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-school5.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Конференция «Поговорим о школе»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child3.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Вебинар «Мама на нуле – 2.0»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child4.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Памятка «Привязанность, а не оковы»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div> 
        </div>	
        <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>   
      <div class="swiper-pagination"></div>          
        </div>
    </div>
  </section>`
  works_gallery_test_wrap.prepend(parents_before)                  
  swiperFunc()
}

function gallery_works_promotion() {
  document.getElementById('works-gallery_block').style.display = "block"
  let parents_before = document.createElement('div')
  parents_before.innerHTML += `
  <section class="gallery gallery-swiper">
    <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>продвижение товаров и услуг</span></h1> <a href="#">Смотреть все</a></div>                    
    <div class="wrapper swiper">
        <div class="swiper">
        <div class="swiper-wrapper gallery_cont"> 
            <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child1.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">отношения детьми</div>
                <h1>Бесплатно</h1>
                <p>Памятка «Есть ли у моего ребёнка травмы детства?»</p>
                <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child2.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>500 ₽</h1>
                <p>Цикл лекций «Если с ребёнком трудно»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child3.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Вебинар «Мама на нуле – 2.0»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child4.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Памятка «Привязанность, а не оковы»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>   
            <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-school5.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Конференция «Поговорим о школе»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child3.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Вебинар «Мама на нуле – 2.0»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child4.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Памятка «Привязанность, а не оковы»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div> 
        </div>	
        <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>   
      <div class="swiper-pagination"></div>          
        </div>
    </div>
  </section>`
  works_gallery_test_wrap.prepend(parents_before)                  
  swiperFunc()
}

function gallery_works_psychology() {
  document.getElementById('works-gallery_block').style.display = "block"
  let parents_before = document.createElement('div')
  parents_before.innerHTML += `
  <section class="gallery gallery-swiper">
    <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>психология и здоровый образ жизни</span></h1> <a href="#">Смотреть все</a></div>                    
    <div class="wrapper swiper">
        <div class="swiper">
        <div class="swiper-wrapper gallery_cont"> 
            <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child1.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">отношения детьми</div>
                <h1>Бесплатно</h1>
                <p>Памятка «Есть ли у моего ребёнка травмы детства?»</p>
                <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child2.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>500 ₽</h1>
                <p>Цикл лекций «Если с ребёнком трудно»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child3.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Вебинар «Мама на нуле – 2.0»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child4.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Памятка «Привязанность, а не оковы»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>   
            <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-school5.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Конференция «Поговорим о школе»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child3.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Вебинар «Мама на нуле – 2.0»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child4.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Памятка «Привязанность, а не оковы»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div> 
        </div>	
        <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>   
      <div class="swiper-pagination"></div>          
        </div>
    </div>
  </section>`
  works_gallery_test_wrap.prepend(parents_before)                  
  swiperFunc()
}

function gallery_works_business() {
  document.getElementById('works-gallery_block').style.display = "block"
  let parents_before = document.createElement('div')
  parents_before.innerHTML += `
  <section class="gallery gallery-swiper">
    <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>открытие собственного бизнеса</span></h1> <a href="#">Смотреть все</a></div>                    
    <div class="wrapper swiper">
        <div class="swiper">
        <div class="swiper-wrapper gallery_cont"> 
            <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child1.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">отношения детьми</div>
                <h1>Бесплатно</h1>
                <p>Памятка «Есть ли у моего ребёнка травмы детства?»</p>
                <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child2.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>500 ₽</h1>
                <p>Цикл лекций «Если с ребёнком трудно»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child3.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Вебинар «Мама на нуле – 2.0»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child4.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Памятка «Привязанность, а не оковы»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>   
            <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-school5.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Конференция «Поговорим о школе»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child3.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Вебинар «Мама на нуле – 2.0»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child4.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Памятка «Привязанность, а не оковы»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div> 
        </div>	
        <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>   
      <div class="swiper-pagination"></div>          
        </div>
    </div>
  </section>`
  works_gallery_test_wrap.prepend(parents_before)                  
  swiperFunc()
}

function gallery_works_beauty() {
  document.getElementById('works-gallery_block').style.display = "block"
  let parents_before = document.createElement('div')
  parents_before.innerHTML += `
  <section class="gallery gallery-swiper">
    <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>работа в сфере красоты</span></h1> <a href="#">Смотреть все</a></div>                    
    <div class="wrapper swiper">
        <div class="swiper">
        <div class="swiper-wrapper gallery_cont"> 
            <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child1.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">отношения детьми</div>
                <h1>Бесплатно</h1>
                <p>Памятка «Есть ли у моего ребёнка травмы детства?»</p>
                <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child2.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>500 ₽</h1>
                <p>Цикл лекций «Если с ребёнком трудно»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child3.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Вебинар «Мама на нуле – 2.0»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child4.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Памятка «Привязанность, а не оковы»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>   
            <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-school5.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Конференция «Поговорим о школе»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child3.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Вебинар «Мама на нуле – 2.0»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child4.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Памятка «Привязанность, а не оковы»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div> 
        </div>	
        <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>   
      <div class="swiper-pagination"></div>          
        </div>
    </div>
  </section>`
  works_gallery_test_wrap.prepend(parents_before)                  
  swiperFunc()
}

function gallery_works_educcation() {
  document.getElementById('works-gallery_block').style.display = "block"
  let parents_before = document.createElement('div')
  parents_before.innerHTML += `
  <section class="gallery gallery-swiper">
    <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>педагогика и образование</span></h1> <a href="#">Смотреть все</a></div>                    
    <div class="wrapper swiper">
        <div class="swiper">
        <div class="swiper-wrapper gallery_cont"> 
            <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child1.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">отношения детьми</div>
                <h1>Бесплатно</h1>
                <p>Памятка «Есть ли у моего ребёнка травмы детства?»</p>
                <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child2.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>500 ₽</h1>
                <p>Цикл лекций «Если с ребёнком трудно»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child3.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Вебинар «Мама на нуле – 2.0»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child4.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Памятка «Привязанность, а не оковы»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>   
            <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-school5.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Конференция «Поговорим о школе»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child3.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Вебинар «Мама на нуле – 2.0»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child4.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Памятка «Привязанность, а не оковы»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div> 
        </div>	
        <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>   
      <div class="swiper-pagination"></div>          
        </div>
    </div>
  </section>`
  works_gallery_test_wrap.prepend(parents_before)                  
  swiperFunc()
}

function gallery_works_travel() {
  document.getElementById('works-gallery_block').style.display = "block"
  let parents_before = document.createElement('div')
  parents_before.innerHTML += `
  <section class="gallery gallery-swiper">
    <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>работа в сфере путешествий</span></h1> <a href="#">Смотреть все</a></div>                    
    <div class="wrapper swiper">
        <div class="swiper">
        <div class="swiper-wrapper gallery_cont"> 
            <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child1.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">отношения детьми</div>
                <h1>Бесплатно</h1>
                <p>Памятка «Есть ли у моего ребёнка травмы детства?»</p>
                <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child2.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>500 ₽</h1>
                <p>Цикл лекций «Если с ребёнком трудно»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child3.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Вебинар «Мама на нуле – 2.0»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child4.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Памятка «Привязанность, а не оковы»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>   
            <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-school5.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Конференция «Поговорим о школе»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child3.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Вебинар «Мама на нуле – 2.0»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img-child4.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с детьми</div>
                <h1>Бесплатно</h1>
                <p>Памятка «Привязанность, а не оковы»</p>
                <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div> 
        </div>	
        <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>   
      <div class="swiper-pagination"></div>          
        </div>
    </div>
  </section>`
  works_gallery_test_wrap.prepend(parents_before)                  
  swiperFunc()
}

//helath blocks 
function gallery_health_women() {
  document.getElementById('health-gallery_block').style.display = "block"
  let health_male = document.createElement('div')
  health_male.innerHTML += `
  <section class="gallery gallery-swiper relationship-gallery_test">
                        <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>женское здоровье</span></h1> <a href="#">Смотреть все</a></div>                    
                        <div class="wrapper swiper">
                            <div class="swiper">
                            <div class="swiper-wrapper gallery_cont"> 
                                <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img2.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>9800 ₽</h1>
                                    <p>Сексуальный интеллект</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img3.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Мастер-класс «Я такая одна: удобная или уникальная?</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img4.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img5.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                            </div>	
                            <div class="swiper-button-next"></div>
                          <div class="swiper-button-prev"></div>
                          <div class="swiper-pagination"></div>     
                            </div>
                        </div>
  </section>`
  health_gallery_test_wrap.prepend(health_male)
  swiperFunc()  
}

function gallery_health_digestion() {
  document.getElementById('health-gallery_block').style.display = "block"
  let health_male = document.createElement('div')
  health_male.innerHTML += `
  <section class="gallery gallery-swiper relationship-gallery_test">
                        <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>пищеварение</span></h1> <a href="#">Смотреть все</a></div>                    
                        <div class="wrapper swiper">
                            <div class="swiper">
                            <div class="swiper-wrapper gallery_cont"> 
                                <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img2.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>9800 ₽</h1>
                                    <p>Сексуальный интеллект</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img3.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Мастер-класс «Я такая одна: удобная или уникальная?</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img4.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img5.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                            </div>	
                            <div class="swiper-button-next"></div>
                          <div class="swiper-button-prev"></div>
                          <div class="swiper-pagination"></div>     
                            </div>
                        </div>
  </section>`
  health_gallery_test_wrap.prepend(health_male)
  swiperFunc()  
}

function gallery_health_vision() {
  document.getElementById('health-gallery_block').style.display = "block"
  let health_male = document.createElement('div')
  health_male.innerHTML += `
  <section class="gallery gallery-swiper relationship-gallery_test">
                        <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>зрение</span></h1> <a href="#">Смотреть все</a></div>                    
                        <div class="wrapper swiper">
                            <div class="swiper">
                            <div class="swiper-wrapper gallery_cont"> 
                                <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img2.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>9800 ₽</h1>
                                    <p>Сексуальный интеллект</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img3.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Мастер-класс «Я такая одна: удобная или уникальная?</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img4.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img5.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                            </div>	
                            <div class="swiper-button-next"></div>
                          <div class="swiper-button-prev"></div>
                          <div class="swiper-pagination"></div>     
                            </div>
                        </div>
  </section>`
  health_gallery_test_wrap.prepend(health_male)
  swiperFunc()  
}

function gallery_health_backJoints() {
  document.getElementById('health-gallery_block').style.display = "block"
  let health_male = document.createElement('div')
  health_male.innerHTML += `
  <section class="gallery gallery-swiper relationship-gallery_test">
                        <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>спина и суставы</span></h1> <a href="#">Смотреть все</a></div>                    
                        <div class="wrapper swiper">
                            <div class="swiper">
                            <div class="swiper-wrapper gallery_cont"> 
                                <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img2.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>9800 ₽</h1>
                                    <p>Сексуальный интеллект</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img3.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Мастер-класс «Я такая одна: удобная или уникальная?</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img4.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img5.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                            </div>	
                            <div class="swiper-button-next"></div>
                          <div class="swiper-button-prev"></div>
                          <div class="swiper-pagination"></div>     
                            </div>
                        </div>
  </section>`
  health_gallery_test_wrap.prepend(health_male)
  swiperFunc()  
}

function gallery_health_painSyndrome() {
  document.getElementById('health-gallery_block').style.display = "block"
  let health_male = document.createElement('div')
  health_male.innerHTML += `
  <section class="gallery gallery-swiper relationship-gallery_test">
                        <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>болевой синдром</span></h1> <a href="#">Смотреть все</a></div>                    
                        <div class="wrapper swiper">
                            <div class="swiper">
                            <div class="swiper-wrapper gallery_cont"> 
                                <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img2.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>9800 ₽</h1>
                                    <p>Сексуальный интеллект</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img3.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Мастер-класс «Я такая одна: удобная или уникальная?</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img4.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img5.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                            </div>	
                            <div class="swiper-button-next"></div>
                          <div class="swiper-button-prev"></div>
                          <div class="swiper-pagination"></div>     
                            </div>
                        </div>
  </section>`
  health_gallery_test_wrap.prepend(health_male)
  swiperFunc()  
}

function gallery_health_hormones() {
  document.getElementById('health-gallery_block').style.display = "block"
  let health_male = document.createElement('div')
  health_male.innerHTML += `
  <section class="gallery gallery-swiper relationship-gallery_test">
                        <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>гормоны</span></h1> <a href="#">Смотреть все</a></div>                    
                        <div class="wrapper swiper">
                            <div class="swiper">
                            <div class="swiper-wrapper gallery_cont"> 
                                <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img2.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>9800 ₽</h1>
                                    <p>Сексуальный интеллект</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img3.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Мастер-класс «Я такая одна: удобная или уникальная?</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img4.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img5.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                            </div>	
                            <div class="swiper-button-next"></div>
                          <div class="swiper-button-prev"></div>
                          <div class="swiper-pagination"></div>     
                            </div>
                        </div>
  </section>`
  health_gallery_test_wrap.prepend(health_male)
  swiperFunc()  
}

function gallery_health_wellness() {
  document.getElementById('health-gallery_block').style.display = "block"
  let health_male = document.createElement('div')
  health_male.innerHTML += `
  <section class="gallery gallery-swiper relationship-gallery_test">
                        <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>оздоровление</span></h1> <a href="#">Смотреть все</a></div>                    
                        <div class="wrapper swiper">
                            <div class="swiper">
                            <div class="swiper-wrapper gallery_cont"> 
                                <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img2.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>9800 ₽</h1>
                                    <p>Сексуальный интеллект</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img3.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Мастер-класс «Я такая одна: удобная или уникальная?</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img4.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img5.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                            </div>	
                            <div class="swiper-button-next"></div>
                          <div class="swiper-button-prev"></div>
                          <div class="swiper-pagination"></div>     
                            </div>
                        </div>
  </section>`
  health_gallery_test_wrap.prepend(health_male)
  swiperFunc()  
}

function gallery_health_heartVesseles() {
  document.getElementById('health-gallery_block').style.display = "block"
  let health_male = document.createElement('div')
  health_male.innerHTML += `
  <section class="gallery gallery-swiper relationship-gallery_test">
                        <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>сердце и сосуды</span></h1> <a href="#">Смотреть все</a></div>                    
                        <div class="wrapper swiper">
                            <div class="swiper">
                            <div class="swiper-wrapper gallery_cont"> 
                                <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img2.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>9800 ₽</h1>
                                    <p>Сексуальный интеллект</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img3.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Мастер-класс «Я такая одна: удобная или уникальная?</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img4.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img5.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                            </div>	
                            <div class="swiper-button-next"></div>
                          <div class="swiper-button-prev"></div>
                          <div class="swiper-pagination"></div>     
                            </div>
                        </div>
  </section>`
  health_gallery_test_wrap.prepend(health_male)
  swiperFunc()  
}

//finance blocks
function gallery_finance_attraction() {
  document.getElementById('finance-gallery_block').style.display = "block"
  let finance_parents = document.createElement('div')
  finance_parents.innerHTML += `
  <section class="gallery gallery-swiper">
    <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>привлечения финансов</span></h1> <a href="#">Смотреть все</a></div>                    
    <div class="wrapper swiper">
        <div class="swiper">
        <div class="swiper-wrapper gallery_cont"> 
            <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                <h1>Бесплатно</h1>
                <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img2.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                <h1>9800 ₽</h1>
                <p>Сексуальный интеллект</p>
                <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img3.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                <h1>Бесплатно</h1>
                <p>Мастер-класс «Я такая одна: удобная или уникальная?</p>
                <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img4.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                <h1>Бесплатно</h1>
                <p>Руководство «Как выйти замуж за Любимого»</p>
                <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img5.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                <h1>Бесплатно</h1>
                <p>Руководство «Как выйти замуж за Любимого»</p>
                <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                <h1>Бесплатно</h1>
                <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                <h1>Бесплатно</h1>
                <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
        </div>	
        <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>     
        </div>
    </div>
  </section>`
  finance_gallery_test_wrap.prepend(finance_parents)                  
  swiperFunc()
}

function gallery_finance_literacy() {
  document.getElementById('finance-gallery_block').style.display = "block"
  let finance_parents = document.createElement('div')
  finance_parents.innerHTML += `
  <section class="gallery gallery-swiper">
    <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>финансовая грамотность</span></h1> <a href="#">Смотреть все</a></div>                    
    <div class="wrapper swiper">
        <div class="swiper">
        <div class="swiper-wrapper gallery_cont"> 
            <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                <h1>Бесплатно</h1>
                <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img2.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                <h1>9800 ₽</h1>
                <p>Сексуальный интеллект</p>
                <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img3.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                <h1>Бесплатно</h1>
                <p>Мастер-класс «Я такая одна: удобная или уникальная?</p>
                <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img4.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                <h1>Бесплатно</h1>
                <p>Руководство «Как выйти замуж за Любимого»</p>
                <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img5.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                <h1>Бесплатно</h1>
                <p>Руководство «Как выйти замуж за Любимого»</p>
                <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                <h1>Бесплатно</h1>
                <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                <h1>Бесплатно</h1>
                <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
        </div>	
        <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>     
        </div>
    </div>
  </section>`
  finance_gallery_test_wrap.prepend(finance_parents)                  
  swiperFunc()
}

function gallery_finance_investment() {
  document.getElementById('finance-gallery_block').style.display = "block"
  let finance_parents = document.createElement('div')
  finance_parents.innerHTML += `
  <section class="gallery gallery-swiper">
    <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>инвестирования</span></h1> <a href="#">Смотреть все</a></div>                    
    <div class="wrapper swiper">
        <div class="swiper">
        <div class="swiper-wrapper gallery_cont"> 
            <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                <h1>Бесплатно</h1>
                <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img2.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                <h1>9800 ₽</h1>
                <p>Сексуальный интеллект</p>
                <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img3.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                <h1>Бесплатно</h1>
                <p>Мастер-класс «Я такая одна: удобная или уникальная?</p>
                <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img4.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                <h1>Бесплатно</h1>
                <p>Руководство «Как выйти замуж за Любимого»</p>
                <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img5.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                <h1>Бесплатно</h1>
                <p>Руководство «Как выйти замуж за Любимого»</p>
                <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                <h1>Бесплатно</h1>
                <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                <h1>Бесплатно</h1>
                <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
        </div>	
        <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>     
        </div>
    </div>
  </section>`
  finance_gallery_test_wrap.prepend(finance_parents)                  
  swiperFunc()
}

function gallery_finance_trading() {
  document.getElementById('finance-gallery_block').style.display = "block"
  let finance_parents = document.createElement('div')
  finance_parents.innerHTML += `
  <section class="gallery gallery-swiper">
    <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>трейдинга</span></h1> <a href="#">Смотреть все</a></div>                    
    <div class="wrapper swiper">
        <div class="swiper">
        <div class="swiper-wrapper gallery_cont"> 
            <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                <h1>Бесплатно</h1>
                <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img2.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                <h1>9800 ₽</h1>
                <p>Сексуальный интеллект</p>
                <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img3.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                <h1>Бесплатно</h1>
                <p>Мастер-класс «Я такая одна: удобная или уникальная?</p>
                <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img4.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                <h1>Бесплатно</h1>
                <p>Руководство «Как выйти замуж за Любимого»</p>
                <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img5.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                <h1>Бесплатно</h1>
                <p>Руководство «Как выйти замуж за Любимого»</p>
                <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                <h1>Бесплатно</h1>
                <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                <h1>Бесплатно</h1>
                <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
        </div>	
        <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>     
        </div>
    </div>
  </section>`
  finance_gallery_test_wrap.prepend(finance_parents)                  
  swiperFunc()
}

//relationship blocks
function gallery_relationship_male() {
  document.getElementById('relationship-gallery_block').style.display = "block"
  let relationship_male = document.createElement('div')
  relationship_male.innerHTML += `
  <section class="gallery gallery-swiper relationship-gallery_test">
                        <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>отношения с мужчиной</span></h1> <a href="#">Смотреть все</a></div>                    
                        <div class="wrapper swiper">
                            <div class="swiper">
                            <div class="swiper-wrapper gallery_cont"> 
                                <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img2.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>9800 ₽</h1>
                                    <p>Сексуальный интеллект</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img3.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Мастер-класс «Я такая одна: удобная или уникальная?</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img4.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img5.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                            </div>	
                            <div class="swiper-button-next"></div>
                          <div class="swiper-button-prev"></div>
                          <div class="swiper-pagination"></div>     
                            </div>
                        </div>
  </section>`
  gallery_test_wrap.prepend(relationship_male)
  swiperFunc()  
}

function gallery_relationship_child() {
  document.getElementById('relationship-gallery_block').style.display = "block"
  let relationship_child = document.createElement('div')
  relationship_child.innerHTML += `
  <section class="gallery gallery-swiper relationship-gallery_test">
                        <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>отношения с детьми</span></h1> <a href="#">Смотреть все</a></div>                    
                        <div class="wrapper swiper">
                            <div class="swiper">
                            <div class="swiper-wrapper gallery_cont"> 
                                <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img-child1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">отношения детьми</div>
                                    <h1>Бесплатно</h1>
                                    <p>Памятка «Есть ли у моего ребёнка травмы детства?»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img-child2.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с детьми</div>
                                    <h1>500 ₽</h1>
                                    <p>Цикл лекций «Если с ребёнком трудно»</p>
                                    <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img-child3.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с детьми</div>
                                    <h1>Бесплатно</h1>
                                    <p>Вебинар «Мама на нуле – 2.0»</p>
                                    <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img-child4.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с детьми</div>
                                    <h1>Бесплатно</h1>
                                    <p>Памятка «Привязанность, а не оковы»</p>
                                    <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>   
                                <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img-school5.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с детьми</div>
                                    <h1>Бесплатно</h1>
                                    <p>Конференция «Поговорим о школе»</p>
                                    <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img-child3.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с детьми</div>
                                    <h1>Бесплатно</h1>
                                    <p>Вебинар «Мама на нуле – 2.0»</p>
                                    <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img-child4.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с детьми</div>
                                    <h1>Бесплатно</h1>
                                    <p>Памятка «Привязанность, а не оковы»</p>
                                    <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div> 
                            </div>	
                            <div class="swiper-button-next"></div>
                          <div class="swiper-button-prev"></div>   
                          <div class="swiper-pagination"></div>          
                            </div>
                        </div>
  </section>`
  gallery_test_wrap.prepend(relationship_child)
  swiperFunc()
}

function gallery_relationship_parents() {
  document.getElementById('relationship-gallery_block').style.display = "block"
  let relationship_parents = document.createElement('div')
  relationship_parents.innerHTML += `
  <section class="gallery gallery-swiper relationship-gallery_test">
                        <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>отношения с родителями</span></h1> <a href="#">Смотреть все</a></div>                    
                        <div class="wrapper swiper">
                            <div class="swiper">
                            <div class="swiper-wrapper gallery_cont"> 
                                <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img-child1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">отношения детьми</div>
                                    <h1>Бесплатно</h1>
                                    <p>Памятка «Есть ли у моего ребёнка травмы детства?»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img-child2.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с детьми</div>
                                    <h1>500 ₽</h1>
                                    <p>Цикл лекций «Если с ребёнком трудно»</p>
                                    <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img-child3.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с детьми</div>
                                    <h1>Бесплатно</h1>
                                    <p>Вебинар «Мама на нуле – 2.0»</p>
                                    <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img-child4.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с детьми</div>
                                    <h1>Бесплатно</h1>
                                    <p>Памятка «Привязанность, а не оковы»</p>
                                    <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>   
                                <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img-school5.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с детьми</div>
                                    <h1>Бесплатно</h1>
                                    <p>Конференция «Поговорим о школе»</p>
                                    <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img-child3.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с детьми</div>
                                    <h1>Бесплатно</h1>
                                    <p>Вебинар «Мама на нуле – 2.0»</p>
                                    <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img-child4.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с детьми</div>
                                    <h1>Бесплатно</h1>
                                    <p>Памятка «Привязанность, а не оковы»</p>
                                    <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div> 
                            </div>	
                            <div class="swiper-button-next"></div>
                          <div class="swiper-button-prev"></div>   
                          <div class="swiper-pagination"></div>          
                            </div>
                        </div>
  </section>`
  gallery_test_wrap.prepend(relationship_parents)
  swiperFunc()
}

function gallery_relationship_partners() {
  document.getElementById('relationship-gallery_block').style.display = "block"
  let relationship_partners = document.createElement('div')
  relationship_partners.innerHTML += `
  <section class="gallery gallery-swiper relationship-gallery_test">
                        <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>отношения c коллегами/партнёрами</span></h1> <a href="#">Смотреть все</a></div>                    
                        <div class="wrapper swiper">
                            <div class="swiper">
                            <div class="swiper-wrapper gallery_cont"> 
                                <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img-child1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">отношения детьми</div>
                                    <h1>Бесплатно</h1>
                                    <p>Памятка «Есть ли у моего ребёнка травмы детства?»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img-child2.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с детьми</div>
                                    <h1>500 ₽</h1>
                                    <p>Цикл лекций «Если с ребёнком трудно»</p>
                                    <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img-child3.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с детьми</div>
                                    <h1>Бесплатно</h1>
                                    <p>Вебинар «Мама на нуле – 2.0»</p>
                                    <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img-child4.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с детьми</div>
                                    <h1>Бесплатно</h1>
                                    <p>Памятка «Привязанность, а не оковы»</p>
                                    <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>   
                                <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img-school5.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с детьми</div>
                                    <h1>Бесплатно</h1>
                                    <p>Конференция «Поговорим о школе»</p>
                                    <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img-child3.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с детьми</div>
                                    <h1>Бесплатно</h1>
                                    <p>Вебинар «Мама на нуле – 2.0»</p>
                                    <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img-child4.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с детьми</div>
                                    <h1>Бесплатно</h1>
                                    <p>Памятка «Привязанность, а не оковы»</p>
                                    <p class="author-text">Авторы: <a href="#">Петрановская Людмила</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div> 
                            </div>	
                            <div class="swiper-button-next"></div>
                          <div class="swiper-button-prev"></div>   
                          <div class="swiper-pagination"></div>          
                            </div>
                        </div>
  </section>`
  gallery_test_wrap.prepend(relationship_partners)                  
  swiperFunc()
}

//business blocks
function gallery_business_availability() {
  document.getElementById('business-gallery_block').style.display = "block"
  let business_male = document.createElement('div')
  business_male.innerHTML += `
  <section class="gallery gallery-swiper relationship-gallery_test">
                        <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>бизнес-образования (MBA)</span></h1> <a href="#">Смотреть все</a></div>                    
                        <div class="wrapper swiper">
                            <div class="swiper">
                            <div class="swiper-wrapper gallery_cont"> 
                                <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img2.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>9800 ₽</h1>
                                    <p>Сексуальный интеллект</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img3.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Мастер-класс «Я такая одна: удобная или уникальная?</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img4.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img5.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                            </div>	
                            <div class="swiper-button-next"></div>
                          <div class="swiper-button-prev"></div>
                          <div class="swiper-pagination"></div>     
                            </div>
                        </div>
  </section>`
  business_gallery_test_wrap.prepend(business_male)
  swiperFunc()  
}

function gallery_business_experience() {
  document.getElementById('business-gallery_block').style.display = "block"
  let business_male = document.createElement('div')
  business_male.innerHTML += `
  <section class="gallery gallery-swiper relationship-gallery_test">
                        <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>открытия собственного бизнеса</span></h1> <a href="#">Смотреть все</a></div>                    
                        <div class="wrapper swiper">
                            <div class="swiper">
                            <div class="swiper-wrapper gallery_cont"> 
                                <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img2.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>9800 ₽</h1>
                                    <p>Сексуальный интеллект</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img3.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Мастер-класс «Я такая одна: удобная или уникальная?</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img4.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img5.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                            </div>	
                            <div class="swiper-button-next"></div>
                          <div class="swiper-button-prev"></div>
                          <div class="swiper-pagination"></div>     
                            </div>
                        </div>
  </section>`
  business_gallery_test_wrap.prepend(business_male)
  swiperFunc()  
}

function gallery_business_manipulation() {
  document.getElementById('business-gallery_block').style.display = "block"
  let business_male = document.createElement('div')
  business_male.innerHTML += `
  <section class="gallery gallery-swiper relationship-gallery_test">
    <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>управления бизнесом</span></h1> <a href="#">Смотреть все</a></div>                    
    <div class="wrapper swiper">
        <div class="swiper">
        <div class="swiper-wrapper gallery_cont"> 
            <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                <h1>Бесплатно</h1>
                <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img2.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                <h1>9800 ₽</h1>
                <p>Сексуальный интеллект</p>
                <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img3.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                <h1>Бесплатно</h1>
                <p>Мастер-класс «Я такая одна: удобная или уникальная?</p>
                <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img4.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                <h1>Бесплатно</h1>
                <p>Руководство «Как выйти замуж за Любимого»</p>
                <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img5.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                <h1>Бесплатно</h1>
                <p>Руководство «Как выйти замуж за Любимого»</p>
                <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                <h1>Бесплатно</h1>
                <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
              <div class="swiper-slide">
                <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                <div class="swiper-love_icon">
                    <div><img src="assets/img/love-icon.svg" alt=""></div>
                    <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                </div>
                <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                <h1>Бесплатно</h1>
                <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
              </div>
        </div>	
        <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>     
        </div>
    </div>
  </section>`
  business_gallery_test_wrap.prepend(business_male)
  swiperFunc()  
}

function gallery_business_recruitment() {
  document.getElementById('business-gallery_block').style.display = "block"
  let business_male = document.createElement('div')
  business_male.innerHTML += `
  <section class="gallery gallery-swiper relationship-gallery_test">
                        <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>управление персоналом</span></h1> <a href="#">Смотреть все</a></div>                    
                        <div class="wrapper swiper">
                            <div class="swiper">
                            <div class="swiper-wrapper gallery_cont"> 
                                <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img2.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>9800 ₽</h1>
                                    <p>Сексуальный интеллект</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img3.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Мастер-класс «Я такая одна: удобная или уникальная?</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img4.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img5.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                            </div>	
                            <div class="swiper-button-next"></div>
                          <div class="swiper-button-prev"></div>
                          <div class="swiper-pagination"></div>     
                            </div>
                        </div>
  </section>`
  business_gallery_test_wrap.prepend(business_male)
  swiperFunc()  
}

function gallery_business_service() {
  document.getElementById('business-gallery_block').style.display = "block"
  let business_male = document.createElement('div')
  business_male.innerHTML += `
  <section class="gallery gallery-swiper relationship-gallery_test">
                        <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>работа с клиентами</span></h1> <a href="#">Смотреть все</a></div>                    
                        <div class="wrapper swiper">
                            <div class="swiper">
                            <div class="swiper-wrapper gallery_cont"> 
                                <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img2.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>9800 ₽</h1>
                                    <p>Сексуальный интеллект</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img3.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Мастер-класс «Я такая одна: удобная или уникальная?</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img4.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img5.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                            </div>	
                            <div class="swiper-button-next"></div>
                          <div class="swiper-button-prev"></div>
                          <div class="swiper-pagination"></div>     
                            </div>
                        </div>
  </section>`
  business_gallery_test_wrap.prepend(business_male)
  swiperFunc()  
}

//spiritual block
function gallery_spiritual_medicine() {
  document.getElementById('spiritual-gallery_block').style.display = "block"
  let spiritual_male = document.createElement('div')
  spiritual_male.innerHTML += `
  <section class="gallery gallery-swiper relationship-gallery_test">
                        <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>Медитация</span></h1> <a href="#">Смотреть все</a></div>                    
                        <div class="wrapper swiper">
                            <div class="swiper">
                            <div class="swiper-wrapper gallery_cont"> 
                                <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img2.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>9800 ₽</h1>
                                    <p>Сексуальный интеллект</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img3.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Мастер-класс «Я такая одна: удобная или уникальная?</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img4.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img5.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                            </div>	
                            <div class="swiper-button-next"></div>
                          <div class="swiper-button-prev"></div>
                          <div class="swiper-pagination"></div>     
                            </div>
                        </div>
  </section>`
  spiritual_gallery_test_wrap.prepend(spiritual_male)
  swiperFunc()  
}

function gallery_spiritual_finance() {
  document.getElementById('spiritual-gallery_block').style.display = "block"
  let spiritual_male = document.createElement('div')
  spiritual_male.innerHTML += `
  <section class="gallery gallery-swiper relationship-gallery_test">
                        <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>Привлечение финансов</span></h1> <a href="#">Смотреть все</a></div>                    
                        <div class="wrapper swiper">
                            <div class="swiper">
                            <div class="swiper-wrapper gallery_cont"> 
                                <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img2.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>9800 ₽</h1>
                                    <p>Сексуальный интеллект</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img3.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Мастер-класс «Я такая одна: удобная или уникальная?</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img4.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img5.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                            </div>	
                            <div class="swiper-button-next"></div>
                          <div class="swiper-button-prev"></div>
                          <div class="swiper-pagination"></div>     
                            </div>
                        </div>
  </section>`
  spiritual_gallery_test_wrap.prepend(spiritual_male)
  swiperFunc()  
}

function gallery_business_skills() {
  document.getElementById('spiritual-gallery_block').style.display = "block"
  let spiritual_male = document.createElement('div')
  spiritual_male.innerHTML += `
  <section class="gallery gallery-swiper relationship-gallery_test">
                        <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>Исполнение желаний</span></h1> <a href="#">Смотреть все</a></div>                    
                        <div class="wrapper swiper">
                            <div class="swiper">
                            <div class="swiper-wrapper gallery_cont"> 
                                <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img2.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>9800 ₽</h1>
                                    <p>Сексуальный интеллект</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img3.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Мастер-класс «Я такая одна: удобная или уникальная?</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img4.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img5.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                            </div>	
                            <div class="swiper-button-next"></div>
                          <div class="swiper-button-prev"></div>
                          <div class="swiper-pagination"></div>     
                            </div>
                        </div>
  </section>`
  spiritual_gallery_test_wrap.prepend(spiritual_male)
  swiperFunc()  
}

function gallery_spiritual_mindfulness() {
  document.getElementById('spiritual-gallery_block').style.display = "block"
  let spiritual_male = document.createElement('div')
  spiritual_male.innerHTML += `
  <section class="gallery gallery-swiper relationship-gallery_test">
                        <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>Осознанность</span></h1> <a href="#">Смотреть все</a></div>                    
                        <div class="wrapper swiper">
                            <div class="swiper">
                            <div class="swiper-wrapper gallery_cont"> 
                                <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img2.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>9800 ₽</h1>
                                    <p>Сексуальный интеллект</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img3.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Мастер-класс «Я такая одна: удобная или уникальная?</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img4.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img5.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                            </div>	
                            <div class="swiper-button-next"></div>
                          <div class="swiper-button-prev"></div>
                          <div class="swiper-pagination"></div>     
                            </div>
                        </div>
  </section>`
  spiritual_gallery_test_wrap.prepend(spiritual_male)
  swiperFunc()  
}

function gallery_spiritual_knowledge() {
  document.getElementById('spiritual-gallery_block').style.display = "block"
  let spiritual_male = document.createElement('div')
  spiritual_male.innerHTML += `
  <section class="gallery gallery-swiper relationship-gallery_test">
                        <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>Эзотерические знания</span></h1> <a href="#">Смотреть все</a></div>                    
                        <div class="wrapper swiper">
                            <div class="swiper">
                            <div class="swiper-wrapper gallery_cont"> 
                                <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img2.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>9800 ₽</h1>
                                    <p>Сексуальный интеллект</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img3.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Мастер-класс «Я такая одна: удобная или уникальная?</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img4.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img5.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                            </div>	
                            <div class="swiper-button-next"></div>
                          <div class="swiper-button-prev"></div>
                          <div class="swiper-pagination"></div>     
                            </div>
                        </div>
  </section>`
  spiritual_gallery_test_wrap.prepend(spiritual_male)
  swiperFunc()  
}

//personal blocks 
function gallery_personal_self() {
  document.getElementById('personal-gallery_block').style.display = "block"
  let personal_male = document.createElement('div')
  personal_male.innerHTML += `
  <section class="gallery gallery-swiper relationship-gallery_test">
                        <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>Самомотивация</span></h1> <a href="#">Смотреть все</a></div>                    
                        <div class="wrapper swiper">
                            <div class="swiper">
                            <div class="swiper-wrapper gallery_cont"> 
                                <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img2.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>9800 ₽</h1>
                                    <p>Сексуальный интеллект</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img3.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Мастер-класс «Я такая одна: удобная или уникальная?</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img4.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img5.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                            </div>	
                            <div class="swiper-button-next"></div>
                          <div class="swiper-button-prev"></div>
                          <div class="swiper-pagination"></div>     
                            </div>
                        </div>
  </section>`
  personal_gallery_test_wrap.prepend(personal_male)
  swiperFunc()  
}

function gallery_personal_goal() {
  document.getElementById('personal-gallery_block').style.display = "block"
  let personal_male = document.createElement('div')
  personal_male.innerHTML += `
  <section class="gallery gallery-swiper relationship-gallery_test">
                        <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>Постановка и достижение целей</span></h1> <a href="#">Смотреть все</a></div>                    
                        <div class="wrapper swiper">
                            <div class="swiper">
                            <div class="swiper-wrapper gallery_cont"> 
                                <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img2.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>9800 ₽</h1>
                                    <p>Сексуальный интеллект</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img3.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Мастер-класс «Я такая одна: удобная или уникальная?</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img4.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img5.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                            </div>	
                            <div class="swiper-button-next"></div>
                          <div class="swiper-button-prev"></div>
                          <div class="swiper-pagination"></div>     
                            </div>
                        </div>
  </section>`
  personal_gallery_test_wrap.prepend(personal_male)
  swiperFunc()  
}

function gallery_personal_menegment() {
  document.getElementById('personal-gallery_block').style.display = "block"
  let personal_male = document.createElement('div')
  personal_male.innerHTML += `
  <section class="gallery gallery-swiper relationship-gallery_test">
                        <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>Тайм-менеджмент</span></h1> <a href="#">Смотреть все</a></div>                    
                        <div class="wrapper swiper">
                            <div class="swiper">
                            <div class="swiper-wrapper gallery_cont"> 
                                <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img2.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>9800 ₽</h1>
                                    <p>Сексуальный интеллект</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img3.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Мастер-класс «Я такая одна: удобная или уникальная?</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img4.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img5.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                            </div>	
                            <div class="swiper-button-next"></div>
                          <div class="swiper-button-prev"></div>
                          <div class="swiper-pagination"></div>     
                            </div>
                        </div>
  </section>`
  personal_gallery_test_wrap.prepend(personal_male)
  swiperFunc()  
}

function gallery_personal_leadership() {
  document.getElementById('personal-gallery_block').style.display = "block"
  let personal_male = document.createElement('div')
  personal_male.innerHTML += `
  <section class="gallery gallery-swiper relationship-gallery_test">
                        <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>Лидерство</span></h1> <a href="#">Смотреть все</a></div>                    
                        <div class="wrapper swiper">
                            <div class="swiper">
                            <div class="swiper-wrapper gallery_cont"> 
                                <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img2.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>9800 ₽</h1>
                                    <p>Сексуальный интеллект</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img3.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Мастер-класс «Я такая одна: удобная или уникальная?</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img4.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img5.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                            </div>	
                            <div class="swiper-button-next"></div>
                          <div class="swiper-button-prev"></div>
                          <div class="swiper-pagination"></div>     
                            </div>
                        </div>
  </section>`
  personal_gallery_test_wrap.prepend(personal_male)
  swiperFunc()  
}

function gallery_personal_skills() {
  document.getElementById('personal-gallery_block').style.display = "block"
  let personal_male = document.createElement('div')
  personal_male.innerHTML += `
  <section class="gallery gallery-swiper relationship-gallery_test">
                        <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>Навыки общения</span></h1> <a href="#">Смотреть все</a></div>                    
                        <div class="wrapper swiper">
                            <div class="swiper">
                            <div class="swiper-wrapper gallery_cont"> 
                                <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img2.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>9800 ₽</h1>
                                    <p>Сексуальный интеллект</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img3.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Мастер-класс «Я такая одна: удобная или уникальная?</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img4.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img5.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                            </div>	
                            <div class="swiper-button-next"></div>
                          <div class="swiper-button-prev"></div>
                          <div class="swiper-pagination"></div>     
                            </div>
                        </div>
  </section>`
  personal_gallery_test_wrap.prepend(personal_male)
  swiperFunc()  
}

function gallery_personal_brand() {
  document.getElementById('personal-gallery_block').style.display = "block"
  let personal_male = document.createElement('div')
  personal_male.innerHTML += `
  <section class="gallery gallery-swiper relationship-gallery_test">
                        <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>Личный бренд</span></h1> <a href="#">Смотреть все</a></div>                    
                        <div class="wrapper swiper">
                            <div class="swiper">
                            <div class="swiper-wrapper gallery_cont"> 
                                <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img2.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>9800 ₽</h1>
                                    <p>Сексуальный интеллект</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img3.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Мастер-класс «Я такая одна: удобная или уникальная?</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img4.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img5.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                            </div>	
                            <div class="swiper-button-next"></div>
                          <div class="swiper-button-prev"></div>
                          <div class="swiper-pagination"></div>     
                            </div>
                        </div>
  </section>`
  personal_gallery_test_wrap.prepend(personal_male)
  swiperFunc()  
}

function gallery_personal_sexuality() {
  document.getElementById('personal-gallery_block').style.display = "block"
  let personal_male = document.createElement('div')
  personal_male.innerHTML += `
  <section class="gallery gallery-swiper relationship-gallery_test">
                        <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>Женственность и сексуальность</span></h1> <a href="#">Смотреть все</a></div>                    
                        <div class="wrapper swiper">
                            <div class="swiper">
                            <div class="swiper-wrapper gallery_cont"> 
                                <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img2.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>9800 ₽</h1>
                                    <p>Сексуальный интеллект</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img3.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Мастер-класс «Я такая одна: удобная или уникальная?</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img4.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img5.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                            </div>	
                            <div class="swiper-button-next"></div>
                          <div class="swiper-button-prev"></div>
                          <div class="swiper-pagination"></div>     
                            </div>
                        </div>
  </section>`
  personal_gallery_test_wrap.prepend(personal_male)
  swiperFunc()  
}

function gallery_personal_history() {
  document.getElementById('personal-gallery_block').style.display = "block"
  let personal_male = document.createElement('div')
  personal_male.innerHTML += `
  <section class="gallery gallery-swiper relationship-gallery_test">
                        <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>Культура и история</span></h1> <a href="#">Смотреть все</a></div>                    
                        <div class="wrapper swiper">
                            <div class="swiper">
                            <div class="swiper-wrapper gallery_cont"> 
                                <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img2.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>9800 ₽</h1>
                                    <p>Сексуальный интеллект</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img3.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Мастер-класс «Я такая одна: удобная или уникальная?</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img4.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img5.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                            </div>	
                            <div class="swiper-button-next"></div>
                          <div class="swiper-button-prev"></div>
                          <div class="swiper-pagination"></div>     
                            </div>
                        </div>
  </section>`
  personal_gallery_test_wrap.prepend(personal_male)
  swiperFunc()  
}

function gallery_personal_languages() {
  document.getElementById('personal-gallery_block').style.display = "block"
  let personal_male = document.createElement('div')
  personal_male.innerHTML += `
  <section class="gallery gallery-swiper relationship-gallery_test">
                        <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>Владение иностранными языкам</span></h1> <a href="#">Смотреть все</a></div>                    
                        <div class="wrapper swiper">
                            <div class="swiper">
                            <div class="swiper-wrapper gallery_cont"> 
                                <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img2.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>9800 ₽</h1>
                                    <p>Сексуальный интеллект</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img3.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Мастер-класс «Я такая одна: удобная или уникальная?</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img4.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img5.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                            </div>	
                            <div class="swiper-button-next"></div>
                          <div class="swiper-button-prev"></div>
                          <div class="swiper-pagination"></div>     
                            </div>
                        </div>
  </section>`
  personal_gallery_test_wrap.prepend(personal_male)
  swiperFunc()  
}

//hobby block 
function gallery_hobby_needlework() {
  document.getElementById('hobby-gallery_block').style.display = "block"
  let hobby_male = document.createElement('div')
  hobby_male.innerHTML += `
  <section class="gallery gallery-swiper relationship-gallery_test">
                        <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>Рукоделие</span></h1> <a href="#">Смотреть все</a></div>                    
                        <div class="wrapper swiper">
                            <div class="swiper">
                            <div class="swiper-wrapper gallery_cont"> 
                                <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img2.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>9800 ₽</h1>
                                    <p>Сексуальный интеллект</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img3.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Мастер-класс «Я такая одна: удобная или уникальная?</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img4.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img5.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                            </div>	
                            <div class="swiper-button-next"></div>
                          <div class="swiper-button-prev"></div>
                          <div class="swiper-pagination"></div>     
                            </div>
                        </div>
  </section>`
  hobby_gallery_test_wrap.prepend(hobby_male)
  swiperFunc()  
}

function gallery_hobby_cooking() {
  document.getElementById('hobby-gallery_block').style.display = "block"
  let hobby_male = document.createElement('div')
  hobby_male.innerHTML += `
  <section class="gallery gallery-swiper relationship-gallery_test">
                        <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>Кулинария</span></h1> <a href="#">Смотреть все</a></div>                    
                        <div class="wrapper swiper">
                            <div class="swiper">
                            <div class="swiper-wrapper gallery_cont"> 
                                <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img2.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>9800 ₽</h1>
                                    <p>Сексуальный интеллект</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img3.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Мастер-класс «Я такая одна: удобная или уникальная?</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img4.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img5.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                            </div>	
                            <div class="swiper-button-next"></div>
                          <div class="swiper-button-prev"></div>
                          <div class="swiper-pagination"></div>     
                            </div>
                        </div>
  </section>`
  hobby_gallery_test_wrap.prepend(hobby_male)
  swiperFunc()  
}

function gallery_hobby_painting() {
  document.getElementById('hobby-gallery_block').style.display = "block"
  let hobby_male = document.createElement('div')
  hobby_male.innerHTML += `
  <section class="gallery gallery-swiper relationship-gallery_test">
                        <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>Рисование</span></h1> <a href="#">Смотреть все</a></div>                    
                        <div class="wrapper swiper">
                            <div class="swiper">
                            <div class="swiper-wrapper gallery_cont"> 
                                <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img2.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>9800 ₽</h1>
                                    <p>Сексуальный интеллект</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img3.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Мастер-класс «Я такая одна: удобная или уникальная?</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img4.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img5.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                            </div>	
                            <div class="swiper-button-next"></div>
                          <div class="swiper-button-prev"></div>
                          <div class="swiper-pagination"></div>     
                            </div>
                        </div>
  </section>`
  hobby_gallery_test_wrap.prepend(hobby_male)
  swiperFunc()  
}

function gallery_hobby_photo() {
  document.getElementById('hobby-gallery_block').style.display = "block"
  let hobby_male = document.createElement('div')
  hobby_male.innerHTML += `
  <section class="gallery gallery-swiper relationship-gallery_test">
                        <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>Фото и видео</span></h1> <a href="#">Смотреть все</a></div>                    
                        <div class="wrapper swiper">
                            <div class="swiper">
                            <div class="swiper-wrapper gallery_cont"> 
                                <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img2.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>9800 ₽</h1>
                                    <p>Сексуальный интеллект</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img3.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Мастер-класс «Я такая одна: удобная или уникальная?</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img4.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img5.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                            </div>	
                            <div class="swiper-button-next"></div>
                          <div class="swiper-button-prev"></div>
                          <div class="swiper-pagination"></div>     
                            </div>
                        </div>
  </section>`
  hobby_gallery_test_wrap.prepend(hobby_male)
  swiperFunc()  
}

function gallery_hobby_music() {
  document.getElementById('hobby-gallery_block').style.display = "block"
  let hobby_male = document.createElement('div')
  hobby_male.innerHTML += `
  <section class="gallery gallery-swiper relationship-gallery_test">
                        <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>Музыка</span></h1> <a href="#">Смотреть все</a></div>                    
                        <div class="wrapper swiper">
                            <div class="swiper">
                            <div class="swiper-wrapper gallery_cont"> 
                                <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img2.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>9800 ₽</h1>
                                    <p>Сексуальный интеллект</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img3.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Мастер-класс «Я такая одна: удобная или уникальная?</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img4.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img5.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                            </div>	
                            <div class="swiper-button-next"></div>
                          <div class="swiper-button-prev"></div>
                          <div class="swiper-pagination"></div>     
                            </div>
                        </div>
  </section>`
  hobby_gallery_test_wrap.prepend(hobby_male)
  swiperFunc()  
}

function gallery_personal_hobby_house() {
  document.getElementById('hobby-gallery_block').style.display = "block"
  let hobby_male = document.createElement('div')
  hobby_male.innerHTML += `
  <section class="gallery gallery-swiper relationship-gallery_test">
                        <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>Дом и сад</span></h1> <a href="#">Смотреть все</a></div>                    
                        <div class="wrapper swiper">
                            <div class="swiper">
                            <div class="swiper-wrapper gallery_cont"> 
                                <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img2.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>9800 ₽</h1>
                                    <p>Сексуальный интеллект</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img3.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Мастер-класс «Я такая одна: удобная или уникальная?</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img4.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img5.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                            </div>	
                            <div class="swiper-button-next"></div>
                          <div class="swiper-button-prev"></div>
                          <div class="swiper-pagination"></div>     
                            </div>
                        </div>
  </section>`
  hobby_gallery_test_wrap.prepend(hobby_male)
  swiperFunc()  
}

function gallery_hobby_dancing() {
  document.getElementById('hobby-gallery_block').style.display = "block"
  let hobby_male = document.createElement('div')
  hobby_male.innerHTML += `
  <section class="gallery gallery-swiper relationship-gallery_test">
                        <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>Танцы</span></h1> <a href="#">Смотреть все</a></div>                    
                        <div class="wrapper swiper">
                            <div class="swiper">
                            <div class="swiper-wrapper gallery_cont"> 
                                <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img2.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>9800 ₽</h1>
                                    <p>Сексуальный интеллект</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img3.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Мастер-класс «Я такая одна: удобная или уникальная?</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img4.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img5.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                            </div>	
                            <div class="swiper-button-next"></div>
                          <div class="swiper-button-prev"></div>
                          <div class="swiper-pagination"></div>     
                            </div>
                        </div>
  </section>`
  hobby_gallery_test_wrap.prepend(hobby_male)
  swiperFunc()  
}

function gallery_personal_hobby_driving() {
  document.getElementById('hobby-gallery_block').style.display = "block"
  let hobby_male = document.createElement('div')
  hobby_male.innerHTML += `
  <section class="gallery gallery-swiper relationship-gallery_test">
                        <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>Вождение и тюнинг</span></h1> <a href="#">Смотреть все</a></div>                    
                        <div class="wrapper swiper">
                            <div class="swiper">
                            <div class="swiper-wrapper gallery_cont"> 
                                <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img2.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>9800 ₽</h1>
                                    <p>Сексуальный интеллект</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img3.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Мастер-класс «Я такая одна: удобная или уникальная?</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img4.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img5.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                            </div>	
                            <div class="swiper-button-next"></div>
                          <div class="swiper-button-prev"></div>
                          <div class="swiper-pagination"></div>     
                            </div>
                        </div>
  </section>`
  hobby_gallery_test_wrap.prepend(hobby_male)
  swiperFunc()  
}

function gallery_personal_hobby_training() {
  document.getElementById('hobby-gallery_block').style.display = "block"
  let hobby_male = document.createElement('div')
  hobby_male.innerHTML += `
  <section class="gallery gallery-swiper relationship-gallery_test">
                        <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>Дрессировка</span></h1> <a href="#">Смотреть все</a></div>                    
                        <div class="wrapper swiper">
                            <div class="swiper">
                            <div class="swiper-wrapper gallery_cont"> 
                                <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img2.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>9800 ₽</h1>
                                    <p>Сексуальный интеллект</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img3.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Мастер-класс «Я такая одна: удобная или уникальная?</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img4.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img5.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                            </div>	
                            <div class="swiper-button-next"></div>
                          <div class="swiper-button-prev"></div>
                          <div class="swiper-pagination"></div>     
                            </div>
                        </div>
  </section>`
  hobby_gallery_test_wrap.prepend(hobby_male)
  swiperFunc()  
}

function gallery_personal_hobby_modeling() {
  document.getElementById('hobby-gallery_block').style.display = "block"
  let hobby_male = document.createElement('div')
  hobby_male.innerHTML += `
  <section class="gallery gallery-swiper relationship-gallery_test">
                        <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>Моделирование и пошив одежды</span></h1> <a href="#">Смотреть все</a></div>                    
                        <div class="wrapper swiper">
                            <div class="swiper">
                            <div class="swiper-wrapper gallery_cont"> 
                                <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img2.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>9800 ₽</h1>
                                    <p>Сексуальный интеллект</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img3.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Мастер-класс «Я такая одна: удобная или уникальная?</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img4.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img5.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                            </div>	
                            <div class="swiper-button-next"></div>
                          <div class="swiper-button-prev"></div>
                          <div class="swiper-pagination"></div>     
                            </div>
                        </div>
  </section>`
  hobby_gallery_test_wrap.prepend(hobby_male)
  swiperFunc()  
}

function gallery_personal_hobby_decor() {
  document.getElementById('hobby-gallery_block').style.display = "block"
  let hobby_male = document.createElement('div')
  hobby_male.innerHTML += `
  <section class="gallery gallery-swiper relationship-gallery_test">
                        <div class="relationship-title_wrap"><h1 class="relationship-title">Курсы по теме <span>Декор и флористика</span></h1> <a href="#">Смотреть все</a></div>                    
                        <div class="wrapper swiper">
                            <div class="swiper">
                            <div class="swiper-wrapper gallery_cont"> 
                                <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img2.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>9800 ₽</h1>
                                    <p>Сексуальный интеллект</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img3.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Мастер-класс «Я такая одна: удобная или уникальная?</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img4.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img5.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>Руководство «Как выйти замуж за Любимого»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                                  <div class="swiper-slide">
                                    <img src="assets/img/swiper/swiper-img1.png" alt="" class="swiper-img">
                                    <div class="swiper-love_icon">
                                        <div><img src="assets/img/love-icon.svg" alt=""></div>
                                        <div><img src="assets/img/grafic-icon.svg" alt=""></div>
                                    </div>
                                    <div class="swiper-alert_wrap">Отношения с мужчинами</div>
                                    <h1>Бесплатно</h1>
                                    <p>«Магия взгляда. Как влюбить в себя любого мужчину»</p>
                                    <p class="author-text">Авторы: <a href="#">Родник Лилия</a></p>
                                    <div class="swiper-star_wrap"><span>4,7</span><img src="assets/img/4.7-star.png" alt=""><span class="swiper-star_span-sec">459</span></div>
                                  </div>
                            </div>	
                            <div class="swiper-button-next"></div>
                          <div class="swiper-button-prev"></div>
                          <div class="swiper-pagination"></div>     
                            </div>
                        </div>
  </section>`
  hobby_gallery_test_wrap.prepend(hobby_male)
  swiperFunc()  
}