(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.slider').slider({
      "indicators": false
    });
    $('.materialboxed').materialbox();

  }); // end of document ready
})(jQuery); // end of jQuery name space

// Set the date we're counting down to
var countDownDate = new Date("Jul 16, 2022 08:00:00").getTime();
    
// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("time").innerHTML = days + " Days " + hours + " Hours "
  + minutes + " Minutes " + seconds + " Second ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
      clearInterval(x);
      document.getElementById("time").innerHTML = "EXPIRED";
    }
  }, 1000);

  var url_string = window.location.href; // www.test.com?name=test
  var url = new URL(url_string);
  var paramValue = url.searchParams.get("name");
  if (paramValue == null) {
    document.getElementById("name").innerHTML = "Save our date";
    document.getElementById("nameBanner").innerHTML = "We invite you to celebrate our wedding";
  } else {
    document.getElementById("name").innerHTML = "Hi " + paramValue + ", please save our date ";
    document.getElementById("nameBanner").innerHTML = "Hi " + paramValue + ", we invite you to celebrate our wedding";
  }


    // 2. This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');
  
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  
    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    var player;
    function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', {
        // width: '100%',
        videoId: 'uRV6SUw8QRA',
        playerVars: { 'controls': 0, 'autoplay': 1, 'playsinline': 1, 'loop': 1, 'modestbranding': 1, 'playlist': 'uRV6SUw8QRA'},
        events: {
          'onReady': onPlayerReady
        }
      });
    }
  
    // 4. The API will call this function when the video player is ready.
    function onPlayerReady(event) {
      event.target.mute();
      event.target.playVideo();
    }