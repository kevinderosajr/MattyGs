window.onscroll = function() {myFunction()};

let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;
console.log(sticky)

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  
    
  } else {
    navbar.classList.remove("sticky");
 
  }
  
}



// document.addEventListener('DOMContentLoaded', function() {

//     //page-head = navbar
//     //band = content
//     //info-bar = header

//     let mn = $('#navbar'),
//     core = $('.content').eq(0),
//     mns = 'navbar-scrolled',
//     bit, hdr;
  
//     $(window).resize(function() {
  
//       bit = mn.outerHeight();
//       hdr = $('#header').outerHeight();
//     })
//     .resize().scroll(function() {
  
//       if ($(this).scrollTop() > hdr) {
//         mn.addClass(mns);
//         core.css('margin-top', bit);
//       } else {
//         mn.removeClass(mns);
//         core.attr('style', '');
//       }
//     })
//     .on('load', function() {
  
//       $(this).scroll();
//     });
//   });

{/* <script src="website.js"></script> */}