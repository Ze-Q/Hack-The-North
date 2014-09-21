$(document).ready(function() {
	ZiggeoApi.Events.on("submitted", function (data) {
		$("#tokenId").val(data.video.token);
		$(".hideBeforeRecording").removeClass("hideBeforeRecording");
	});
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$(".video").attr({
			"ziggeo-height": 110,
			"ziggeo-width": 176
		}).css('margin-bottom', 25);
	}

	$('#formAddUser').submit(function () {
		// get all the inputs into an array.
	    var $inputs = $('#formAddUser :input');
	    var values = {};
	    $inputs.each(function() {
	        values[this.name] = $(this).val();
	    });

 		$.ajax({
		    type: "POST",
		    url: "/submit",
		    data: values,
		    success: function() {
		      alert("Video is sent!");
		    }
		  });
 		return false;
	});
	
});
