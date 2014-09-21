$(document).ready(function() {
	ZiggeoApi.Events.on("submitted", function (data) {
		$("#tokenId").val(data.video.token);
		var myForm =document.getElementById('formAddUser');
		myForm.style.display='inline-bloc';
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
	

	!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
	(function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) return;js = d.createElement(s); js.id = id;js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0";fjs.parentNode.insertBefore(js, fjs);}(document, 'script', 'facebook-jssdk'));

});
