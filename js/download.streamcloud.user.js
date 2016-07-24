// ==UserScript==
// @name           Streamcloud downloader
// @description    Download videos from streamcloud.eu
// @include        http://streamcloud.eu/*
// @version        1.0
// ==/UserScript==

// 
// a function that loads jQuery and calls a callback function when jQuery has finished loading
function addJQuery(callback) {
  var script = document.createElement("script");
  script.setAttribute("src", "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js");
  script.addEventListener('load', function() {
    var script = document.createElement("script");
    script.textContent = "window.jQ=jQuery.noConflict(true);(" + callback.toString() + ")();";
    document.body.appendChild(script);
  }, false);
  document.body.appendChild(script);
}

function main() {
	var checkVideo = function() {
		var video = jQ('#mediaplayer_media video');
		var videoUrl = video.attr('src');
		
		if (videoUrl) {
			var answer = window.confirm('Valid video found. Download?');
			
			if (answer) {
				location.href = videoUrl;
			}
		}
	};
	
	setInterval(checkVideo, 4);
}

addJQuery(main);