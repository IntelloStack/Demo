$(document).ready(function(){
    var lazyLoadInstance = new LazyLoad({elements_selector:"img.lazy, video.lazy, div.lazy, section.lazy, header.lazy, footer.lazy,iframe.lazy"});
    let bannerHeight = $(window).height();
    $("#related-products").not('.slick-initialized').slick({
        centerMode: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow:'<i class="icon-left-arrow right-arrow arrow"></i>',
        nextArrow:'<i class="icon-right-arrow left-arrow arrow"></i>',
        responsive: [{
            breakpoint: 1200,
            settings: {
                centerMode: false,
                centerPadding: '0px',
                slidesToShow: 5,
                slidesToScroll: 1,
                
            }
        },{
            breakpoint: 1300,
            settings: {
                 centerMode: false,
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },{
            breakpoint: 1200,
            settings: {
                 centerMode: false,
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },{
            breakpoint: 1024,
            settings: {
                 centerMode: false,
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },{
            breakpoint: 992,
            settings: {
                 centerMode: false,
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },{
            breakpoint: 576,
            settings: {
                 centerMode: false,
                slidesToShow: 1,
                slidesToScroll: 1,      
            }
        }] 
    
    });
   

   
});


$("#isShippingDiffernt").click(function(){
    if ($(this).is(':checked') == true) {
        $("#shippingForm").removeClass('d-none');
    } else {
        $("#shippingForm").addClass('d-none');
    }
});

// find the top of each section
var sectionA = $('.section-a').offset().top;
var sectionB = $('.section-b').offset().top;
var sectionC = $('.section-c').offset().top;

// number of pixels before the section to start animation
var scrollOffset = 100; 


// run this function when the window scrolls
$(window).scroll(function() {  
  
   
  // get the window height on scroll
  var scroll = $(window).scrollTop() + scrollOffset;  
  
  

  // if scroll hits the top of section-a
  if ( scroll > sectionA ) {
    $('.section-a .hero-title').addClass('animate-normal');
    $('.section-a .hero-subtitle').addClass('animate-delay');
  }

  // if scroll hits the top of section-b
  if ( scroll > sectionB ) {
    $('.section-b .hero-title').addClass('animate-normal');
    $('.section-b .hero-subtitle').addClass('animate-delay');
  }

  // if scroll hits the top of section-c
  if ( scroll > sectionC ) {
    $('.section-c .hero-title').addClass('animate-normal');
    $('.section-c .hero-subtitle').addClass('animate-delay');
  }
});


document.addEventListener("DOMContentLoaded", function () {
    // Get the section title element
    var sectionTitle = document.querySelector(".section-title");
  
    // Add a scroll event listener
    window.addEventListener("scroll", function () {
      // Get the position of the section title relative to the viewport
      var rect = sectionTitle.getBoundingClientRect();
  
      // Check if the section title is in the viewport
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        // Calculate the width based on how much of the section title is visible
        var visibleWidth = Math.min((rect.bottom / window.innerHeight) * 100, 100);
  
        // Set the width of the pseudo-element to make it visible
        sectionTitle.style.setProperty("--border-width", visibleWidth + "%");
      } else {
        // If the section title is not in the viewport, hide the border
        sectionTitle.style.setProperty("--border-width", "0");
      }
    });
  });
  