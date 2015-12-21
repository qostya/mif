'use strict';
angular.module('singleBook').directive('eye',
    () => {
        function postLink(el, attrs) {
            let dotParent = el[0].querySelector('.b-single-book_eye_wrapper'),
                dot = dotParent.children[0],
                elStartCoords = dotParent.getBoundingClientRect(),
                eyeRadius = +attrs.eyeRadius,
                eyeSpeed = +attrs.eyeSpeed,
                averageLength = (window.innerWidth + window.innerHeight)/eyeSpeed;

            function eyeController (mouseX, mouseY) {
                let coordX = mouseX - elStartCoords.left,
                    coordY = mouseY - elStartCoords.top,
                    angle = Math.atan2(coordX, coordY)*(180/Math.PI) - 90,
                    len = Math.sqrt(coordX*coordX + coordY*coordY),
                    theta = angle * Math.PI / 180,
                    width =  eyeRadius * (len/averageLength),
                    height = eyeRadius * (len/averageLength),
                    dx, dy;

                if (width > eyeRadius) {
                    width = eyeRadius;
                }

                if (height > eyeRadius) {
                    height = eyeRadius;
                }

                dx = width * Math.cos(theta);
                dy = height * Math.sin(theta);

                dot.style.left = dx + 'px';
                dot.style.top = ~dy + 'px';
            }

            function eyeHandler(ev) {
                eyeController(ev.pageX, ev.pageY);
            }

            document.addEventListener('mousemove', eyeHandler);
        }

        return {
            restrict: 'A',
            compile: postLink,
            template: `<div class="b-single-book_eye">
                           <div class="b-single-book_eye_wrapper">
                               <span class="b-single-book_eye_dot"><i></i></span>
                           </div>
                       </div>`
        };
    }
);