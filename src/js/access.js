
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
    var layout1 = document.querySelector('.layout1');
    var form = document.querySelector('.main-register__form');

    document.querySelector('.main-register__create-btn').addEventListener('click', () => {
        layout1.classList.add('animated', 'bounceOutLeft', 'faster'); 
        form.classList.replace('d-none', 'd-block');
        form.classList.add('animated', 'fadeInUpBig', 'fast');
    });

    layout1.addEventListener('animationend', () => {
        layout1.classList.replace('d-flex', 'd-none');
    });
    var country = document.querySelector('#country');
    var selectOptions = document.querySelectorAll('option');
    var selectedElement
    Selected();
    function Selected() {
        selectedElement = [...selectOptions].filter(function(item) {
            return item.selected == true;
        });
        document.querySelector('#code').innerHTML = `+${selectedElement[0].dataset.code}`;
    }

    country.addEventListener('change', () => {
        Selected();
    });
});