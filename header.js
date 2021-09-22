let show = document.querySelector('.fix');
let btn = document.querySelector('.btn');
let setopen = false;

function openmenu() {
    if (setopen) {
        show.classList.remove('show');
        btn.classList.remove('show-btn');

    } else {
        show.classList.add('show');
        btn.classList.add('show-btn');
    }
    setopen = !setopen;
}
btn.addEventListener('click', function () {
    openmenu();
});


const slider__box = document.querySelector('.slider__box');
const box = document.querySelectorAll('.box');
const slider = document.querySelector('#slider');
let count = 0;

document.addEventListener('DOMContentLoaded', function () {

    const media = [
        window.matchMedia('(min-width: 768px)'),
    ];

    if (media[0].matches) {
        owlSlide(2);
    } else {
        owlSlide(1);
    }
    window.addEventListener('resize', function () {
        if (window.innerWidth >= 768) {
            owlSlide(2);
        } else {
            owlSlide(1);
        }
    })
});

function owlSlide(amountSlideAppear) {
    const widthItemAndMargin = slider.offsetWidth / amountSlideAppear;
    //1 box (reviewDiv là màn hình / 3 là số box được xuất hiện)
    let widthAllBox = widthItemAndMargin * box.length;
    //all box
    slider__box.style.width = `${widthAllBox}px`;
    let spacing = widthAllBox - amountSlideAppear * widthItemAndMargin;
    // vị trí cuối cùng
    setInterval(function () {
        count += widthItemAndMargin / 2;
        if (count > spacing) {
            count = 0
        } else {
            slider__box.style.transform = `translateX(${-count}px)`;
        }
    }, 5000)
}

function maxwidth() {
    window.addEventListener('resize', function () {
        if (window.innerWidth < 280) {
            document.querySelector('.small').innerHTML = "<h3 class='d-flex w-100' style='margin-top:100px; padding: 10px; justify-content: center; align-items: center;'>Lỗi truy cập 404</h3>";
            document.querySelector('.big').style.display = "none"
        } else {
            document.querySelector('.small').innerHTML = "";
            document.querySelector('.big').style.display = "block"
        }
    })
}

maxwidth();