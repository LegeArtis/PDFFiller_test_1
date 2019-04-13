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
        const blocks = internalBlocks(params.lines[i].elements, id);
        const ids = [id];
        const div = document.createElement('div');

        div.id = id;
        div.style.width = width +'px';
        div.style.height = height +'px';
        div.style.backgroundColor = params.lines[i].background;

        blocks.forEach(block => {
            div.appendChild(block);
            ids.push(block.id);
        });

        document.body.appendChild(div);

        changeColor(ids, params.lines[i].updateTime)
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
 * Returns an array with div elements
 * @param elements it's array with properties of div-blocks
 * @param mainBlock it's ID of the block inside which there are elements
 * @returns {Array}
 */
function internalBlocks(elements, mainBlock) {
    let blocks = [];

    for (let i = 0; i < elements.length; i++) {
        const id = mainBlock + 'internalBlock' + i;
        const div = document.createElement('div');

        div.id = id;
        div.style.backgroundColor = elements[i].background;
        div.style.height = height + 'px';
        div.style.width = elements[i].width + '%';
        div.style.display = 'inline-block';

        blocks.push(div);
    }
    return blocks;
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

