let allRegions = [...document.querySelectorAll('.ukraine-region')];
let allDotsOnMap = [...document.querySelectorAll('.bg-circle-rad')];
let regCenter = [...document.querySelectorAll('.elixir-map-location__region-center')];
let closeHoverMob = [...document.querySelectorAll('.close-hover-block-mob')];

closeHoverMob.forEach((cls) => {
    cls.addEventListener('click', () => {
        let blck = cls.closest('.elixir-map-location__region-center');
        blck.style.display = 'none';
        blck.style.animation = '';
    })
})

regCenter.forEach((center) => {
    center.addEventListener('mouseover', () => {
        center.style.display = 'block';
        center.style.animation = 'flowVisible 0.4s linear';
    });

    center.addEventListener('mouseout', () => {
        center.style.display = 'none';
        center.style.animation = '';

    })
})

allDotsOnMap.forEach((adom) => {
    adom.addEventListener('mouseover', () => {
        let adomId = adom.id;
        adomId = adomId.toString();
        adomId = adomId.slice(0, -2);
        let adomFthr = [...document.querySelectorAll(`svg path#${adomId}`)][0];
        let hoverBlock = [...document.querySelectorAll(`.elixir-map-location__region-center--${adomId}`)][0];
        adomFthr.style.fill = '#00662a';
        adom.lastChild.previousElementSibling.style.r = '36px';
        hoverBlock.style.display = 'block';
        hoverBlock.style.animation = 'flowVisible 0.4s linear';
    });
    adom.addEventListener('mouseout', () => {
        let adomId = adom.id;
        adomId = adomId.toString();
        adomId = adomId.slice(0, -2);
        let adomFthr = [...document.querySelectorAll(`svg path#${adomId}`)][0];
        adomFthr.style.fill = '#88A4BC';
        adom.lastChild.previousElementSibling.style.r = '0';
        let hoverBlock = [...document.querySelectorAll(`.elixir-map-location__region-center--${adomId}`)][0];
        hoverBlock.style.display = 'none';
        hoverBlock.style.animation = '';
    })
})

allRegions.forEach((reg) => {
    // let regId = reg.id;
    // console.log(regId);
    // console.log(`${regId}-1`);

    reg.addEventListener('mouseover', () => {
        let posX = reg.offsetTop;
        console.log(posX + 'coordinati');
        let regId = reg.id;
        console.log(reg.id);
        console.log(regId.length);
        reg.style.fill = '#00662a';
        if (regId.length === 0) {
            console.log('netu')
        } else if (regId === 'kiev-city') {
            let circ = [...document.querySelectorAll('svg #kiev-1')][0].lastChild.previousElementSibling;
            circ.style.r = '36px';
            let hoverBlock = [...document.querySelectorAll(`.elixir-map-location__region-center--kiev`)][0];
            hoverBlock.style.display = 'block';
            hoverBlock.style.animation = 'flowVisible 0.4s linear';

        } else {
            let circ = [...document.querySelectorAll(`svg #${regId}-1`)][0].lastChild.previousElementSibling;
            circ.style.r = '36px';
            let hoverBlock = [...document.querySelectorAll(`.elixir-map-location__region-center--${regId}`)][0];
            hoverBlock.style.display = 'block';
            hoverBlock.style.animation = 'flowVisible 0.4s linear';


        }
    })
    reg.addEventListener('mouseout', () => {
        let regId = reg.id;
        regId.length;
        reg.style.fill = '#88A4BC';

        if (regId.length === 0) {
            console.log('netu')
        } else if (regId === 'kiev-city') {
            let circ = [...document.querySelectorAll('svg #kiev-1')][0].lastChild.previousElementSibling;
            circ.style.r = '0';
            let hoverBlock = [...document.querySelectorAll(`.elixir-map-location__region-center--kiev`)][0];
            hoverBlock.style.display = 'none';
            hoverBlock.style.animation = '';

        } else {
            let circ = [...document.querySelectorAll(`svg #${regId}-1`)][0].lastChild.previousElementSibling;
            circ.style.r = '0';
            let hoverBlock = [...document.querySelectorAll(`.elixir-map-location__region-center--${regId}`)][0];
            hoverBlock.style.display = 'none';
            hoverBlock.style.animation = '';

        }

    })
})