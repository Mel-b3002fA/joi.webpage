/* gsap.set('.cursor',{xPercent:-50, yPercent: -50})

    let cursor = document.querySelector('.cursor')
    let title = document.querySelector('.header')

    let mouseX;
    let mouseY;

    window.addEventListener('mousemove', e => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        gsap.to(cursor, 0.5, {x: mouseX, y:mouseY})
    })

    title.addEventListener('mouseenter', () => {
        gsap.to(hand, 1, {
            scale: 1,
            opacity: 1,
            top: '-75px',
            left: '-75px',
            rotate: 0,
            ease: Elastic.easeOut.config(1, 0.3)
        })
    }) 

  title.addEventListener('mousemove', () => {
        gsap.to(hand, 1, {
            x: mouseX,
            y: mouseY
        })
    })

    title.addEventListener('mouseleave', () => {
        gsap.to(hand, 0.2, {
            scale: 0,
            opacity: 0,
            top: '10',
            left: '40',
            rotate: 45,
        })
    }) */

        $("input:checkbox").on('click', function() {
            // in the handler, 'this' refers to the box clicked on
            var $box = $(this);
            if ($box.is(":checked")) {
              // the name of the box is retrieved using the .attr() method
              // as it is assumed and expected to be immutable
              var group = "input:checkbox[name='" + $box.attr("name") + "']";
              // the checked state of the group/box on the other hand will change
              // and the current value is retrieved using .prop() method
              $(group).prop("checked", false);
              $box.prop("checked", true);
            } else {
              $box.prop("checked", false);
            }
          });