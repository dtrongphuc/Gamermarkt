
$(document).ready(() => {
    var dropDowns = document.querySelectorAll('.dropdown:not(.dropdown--lang)');
    dropDowns.forEach((dropDown) => {
        var dropDownMenu = dropDown.querySelector(':scope > .dropdown-content');
        dropDown.addEventListener('mouseover' ,() => {
            dropDown.style.zIndex = 1060;
            dropDownMenu.classList.replace('hide', 'show');
            $('.modal').modal('show');
        });

        dropDown.addEventListener('mouseout' ,() => {
            dropDown.style.zIndex = 1000;
            dropDownMenu.classList.replace('show', 'hide');
            $('.modal').modal('hide');
        });
    });


    $('#carousel-big').owlCarousel({
        loop:true,
        center:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        responsive: {
            0: {
                items: 1
            }
        }
    });

    $('#carousel-small').owlCarousel({
        loop:true,
        center:false,
        dots: false,
        margin:10,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            1141: {
                items: 4
            }
        }
    });

    $('.collapse').collapse('hide');

    
    var isSm = window.matchMedia("(max-width: 768px)");
    collapseBars(isSm);
    function collapseBars(isSm) {
        if(isSm.matches) {
            $('#collapseNav').collapse('hide');
        } else {
            $('#collapseNav').collapse('show');
        }
    }

    isSm.addListener(collapseBars);

});