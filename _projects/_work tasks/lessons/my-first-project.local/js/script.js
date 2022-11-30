window.onload = function() {
    let head_height = document.querySelector('.head-menu').offsetHeight;
    let aside_margin = document.querySelector('.aside-container');
    aside_margin.style.top = (head_height + 20) + 'px';

    console.log(head_height);
    console.log(aside_margin);

}

