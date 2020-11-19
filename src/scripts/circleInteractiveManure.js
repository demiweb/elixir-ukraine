let manuresCont = {}
console.log(window.innerWidth);
let mainCircleContainer = document.getElementById('circle-svg-interactive');
let blockText = document.getElementById('interactive-circle__manures-container');
let someText = [...document.querySelectorAll('.single-manure-type')];

function toRadians(angle) {
    return angle * (Math.PI / 180);
}

let xCoords = [];
let yCoords = [];
let dots;
let additionalDot;
let mainCircle = '<circle r="488" cx="500" cy="500" fill="transparent" stroke="#00662a" stroke-width="1"/>';
let amountDots = 7;
for (let i = 0; i < amountDots; i++) {
    let rWidth = 500;
    let r = 488;
    let brl;
    let deg = 120 + (i * 20);
    let x;
    let y;
    let secX;
    let secY;
    y = 500 - (488 * Math.sin(toRadians(deg)));
    secY = 683 - (683 * Math.sin(toRadians(deg)));
    x = 500 + (488 * Math.cos(toRadians(deg)));
    secX = 683 + (683 * Math.cos(toRadians(deg)));
    xCoords.push(secX);
    yCoords.push(secY);
    dots = `<circle  cx=${x} cy=${y}  fill="#00662a" class="control-circle__central-dot degree-${deg}"/>`;
    additionalDot = `<circle  cx=${x} cy=${y} stroke-width="1" stroke="green" fill="transparent" class="control-circle__central-dot--additional "/>`;
    additionalDot += dots;
    mainCircle += additionalDot;

}
someText.forEach((txt, i) => {

    txt.style.top = yCoords[i] + 'px';
    txt.style.left = xCoords[i] + 'px';
})
mainCircleContainer.innerHTML = mainCircle;
let additDots = [...document.querySelectorAll('.control-circle__central-dot--additional')];
let dotAnim = [...document.querySelectorAll('.control-circle__central-dot')];
dotAnim.forEach((dot, i) => {
    dot.addEventListener('mouseover', () => {
        additDots[i].style.r = '11.5';
        additDots[i].style.opacity = '1';
        additDots[i].style.transition = 'r 0.4s';


    })
});
dotAnim.forEach((dot, i) => {
    dot.addEventListener('mouseout', () => {
        additDots[i].style.r = '3.5';
        additDots[i].style.opacity = '0';
        additDots[i].style.transition = 'r 0.4s';


    })
})
let cxAttr = [];
let cyAttr = [];
let nxtCl = 0;

let coord = [cxAttr, cyAttr]
dotAnim.forEach((dot, i) => {

    let cxNum = dot.attributes.cx.nodeValue;
    cxAttr.push(cxNum);
    let cyNum = dot.attributes.cy.nodeValue;
    cyAttr.push(cyNum);
    dot.addEventListener('click', () => {
        let arrayNormal = [20, 40, 60, -60, -40, -20, 0];

        if (dot.classList.contains('degree-160')) {
            mainCircleContainer.style.transform = `translate(-50%, -50%) rotate(${arrayNormal[5]}deg)`;
            nxtCl = -20;
            blockText.style.transform = `translate(-50%, -50%) rotate(${arrayNormal[5]}deg)`;
            someText.forEach((ttt) => {
                ttt.style.transform = `translate(-50%, -50%) rotate(${-arrayNormal[5]}deg)`;
            })
            return nxtCl

        } else if (dot.classList.contains('degree-180')) {
            mainCircleContainer.style.transform = `translate(-50%, -50%) rotate(${arrayNormal[6]}deg)`;
            blockText.style.transform = `translate(-50%, -50%) rotate(${arrayNormal[6]}deg)`;
            someText.forEach((ttt) => {
                ttt.style.transform = `translate(-50%, -50%) rotate(${-arrayNormal[6]}deg)`;
            })
            nxtCl = 0;
            return nxtCl

        } else if (dot.classList.contains('degree-200')) {
            mainCircleContainer.style.transform = `translate(-50%, -50%) rotate(${arrayNormal[0]}deg)`;
            blockText.style.transform = `translate(-50%, -50%) rotate(${arrayNormal[0]}deg)`;
            someText.forEach((ttt) => {
                ttt.style.transform = `translate(-50%, -50%) rotate(${-arrayNormal[0]}deg)`;
            })
            nxtCl = 20;
            return nxtCl
        } else if (dot.classList.contains('degree-120')) {
            mainCircleContainer.style.transform = `translate(-50%, -50%) rotate(${arrayNormal[3]}deg)`;
            blockText.style.transform = `translate(-50%, -50%) rotate(${arrayNormal[3]}deg)`;
            someText.forEach((ttt) => {
                ttt.style.transform = `translate(-50%, -50%) rotate(${-arrayNormal[3]}deg)`;
            })
            nxtCl = -60;
            return nxtCl
        } else if (dot.classList.contains('degree-140')) {
            mainCircleContainer.style.transform = `translate(-50%, -50%) rotate(${arrayNormal[4]}deg)`;
            blockText.style.transform = `translate(-50%, -50%) rotate(${arrayNormal[4]}deg)`;
            someText.forEach((ttt) => {
                ttt.style.transform = `translate(-50%, -50%) rotate(${-arrayNormal[4]}deg)`;
            })
            nxtCl = -40;
            return nxtCl
        } else if (dot.classList.contains('degree-220')) {
            mainCircleContainer.style.transform = `translate(-50%, -50%) rotate(${arrayNormal[1]}deg)`;
            blockText.style.transform = `translate(-50%, -50%) rotate(${arrayNormal[1]}deg)`;
            someText.forEach((ttt) => {
                ttt.style.transform = `translate(-50%, -50%) rotate(${-arrayNormal[1]}deg)`;
            })
            nxtCl = 40;
            return nxtCl
        } else if (dot.classList.contains('degree-240')) {
            mainCircleContainer.style.transform = `translate(-50%, -50%) rotate(${arrayNormal[2]}deg)`;
            blockText.style.transform = `translate(-50%, -50%) rotate(${arrayNormal[2]}deg)`;
            someText.forEach((ttt) => {
                ttt.style.transform = `translate(-50%, -50%) rotate(${-arrayNormal[2]}deg)`;
            })
            nxtCl = 60;
            return nxtCl
        }
    })
})

