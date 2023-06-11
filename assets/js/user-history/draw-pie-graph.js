function drawPieGraph(max, classname, colorname) {
    let i = 1;
    const func1 = setInterval(function () {
        if (i < max) {
            fillColor(i, classname, colorname);
            i++;
        } else {
            clearInterval(func1);
        }
    }, 10);
}

function fillColor(i, classname, colorname) {
    document.querySelector(classname).style('"background": "conic-gradient(" + colorname + " 0% " + i + "%, #ffffff " + i + "% 100%)"');
}

export {drawPieGraph};