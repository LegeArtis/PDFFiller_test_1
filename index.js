import {params} from 'params';

const height = window.innerHeight / params.lines.length;

startDrawing(params);


/**
 * function that starts drawing
 * @param params properties for drawing
 */
function startDrawing(params) {
    const width = window.innerWidth;

    for (let i = 0; i < params.lines.length; i++) {
        const id = 'mainBlock' + i;
        const props = internalBlocks(params.lines[i].elements, id);
        props.ids.push(id);
        document.write(`<div id="${id}" style="background-color: ${params.lines[i].background}; width: ${width}px; height: ${height}px;">
                ${props.htmlText} 
            </div>`);

        changeColor(props.ids, params.lines[i].updateTime);
    }

}

/**
 * Changes block colors
 * @param ids it's array with ids of blocks
 * @param updateTime time between colors change
 */
function changeColor(ids, updateTime) {
    setInterval(function () {
        for (let i = 0; i < ids.length ; i++) {
            document.getElementById(ids[i]).style.backgroundColor = getRandomColor();
        }
    }, updateTime);


}

/**
 * Returns an array where the [0] element is a part of the html code, and the rest is id of div-blocks
 * @param elements it's array with properties of div-blocks
 * @param mainBlock it's ID of the block inside which there are elements
 * @returns {{ids: Array, htmlText: string}}
 */
function internalBlocks(elements, mainBlock) {
    const props = {
        htmlText: '',
        ids: []
    };

    for (let i = 0; i < elements.length; i++) {
        const id = mainBlock + 'internalBlock' + i;
        const block = `<div id="${id}" style="background-color: ${elements[i].background}; width: ${elements[i].width}%; height: ${height}px; margin: 0; display: inline-block;"></div>`;
        props.htmlText += block;
        props.ids.push(id);
    }

    return props;
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

