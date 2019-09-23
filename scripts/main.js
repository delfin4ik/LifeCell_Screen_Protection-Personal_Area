'use strict';

function readURL(input, elem) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            elem.attr('src', e.target.result).addClass('current');
        };

        reader.readAsDataURL(input.files[0]);
    }
}

function selectIput(input, img) {
    input.change(function (e) {
        readURL(this, img);
        var fileName = e.target.files[0].name;
        $(this).closest('.form-file').find('.file-name').text(fileName);
    });
}

$(function () {

    $('.form-file-img img').each(function () {
        if ($(this).attr('src') != '') {
            $(this).addClass('current');
        }
    });

    selectIput($('#photo-passport-input'), $('#photo-passport'));
    selectIput($('#photo-passport-2-input'), $('#photo-passport-2'));
    selectIput($('#photo-tel-input'), $('#photo-tel'));
    selectIput($('#photo-code-input'), $('#photo-code'));
    selectIput($('#photo-chek-input'), $('#photo-chek'));
    selectIput($('#photo-imei-input'), $('#photo-imei'));
    selectIput($('#photo-guarantee-input'), $('#photo-guarantee'));

    $('#photo-user-input').change(function () {
        readURL(this, $('#photo-user'));
    });

    $('.edit').click(function (e) {
        e.preventDefault();
        $(this).closest('p').find('.edit-text').toggle().next().toggle();
        $(this).find('.img-edit').toggle().next().toggleClass('active');
    });
    //    tabs
    $('.tab-menu li').click(function () {
        $(this).addClass('active').siblings().removeClass('active').closest('.wrap-tab').find('.content-tab').removeClass('active').eq($(this).index()).addClass('active');
        $('.slider-document').slick('refresh');
    });

    //    slider
    $('.slider-document').on('init, afterChange', function (event, slick) {
        if (slick.slideCount > 1) {
            $(this).closest('.box-status').find('.number-first').text(slick.currentSlide + 1);
            $(this).closest('.box-status').find('.number-last').text(slick.slideCount);
        }
    });

    $('.slider-document').slick({
        prevArrow: '<img class="arrow arrow-prev" src="../images/arrow-icon.svg" alt="">',
        nextArrow: '<img class="arrow arrow-next" src="../images/arrow-icon.svg" alt="">'
    });

    //mobile-menu
    $('.user-profil-icon').click(function () {
        $(this).toggleClass('active');
        $('.lk-l').toggleClass('active');
    });

    $('html').click(function (event) {
        if ($(event.target).closest('.lk-l, .user-profil-icon').length === 0) {
            $('.lk-l, .user-profil-icon').removeClass('active');
        }
    });

    $('.form-phone').mask('+7 (999) 999-99-99');
    $('.edit').click(function () {
        $(this).closest('p').find('.form-phone').focus();
    });
});
//# sourceMappingURL=main.js.map
