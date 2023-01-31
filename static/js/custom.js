(function($) {

	$(document).ready(function() {
	  $('body').addClass('js');
	  var $menu = $('#menu'),
	    $menulink = $('.menu-link');
	  
	$menulink.click(function() {
	  $menulink.toggleClass('active');
	  $menu.toggleClass('active');
	  return false;
	});});


	videoPopup();


	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:30,
	    nav:true,
	    autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        550:{
	            items:2
	        },
	        750:{
	            items:3
	        },
	        1000:{
	            items:4
	        },
	        1200:{
	            items:5
	        }
	    }
	})


	$(".Modern-Slider").slick({
	    autoplay:true,
	    autoplaySpeed:10000,
	    speed:600,
	    slidesToShow:1,
	    slidesToScroll:1,
	    pauseOnHover:false,
	    dots:true,
	    pauseOnDotsHover:true,
	    cssEase:'fade',
	   // fade:true,
	    draggable:false,
	    prevArrow:'<button class="PrevArrow"></button>',
	    nextArrow:'<button class="NextArrow"></button>', 
	});


	$("div.features-post").hover(
	    function() {
	        $(this).find("div.content-hide").slideToggle("medium");
	    },
	    function() {
	        $(this).find("div.content-hide").slideToggle("medium");
	    }
	 );


	$( "#tabs" ).tabs();


	// (function init() {
	//   function getTimeRemaining(endtime) {
	//     var t = Date.parse(endtime) - Date.parse(new Date());
	//     var seconds = Math.floor((t / 1000) % 60);
	//     var minutes = Math.floor((t / 1000 / 60) % 60);
	//     var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	//     var days = Math.floor(t / (1000 * 60 * 60 * 24));
	//     return {
	//       'total': t,
	//       'days': days,
	//       'hours': hours,
	//       'minutes': minutes,
	//       'seconds': seconds
	//     };
	//   }
	  
	//   function initializeClock(endtime){
	//   var timeinterval = setInterval(function(){
	//     var t = getTimeRemaining(endtime);
	//     document.querySelector(".days > .value").innerText=t.days;
	//     document.querySelector(".hours > .value").innerText=t.hours;
	//     document.querySelector(".minutes > .value").innerText=t.minutes;
	//     document.querySelector(".seconds > .value").innerText=t.seconds;
	//     if(t.total<=0){
	//       clearInterval(timeinterval);
	//     }
	//   },1000);
	// }
	// initializeClock(((new Date()).getFullYear()+1) + "/1/1")
	// })()

})(jQuery);


// coundown   --------------------------------------->

(function () {
	const second = 1000,
		  minute = second * 60,
		  hour = minute * 60,
		  day = hour * 24;
  
	//I'm adding this section so I don't have to keep updating this pen every year :-)
	//remove this if you don't need it
	let today = new Date(),
		dd = String(today.getDate()).padStart(2, "0"),
		mm = String(today.getMonth() + 1).padStart(2, "0"),
		yyyy = today.getFullYear(),
		nextYear = yyyy + 1,
		dayMonth = "01/26/",
		birthday = dayMonth + yyyy;
	
	today = mm + "/" + dd + "/" + yyyy;
	if (today > birthday) {
	  birthday = dayMonth + nextYear;
	}
	//end
	
	const countDown = new Date(birthday).getTime(),
		x = setInterval(function() {    
  
		  const now = new Date().getTime(),
				distance = countDown - now;
  
		  document.getElementById("days").innerText = Math.floor(distance / (day)),
			document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
			document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
			document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
		  //do something later when date is reached
		  if (distance < 0) {
			document.getElementById("headline").innerText = "It's my birthday!";
			document.getElementById("countdown").style.display = "none";
			document.getElementById("content").style.display = "block";
			clearInterval(x);
		  }
		  //seconds
		}, 0)
	}());