let mainCircleContainer = document.getElementById('circle-svg-interactive');
let blockText = document.getElementById('interactive-circle__manures-container');
let someText = [...document.querySelectorAll('.single-manure-type')];
let manureTitle = [...document.querySelectorAll('.single-manure__title')];
let underlinesManure = [...document.querySelectorAll('.single-manure__underline')];
let manurePicture = [...document.querySelectorAll('.single-manure__picture')];

//Obcject with info for manures

function changeSize(e) {
    if (e.classList.contains('btn-dwn')) {
        e.style.transform = 'scale(1.2) rotate(105deg)';
        setTimeout(() => {
            e.style.transform = 'scale(1) rotate(105deg)'
        }, 400)
    } else {


        e.style.transform = 'scale(1.2)';
        setTimeout(() => {
            e.style.transform = 'scale(1)'
        }, 400)
    }
}

let objManures = [{
    pict: '../img/manure-1.png',
    title: 'elixir premium',
    textColor: '#c81f26',
    classActive: 'single-manure__active-red'
}, {
    pict: '../img/manure-2.png',
    title: 'elixir basic',
    textColor: '#00662a',
    classActive: 'single-manure__active-green'
},
    {
        pict: '../img/manure-3.png',
        title: 'elixir supreme',
        textColor: '#227ec0',
        classActive: 'single-manure__active-blue'
    }, {
        pict: '../img/manure-1.png',
        title: 'elixir premium',
        textColor: '#c81f26',
        classActive: 'single-manure__active-red'
    }, {
        pict: '../img/manure-2.png',
        title: 'elixir basic',
        textColor: '#00662a',
        classActive: 'single-manure__active-green'
    },
    {
        pict: '../img/manure-3.png',
        title: 'elixir supreme',
        textColor: '#227ec0',
        classActive: 'single-manure__active-blue'
    },
    {
        pict: '../img/manure-3.png',
        title: 'elixir supreme',
        textColor: '#227ec0',
        classActive: 'single-manure__active-blue'
    }

]

//Deg to radians
function toRadians(angle) {
    return angle * (Math.PI / 180);
}

let xCoords = [];
let yCoords = [];
let dots;
let additionalDot;
let allDegs = [];
//Radius of circles
let rWidth = 500;
let otherCircleR = rWidth + 80;
let r = rWidth - 12;
let mainCircle = `<circle r=${r} cx=${rWidth} cy=${rWidth} fill="transparent" stroke="#00662a" stroke-width="1"/>`;
mainCircleContainer.style.width = `${r * 2 + 24} `;
mainCircleContainer.style.height = `${r * 2 + 24} `;
blockText.style.width = (otherCircleR * 2) + 'px';
blockText.style.height = (otherCircleR * 2) + 'px';
// Angle and amount of el on circle
let amountDots = 7;
let dotsDistance = 30;
let startPoint = 90;

for (let i = 0; i < amountDots; i++) {
    // console.log(objManures[i].title);
    manureTitle[i].innerHTML = objManures[i].title;
    manureTitle[i].style.color = objManures[i].textColor;
    // underlinesManure[i].style.background = objManures[i].textColor;
    manurePicture[i].src = objManures[i].pict;
}
for (let i = 0; i < amountDots; i++) {
    let deg = startPoint + (i * dotsDistance);
    allDegs.push(deg);
    let x;
    let y;
    let secX;
    let secY;
    y = rWidth - (r * Math.sin(toRadians(deg)));
    secY = otherCircleR - (otherCircleR * Math.sin(toRadians(deg)));
    x = rWidth + (r * Math.cos(toRadians(deg)));
    secX = otherCircleR + (otherCircleR * Math.cos(toRadians(deg)));
    xCoords.push(secX);
    yCoords.push(secY);
    dots = `<circle  cx=${x} cy=${y}  data-deg=${deg} fill="#00662a" class="control-circle__central-dot degree-${deg}"/>`;
    additionalDot = `<circle  cx=${x} cy=${y}  stroke-width="1" stroke="green" fill="transparent" class="control-circle__central-dot--additional "/>`;
    underlinesManure[i].setAttribute('data-angle', `${deg}`)
    someText[i].dataset.pos = `${deg}`;

    if (deg === 180) {
        someText.forEach((txt, i) => {

            txt.style.top = `${((1160 / 7) * i) + 70}px`;
            txt.style.left = '-10px';
            txt.style.opacity = '0';
        });
        let activeTxtBlck = [...document.querySelectorAll(`a[data-pos='180']`)][0];
        activeTxtBlck.style.opacity = '1';
        activeTxtBlck.nextElementSibling.style.opacity = '1';
        activeTxtBlck.nextElementSibling.style.left = '30px';
        activeTxtBlck.previousElementSibling.style.opacity = '1';
        activeTxtBlck.previousElementSibling.style.left = '30px';


        underlinesManure[i].classList.add('single-manure__activet');
        mainCircleContainer.setAttribute('data-turn', `${deg}`);
    }

    underlinesManure[i].classList.add(`single-manure__active-${deg}`)
    additionalDot += dots;
    mainCircle += additionalDot;

}


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
});
let cxAttr = [];
let cyAttr = [];
let nxtCl = 0;

