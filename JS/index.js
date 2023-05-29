console.log("my file is loading");

const container = document.querySelector('.grid-container');
const cards = document.querySelectorAll('.cards');
console.log(container.addEventListener)

cards.forEach(card => {
    console.log("current: " + card)

    card.addEventListener('mouseover', function (event) {
        console.log("mouseover")
        card.classList.add('scale');

        const hoveredIndex = Array.from(cards).indexOf(card);
        const numRows = Math.ceil(cards.length / 2);
        const numCols = 2;
        const hoveredRow = Math.floor(hoveredIndex / numCols);
        const hoveredCol = hoveredIndex % numCols;

        for (let i = 0; i < cards.length; i++) {
            if (i !== hoveredIndex) {
                const row = Math.floor(i / numCols);
                const col = i % numCols;
                let shiftClass = [];

                if (row < hoveredRow) {
                    shiftClass.push('shift-up');
                } else if (row > hoveredRow) {
                    shiftClass.push('shift-down');
                }

                if (col < hoveredCol) {
                    shiftClass.push('shift-left');
                } else if (col > hoveredCol) {
                    shiftClass.push('shift-right');
                }

                cards[i].classList.add(shiftClass.join(','));
            }
        }
    });

    card.addEventListener('mouseout', function (event) {
        console.log("it's loading")
        card.classList.remove('scale');
        for (let i = 0; i < cards.length; i++) {
            cards[i].classList.remove('shift-up', 'shift-down', 'shift-left', 'shift-right');
        }
    });
});