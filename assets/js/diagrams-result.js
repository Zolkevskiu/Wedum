const diagram_test_button = document.querySelector(".diagram-test_button")
const diagram_test_block = document.querySelectorAll(".diagram-test_result")


function diagram_button_krasota() {
    diagram_test_block[0].style.display = 'block'
    diagram_test_block[1].style.display = 'none'
    diagram_test_block[2].style.display = 'none'
    diagram_test_block[3].style.display = 'none'
    diagram_test_block[4].style.display = 'none'
    diagram_test_block[5].style.display = 'none'
    diagram_test_block[6].style.display = 'none'
    diagram_test_block[7].style.display = 'none'
    diagram_test_block[8].style.display = 'none'
}
function diagram_button_works() {           
    diagram_test_block[0].style.display = 'none'
    diagram_test_block[1].style.display = 'block'
    diagram_test_block[2].style.display = 'none'
    diagram_test_block[3].style.display = 'none'
    diagram_test_block[4].style.display = 'none'
    diagram_test_block[5].style.display = 'none'
    diagram_test_block[6].style.display = 'none'
    diagram_test_block[7].style.display = 'none'
    diagram_test_block[8].style.display = 'none'
}
function diagram_button_live() {
    diagram_test_block[0].style.display = 'none'
    diagram_test_block[1].style.display = 'none'
    diagram_test_block[2].style.display = 'block'
    diagram_test_block[3].style.display = 'none'
    diagram_test_block[4].style.display = 'none'
    diagram_test_block[5].style.display = 'none'
    diagram_test_block[6].style.display = 'none'
    diagram_test_block[7].style.display = 'none'
    diagram_test_block[8].style.display = 'none'
}
function diagram_button_finance() {
    diagram_test_block[0].style.display = 'none'
    diagram_test_block[1].style.display = 'none'
    diagram_test_block[2].style.display = 'none'
    diagram_test_block[3].style.display = 'block'
    diagram_test_block[4].style.display = 'none'
    diagram_test_block[5].style.display = 'none'
    diagram_test_block[6].style.display = 'none'
    diagram_test_block[7].style.display = 'none'
    diagram_test_block[8].style.display = 'none'
}
function diagram_button_relationship() {
    diagram_test_block[0].style.display = 'none'
    diagram_test_block[1].style.display = 'none'
    diagram_test_block[2].style.display = 'none'
    diagram_test_block[3].style.display = 'none'
    diagram_test_block[4].style.display = 'block'
    diagram_test_block[5].style.display = 'none'
    diagram_test_block[6].style.display = 'none'
    diagram_test_block[7].style.display = 'none'
    diagram_test_block[8].style.display = 'none'
}
function diagram_button_business() {
    diagram_test_block[0].style.display = 'none'
    diagram_test_block[1].style.display = 'none'
    diagram_test_block[2].style.display = 'none'
    diagram_test_block[3].style.display = 'none'
    diagram_test_block[4].style.display = 'none'
    diagram_test_block[5].style.display = 'block'
    diagram_test_block[6].style.display = 'none'
    diagram_test_block[7].style.display = 'none'
    diagram_test_block[8].style.display = 'none'
}
function diagram_button_spiritual_growth() {
    diagram_test_block[0].style.display = 'none'
    diagram_test_block[1].style.display = 'none'
    diagram_test_block[2].style.display = 'none'
    diagram_test_block[3].style.display = 'none'
    diagram_test_block[4].style.display = 'none'
    diagram_test_block[5].style.display = 'none'
    diagram_test_block[6].style.display = 'block'
    diagram_test_block[7].style.display = 'none'
    diagram_test_block[8].style.display = 'none'
}
function diagram_button_personal_growth() {
    diagram_test_block[0].style.display = 'none'
    diagram_test_block[1].style.display = 'none'
    diagram_test_block[2].style.display = 'none'
    diagram_test_block[3].style.display = 'none'
    diagram_test_block[4].style.display = 'none'
    diagram_test_block[5].style.display = 'none'
    diagram_test_block[6].style.display = 'none'
    diagram_test_block[7].style.display = 'block'
    diagram_test_block[8].style.display = 'none'
}
function diagram_button_hobbies() {
    diagram_test_block[0].style.display = 'none'
    diagram_test_block[1].style.display = 'none'
    diagram_test_block[2].style.display = 'none'
    diagram_test_block[3].style.display = 'none'
    diagram_test_block[4].style.display = 'none'
    diagram_test_block[5].style.display = 'none'
    diagram_test_block[6].style.display = 'none'
    diagram_test_block[7].style.display = 'none'
    diagram_test_block[8].style.display = 'block'
}

document.getElementById("works-result_show").addEventListener("click", ()=> {
    document.getElementById("works-result_show-block").style.display = "block";
});

document.getElementById("krasota-result_show").addEventListener("click", ()=> {
    document.getElementById("krasota-result_show-block").style.display = "block";
});


document.getElementById("health-result_show").addEventListener("click", ()=> {
    document.getElementById("health-result_show-block").style.display = "block";
});

document.getElementById("finance-result_show").addEventListener("click", ()=> {
    document.getElementById("finance-result_show-block").style.display = "block";
});

document.getElementById("relationship-result_show").addEventListener("click", ()=> {
    document.getElementById("relationship-result_show-block").style.display = "block";
});

document.getElementById("business-result_show").addEventListener("click", ()=> {
    document.getElementById("business-result_show-block").style.display = "block";
});

document.getElementById("spiritual-result_show").addEventListener("click", ()=> {
    document.getElementById("spiritual-result_show-block").style.display = "block";
});

document.getElementById("personal-result_show").addEventListener("click", ()=> {
    document.getElementById("personal-result_show-block").style.display = "block";
});

document.getElementById("hobby-result_show").addEventListener("click", ()=> {
    document.getElementById("hobby-result_show-block").style.display = "block";
});
