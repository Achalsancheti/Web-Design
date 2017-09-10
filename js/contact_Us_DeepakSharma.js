function divFunction(){
	document.getElementById("contactInfoDiv").style.display="none";
	document.getElementById("inquiryDiv").style.display = 'block';
	document.getElementById("queryMessage").style.display = 'none';
}

function contactFunction(){
	document.getElementById("inquiryDiv").style.display="none";
	document.getElementById("contactInfoDiv").style.display='block';
	document.getElementById("queryMessage").style.display = 'none';
      var script= document.createElement('script');
      script.src= 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDoDuFOJwbCYI_3o_CDpd_p5_K3IrQTbE0&callback=initMap';
	  script.setAttribute("async", "async");
	  script.setAttribute("defer", "defer");
      document.getElementById('contactInfoDiv').appendChild(script);
}

function closFunction(){
	document.getElementById("inquiryDiv").style.display = "none";
}

function slide() {
    $('html,body').animate({
        scrollTop: $(".row").offset().top},
        'slow');
	
	document.getElementById("divBox").style.marginTop = "100px";
}

function slideDiv(){
	$('html,body').animate({
        scrollTop: $(".container").offset().top},
        'slow');
}

function initMap() {
        var pos = {lat:42.349303 , lng: -71.083646 };
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: pos
        });
        var marker = new google.maps.Marker({
          position: pos,
          map: map
        });
}

function inquiry1(){
	document.getElementById("inquiryDiv").style.display = 'none';
	document.getElementById("queryMessage").style.display = 'block';
}

function liveChat(){

window.$zopim||(function(d,s){var z=$zopim=function(c){z._.push(c)},$=z.s=
d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set.
_.push(o)};z._=[];z.set._=[];$.async=!0;$.setAttribute("charset","utf-8");
$.src="https://v2.zopim.com/?4QtRcdtiAES5wqtiYvn3FTMLmGahPA1L";z.t=+new Date;$.
type="text/javascript";e.parentNode.insertBefore($,e)})(document,"script");
}