window.addEventListener('load', function (e) {
    let data = [];
    let inters = [];
    let mostCountSum = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let dataSum = [
        1, 
        1, 
        1, 
        1, 
        1, 
        1, 
        1, 
        1, 
        1
        ];
    let sumKrasota = [11, 0, 11, 0, 11, 0, 11, 0];
    let sumWorks = [
        0,
        0, 
        0, 
        0, 
        0, 
        0, 
        0, 
        0, 
        0, 
        0];
    let sumHealth = [
        0,
        0, 
        0, 
        0, 
        0, 
        0, 
        0, 
        0];
    let sumFinance = [11, 0, 11, 0, 11, 0, 11, 0];
    let sumRelationship = [11, 0, 11, 0, 11, 0, 11, 0];
    let sumBusiness = [11, 0, 11, 0, 0, 0, 11, 0];
    let sumSpiritual = [11, 0, 11, 0, 0, 0, 11, 0];
    let sumPersonal = [
    0, 
    0, 
    0, 
    0, 
    0, 
    0, 
    0, 
    0, 
    0
    ];
    let sumHobby = [
    10, 
    10, 
    10, 
    10, 
    10, 
    10, 
    10, 
    10, 
    10,
    10,
    10
    ];
    Chart.defaults.global.defaultFontSize = 0;
    const dataSets = {
        datasets: [{
            label: "My First Dataset",
            data: dataSum,
            borderWidth: 1,
            lineTension: 0,
            backgroundColor: [
                '#B670F7',
                '#A651F9',
                '#A557E0',
                '#8512E7',
                '#D400F5',
                '#4C0A86',
                '#5A08A2',
                '#6D00DD',
                '#C48FFA',
            ]
        }]
    };

    // Test functions
    // const counterItem = document.querySelectorAll(".counter-item");
    const counters = document.querySelector(".counters");
    const increments = document.querySelectorAll(".increment");
    const mostIncrements = document.querySelectorAll(".mostIncrements");
    const incrementsSec = document.querySelectorAll(".increment-sec");
    const incrementsRelationship = document.querySelectorAll(".increment-relationship");
    const incrementsWorks = document.querySelectorAll(".increment-works");
    const incrementsKrasota = document.querySelectorAll(".increment-krasota");
    const incrementsHealth = document.querySelectorAll(".increment-health");
    const incrementsFinance = document.querySelectorAll(".increment-finance");
    const incrementsBusiness = document.querySelectorAll(".increment-business");
    const incrementsSpiritual = document.querySelectorAll(".increment-spiritual");
    const incrementsPersonal = document.querySelectorAll(".increment-personal");
    const incrementsHobby = document.querySelectorAll(".increment-hobby");
    const decrements = document.querySelectorAll(".decrement");
    const mostDecrements = document.querySelectorAll(".mostDecrement");
    const decrementsSec = document.querySelectorAll(".decrement-sec");
    const decrementsRelationship = document.querySelectorAll(".decrement-relationship");
    const decrementsKrasota = document.querySelectorAll(".decrement-krasota");
    const decrementsWorks = document.querySelectorAll(".decrement-works");
    const decrementsHealth = document.querySelectorAll(".decrement-health");
    const decrementsFinance = document.querySelectorAll(".decrement-finance");
    const decrementsBusiness = document.querySelectorAll(".decrement-business");
    const decrementsSpiritual = document.querySelectorAll(".decrement-spiritual");
    const decrementsPersonal = document.querySelectorAll(".decrement-personal");
    const decrementsHobby = document.querySelectorAll(".decrement-hobby");
    const count = document.querySelectorAll(".count");
    const mostCount = document.querySelectorAll(".count-most");
    const countSec = document.querySelectorAll(".count-sec");
    const countKrasota = document.querySelectorAll(".count-krasota");
    const countRelationship = document.querySelectorAll(".count-relationship");
    const countWorks = document.querySelectorAll(".count-works");
    const countHealth = document.querySelectorAll(".count-health");
    const countFinance = document.querySelectorAll(".count-finance");
    const countBusiness = document.querySelectorAll(".count-business");
    const countSpiritual = document.querySelectorAll(".count-spiritual");
    const countPersonal = document.querySelectorAll(".count-personal");
    const countHobby = document.querySelectorAll(".count-hobby");
    const glWindow = document.querySelector(".gl-window");
    const btnCheck = document.querySelector(".btnCheck");
    const btnCheckSec = document.querySelector(".btnCheck-sec");
    const btnCheckRelationship = document.querySelector(".btnCheck-relationship");
    const btnCheckKrasota = document.querySelector(".btnCheck-krasota");
    const btnCheckWorks = document.querySelector(".btnCheck-works");
    const btnCheckHealth = document.querySelector(".btnCheck-health");
    const btnCheckFinance = document.querySelector(".btnCheck-finance");
    const btnCheckBusiness = document.querySelector(".btnCheck-business");
    const btnCheckSpiritual = document.querySelector(".btnCheck-spiritual");
    const btnCheckPersonal = document.querySelector(".btnCheck-personal");
    const btnCheckHobby = document.querySelector(".btnCheck-hobby");

    //functions
    function addSum(sum, index) {
        if (sum[index] != 10) {
            sum[index]++;
        }
        return sum[index];
    }

    function addSumSec(sum, index) {
        if (sum[index] != 3) {
            sum[index]++;
        }
        return sum[index];
    }

    function removeSum(sum, index) {
        if (sum[index] != 0) {
            sum[index]--;
        }
        return sum[index];
    }
    //add listeners

    // btnCheck.addEventListener('click', (e) => {
    //     let myChart = new Chart('myChart', {
    //         type: 'polarArea',
    //         data: dataSets,
    //         options: {
    //             scale: {
    //                 ticks: {
    //                     beginAtZero: true,
    //                     min: 0,
    //                     max: 10,
    //                     stepSize: 1
    //                 },
    //             },
    //             animation: {
    //                 animateRotate: false
    //             }
    //         },
    //     })
    // })
    
    btnCheck.addEventListener('click', (e) => {
        document.getElementById('diagram-block').style.display = 'block'
        let temp_if = false;

        for (let i2 = 0; i2 < dataSum.length; ++i2) {
            if (dataSum[i2] <= 0) {
                temp_if = true;
            }
        }

        if (temp_if) {
            alert('надо заполнить все сферы');
        } else {

            //очищаешь его
            let myChart = new Chart('myChart', {
                type: 'polarArea',
                data: dataSets,
                options: {
                    events: ['none'],
                    scale: {
                        ticks: {
                            beginAtZero: true,
                            min: 0,
                            max: 10,
                            stepSize: 1
                        },
                    },
                    animation: {
                        animateRotate: false
                    }
                },
            })

            //diagrama2
            let dataSum_temp = dataSum;

            let diagrama2 = [0, 0, 0, 0, 0, 0, 0, 0, 0];

            for (let i = 0; i < 3; ++i) {
                let minimum = dataSum_temp[0];
                let min_index = 0;

                for (let index = 0; index < dataSum_temp.length; ++index) {
                    if (dataSum_temp[index] < minimum) {
                        minimum = dataSum_temp[index];
                        min_index = index;
                    }
                }
                
                diagrama2[min_index] = dataSum_temp[min_index];
                dataSum_temp[min_index] = 100;

            }
            
            for (let i3 = 0; i3 < diagrama2.length; ++i3) {
                if(diagrama2[i3] > 0){
                    dataSum_temp[i3] = diagrama2[i3];
                }
            }
            // console.log(diagrama2);
           
            const dataSetsMost = {
                datasets: [{
                    label: "My sds Dataset",
                    data: diagrama2,
                    borderWidth: 1,
                    lineTension: 0,
                    backgroundColor: [
                        '#B670F7',
                        '#A651F9',
                        '#A557E0',
                        '#8512E7',
                        '#D400F5',
                        '#4C0A86',
                        '#5A08A2',
                        '#6D00DD',
                        '#C48FFA',
                    ]
                }]
            }
            //очищаешь его        
            
            let myChartMost = new Chart('myChartMost', {
                type: 'polarArea',
                data: dataSetsMost,
                options: {
                    events: ['none'],
                    scale: {
                        ticks: {
                            beginAtZero: true,
                            min: 0,
                            max: 10,
                            stepSize: 1
                        },
                    },
                    animation: {
                        animateRotate: false
                    }
                },
            })                        
           // myChartMost.update();   
            const spheres_relationship = document.getElementById("spheres-relationship")    
            const spheres_wrapper = document.getElementById("spheres-wrapper") 
            spheres_wrapper.innerHTML = ''          
            if(diagrama2[0] > 0) {

                spheres_wrapper.innerHTML += `<div class="spheres-block_wrap">
                <img src="assets/img/krasota.svg" alt="">
                <h2>Красота</h2>
                <a class="spheres-block_text-button" onclick="diagram_button_krasota()">Узнать подробнее</a>
                </div>`
            }
            if(diagrama2[1] > 0) {
                spheres_wrapper.innerHTML += `<div class="spheres-block_wrap">
                <img src="assets/img/work-icon.svg" alt="">
                <h2>Карьера и работа</h2>
                <a class="spheres-block_text-button" onclick="diagram_button_works()">Узнать подробнее</a>
            </div>`
            }
            if(diagrama2[2] > 0) {
                spheres_wrapper.innerHTML += `<div class="spheres-block_wrap">
                <img src="assets/img/live-icon.svg" alt="">
                <h2>Здоровье</h2>
                <a class="spheres-block_text-button" onclick="diagram_button_live()">Узнать подробнее</a>
            </div>`
            }
            if(diagrama2[3] > 0) {
                spheres_wrapper.innerHTML += `<div class="spheres-block_wrap">
                <img src="assets/img/finance-icon.svg" alt="">
                <h2>Финансы</h2>
                <a class="spheres-block_text-button" onclick="diagram_button_finance()">Узнать подробнее</a>
            </div>`
            }
            if(diagrama2[4] > 0) {
                spheres_wrapper.innerHTML += `<div class="spheres-block_wrap">
                <img src="assets/img/Relationship-icon.svg" alt="">
                <h2>Отношения</h2>
                <a class="spheres-block_text-button" onclick="diagram_button_relationship()">Узнать подробнее</a>
            </div>`
            }
            if(diagrama2[5] > 0) {
                spheres_wrapper.innerHTML += `<div class="spheres-block_wrap">
                <img src="assets/img/Business-icon.svg" alt="">
                <h2>Бизнес</h2>
                <a class="spheres-block_text-button" onclick="diagram_button_business()">Узнать подробнее</a>
            </div>`
            }
            if(diagrama2[6] > 0) {
                spheres_wrapper.innerHTML += `<div class="spheres-block_wrap">
                <img src="assets/img/spiritual-growth-icon.svg" alt="">
                <h2>Духовный рост</h2>
                <a class="spheres-block_text-button" onclick="diagram_button_spiritual_growth()">Узнать подробнее</a>
            </div>`
            }
            if(diagrama2[7] > 0) {
                spheres_wrapper.innerHTML += `<div class="spheres-block_wrap">
                <img src="assets/img/Personal-growth-icon.svg" alt="">
                <h2>Личностный рост</h2>
                <a class="spheres-block_text-button" onclick="diagram_button_personal_growth()">Узнать подробнее</a>
            </div>`
            }
            if(diagrama2[8] > 0) {
                spheres_wrapper.innerHTML += `<div class="spheres-block_wrap">
                <img src="assets/img/Creativity-hobbies-icon.svg" alt="">
                <h2>Творчество и хобби</h2>
                <a class="spheres-block_text-button" onclick="diagram_button_hobbies()">Узнать подробнее</a>
            </div>`
            }

            //очищение полей до 0 на фронте
            // count.forEach(function (val, index) {
            //     count[index].setAttribute("data-count", 0)
            //     count[index].innerHTML = "<span data-count='0'>0</span>";
                
            // });

            // const krasota_button = document.getElementById("krasota-button")
            // const relationship_result = document.getElementById("relationship-test_result")
    
            // krasota_button.addEventListener("click", ()=> {
            //     relationship_result.style.display = 'block'
            // })
        }
        
    })

    btnCheckRelationship.addEventListener('click', (e) => { 
        let temp_if = false;

        for (let i2 = 0; i2 < sumRelationship.length; ++i2) {
            if (sumRelationship[i2] <= 0) {
                temp_if = true;
            }
        }

        if (temp_if) {
            alert('надо заполнить все сферы');
        } else {

            //очищаешь его

            //diagrama2
            let dataSum_temp = sumRelationship;

            let diagrama3 = [0,0,0,0,0,0,0,0];

            for (let i = 0; i < 2; ++i) {
                let minimum = dataSum_temp[0];
                let min_index = 0;

                for (let index = 0; index < dataSum_temp.length; ++index) {
                    if (dataSum_temp[index] < minimum) {
                        minimum = dataSum_temp[index];
                        min_index = index;
                    }
                }
                
                diagrama3[min_index] = dataSum_temp[min_index];
                dataSum_temp[min_index] = 100;

            }
            
            for (let i3 = 0; i3 < diagrama3.length; ++i3) {
                if(diagrama3[i3] > 0){
                    dataSum_temp[i3] = diagrama3[i3];
                }
            }
        const dataRelationship = {
            datasets: [{
                label: 'My relation Dataset',
                data: diagrama3,
                borderWidth: 1,
                borderColor: 'rgb(0, 0, 0, 0)',
                backgroundColor: [
                    'rgb(0, 0, 0, 0)',
                    '#A651F9',
                    'rgb(0, 0, 0, 0)',
                    '#8512E7',
                    'rgb(0, 0, 0, 0)',
                    '#A651F9',
                    'rgb(0, 0, 0, 0)',
                    '#8512E7',
                    'rgb(0, 0, 0, 0)',
                ]
            }]
        };

        let myChartRelationship = new Chart('myChartRelationship', {
            type: 'polarArea',
            data: dataRelationship,
            options: {
                events: ['none'],
                scale: {
                    ticks: {
                        beginAtZero: true,
                        min: 0,
                        max: 10,
                        stepSize: 1
                    },
                },
                animation: {
                    animateRotate: false
                }
            },
        })
        const spheres_relationship = document.getElementById("spheres-relationship")    
        const relationship_wrapper = document.getElementById("relationship-block") 
        relationship_wrapper.innerHTML = ''          
        if(diagrama3[1] > 0) {
            relationship_wrapper.innerHTML += `<div class="spheres-block_wrap">
            <img src="assets/img/krasota.svg" alt="">
            <h2>Отношения с мужчиной</h2>
            <a class="spheres-block_text-button" onclick="gallery_relationship_male()">Узнать подробнее</a>
            </div>`
        }
        if(diagrama3[3] > 0) {
            relationship_wrapper.innerHTML += `<div class="spheres-block_wrap">
            <img src="assets/img/krasota.svg" alt="">
            <h2>Отношения с детьми</h2>
            <a class="spheres-block_text-button" onclick="gallery_relationship_child()">Узнать подробнее</a>
            </div>`
        }
        if(diagrama3[5] > 0) {
            relationship_wrapper.innerHTML += `<div class="spheres-block_wrap">
            <img src="assets/img/krasota.svg" alt="">
            <h2>Отношения с родителями</h2>
            <a class="spheres-block_text-button" onclick="gallery_relationship_parents()">Узнать подробнее</a>
            </div>`
        }
        if(diagrama3[7] > 0) {
            relationship_wrapper.innerHTML += `<div class="spheres-block_wrap">
            <img src="assets/img/krasota.svg" alt="">
            <h2>Отношения с коллегами/партнёрами</h2>
            <a class="spheres-block_text-button" onclick="gallery_relationship_partners()">Узнать подробнее</a>
            </div>`
        }
    }
    })

    btnCheckKrasota.addEventListener('click', (e) => { 
        let temp_if = false;

        for (let i2 = 0; i2 < sumKrasota.length; ++i2) {
            if (sumKrasota[i2] <= 0) {
                temp_if = true;
            }
        }

        if (temp_if) {
            alert('надо заполнить все сферы');
        } else {

            //очищаешь его

            //diagrama2
            let dataSum_temp = sumKrasota;

            let diagramaKrasotaCalc = [0,0,0,0,0,0,0,0];

            for (let i = 0; i < 2; ++i) {
                let minimum = dataSum_temp[0];
                let min_index = 0;

                for (let index = 0; index < dataSum_temp.length; ++index) {
                    if (dataSum_temp[index] < minimum) {
                        minimum = dataSum_temp[index];
                        min_index = index;
                    }
                }
                
                diagramaKrasotaCalc[min_index] = dataSum_temp[min_index];
                dataSum_temp[min_index] = 100;

            }
            
            for (let i3 = 0; i3 < diagramaKrasotaCalc.length; ++i3) {
                if(diagramaKrasotaCalc[i3] > 0){
                    dataSum_temp[i3] = diagramaKrasotaCalc[i3];
                }
            }
        const dataKrasota = {
            datasets: [{
                label: 'My krasota Dataset',
                data: diagramaKrasotaCalc,
                borderWidth: 1,
                borderColor: 'rgb(0, 0, 0, 0)',
                backgroundColor: [
                    'rgb(0, 0, 0, 0)',
                    '#A651F9',
                    'rgb(0, 0, 0, 0)',
                    '#8512E7',
                    'rgb(0, 0, 0, 0)',
                    '#A651F9',
                    'rgb(0, 0, 0, 0)',
                    '#8512E7',
                    'rgb(0, 0, 0, 0)',
                ]
            }]
        };

        let myChartKrasota = new Chart('myChartKrasota', {
            type: 'polarArea',
            data: dataKrasota,
            options: {
                events: ['none'],
                scale: {
                    ticks: {
                        beginAtZero: true,
                        min: 0,
                        max: 10,
                        stepSize: 1
                    },
                },
                animation: {
                    animateRotate: false
                }
            },
        })
        const spheres_krasota = document.getElementById("spheres-krasota")    
        const krasota_wrapper = document.getElementById("krasota-block") 
        krasota_wrapper.innerHTML = ''          
        if(diagramaKrasotaCalc[1] > 0) {
            krasota_wrapper.innerHTML += `<div class="spheres-block_wrap">
            <img src="assets/img/figure-icon.svg" alt="">
            <h2>Фигура</h2>
            <a class="spheres-block_text-button" onclick="gallery_krasota_figure()">Узнать подробнее</a>
            </div>`
        }
        if(diagramaKrasotaCalc[3] > 0) {
            krasota_wrapper.innerHTML += `<div class="spheres-block_wrap">
            <img src="assets/img/hair-icon.svg" alt="">
            <h2>Волосыи</h2>
            <a class="spheres-block_text-button" onclick="gallery_krasota_heir()">Узнать подробнее</a>
            </div>`
        }
        if(diagramaKrasotaCalc[5] > 0) {
            krasota_wrapper.innerHTML += `<div class="spheres-block_wrap">
            <img src="assets/img/face-icon.svg" alt="">
            <h2>Лицо</h2>
            <a class="spheres-block_text-button" onclick="gallery_krasota_face()">Узнать подробнее</a>
            </div>`
        }
        if(diagramaKrasotaCalc[7] > 0) {
            krasota_wrapper.innerHTML += `<div class="spheres-block_wrap">
            <img src="assets/img/fashion-icon.svg" alt="">
            <h2>Мода и стиль</h2>
            <a class="spheres-block_text-button" onclick="gallery_krasota_fashion()">Узнать подробнее</a>
            </div>`
        }
    }
    })
    
    btnCheckWorks.addEventListener('click', (e) => { 
        let temp_if = false;

        for (let i2 = 0; i2 < sumWorks.length; ++i2) {
            if (sumWorks[i2] <= 0) {
                temp_if = true;
            }
        }

        if (temp_if) {
            alert('надо заполнить все сферы');
        } else {

            //очищаешь его

            //diagrama2
            let dataSum_temp = sumWorks;

            let diagramaWorksCalc = [0,0,0,0,0,0,0,0,0,0];

            for (let i = 0; i < 4; ++i) {
                let minimum = dataSum_temp[0];
                let min_index = 0;

                for (let index = 0; index < dataSum_temp.length; ++index) {
                    if (dataSum_temp[index] < minimum) {
                        minimum = dataSum_temp[index];
                        min_index = index;
                    }
                }
                
                diagramaWorksCalc[min_index] = dataSum_temp[min_index];
                dataSum_temp[min_index] = 100;

            }
            
            for (let i3 = 0; i3 < diagramaWorksCalc.length; ++i3) {
                if(diagramaWorksCalc[i3] > 0){
                    dataSum_temp[i3] = diagramaWorksCalc[i3];
                }
            }
        const dataWorks = {
            datasets: [{
                label: 'My Works Dataset',
                data: diagramaWorksCalc,
                borderWidth: 1,
                borderColor: 'rgb(0, 0, 0, 0)',
                backgroundColor: [
                    '#D400F5',
                    '#C48FFA',
                    '#F400CD',
                    '#8512E7',
                    '#CB11AB',
                    '#A651F9',
                    '#C48FFA',
                    '#D400F5',
                    '#F400CD',
                    '#8512E7',
                ]
            }]
        };

        let myChartWorks = new Chart('myChartWorks', {
            type: 'polarArea',
            data: dataWorks,
            options: {
                events: ['none'],
                scale: {
                    ticks: {
                        beginAtZero: true,
                        min: 0,
                        max: 10,
                        stepSize: 1
                    },
                },
                animation: {
                    animateRotate: false
                }
            },
        }) 
        const works_wrapper = document.getElementById("works-block") 
        works_wrapper.innerHTML = ''          
        if(diagramaWorksCalc[0] > 0) {
            works_wrapper.innerHTML += `<div class="spheres-block_wrap spheres-block_wrap-paragraph">
            <img src="assets/img/creative-icon.svg" alt="creative">
            <div>
            <h2 class="works-block_title">Творческая работа</h2>
            <p class="spheres-wrap_paragraph">Дизайн, журналистика, блогинг и т.д.</p>
            <a class="spheres-works spheres-block_text-button" onclick="gallery_works_creative()">Узнать подробнее</a>
            </div>
            </div>`
        }
        if(diagramaWorksCalc[1] > 0) {
            works_wrapper.innerHTML += `<div class="spheres-block_wrap spheres-block_wrap-paragraph">
            <img src="assets/img/work-It-icon.svg" alt="">
            <div>
            <h2>Работа в сфере IT</h2>
            <p class="spheres-wrap_paragraph">IT разработка, аналитика</p>
            <a class="spheres-works spheres-block_text-button" onclick="gallery_works_workIt()">Узнать подробнее</a>
            </div>
            </div>`
        }
        if(diagramaWorksCalc[2] > 0) {
            works_wrapper.innerHTML += `<div class="spheres-block_wrap spheres-block_wrap-paragraph">
            <img src="assets/img/finance-work-icon.svg" alt="finance">
            <div>
            <h2>Работа, связанная с финансами</h2>
            <p class="spheres-wrap_paragraph">Финансы, бухгалтерский учет</p>
            <a class="spheres-works spheres-block_text-button" onclick="gallery_works_finance()">Узнать подробнее</a>
            </div>
            </div>`
        }
        if(diagramaWorksCalc[3] > 0) {
            works_wrapper.innerHTML += `<div class="spheres-block_wrap spheres-block_wrap-paragraph">
            <img src="assets/img/organization-management-icon.svg" alt="organization">
            <div>
            <h2>Работа, связанная с организацией и управлением</h2>
            <p class="spheres-wrap_paragraph">Менеджмент</p>
            <a class="spheres-works spheres-block_text-button" onclick="gallery_works_organization()">Узнать подробнее</a>
            </div>
            </div>`
        }
        if(diagramaWorksCalc[4] > 0) {
            works_wrapper.innerHTML += `<div class="spheres-block_wrap spheres-block_wrap-paragraph">
            <img src="assets/img/promotion-services-icon.svg" alt="promotion">
            <div>
            <h2>Работа, связанная с продвижением товаров и услуг</h2>
            <p class="spheres-wrap_paragraph">Маркетинг, реклама и т.д.</p>
            <a class="spheres-works spheres-block_text-button" onclick="gallery_works_promotion()">Узнать подробнее</a>
            </div>
            </div>`
        }
        if(diagramaWorksCalc[5] > 0) {
            works_wrapper.innerHTML += `<div class="spheres-block_wrap spheres-block_wrap-paragraph">
            <img src="assets/img/psychology-lifestyle-icon.svg" alt="lifestyle">
            <div>
            <h2>Психология и здоровый образ жизни</h2>
            <p class="spheres-wrap_paragraph">Психология, нутрициология и т.д.</p>
            <a class="spheres-works spheres-block_text-button" onclick="gallery_works_psychology()">Узнать подробнее</a>
            </div>
            </div>`
        }
        if(diagramaWorksCalc[6] > 0) {
            works_wrapper.innerHTML += `<div class="spheres-works_wrap spheres-block_wrap">
            <img src="assets/img/starting-business-icon.svg" alt="business">
            <h2>Открытие собственного бизнеса</h2>
            <a class="spheres-block_text-button" onclick="gallery_works_business()">Узнать подробнее</a>
            </div>`
        }
        if(diagramaWorksCalc[7] > 0) {
            works_wrapper.innerHTML += `<div class="spheres-works_wrap spheres-block_wrap">
            <img src="assets/img/work-in-beauty-icon.svg" alt="beauty">
            <h2>Работа в сфере красоты</h2>
            <a class="spheres-block_text-button" onclick="gallery_works_beauty()">Узнать подробнее</a>
            </div>`
        }
        if(diagramaWorksCalc[8] > 0) {
            works_wrapper.innerHTML += `<div class="spheres-works_wrap spheres-block_wrap">
            <img src="assets/img/pedagogy-educcation-icon.svg" alt="pedagogy">
            <h2>Работа, связанная с педагогикой и образованием</h2>
            <a class="spheres-block_text-button" onclick="gallery_works_educcation()">Узнать подробнее</a>
            </div>`
        }
        if(diagramaWorksCalc[9] > 0) {
            works_wrapper.innerHTML += `<div class="spheres-block_wrap spheres-block_wrap-paragraph">
            <img src="assets/img/travel-jobs-icon.svg" alt="travel">
            <div>
            <h2>Работа в сфере путешествий</h2>
            <p class="spheres-wrap_paragraph">Туаргент</p>
            <a class="spheres-works spheres-block_text-button" onclick="gallery_works_travel()">Узнать подробнее</a>
            </div>
            </div>`
        }
    }
    })

    btnCheckHealth.addEventListener('click', (e) => { 
        let temp_if = false;

        for (let i2 = 0; i2 < sumHealth.length; ++i2) {
            if (sumHealth[i2] <= 0) {
                temp_if = true;
            }
        }

        if (temp_if) {
            alert('надо заполнить все сферы');
        } else {

            //очищаешь его

            //diagrama2
            let dataSum_temp = sumHealth;

            let diagramaHealthCalc = [0, 0, 0, 0, 0, 0, 0, 0,];

            for (let i = 0; i < 2; ++i) {
                let minimum = dataSum_temp[0];
                let min_index = 0;

                for (let index = 0; index < dataSum_temp.length; ++index) {
                    if (dataSum_temp[index] < minimum) {
                        minimum = dataSum_temp[index];
                        min_index = index;
                    }
                }
                
                diagramaHealthCalc[min_index] = dataSum_temp[min_index];
                dataSum_temp[min_index] = 100;

            }
            
            for (let i3 = 0; i3 < diagramaHealthCalc.length; ++i3) {
                if(diagramaHealthCalc[i3] > 0){
                    dataSum_temp[i3] = diagramaHealthCalc[i3];
                }
            }
        const dataHealth = {
            datasets: [{
                label: 'My Health Dataset',
                data: diagramaHealthCalc,
                borderWidth: 1,
                borderColor: 'rgb(0, 0, 0, 0)',
                backgroundColor: [
                    '#8512E7',
                    '#D400F5',
                    '#C48FFA',
                    '#F400CD',
                    '#CB11AB',
                    '#A651F9',
                    '#C48FFA',
                    '#D400F5',
                ]
            }]
        };

        let myChartHealth = new Chart('myChartHealth', {
            type: 'polarArea',
            data: dataHealth,
            options: {
                events: ['none'],
                scale: {
                    ticks: {
                        beginAtZero: true,
                        min: 0,
                        max: 10,
                        stepSize: 1
                    },
                },
                animation: {
                    animateRotate: false
                }
            },
        }) 
        const health_wrapper = document.getElementById("health-block") 
        health_wrapper.innerHTML = ''          
        if(diagramaHealthCalc[0] > 0) {
            health_wrapper.innerHTML += `<div class="spheres-block_wrap">
            <img src="assets/img/test-icon/women-health.svg">
            <h2 class="works-block_title">Женское здоровье</h2>
            <a class="spheres-block_text-button" onclick="gallery_health_women()">Узнать подробнее</a>
            </div>`
        }
        if(diagramaHealthCalc[1] > 0) {
            health_wrapper.innerHTML += `<div class="spheres-block_wrap">
            <img src="assets/img/test-icon/Digestion.svg">
            <h2 class="works-block_title">Пищеварение</h2>
            <a class="spheres-block_text-button" onclick="gallery_health_digestion()">Узнать подробнее</a>
            </div>`
        }
        if(diagramaHealthCalc[2] > 0) {
            health_wrapper.innerHTML += `<div class="spheres-block_wrap">
            <img src="assets/img/test-icon/vision.svg">
            <h2 class="works-block_title">Зрение</h2>
            <a class="spheres-block_text-button" onclick="gallery_health_vision()">Узнать подробнее</a>
            </div>`
        }
        if(diagramaHealthCalc[3] > 0) {
            health_wrapper.innerHTML += `<div class="spheres-block_wrap">
            <img src="assets/img/test-icon/backJoints.svg">
            <h2 class="works-block_title">Спина и суставы</h2>
            <a class="spheres-block_text-button" onclick="gallery_health_backJoints()">Узнать подробнее</a>
            </div>`
        }
        if(diagramaHealthCalc[4] > 0) {
            health_wrapper.innerHTML += `<div class="spheres-block_wrap">
            <img src="assets/img/test-icon/painSyndrome.svg">
            <h2 class="works-block_title">Болевой синдром</h2>
            <a class="spheres-block_text-button" onclick="gallery_health_painSyndrome()">Узнать подробнее</a>
            </div>`
        }
        if(diagramaHealthCalc[5] > 0) {
            health_wrapper.innerHTML += `<div class="spheres-block_wrap">
            <img src="assets/img/test-icon/hormones.svg">
            <h2 class="works-block_title">Гормоны</h2>
            <a class="spheres-block_text-button" onclick="gallery_health_hormones()">Узнать подробнее</a>
            </div>`
        }
        if(diagramaHealthCalc[6] > 0) {
            health_wrapper.innerHTML += `
            <div class="spheres-works_wrap spheres-block_wrap">
            <img src="assets/img/test-icon/wellness.svg">
            <div>
            <h2 class="works-block_title">Оздоровление</h2>
            <p>Очищение организма, психосоматика, дыхание, массаж</p>
            <a class="spheres-works spheres-block_text-button" onclick="gallery_health_wellness()">Узнать подробнее</a>
            </div>
            </div>`
        }
        if(diagramaHealthCalc[7] > 0) {
            health_wrapper.innerHTML += `<div class="spheres-block_wrap">
            <img src="assets/img/test-icon/heartVesseles.svg">
            <h2 class="works-block_title">Сердце и сосуды</h2>
            <a class="spheres-block_text-button" onclick="gallery_health_heartVesseles()">Узнать подробнее</a>
            </div>`
        }
    }
    })

    btnCheckFinance.addEventListener('click', (e) => { 
        let temp_if = false;

        for (let i2 = 0; i2 < sumFinance.length; ++i2) {
            if (sumFinance[i2] <= 0) {
                temp_if = true;
            }
        }

        if (temp_if) {
            alert('надо заполнить все сферы');
        } else {

            //очищаешь его

            //diagrama2
            let dataSum_temp = sumFinance;

            let diagramaFinanceCalc = [0,0,0,0,0,0,0,0];

            for (let i = 0; i < 2; ++i) {
                let minimum = dataSum_temp[0];
                let min_index = 0;

                for (let index = 0; index < dataSum_temp.length; ++index) {
                    if (dataSum_temp[index] < minimum) {
                        minimum = dataSum_temp[index];
                        min_index = index;
                    }
                }
                
                diagramaFinanceCalc[min_index] = dataSum_temp[min_index];
                dataSum_temp[min_index] = 100;

            }
            
            for (let i3 = 0; i3 < diagramaFinanceCalc.length; ++i3) {
                if(diagramaFinanceCalc[i3] > 0){
                    dataSum_temp[i3] = diagramaFinanceCalc[i3];
                }
            }
        const dataFinance = {
            datasets: [{
                label: 'My finance Dataset',
                data: diagramaFinanceCalc,
                borderWidth: 1,
                borderColor: 'rgb(0, 0, 0, 0)',
                backgroundColor: [
                    'rgb(0, 0, 0, 0)',
                    '#A651F9',
                    'rgb(0, 0, 0, 0)',
                    '#8512E7',
                    'rgb(0, 0, 0, 0)',
                    '#A651F9',
                    'rgb(0, 0, 0, 0)',
                    '#8512E7',
                    'rgb(0, 0, 0, 0)',
                ]
            }]
        };

        let myChartKrasota = new Chart('myChartFinance', {
            type: 'polarArea',
            data: dataFinance,
            options: {
                events: ['none'],
                scale: {
                    ticks: {
                        beginAtZero: true,
                        min: 0,
                        max: 10,
                        stepSize: 1
                    },
                },
                animation: {
                    animateRotate: false
                }
            },
        })
        const finance_wrapper = document.getElementById("finance-block") 
        finance_wrapper.innerHTML = ''          
        if(diagramaFinanceCalc[1] > 0) {
            finance_wrapper.innerHTML += `<div class="spheres-block_wrap">
            <img src="assets/img/test-icon/finance-attraction.svg" alt="">
            <h2>Привлечение финансов</h2>
            <a class="spheres-block_text-button" onclick="gallery_finance_attraction()">Узнать подробнее</a>
            </div>`
        }
        if(diagramaFinanceCalc[3] > 0) {
            finance_wrapper.innerHTML += `<div class="spheres-block_wrap">
            <img src="assets/img/test-icon/finance-literacy.svg" alt="">
            <h2>Финансовая грамотность</h2>
            <a class="spheres-block_text-button" onclick="gallery_finance_literacy()">Узнать подробнее</a>
            </div>`
        }
        if(diagramaFinanceCalc[5] > 0) {
            finance_wrapper.innerHTML += `<div class="spheres-block_wrap">
            <img src="assets/img/test-icon/finance-investment.svg" alt="">
            <h2>инвестирования</h2>
            <a class="spheres-block_text-button" onclick="gallery_finance_investment()">Узнать подробнее</a>
            </div>`
        }
        if(diagramaFinanceCalc[7] > 0) {
            finance_wrapper.innerHTML += `<div class="spheres-block_wrap">
            <img src="assets/img/test-icon/finance-trading.svg" alt="">
            <h2>трейдинг</h2>
            <a class="spheres-block_text-button" onclick="gallery_finance_trading()">Узнать подробнее</a>
            </div>`
        }
    }
    })

    btnCheckBusiness.addEventListener('click', (e) => { 
        let temp_if = false;

        for (let i2 = 0; i2 < sumBusiness.length; ++i2) {
            if (sumBusiness[i2] <= 0) {
                temp_if = true;
            }
        }

        if (temp_if) {
            alert('надо заполнить все сферы');
        } else {

            //очищаешь его

            //diagrama2
            let dataSum_temp = sumBusiness;

            let diagramaBusinessCalc = [0,0,0,0,0,0,0,0];

            for (let i = 0; i < 2; ++i) {
                let minimum = dataSum_temp[0];
                let min_index = 0;

                for (let index = 0; index < dataSum_temp.length; ++index) {
                    if (dataSum_temp[index] < minimum) {
                        minimum = dataSum_temp[index];
                        min_index = index;
                    }
                }
                
                diagramaBusinessCalc[min_index] = dataSum_temp[min_index];
                dataSum_temp[min_index] = 100;

            }
            
            for (let i3 = 0; i3 < diagramaBusinessCalc.length; ++i3) {
                if(diagramaBusinessCalc[i3] > 0){
                    dataSum_temp[i3] = diagramaBusinessCalc[i3];
                }
            }
        const dataBusiness = {
            datasets: [{
                label: 'My business Dataset',
                data: diagramaBusinessCalc,
                borderWidth: 1,
                borderColor: 'rgb(0, 0, 0, 0)',
                backgroundColor: [
                    'rgb(0, 0, 0, 0)',
                    '#A651F9',
                    'rgb(0, 0, 0, 0)',
                    '#8512E7',
                    '#8512E7',
                    '#A651F9',
                    'rgb(0, 0, 0, 0)',
                    '#8512E7',
                    'rgb(0, 0, 0, 0)',
                ]
            }]
        };

        let myChartBusiness = new Chart('myChartBusines', {
            type: 'polarArea',
            data: dataBusiness,
            options: {
                events: ['none'],
                scale: {
                    ticks: {
                        beginAtZero: true,
                        min: 0,
                        max: 10,
                        stepSize: 1
                    },
                },
                animation: {
                    animateRotate: false
                }
            },
        })
        const business_wrapper = document.getElementById("business-block") 
        business_wrapper.innerHTML = ''          
        if(diagramaBusinessCalc[1] > 0) {
            business_wrapper.innerHTML += `<div class="spheres-block_wrap">
            <img src="assets/img/test-icon/business-availability.svg" alt="">
            <h2>бизнес-образования (MBA)</h2>
            <a class="spheres-block_text-button" onclick="gallery_business_availability()">Узнать подробнее</a>
            </div>`
        }
        if(diagramaBusinessCalc[3] > 0) {
            business_wrapper.innerHTML += `<div class="spheres-block_wrap">
            <img src="assets/img/test-icon/business-experience.svg" alt="">
            <h2>открытия собственного бизнеса</h2>
            <a class="spheres-block_text-button" onclick="gallery_business_experience()">Узнать подробнее</a>
            </div>`
        }
        if(diagramaBusinessCalc[4] > 0) {
            business_wrapper.innerHTML += `<div class="spheres-block_wrap">
            <img src="assets/img/test-icon/business-skills.svg" alt="">
            <h2>управления бизнесом</h2>
            <a class="spheres-block_text-button" onclick="gallery_business_skills()">Узнать подробнее</a>
            </div>`
        }
        if(diagramaBusinessCalc[5] > 0) {
            business_wrapper.innerHTML += `<div class="spheres-block_wrap">
            <img src="assets/img/test-icon/business-recruitment.svg" alt="">
            <h2>управление персоналом</h2>
            <a class="spheres-block_text-button" onclick="gallery_business_recruitment()">Узнать подробнее</a>
            </div>`
        }
        if(diagramaBusinessCalc[7] > 0) {
            business_wrapper.innerHTML += `<div class="spheres-block_wrap">
            <img src="assets/img/test-icon/business-service.svg" alt="">
            <h2>работа с клиентами</h2>
            <a class="spheres-block_text-button" onclick="gallery_business_service()">Узнать подробнее</a>
            </div>`
        }
    }
    })

    btnCheckSpiritual.addEventListener('click', (e) => { 
        let temp_if = false;

        for (let i2 = 0; i2 < sumSpiritual.length; ++i2) {
            if (sumSpiritual[i2] <= 0) {
                temp_if = true;
            }
        }

        if (temp_if) {
            alert('надо заполнить все сферы');
        } else {

            //очищаешь его

            //diagrama2
            let dataSum_temp = sumSpiritual;

            let diagramaSpiritualCalc = [0,0,0,0,0,0,0,0];

            for (let i = 0; i < 2; ++i) {
                let minimum = dataSum_temp[0];
                let min_index = 0;

                for (let index = 0; index < dataSum_temp.length; ++index) {
                    if (dataSum_temp[index] < minimum) {
                        minimum = dataSum_temp[index];
                        min_index = index;
                    }
                }
                
                diagramaSpiritualCalc[min_index] = dataSum_temp[min_index];
                dataSum_temp[min_index] = 100;

            }
            
            for (let i3 = 0; i3 < diagramaSpiritualCalc.length; ++i3) {
                if(diagramaSpiritualCalc[i3] > 0){
                    dataSum_temp[i3] = diagramaSpiritualCalc[i3];
                }
            }
        const dataSpiritual = {
            datasets: [{
                label: 'My spiritual Dataset',
                data: diagramaSpiritualCalc,
                borderWidth: 1,
                borderColor: 'rgb(0, 0, 0, 0)',
                backgroundColor: [
                    'rgb(0, 0, 0, 0)',
                    '#A651F9',
                    'rgb(0, 0, 0, 0)',
                    '#8512E7',
                    '#8512E7',
                    '#A651F9',
                    'rgb(0, 0, 0, 0)',
                    '#8512E7',
                    'rgb(0, 0, 0, 0)',
                ]
            }]
        };

        let myChartSpiritual = new Chart('myChartSpiritual', {
            type: 'polarArea',
            data: dataSpiritual,
            options: {
                events: ['none'],
                scale: {
                    ticks: {
                        beginAtZero: true,
                        min: 0,
                        max: 10,
                        stepSize: 1
                    },
                },
                animation: {
                    animateRotate: false
                }
            },
        })
        const spiritual_wrapper = document.getElementById("spiritual-block") 
        spiritual_wrapper.innerHTML = ''          
        if(diagramaSpiritualCalc[1] > 0) {
            spiritual_wrapper.innerHTML += `<div class="spheres-block_wrap spheres-block_wrap-paragraph">
            <img src="assets/img/test-icon/spiritual-medicine.svg" alt="">
            <div>
            <h2>Медитация</h2>
            <p class="spheres-wrap_paragraph">Самоконтроль, спокойствие</p>
            <a class="spheres-works spheres-block_text-button" onclick="gallery_spiritual_medicine()">Узнать подробнее</a>
            </div>
            </div>`
        }
        if(diagramaSpiritualCalc[3] > 0) {
            spiritual_wrapper.innerHTML += `<div class="spheres-block_wrap">
            <img src="assets/img/test-icon/spiritual-finance.svg" alt="">
            <h2>Привлечение финансов</h2>
            <a class="spheres-block_text-button" onclick="gallery_spiritual_finance()">Узнать подробнее</a>
            </div>`
        }
        if(diagramaSpiritualCalc[4] > 0) { 
            spiritual_wrapper.innerHTML += `<div class="spheres-block_wrap">
            <img src="assets/img/test-icon/spiritual-desires.svg" alt="">
            <h2>Исполнение желаний</h2>
            <a class="spheres-block_text-button" onclick="gallery_business_skills()">Узнать подробнее</a>
            </div>`
        }
        if(diagramaSpiritualCalc[5] > 0) {
            spiritual_wrapper.innerHTML += `<div class="spheres-block_wrap">
            <img src="assets/img/test-icon/spiritual-mindfulness.svg" alt="">
            <h2>Осознанность</h2>
            <a class="spheres-block_text-button" onclick="gallery_spiritual_mindfulness()">Узнать подробнее</a>
            </div>`
        }
        if(diagramaSpiritualCalc[7] > 0) {
            spiritual_wrapper.innerHTML += `<div class="spheres-block_wrap spheres-block_wrap-paragraph">
            <img src="assets/img/test-icon/spiritual-knowledge.svg" alt="">
            <div>
            <h2>Эзотерические знания</h2>
            <p class="spheres-wrap_paragraph">Трансерфинг, тета-хилинг,  сила рода, нумерология, таро и т.д</p>
            <a class="spheres-works spheres-block_text-button" onclick="gallery_spiritual_knowledge()">Узнать подробнее</a>
            </div>
            </div>`
        }
    }
    })

    btnCheckPersonal.addEventListener('click', (e) => { 
        let temp_if = false;

        for (let i2 = 0; i2 < sumPersonal.length; ++i2) {
            if (sumPersonal[i2] <= 0) {
                temp_if = true;
            }
        }

        if (temp_if) {
            alert('надо заполнить все сферы');
        } else {

            //очищаешь его

            //diagrama2
            let dataSum_temp = sumPersonal;

            let diagramaPersonalCalc = [0,0,0,0,0,0,0,0,0];

            for (let i = 0; i < 2; ++i) {
                let minimum = dataSum_temp[0];
                let min_index = 0;

                for (let index = 0; index < dataSum_temp.length; ++index) {
                    if (dataSum_temp[index] < minimum) {
                        minimum = dataSum_temp[index];
                        min_index = index;
                    }
                }
                
                diagramaPersonalCalc[min_index] = dataSum_temp[min_index];
                dataSum_temp[min_index] = 100;

            }
            
            for (let i3 = 0; i3 < diagramaPersonalCalc.length; ++i3) {
                if(diagramaPersonalCalc[i3] > 0){
                    dataSum_temp[i3] = diagramaPersonalCalc[i3];
                }
            }
        const dataPersonal = {
            datasets: [{
                label: 'My personal Dataset',
                data: diagramaPersonalCalc,
                borderWidth: 1,
                borderColor: 'rgb(0, 0, 0, 0)',
                backgroundColor: [
                    '#D400F5',
                    '#C48FFA',
                    '#F400CD',
                    '#8512E7',
                    '#CB11AB',
                    '#A651F9',
                    '#C48FFA',
                    '#D400F5',
                    '#F400CD',
                    '#8512E7',
                ]
            }]
        };

        let myChartWorks = new Chart('myChartPersonal', {
            type: 'polarArea',
            data: dataPersonal,
            options: {
                events: ['none'],
                scale: {
                    ticks: {
                        beginAtZero: true,
                        min: 0,
                        max: 10,
                        stepSize: 1
                    },
                },
                animation: {
                    animateRotate: false
                }
            },
        }) 
        const personal_wrapper = document.getElementById("personal-block") 
        personal_wrapper.innerHTML = ''          
        if(diagramaPersonalCalc[0] > 0) {
            personal_wrapper.innerHTML += `<div class="spheres-block_wrap">
            <img src="assets/img/test-icon/personal-self_motivation.svg">
            <h2 class="works-block_title">Самомотивация</h2>
            <a class="spheres-block_text-button" onclick="gallery_personal_self()">Узнать подробнее</a>
            </div>`
        }
        if(diagramaPersonalCalc[1] > 0) {
            personal_wrapper.innerHTML += `<div class="spheres-block_wrap">
            <img src="assets/img/test-icon/personal-goal.svg">
            <h2 class="works-block_title">Постановка и достижение целей</h2>
            <a class="spheres-block_text-button" onclick="gallery_personal_goal()">Узнать подробнее</a>
            </div>`
        }
        if(diagramaPersonalCalc[2] > 0) {
            personal_wrapper.innerHTML += `<div class="spheres-block_wrap">
            <img src="assets/img/test-icon/personal-menegment.svg">
            <h2 class="works-block_title">Тайм-менеджмент</h2>
            <a class="spheres-block_text-button" onclick="gallery_personal_menegment()">Узнать подробнее</a>
            </div>`
        }
        if(diagramaPersonalCalc[3] > 0) {
            personal_wrapper.innerHTML += `<div class="spheres-block_wrap">
            <img src="assets/img/test-icon/personal-leadership.svg">
            <h2 class="works-block_title">Лидерство</h2>
            <a class="spheres-block_text-button" onclick="gallery_personal_leadership()">Узнать подробнее</a>
            </div>`
        }
        if(diagramaPersonalCalc[4] > 0) {
            personal_wrapper.innerHTML += `<div class="spheres-block_wrap">
            <img src="assets/img/test-icon/personal-skills.svg">
            <h2 class="works-block_title">Навыки общения</h2>
            <a class="spheres-block_text-button" onclick="gallery_personal_skills()">Узнать подробнее</a>
            </div>`
        }
        if(diagramaPersonalCalc[5] > 0) {
            personal_wrapper.innerHTML += `<div class="spheres-block_wrap">
            <img src="assets/img/test-icon/personal-brand.svg">
            <h2 class="works-block_title">Личный бренд</h2>
            <a class="spheres-block_text-button" onclick="gallery_personal_brand()">Узнать подробнее</a>
            </div>`
        }
        if(diagramaPersonalCalc[6] > 0) {
            personal_wrapper.innerHTML += `<div class="spheres-block_wrap">
            <img src="assets/img/test-icon/personal-sexuality.svg">
            <h2 class="works-block_title">Женственность и сексуальность</h2>
            <a class="spheres-block_text-button" onclick="gallery_personal_sexuality()">Узнать подробнее</a>
            </div>`
        }
        if(diagramaPersonalCalc[7] > 0) {
            personal_wrapper.innerHTML += `<div class="spheres-block_wrap">
            <img src="assets/img/test-icon/personal-history.svg">
            <h2 class="works-block_title">Культура и история</h2>
            <a class="spheres-block_text-button" onclick="gallery_personal_history()">Узнать подробнее</a>
            </div>`
        }
        if(diagramaPersonalCalc[8] > 0) {
            personal_wrapper.innerHTML += `<div class="spheres-block_wrap">
            <img src="assets/img/test-icon/personal-languages.svg">
            <h2 class="works-block_title">Владение иностранными языками</h2>
            <a class="spheres-block_text-button" onclick="gallery_personal_languages()">Узнать подробнее</a>
            </div>`
        }
    }
    })

    btnCheckHobby.addEventListener('click', (e) => { 
        let temp_if = false;

        for (let i2 = 0; i2 < sumHobby.length; ++i2) {
            if (sumHobby[i2] <= 0) {
                temp_if = true;
            }
        }

        if (temp_if) {
            alert('надо заполнить все сферы');
        } else {

            //очищаешь его

            //diagrama2
            let dataSum_temp = sumHobby;

            let diagramaHobbyCalc = [0,0,0,0,0,0,0,0,0,0,0];

            for (let i = 0; i < 2; ++i) {
                let minimum = dataSum_temp[0];
                let min_index = 0;

                for (let index = 0; index < dataSum_temp.length; ++index) {
                    if (dataSum_temp[index] < minimum) {
                        minimum = dataSum_temp[index];
                        min_index = index;
                    }
                }
                
                diagramaHobbyCalc[min_index] = dataSum_temp[min_index];
                dataSum_temp[min_index] = 100;

            }
            
            for (let i3 = 0; i3 < diagramaHobbyCalc.length; ++i3) {
                if(diagramaHobbyCalc[i3] > 0){
                    dataSum_temp[i3] = diagramaHobbyCalc[i3];
                }
            }
        const dataHobby = {
            datasets: [{
                label: 'My hobby Dataset',
                data: diagramaHobbyCalc,
                borderWidth: 1,
                borderColor: 'rgb(0, 0, 0, 0)',
                backgroundColor: [
                    '#D400F5',
                    '#C48FFA',
                    '#F400CD',
                    '#8512E7',
                    '#CB11AB',
                    '#A651F9',
                    '#C48FFA',
                    '#D400F5',
                    '#F400CD',
                    '#8512E7',
                ]
            }]
        };

        let myChartHobby = new Chart('myChartHobby', {
            type: 'polarArea',
            data: dataHobby,
            options: {
                events: ['none'],
                scale: {
                    ticks: {
                        beginAtZero: true,
                        min: 0,
                        max: 10,
                        stepSize: 1
                    },
                },
                animation: {
                    animateRotate: false
                }
            },
        }) 
        const hobby_wrapper = document.getElementById("hobby-block") 
        hobby_wrapper.innerHTML = ''          
        if(diagramaHobbyCalc[0] > 0) {
            hobby_wrapper.innerHTML += `<div class="spheres-block_wrap">
            <img src="assets/img/test-icon/hobby-needlework.svg">
            <h2 class="works-block_title">Рукоделие</h2>
            <a class="spheres-block_text-button" onclick="gallery_hobby_needlework()">Узнать подробнее</a>
            </div>`
        }
        if(diagramaHobbyCalc[1] > 0) {
            hobby_wrapper.innerHTML += `<div class="spheres-block_wrap">
            <img src="assets/img/test-icon/hobby-cooking.svg">
            <h2 class="works-block_title">Кулинария</h2>
            <a class="spheres-block_text-button" onclick="gallery_hobby_cooking()">Узнать подробнее</a>
            </div>`
        }
        if(diagramaHobbyCalc[2] > 0) {
            hobby_wrapper.innerHTML += `<div class="spheres-block_wrap">
            <img src="assets/img/test-icon/hobby-painting.svg">
            <h2 class="works-block_title">Рисование</h2>
            <a class="spheres-block_text-button" onclick="gallery_hobby_painting()">Узнать подробнее</a>
            </div>`
        }
        if(diagramaHobbyCalc[3] > 0) {
            hobby_wrapper.innerHTML += `<div class="spheres-block_wrap">
            <img src="assets/img/test-icon/hobby-photo.svg">
            <h2 class="works-block_title">Фото и видео</h2>
            <a class="spheres-block_text-button" onclick="gallery_hobby_photo()">Узнать подробнее</a>
            </div>`
        }
        if(diagramaHobbyCalc[4] > 0) {
            hobby_wrapper.innerHTML += `<div class="spheres-block_wrap">
            <img src="assets/img/test-icon/hobby-music.svg">
            <h2 class="works-block_title">Музыка</h2>
            <a class="spheres-block_text-button" onclick="gallery_hobby_music()">Узнать подробнее</a>
            </div>`
        }
        if(diagramaHobbyCalc[5] > 0) {
            hobby_wrapper.innerHTML += `<div class="spheres-block_wrap">
            <img src="assets/img/test-icon/hobby-house.svg">
            <h2 class="works-block_title">Дом и сад</h2>
            <a class="spheres-block_text-button" onclick="gallery_personal_hobby_house()">Узнать подробнее</a>
            </div>`
        }
        if(diagramaHobbyCalc[6] > 0) {
            hobby_wrapper.innerHTML += `<div class="spheres-block_wrap">
            <img src="assets/img/test-icon/hobby-dancing.svg">
            <h2 class="works-block_title">Танцы</h2>
            <a class="spheres-block_text-button" onclick="gallery_hobby_dancing()">Узнать подробнее</a>
            </div>`
        }
        if(diagramaHobbyCalc[7] > 0) {
            hobby_wrapper.innerHTML += `<div class="spheres-block_wrap">
            <img src="assets/img/test-icon/hobby-driving.svg">
            <h2 class="works-block_title">Вождение и тюнинг</h2>
            <a class="spheres-block_text-button" onclick="gallery_personal_hobby_driving()">Узнать подробнее</a>
            </div>`
        }
        if(diagramaHobbyCalc[8] > 0) {
            hobby_wrapper.innerHTML += `<div class="spheres-block_wrap">
            <img src="assets/img/test-icon/hobby-training.svg">
            <h2 class="works-block_title">Дрессировка</h2>
            <a class="spheres-block_text-button" onclick="gallery_personal_hobby_training()">Узнать подробнее</a>
            </div>`
        }
        if(diagramaHobbyCalc[9] > 0) {
            hobby_wrapper.innerHTML += `<div class="spheres-block_wrap">
            <img src="assets/img/test-icon/hobby-modeling.svg">
            <h2 class="works-block_title">Моделирование и пошив одежды</h2>
            <a class="spheres-block_text-button" onclick="gallery_personal_hobby_modeling()">Узнать подробнее</a>
            </div>`
        }
        if(diagramaHobbyCalc[10] > 0) {
            hobby_wrapper.innerHTML += `<div class="spheres-block_wrap">
            <img src="assets/img/test-icon/hobby-decor.svg">
            <h2 class="works-block_title">Декор и флористика</h2>
            <a class="spheres-block_text-button" onclick="gallery_personal_hobby_decor()">Узнать подробнее</a>
            </div>`
        }
    }
    })


    increments.forEach(function (val, index) {
        val.addEventListener('click', function () {
            let num = addSum(dataSum, index);

            count[index].setAttribute("data-count", num)
            count[index].innerHTML = `<span data-count=${num}>${num}</span>`;
        })
    });

    incrementsRelationship.forEach(function (val, index) {      
        val.addEventListener('click', function () {
            let index2 = 0
            if(index == 0) {
                index2 = 1
            }
            if(index == 1) {
                index2 = 3
            }
            if(index == 2) {
                index2 = 5
            }
            if(index == 3) {
                index2 = 7
            }
            let num = addSum(sumRelationship, index2);

            countRelationship[index].setAttribute("data-count", num)
            countRelationship[index].innerHTML = `<span data-count=${num}>${num}</span>`;
        })
    });

    incrementsKrasota.forEach(function (val, index) {      
        val.addEventListener('click', function () {
            let index2 = 0
            if(index == 0) {
                index2 = 1
            }
            if(index == 1) {
                index2 = 3
            }
            if(index == 2) {
                index2 = 5
            }
            if(index == 3) {
                index2 = 7
            }
            let num = addSum(sumKrasota, index2);

            countKrasota[index].setAttribute("data-count", num)
            countKrasota[index].innerHTML = `<span data-count=${num}>${num}</span>`;
        })
    });

    incrementsWorks.forEach(function (val, index) {      
        val.addEventListener('click', function () {
            let num = addSum(sumWorks, index);

            countWorks[index].setAttribute("data-count", num)
            countWorks[index].innerHTML = `<span data-count=${num}>${num}</span>`;
        })
    });

    incrementsFinance.forEach(function (val, index) {      
        val.addEventListener('click', function () {
            let index2 = 0
            if(index == 0) {
                index2 = 1
            }
            if(index == 1) {
                index2 = 3
            }
            if(index == 2) {
                index2 = 5
            }
            if(index == 3) {
                index2 = 7
            }
            let num = addSum(sumFinance, index2);

            countFinance[index].setAttribute("data-count", num)
            countFinance[index].innerHTML = `<span data-count=${num}>${num}</span>`;
        })
    });

    mostIncrements.forEach(function (val, index) {
        val.addEventListener('click', function () {
            let num = addSumSec(mostCountSum, index);

            mostCount[index].setAttribute("data-count", num)
            mostCount[index].innerHTML = `<span data-count=${num}>${num}</span>`;
        })
    });

    incrementsSec.forEach(function (val, index) {
        val.addEventListener('click', function () {
            let num = addSum(sumRelationship, index);

            countSec[index].setAttribute("data-count", num)
            countSec[index].innerHTML = `<span data-count=${num}>${num}</span>`;
        })
    });

    incrementsHealth.forEach(function (val, index) {
        val.addEventListener('click', function () {
            let num = addSum(sumHealth, index);

            countHealth[index].setAttribute("data-count", num)
            countHealth[index].innerHTML = `<span data-count=${num}>${num}</span>`;
        })
    });

    incrementsBusiness.forEach(function (val, index) {      
        val.addEventListener('click', function () {
            let index2 = 0
            if(index == 0) {
                index2 = 1
            }
            if(index == 1) {
                index2 = 3
            }
            if(index == 2) {
                index2 = 5
            }
            if(index == 3) {
                index2 = 7
            }
            if(index == 4) {
                index2 = 4
            }
            let num = addSum(sumBusiness, index2);

            countBusiness[index].setAttribute("data-count", num)
            countBusiness[index].innerHTML = `<span data-count=${num}>${num}</span>`;
        })
    });

    incrementsSpiritual.forEach(function (val, index) {      
        val.addEventListener('click', function () {
            let index2 = 0
            if(index == 0) {
                index2 = 1
            }
            if(index == 1) {
                index2 = 3
            }
            if(index == 2) {
                index2 = 4
            }
            if(index == 3) {
                index2 = 5
            }
            if(index == 4) {
                index2 = 7
            }
            
            let num = addSum(sumSpiritual, index2);

            countSpiritual[index].setAttribute("data-count", num)
            countSpiritual[index].innerHTML = `<span data-count=${num}>${num}</span>`;
        })
    });

    incrementsPersonal.forEach(function (val, index) {      
        val.addEventListener('click', function () {
            let num = addSum(sumPersonal, index);

            countPersonal[index].setAttribute("data-count", num)
            countPersonal[index].innerHTML = `<span data-count=${num}>${num}</span>`;
        })
    });

    incrementsHobby.forEach(function (val, index) {      
        val.addEventListener('click', function () {
            let num = addSum(sumHobby, index);

            countHobby[index].setAttribute("data-count", num)
            countHobby[index].innerHTML = `<span data-count=${num}>${num}</span>`;
        })
    });

    decrements.forEach(function (val, index) {
        val.addEventListener('click', function () {
            let num = removeSum(dataSum, index);
            inters.push(num)
            count[index].setAttribute("data-count", num)
            count[index].innerHTML = `<span data-count=${num}>${num}</span>`;
        })
    });

    mostDecrements.forEach(function (val, index) {
        val.addEventListener('click', function () {
            let num = removeSum(mostCountSum, index);
            inters.push(num)
            mostCount[index].setAttribute("data-count", num)
            mostCount[index].innerHTML = `<span data-count=${num}>${num}</span>`;
        })
    });

    decrementsSec.forEach(function (val, index) {
        val.addEventListener('click', function () {
            let num = removeSum(sumRelationship, index);
            inters.push(num)
            countSec[index].setAttribute("data-count", num)
            countSec[index].innerHTML = `<span data-count=${num}>${num}</span>`;
        })
    });

    decrementsRelationship.forEach(function (val, index) {
        val.addEventListener('click', function () {
            let index2 = 0
            if(index == 0) {
                index2 = 1
            }
            if(index == 1) {
                index2 = 3
            }
            if(index == 2) {
                index2 = 5
            }
            if(index == 3) {
                index2 = 7
            }
            let num = removeSum(sumRelationship, index2);

            inters.push(num)
            countRelationship[index].setAttribute("data-count", num)
            countRelationship[index].innerHTML = `<span data-count=${num}>${num}</span>`;
        })
    });


    decrementsKrasota.forEach(function (val, index) {
        val.addEventListener('click', function () {
            let index2 = 0
            if(index == 0) {
                index2 = 1
            }
            if(index == 1) {
                index2 = 3
            }
            if(index == 2) {
                index2 = 5
            }
            if(index == 3) {
                index2 = 7
            }
            let num = removeSum(sumKrasota, index2);

            inters.push(num)
            countKrasota[index].setAttribute("data-count", num)
            countKrasota[index].innerHTML = `<span data-count=${num}>${num}</span>`;
        })
    });
    decrementsHealth.forEach(function (val, index) {
        val.addEventListener('click', function () {
            let num = removeSum(sumHealth, index);

            inters.push(num)
            countHealth[index].setAttribute("data-count", num)
            countHealth[index].innerHTML = `<span data-count=${num}>${num}</span>`;
        })
    });

    decrementsWorks.forEach(function (val, index) {
        val.addEventListener('click', function () {
            let num = removeSum(sumWorks, index);

            inters.push(num)
            countWorks[index].setAttribute("data-count", num)
            countWorks[index].innerHTML = `<span data-count=${num}>${num}</span>`;
        })
    });

    decrementsFinance.forEach(function (val, index) {
        val.addEventListener('click', function () {
            let index2 = 0
            if(index == 0) {
                index2 = 1
            }
            if(index == 1) {
                index2 = 3
            }
            if(index == 2) {
                index2 = 5
            }
            if(index == 3) {
                index2 = 7
            }
            let num = removeSum(sumFinance, index2);

            inters.push(num)
            countFinance[index].setAttribute("data-count", num)
            countFinance[index].innerHTML = `<span data-count=${num}>${num}</span>`;
        })
    });

    decrementsBusiness.forEach(function (val, index) {
        val.addEventListener('click', function () {
            let index2 = 0
            if(index == 0) {
                index2 = 1
            }
            if(index == 1) {
                index2 = 3
            }           
            if(index == 2) {
                index2 = 5
            }
            if(index == 3) {
                index2 = 7
            }
            if(index == 4) {
                index2 = 4
            }
            let num = removeSum(sumBusiness, index2);

            inters.push(num)
            countBusiness[index].setAttribute("data-count", num)
            countBusiness[index].innerHTML = `<span data-count=${num}>${num}</span>`;
        })
    });

    decrementsSpiritual.forEach(function (val, index) {
        val.addEventListener('click', function () {
            let index2 = 0
            if(index == 0) {
                index2 = 1
            }
            if(index == 1) {
                index2 = 3
            }
            if(index == 2) {
                index2 = 4
            }
            if(index == 3) {
                index2 = 5
            }
            if(index == 4) {
                index2 = 7
            }
            let num = removeSum(sumSpiritual, index2);

            inters.push(num)
            countSpiritual[index].setAttribute("data-count", num)
            countSpiritual[index].innerHTML = `<span data-count=${num}>${num}</span>`;
        })
    });

    decrementsPersonal.forEach(function (val, index) {
        val.addEventListener('click', function () {
            let num = removeSum(sumPersonal, index);

            inters.push(num)
            countPersonal[index].setAttribute("data-count", num)
            countPersonal[index].innerHTML = `<span data-count=${num}>${num}</span>`;
        })
    });

    decrementsHobby.forEach(function (val, index) {
        val.addEventListener('click', function () {
            let num = removeSum(sumHobby, index);

            inters.push(num)
            countHobby[index].setAttribute("data-count", num)
            countHobby[index].innerHTML = `<span data-count=${num}>${num}</span>`;
        })
    });

})
