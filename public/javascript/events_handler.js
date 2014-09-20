$(document).ready(function() {
	ZiggeoApi.Events.on("submitted", function (data) {
		$("#tokenId").val(data.video.token);
		var myForm =document.getElementById('formAddUser');
		myForm.style.display='inline';
	});
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$(".video").attr({
			"ziggeo-height": 110,
			"ziggeo-width": 176
		}).css('margin-bottom', 25);
	}
});