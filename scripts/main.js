window.onload = function () {
    var sControl = document.getElementsByClassName('sliderControls')[0];
    var slider = document.getElementsByClassName('sliderWrap')[0];

    sControl.addEventListener('click', function (event) {
        var target = event.target;
        if (target.tagName == 'IMG') {
            target = target.parentElement;
        } else {
            target = target.parentElement;
        }
        for (var item in sControl.children) {
            if (target == sControl.children[item]) {
                slider.style.left = -733 * item + "px";
            }
        }
    })
}