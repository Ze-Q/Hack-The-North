$(document).ready(function() {
	ZiggeoApi.Events.on("submitted", function (data) {
		$("#tokenId").val(data.video.token);
		var myForm =document.getElementById('formAddUser');
		myForm.style.display='inline';
	});

	if (/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera) {
		$(".video").attr({
			"ziggeo-height": 300,
			"ziggeo-width": 480
		});
	}
});