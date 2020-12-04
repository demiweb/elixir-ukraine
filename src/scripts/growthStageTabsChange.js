const arrayGrowthStage = ['first-stage', 'second-stage', 'third-stage', 'fourth-stage', 'fifth-stage', 'sixth-stage', 'seventh-stage', 'eighth-stage'];
let allTabGrowth = [...document.querySelectorAll('.elixir-deficiency__manure-deficiency')];
let allGrowthStage = [...document.querySelectorAll('.growth-stages__item')];
allGrowthStage.forEach((gs) => {
    gs.addEventListener('click', () => {
        let id = gs.dataset.stage;
        allTabGrowth.forEach((tg, i) => {
            tg.classList.remove('elixir-deficiency__manure-deficiency--active')
        });
        document.getElementById(`${arrayGrowthStage[id - 1]}`).classList.add('elixir-deficiency__manure-deficiency--active');

        allGrowthStage.forEach((g) => {
            g.classList.remove('growth-stages__item--active')
        })
        gs.classList.add('growth-stages__item--active')
    })
});



