$(document).ready(function() {
	ZiggeoApi.Events.on("submitted", function (data) {
		alert("Submitted a new video with token '" + data.video.token + "'!");
	});
});