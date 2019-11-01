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
        prevArrow: '<img class="arrow arrow-prev" src="images/arrow-icon.svg" alt="">',
        nextArrow: '<img class="arrow arrow-next" src="images/arrow-icon.svg" alt="">'
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

    $('.form-phone').mask('+38 (999) 999-99-99');
    $('.edit').click(function () {
        $(this).closest('p').find('.form-phone').focus();
    });
});
//# sourceMappingURL=main.js.map

// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');
const navItem1Advantages = document.querySelector('.nav-page-desk-none .menu-nav .nav-link:nth-of-type(1)');
const navItem2Packages = document.querySelector('.nav-page-desk-none .menu-nav .nav-item:nth-of-type(2) > .nav-link');
const navItem3Steps = document.querySelector('.nav-page-desk-none .menu-nav .nav-item:nth-of-type(3) > .nav-link');
const navItem4Steps = document.querySelector('.nav-page-desk-none .menu-nav .nav-item:nth-of-type(4) > .nav-link');

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);
navItem1Advantages.addEventListener('click', toggleMenu);
navItem2Packages.addEventListener('click', toggleMenu);
navItem3Steps.addEventListener('click', toggleMenu);
navItem4Steps.addEventListener('click', toggleMenu);

function toggleMenu () {
  if(!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
};

const logout = document.querySelector('.logout');
const pageLogout = document.querySelector('.page-logout');
const logoutChoiceCancellation = document.querySelector('.logout_choice_cancellation');

logout.addEventListener('click', toggleLogout);
logoutChoiceCancellation.addEventListener('click', toggleLogout);

function toggleLogout () {
    pageLogout.classList.toggle('page-logout_none');
};