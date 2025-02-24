window.onload = () => {
    setGap('5px', document.querySelector('.gap button.active'));
    setJustifyItems('start', document.querySelector('.jus button.active'));
    setAlignItems('start', document.querySelector('.al button.active'));
};

function setGap(gap, button) {
    document.querySelector('.container1').style.gap = gap;
    setActiveButton(button);
}

function setJustifyItems(justify, button) {
    document.querySelector('.container2').style.justifyItems = justify;
    setActiveButton(button);
}

function setAlignItems(align, button) {
    document.querySelector('.container3').style.alignItems = align;
    setActiveButton(button);
}

function setActiveButton(activeButton) {
    const buttons = activeButton.parentNode.querySelectorAll('button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    activeButton.classList.add('active');
}