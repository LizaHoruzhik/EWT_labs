function setFlexDirection(direction, button) {
    document.querySelector('.container1').style.flexDirection = direction;
    setActiveButton(button);
}

function setJustifyContent(justify, button) {
    document.querySelector('.container2').style.justifyContent = justify;
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