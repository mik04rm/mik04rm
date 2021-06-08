
//smooth scroll jump

$('.nav-link').click(function(e){
  e.preventDefault();
	var jumpId = $(this).attr('href');
	$('body,html').animate({scrollTop: $(jumpId).offset().top}, 'slow');
})



//hide burger on link click

$(".navbar-nav a, .navbar-brand").on("click", function() {
  $(".navbar-toggler").click();
});


//autoplay and loop 

// window.addEventListener('load', function(){
//   var newVideo = document.getElementById('introVideo');
//   newVideo.addEventListener('ended', function() {
//       this.currentTime = 0;
//       this.play();
//   }, false);

//   newVideo.play();

// });
