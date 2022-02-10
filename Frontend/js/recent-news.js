var slider = $('.recent-news');
 
var settings = {
    autoplay:true,
    slidesToShow: 1,
    autoplaySpeed: 2000,
    mobileFirst:true,
    dots: true,
    fade: true,
    arrows: false,
};
 
$(window).on('resize', function() {
 
   if ($(window).width() >= 992) 
   {
      if (slider.hasClass('slick-initialized')) {
         slider.slick('unslick');
      }
      return;
   }
   else if (!slider.hasClass('slick-initialized')) 
   {
      return slider.slick(settings);
   }
});

$(window).trigger('resize');

// $(document).ready(function(){
//     $('.recent-news').slick({
//         autoplay:true,
//         slidesToShow: 1,
//         autoplaySpeed: 2000,
//         mobileFirst:true,
//         dots: true,
//         fade: true,
//         arrows: false,
//         responsive: [
//             {
//                 breakpoint: 576,
//                 settings: {
//                     slidesToShow: 2
//                 }
//             },
//             {
//                 breakpoint: 992,
//                 settings: 'unslick'
//             }
//         ]
//     });
// });