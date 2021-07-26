"use strict";

$(document).ready(function () {
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 80) {
      $('.cta').addClass('active');
    } else {
      $('.cta').removeClass('active');
    }
  });
});