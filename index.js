var params = {
    lines: [
        {
            background: '#00F',
            updateTime: 1000,
            elements: [{
                background: '#00F',
                width: 25
            },
                {
                    background: '#00F',
                    width: 50
                }
            ]
        },
        {
            background: '#0BF',
            updateTime: 1000,
            elements: [{
                background: '#00F',
                width: 25
            },
                {
                    background: '#00F',
                    width: 50
                }
            ]
        },
        {
            background: '#ffd271',
            updateTime: 1000,
            elements: [{
                background: '#00F',
                width: 25
            },
                {
                    background: '#00F',
                    width: 50
                }
            ]
        }
    ]
};

print(params);

function print(params) {
    const width = window.innerWidth;
    const size = window.innerHeight / params.lines.length;
    for (let i = 0; i < params.lines.length ; i++) {
       let line = '<hr size="' + size.toString() + "\"" +
       ' color="' + params.lines[i].background + "\"" +
           ' style="margin: 0" ' +
       '/>';
        document.write(line);
    }

}

