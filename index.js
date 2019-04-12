import {params} from 'params';

const width = window.innerWidth;
const height = window.innerHeight / params.lines.length;

start(params);

/**
 * function that starts drawing
 * @param params properties for drawing
 */
function start(params) {
    for (let i = 0; i < params.lines.length; i++) {
        const id = 'mainBlock' + i;
        const mass = internalBlocks(params.lines[i].elements, id);
        mass.push(id);
        document.write(`<div id="${id}" style="background-color: ${params.lines[i].background}; width: ${width}px; height: ${height}px;">
                ${mass[0]} 
            </div>`);

        changeColor(mass, params.lines[i].updateTime);
    }

}

/**
 * Changes block colors
 * @param mass it's array with ids of blocks
 * @param updateTime time between colors change
 */
function changeColor(mass, updateTime) {
    setInterval(function () {
        for (let i = 1; i < mass.length ; i++) {
            document.getElementById(mass[i]).style.backgroundColor = getRandomColor();
        }
    }, updateTime);


}

/**
 * Returns an array where the [0] element is a part of the html code, and the rest is id of div-blocks
 * @param elements it's array with properties of div-blocks
 * @param mainBlock it's ID of the block inside which there are elements
 * @returns {string[]}
 */
function internalBlocks(elements, mainBlock) {
    let back = [``];

    for (let i = 0; i < elements.length; i++) {
        let id = mainBlock + 'internalBlock' + i;
        let block = `<div id="${id}" style="background-color: ${elements[i].background}; width: ${elements[i].width}%; height: ${height}px; margin: 0; display: inline-block;"></div>`;
        back[0] += block;
        back.push(id)
    }

    return back;
}

/**
 * Make and return random HTML Color Codes
 * @returns {string}
 */
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

