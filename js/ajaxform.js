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
				document.getElementById("my-modal").style.display = "block";
				document.getElementById("name").value = "";
				document.getElementById("email").value = "";
				document.getElementById("subject").value = "";
				document.getElementById("message").value = "";
			}
		})
		return false;

	});
