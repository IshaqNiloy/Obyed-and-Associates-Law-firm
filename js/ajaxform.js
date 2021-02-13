	$('form.ajax').on('submit', function(){
		var that = $(this),
		url = that.attr('action'),
		type = that.attr('method'),
		data = {};

		that.find('[name]').each(function(index, value){
			var that = $(this),
			name = that.attr('name'),
			value = that.val();

			data[name] = value;
		});
		$.ajax({
			url: url,
			type: type,
			data: data,
			success: function(response) {
				document.getElementById("alert").style.display = "block";
				document.getElementById("slideshow").style.height = "442px";
				document.getElementById("btn_submit").style.margin = "-1%";
				document.getElementById("name").value = "";
				document.getElementById("email").value = "";
				document.getElementById("subject").value = "";
				document.getElementById("message").value = "";
			}
		})
		return false;

	});
