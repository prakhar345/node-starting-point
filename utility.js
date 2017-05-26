$(document).ready(function(){
		$('#submit').click(function(){
		// var query = "/" + $('#operation').val()+"/" + $('#value1').val()+"/" + $('#value2').val();
		$.ajax({
			url : '/calculate/',
			type: 'GET',
			data: { operation: $('#operation').val(),
			num1: $('#value1').val(),
			num2: $('#value2').val() 
			
		},
		datatype: 'json',
		success : function(data){
			$('#result').val(data.ans);
			console.log(data.ans);
		}
	});


	});

	});
