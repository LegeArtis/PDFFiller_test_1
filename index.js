var params = {
    lines: [
        {
            background: '#00F',
            updateTime: 1000,
            elements: [{
                background: '#79ff18',
                width: 25
            },
                {
                    background: '#ffef52',
                    width: 50
                }
            ]
        },
        {
            background: '#0BF',
            updateTime: 1000,
            elements: [{
                background: '#fc85ff',
                width: 25
            },
                {
                    background: '#f4fffc',
                    width: 50
                }
            ]
        },
        {
            background: '#ffd271',
            updateTime: 1000,
            elements: [{
                background: '#ff3f36',
                width: 25
            },
                {
                    background: '#8ff0ff',
                    width: 50
                }
            ]
        }
    ]
};

const width = window.innerWidth;
const height = window.innerHeight / params.lines.length;

start(params);

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

function changeColor(mass, updateTime) {
    setInterval(function () {
        for (let i = 1; i < mass.length ; i++) {
            document.getElementById(mass[i]).style.backgroundColor = getRandomColor();
        }
    }, updateTime);


}

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

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

