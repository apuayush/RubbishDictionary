$(document).ready(function(){
	$("#btn").click(function(){
		$.ajax({
			url:"http://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&minCorpusCount=0&minLength=5&maxLength=15&limit=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5",
			error:function(){
				$('#meaning').text("Error getting meaning");
			},
			type:"GET",
			data:{
				format:'json'
			},
			success:function(res){
				for(var i in res){
					$('#meaning').append("<p>"+JSON.stringify(res[i]['word'])+"</p>");
				}
			}
		});


	});
});