let clickNext = document.getElementById('click-next');
let clickPrev = document.getElementById('click-prev');

function changeAngles(d) {
    let arrayNormal = [20, 40, 60, -60, -40, -20, 0];
    let arrayReverse = [-20, 0, 20, 40, 60, -60, -40];
    let anglText = [-20, 0, 20, 40, 60, -60, -40];
    let rounds = arrayNormal;
    if (d === -1) {
        rounds = arrayReverse;
    }
    if (nxtCl === 0) {
        mainCircleContainer.style.transform = `translate(-50%, -50%) rotate(${rounds[0]}deg)`;
        blockText.style.transform = `translate(-50%, -50%) rotate(${rounds[0]}deg)`;
        someText.forEach((ttt) => {
            ttt.style.transform = `translate(-50%, -50%) rotate(${-rounds[0]}deg)`;
        })
        nxtCl = rounds[0];
    } else if (nxtCl === 20) {
        mainCircleContainer.style.transform = `translate(-50%, -50%) rotate(${rounds[1]}deg)`;
        blockText.style.transform = `translate(-50%, -50%) rotate(${rounds[1]}deg)`;
        someText.forEach((ttt) => {
            ttt.style.transform = `translate(-50%, -50%) rotate(${-rounds[1]}deg)`;
        })
        nxtCl = rounds[1];
    } else if (nxtCl === 40) {
        mainCircleContainer.style.transform = `translate(-50%, -50%) rotate(${rounds[2]}deg)`;
        blockText.style.transform = `translate(-50%, -50%) rotate(${rounds[2]}deg)`;
        someText.forEach((ttt) => {
            ttt.style.transform = `translate(-50%, -50%) rotate(${-rounds[2]}deg)`;
        })
        nxtCl = rounds[2];
    } else if (nxtCl === 60) {
        mainCircleContainer.style.transform = `translate(-50%, -50%) rotate(${rounds[3]}deg)`;
        blockText.style.transform = `translate(-50%, -50%) rotate(${rounds[3]}deg)`;
        someText.forEach((ttt) => {
            ttt.style.transform = `translate(-50%, -50%) rotate(${-rounds[3]}deg)`;
        })
        nxtCl = rounds[3];
    } else if (nxtCl === -60) {
        mainCircleContainer.style.transform = `translate(-50%, -50%) rotate(${rounds[4]}deg)`;
        blockText.style.transform = `translate(-50%, -50%) rotate(${rounds[4]}deg)`;
        someText.forEach((ttt) => {
            ttt.style.transform = `translate(-50%, -50%) rotate(${-rounds[4]}deg)`;
        })
        nxtCl = rounds[4];
    } else if (nxtCl === -40) {
        mainCircleContainer.style.transform = `translate(-50%, -50%) rotate(${rounds[5]}deg)`;
        blockText.style.transform = `translate(-50%, -50%) rotate(${rounds[5]}deg)`;
        someText.forEach((ttt) => {
            ttt.style.transform = `translate(-50%, -50%) rotate(${-rounds[5]}deg)`;
        })
        nxtCl = rounds[5];
    } else if (nxtCl === -20) {
        mainCircleContainer.style.transform = `translate(-50%, -50%) rotate(${rounds[6]}deg)`;
        blockText.style.transform = `translate(-50%, -50%) rotate(${rounds[6]}deg)`;
        someText.forEach((ttt) => {
            ttt.style.transform = `translate(-50%, -50%) rotate(${-rounds[6]}deg)`;
        })
        nxtCl = rounds[6];
    }

    return nxtCl
}

clickNext.addEventListener('click', () => changeAngles(1))
clickPrev.addEventListener('click', () => changeAngles(-1))