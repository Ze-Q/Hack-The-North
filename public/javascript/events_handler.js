$(document).ready(function() {
	ZiggeoApi.Events.on("submitted", function (data) {
		$("#tokenId").val(data.video.token);
		var myForm =document.getElementById('formAddUser');
		myForm.style.display='inline';
	});
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$(".video").attr({
			"ziggeo-height": 100,
			"ziggeo-width": 160
		}).css('margin-bottom', 5);
	}
});