function changeSiblings(activeTxtBlck) {
    someText.forEach((txt) => {
        txt.style.opacity = '0';
        txt.style.left = '-10px';
    });
    activeTxtBlck.style.opacity = '1';
    if (activeTxtBlck.previousElementSibling === null) {
        activeTxtBlck.nextElementSibling.style.opacity = '1';
        activeTxtBlck.nextElementSibling.style.left = '30px';
    } else if (activeTxtBlck.nextElementSibling === null) {
        activeTxtBlck.previousElementSibling.style.opacity = '1';
        activeTxtBlck.previousElementSibling.style.left = '30px';
    } else {
        activeTxtBlck.nextElementSibling.style.opacity = '1';
        activeTxtBlck.nextElementSibling.style.left = '30px';
        activeTxtBlck.previousElementSibling.style.opacity = '1';
        activeTxtBlck.previousElementSibling.style.left = '30px';
    }
}

function turnBlock(moveTo) {
    if (moveTo > 0) {
        let step = moveTo / dotsDistance;
        blockText.style.transform = `translate(-50%, ${-50 - (step * 14)}%)`
    } else if (moveTo < 0) {
        let step = -moveTo / dotsDistance;
        blockText.style.paddingBottom = 'none';

        blockText.style.transform = `translate(-50%, ${-50 + (step * 14)}%)`
    } else {
        blockText.style.transform = `translate(-50%, -50%)`

    }
}

dotAnim.forEach((dot, i) => {

    let cxNum = dot.attributes.cx.nodeValue;
    cxAttr.push(cxNum);
    let cyNum = dot.attributes.cy.nodeValue;
    cyAttr.push(cyNum);
    dot.addEventListener('click', () => {
        let dotDeg = dot.dataset.deg;
        let turnDeg = dotDeg - 180;
        nxtCl = turnDeg;
        // console.log(dotDeg);
        mainCircleContainer.style.transform = `translate(-50%, -50%) rotate(${turnDeg}deg)`;
        someText.forEach((txt, i) => {

            txt.style.top = `${((1160 / 7) * i) + 70}px`;
            txt.style.left = '-10px';
            txt.style.opacity = '0';
        });
        let activeTxtBlck = [...document.querySelectorAll(`a[data-pos='${dotDeg}']`)][0];
        activeTxtBlck.style.opacity = '1';
        let moveTo = turnDeg;
        // console.log(moveTo + 'MOVE-TO');

        turnBlock(moveTo);


        changeSiblings(activeTxtBlck);

        mainCircleContainer.setAttribute('data-turn', `${turnDeg}`);

        checkActiveAngle(dotDeg);
        return nxtCl
    })
});

function checkActiveAngle(deg) {
    // console.log(deg + 'MOI DEG');
    let colorBlock = [...document.querySelectorAll(`span[data-angle]`)];
    colorBlock.forEach((block) => {
        // console.log(block.dataset.angle + ' current deg' + deg);
        if (block.dataset.angle === deg) {
            block.classList.add(`single-manure__activet`);
            // console.log('work')

        } else {
            block.classList.remove(`single-manure__activet`);
            // console.log('dont work')
        }
    })
};
let clickNext = document.getElementById('click-next');
let clickPrev = document.getElementById('click-prev');

function changeAngles(d) {
    // dont remove class from item FIX IT
    // [...document.querySelectorAll('.single-manure__underline')].forEach((itm) => {
    //     console.log(itm + " nash itm");
    //     itm.classList.remove('.single-manure--activet');
    //
    // });
    let clickAngle = nxtCl + d;
    if (clickAngle > startPoint) {
        clickAngle = -startPoint;
    } else if (clickAngle < -startPoint) {
        clickAngle = startPoint;
    } else {
        // console.log('Good deg')
    }
    nxtCl = clickAngle;
    mainCircleContainer.style.transform = `translate(-50%, -50%) rotate(${clickAngle}deg)`;

    let forFnc = clickAngle + 180;
    checkActiveAngle(forFnc);
    // console.log([...document.querySelectorAll(`.single-manure__active-${forFnc}`)]);
    let activeBlc = [...document.querySelectorAll(`.single-manure__active-${forFnc}`)][0];
    activeBlc.classList.add('single-manure__activet');
    let blckFather = [...document.querySelectorAll(`a[data-pos='${forFnc}']`)][0];
    turnBlock(clickAngle);
    // check why dont work with it
    changeSiblings(blckFather);

    return nxtCl
}

clickNext.addEventListener('click', () => changeAngles(dotsDistance))
clickPrev.addEventListener('click', () => changeAngles(-dotsDistance))