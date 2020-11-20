
let mainCircleContainer = document.getElementById('circle-svg-interactive');
let blockText = document.getElementById('interactive-circle__manures-container');
let someText = [...document.querySelectorAll('.single-manure-type')];

let objManures = [{
    pict : ''
}]

function toRadians(angle) {
    return angle * (Math.PI / 180);
}

let xCoords = [];
let yCoords = [];
let dots;
let additionalDot;
let allDegs = [];
let rWidth = 500;
let otherCircleR = rWidth + 80;
let r = rWidth-12;
let mainCircle = `<circle r=${r} cx=${rWidth} cy=${rWidth} fill="transparent" stroke="#00662a" stroke-width="1"/>`;
mainCircleContainer.style.width = `${r * 2 + 24} `
mainCircleContainer.style.height = `${r * 2 + 24} `
blockText.style.width = (otherCircleR * 2) + 'px';
blockText.style.height = (otherCircleR * 2) + 'px';
let amountDots = 7;
let dotsDistance = 30;
for (let i = 0; i < amountDots; i++) {
    let deg = 90 + (i * dotsDistance);
    allDegs.push(deg);
    console.log(allDegs);
    let x;
    let y;
    let secX;
    let secY;
    y = rWidth - (r * Math.sin(toRadians(deg)));
    secY = otherCircleR - (otherCircleR * Math.sin(toRadians(deg)));
    x = rWidth+ (r * Math.cos(toRadians(deg)));
    secX = otherCircleR + (otherCircleR * Math.cos(toRadians(deg)));
    xCoords.push(secX);
    yCoords.push(secY);
    dots = `<circle  cx=${x} cy=${y}  data-deg=${deg} fill="#00662a" class="control-circle__central-dot degree-${deg}"/>`;
    additionalDot = `<circle  cx=${x} cy=${y}  stroke-width="1" stroke="green" fill="transparent" class="control-circle__central-dot--additional "/>`;
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
dotAnim.forEach((dot, i) => {

    let cxNum = dot.attributes.cx.nodeValue;
    cxAttr.push(cxNum);
    let cyNum = dot.attributes.cy.nodeValue;
    cyAttr.push(cyNum);
    dot.addEventListener('click', () => {
        let dotDeg = dot.dataset.deg;
        let turnDeg = dotDeg - 180;
        nxtCl = turnDeg;
        console.log(dotDeg);
        mainCircleContainer.style.transform = `translate(-50%, -50%) rotate(${turnDeg}deg)`
        blockText.style.transform = `translate(-50%, -50%) rotate(${turnDeg}deg)`
        someText.forEach((txt) => {
            txt.style.transform = `translate(-50%, -50%) rotate(${-turnDeg}deg)`
        })
        return nxtCl
    })
})

let clickNext = document.getElementById('click-next');
let clickPrev = document.getElementById('click-prev');

function changeAngles(d) {
    let clickAngle = nxtCl + d;
    if ( clickAngle > 90 ) {
        clickAngle = -90;
    } else if (clickAngle < -90) {
        clickAngle = 90;
    } else {
        console.log('Good deg')
    }
    nxtCl = clickAngle;
        mainCircleContainer.style.transform = `translate(-50%, -50%) rotate(${clickAngle}deg)`;
    blockText.style.transform = `translate(-50%, -50%) rotate(${clickAngle}deg)`
    someText.forEach((txt) => {
        txt.style.transform = `translate(-50%, -50%) rotate(${-clickAngle}deg)`
    })
    return nxtCl
}

clickNext.addEventListener('click', () => changeAngles(dotsDistance))
clickPrev.addEventListener('click', () => changeAngles(-dotsDistance))