
const works_gallery_test_wrap = document.querySelector(".works-gallery-test_wrap")
const gallery_test_wrap = document.querySelector(".relationship-gallery-test_wrap")


document.getElementById('spheres-button').style.display = 'flex'

document.getElementById('spheres-button').addEventListener("click", ()=> { 
  document.getElementById('spheres-block').style.display = 'flex' 
  document.querySelector('.save-result_block').style.display = 'flex'
})

//krasota blocks
const krasota_swiper = document.querySelectorAll(".krasota-swiper")
const krasota_block = document.getElementById('krasota-gallery_block')

function gallery_krasota_figure() {
  krasota_block.style.display = "block"
  krasota_block.prepend(krasota_swiper[0])
}

function gallery_krasota_heir() {
  krasota_block.style.display = "block"
  krasota_block.prepend(krasota_swiper[1])
}

function gallery_krasota_face() {
  krasota_block.style.display = "block"
  krasota_block.prepend(krasota_swiper[2])
}

function gallery_krasota_fashion() {
  krasota_block.style.display = "block"
  krasota_block.prepend(krasota_swiper[3])
}

//works blocks
const works_block = document.getElementById('works-gallery_block')
const works_swipers = document.querySelectorAll(".works-swiper")

function gallery_works_creative() {
  works_block.style.display = "block"
  works_gallery_test_wrap.prepend(works_swipers[0])                  
}

function gallery_works_workIt() {
  works_block.style.display = "block"
  works_gallery_test_wrap.prepend(works_swipers[1])   
}

function gallery_works_finance() {
  works_block.style.display = "block"
  works_gallery_test_wrap.prepend(works_swipers[2])  
}

function gallery_works_organization() {
  works_block.style.display = "block"
  works_gallery_test_wrap.prepend(works_swipers[3])  
}

function gallery_works_promotion() {
  works_block.style.display = "block"
  works_gallery_test_wrap.prepend(works_swipers[4])  
}

function gallery_works_psychology() {
  works_block.style.display = "block"
  works_gallery_test_wrap.prepend(works_swipers[5])  
}

function gallery_works_business() {
  works_block.style.display = "block"
  works_gallery_test_wrap.prepend(works_swipers[6]) 
}

function gallery_works_beauty() {
  works_block.style.display = "block"
  works_gallery_test_wrap.prepend(works_swipers[7]) 
}

function gallery_works_educcation() {
  works_block.style.display = "block"
  works_gallery_test_wrap.prepend(works_swipers[8]) 
}

function gallery_works_travel() {
  works_block.style.display = "block"
  works_gallery_test_wrap.prepend(works_swipers[9]) 
}

//helath blocks 
const health_block = document.getElementById('health-gallery_block')
const health_swipers = document.querySelectorAll('.health-swiper')

function gallery_health_women() {
  health_block.style.display = "block"
  health_block.prepend(health_swipers[0])
}

function gallery_health_digestion() {
  health_block.style.display = "block"
  health_block.prepend(health_swipers[1])  
}

function gallery_health_vision() {
  health_block.style.display = "block"
  health_block.prepend(health_swipers[2])
}

function gallery_health_backJoints() {
  health_block.style.display = "block"
  health_block.prepend(health_swipers[3])
}

function gallery_health_painSyndrome() {
  health_block.style.display = "block"
  health_block.prepend(health_swipers[4])
}

function gallery_health_hormones() {
  health_block.style.display = "block"
  health_block.prepend(health_swipers[5])
}

function gallery_health_wellness() {
  health_block.style.display = "block"
  health_block.prepend(health_swipers[6])
}

function gallery_health_heartVesseles() {
  health_block.style.display = "block"
  health_block.prepend(health_swipers[7])
}

//finance blocks
const finance_block = document.getElementById('finance-gallery_block')
const finance_swipers = document.querySelectorAll(".finance-swiper")

function gallery_finance_attraction() {
  finance_block.style.display = "block"
  finance_block.prepend(finance_swipers[0])                  
}

function gallery_finance_literacy() {
  finance_block.style.display = "block"
  finance_block.prepend(finance_swipers[1])    
}

function gallery_finance_investment() {
  finance_block.style.display = "block"
  finance_block.prepend(finance_swipers[2])    
}

function gallery_finance_trading() {
  finance_block.style.display = "block"
  finance_block.prepend(finance_swipers[3])    
}

//relationship blocks
const relationship_block = document.getElementById('relationship-gallery_block')
const relationship_swipers = document.querySelectorAll(".relationship-swiper")

function gallery_relationship_male() {
  relationship_block.style.display = "block"
  relationship_block.prepend(relationship_swipers[0])
}

function gallery_relationship_child() {
  relationship_block.style.display = "block"
  relationship_block.prepend(relationship_swipers[1])
}

