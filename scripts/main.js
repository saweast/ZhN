window.onload = function () {
    var sControl = document.getElementsByClassName('sliderControls')[0];
    var slider = document.getElementsByClassName('sliderWrap')[0];

    sControl.children[0].style.borderBottom = "3px solid #d62424";

    sControl.addEventListener('click', function (event) {
        var target = event.target;
        var buf = '';
        if (target.tagName == 'IMG') {
            target = target.parentElement;
        } else {
            target = target.parentElement;
        }


        for (var item = 0; item < sControl.children.length; item++) {
            if (target == sControl.children[item]) {
                slider.style.left = -733 * item + "px";
                target.style.borderBottom = "3px solid #d62424";


            } else {
                sControl.children[item].style.borderBottom = "0px solid #d62424";
            }
        }
    })
}