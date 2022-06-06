var width = 0;
function updateUp() {
    if (width < 9) {
        var element = document.getElementById("myprogressBar");
        width = width + 1.6;
        element.style.width = width + '%';
    }
}

function updateDown() {
    if (width > 0) {
        var element = document.getElementById("myprogressBar");
        width = width - 1.6;
        element.style.width = width + '%';
    }
}