function gallery_relationship_parents() {
  relationship_block.style.display = "block"
  relationship_block.prepend(relationship_swipers[2])
}

function gallery_relationship_partners() {
  relationship_block.style.display = "block"
  relationship_block.prepend(relationship_swipers[3])
}

//business blocks
const business_block = document.getElementById('business-gallery_block')
const business_swipers = document.querySelectorAll(".business-swiper")

function gallery_business_availability() {
  business_block.style.display = "block"
  business_block.prepend(business_swipers[0])
}

function gallery_business_experience() {
  business_block.style.display = "block"
  business_block.prepend(business_swipers[1])
}

function gallery_business_manipulation() {
  business_block.style.display = "block"
  business_block.prepend(business_swipers[2])
}

function gallery_business_recruitment() {
  business_block.style.display = "block"
  business_block.prepend(business_swipers[3])
}

function gallery_business_service() {
  business_block.style.display = "block"
  business_block.prepend(business_swipers[4])
}

//spiritual block
const spiritual_block = document.getElementById('spiritual-gallery_block')
const spiritual_swipers = document.querySelectorAll(".spiritual-swiper")

function gallery_spiritual_medicine() {
  spiritual_block.style.display = "block"
  spiritual_block.prepend(spiritual_swipers[0])
}

function gallery_spiritual_finance() {
  spiritual_block.style.display = "block"
  spiritual_block.prepend(spiritual_swipers[1])
}

function gallery_business_skills() {
  spiritual_block.style.display = "block"
  spiritual_block.prepend(spiritual_swipers[2])
}

function gallery_spiritual_mindfulness() {
  spiritual_block.style.display = "block"
  spiritual_block.prepend(spiritual_swipers[3])
}

function gallery_spiritual_knowledge() {
  spiritual_block.style.display = "block"
  spiritual_block.prepend(spiritual_swipers[4])
}

//personal blocks 
const personal_block = document.getElementById('personal-gallery_block')
const personal_swipers = document.querySelectorAll(".personal-swiper")

function gallery_personal_self() {
  personal_block.style.display = "block"
  personal_block.prepend(personal_swipers[0])
}

function gallery_personal_goal() {
  personal_block.style.display = "block"
  personal_block.prepend(personal_swipers[1])
}

function gallery_personal_menegment() {
  personal_block.style.display = "block"
  personal_block.prepend(personal_swipers[2])
}

function gallery_personal_leadership() {
  personal_block.style.display = "block"
  personal_block.prepend(personal_swipers[3])
}

function gallery_personal_skills() {
  personal_block.style.display = "block"
  personal_block.prepend(personal_swipers[4]) 
}

function gallery_personal_brand() {
  personal_block.style.display = "block"
  personal_block.prepend(personal_swipers[5]) 
}

function gallery_personal_sexuality() {
  personal_block.style.display = "block"
  personal_block.prepend(personal_swipers[6]) 
}

function gallery_personal_history() {
  personal_block.style.display = "block"
  personal_block.prepend(personal_swipers[7]) 
}

function gallery_personal_languages() {
  personal_block.style.display = "block"
  personal_block.prepend(personal_swipers[8]) 
}

//hobby block 
const hobby_block = document.getElementById('hobby-gallery_block')
const hobby_swipers = document.querySelectorAll(".hobby-swiper")

function gallery_hobby_needlework() {
  hobby_block.style.display = "block"
  hobby_block.prepend(hobby_swipers[0])
}

function gallery_hobby_cooking() {
  hobby_block.style.display = "block"
  hobby_block.prepend(hobby_swipers[1])
}

function gallery_hobby_painting() {
  hobby_block.style.display = "block"
  hobby_block.prepend(hobby_swipers[2])
}

function gallery_hobby_photo() {
  hobby_block.style.display = "block"
  hobby_block.prepend(hobby_swipers[3])
}

function gallery_hobby_music() {
  hobby_block.style.display = "block"
  hobby_block.prepend(hobby_swipers[4])
}

function gallery_personal_hobby_house() {
  hobby_block.style.display = "block"
  hobby_block.prepend(hobby_swipers[5])
}

function gallery_hobby_dancing() {
  hobby_block.style.display = "block"
  hobby_block.prepend(hobby_swipers[6])
}

function gallery_personal_hobby_driving() {
  hobby_block.style.display = "block"
  hobby_block.prepend(hobby_swipers[7])
}

function gallery_personal_hobby_training() {
  hobby_block.style.display = "block"
  hobby_block.prepend(hobby_swipers[8])
}

function gallery_personal_hobby_modeling() {
  hobby_block.style.display = "block"
  hobby_block.prepend(hobby_swipers[9])
}

function gallery_personal_hobby_decor() {
  hobby_block.style.display = "block"
  hobby_block.prepend(hobby_swipers[10])
}