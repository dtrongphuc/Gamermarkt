
$(document).ready(() => {
    var dropDowns = document.querySelectorAll('.dropdown');
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
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
});