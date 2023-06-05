function changeColor()
{
    const body = document.querySelector('#body');
    body.classList.toggle('bodyOn');
}

function bulbSwitchOn()
{
    const bulb = document.querySelector('.bulb');
    bulb.classList.toggle('bulbOn');
}

function playSound()
{
    const test = new Audio("Lamp Switch.mp3");
    // const ON = document.getElementById('switchOnSound');
    test.play();
}