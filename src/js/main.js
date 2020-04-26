
$(document).ready(() => {
    var dropDowns = document.querySelectorAll('.dropdown');
    dropDowns.forEach((dropDown) => {
        var dropDownMenu = dropDown.querySelector(':scope > .dropdown-content');
        dropDown.addEventListener('mouseover' ,() => {
            dropDown.style.zIndex = 1060;
            console.log('over');
            dropDownMenu.classList.replace('hide', 'show');
            $('.modal').modal('show');
        });

        dropDown.addEventListener('mouseout' ,() => {
            dropDown.style.zIndex = 1000;
            console.log('hide');
            $('.modal').modal('hide');
            dropDownMenu.classList.replace('show', 'hide');
        });
    })
});