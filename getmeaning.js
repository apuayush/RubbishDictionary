function getMeaning(dt){
	var mw=[];
	for(var i in dt){
					dic=dt[i];
					// console.log(dic)
					$.ajax({
						url : "http://api.wordnik.com:80/v4/word.json/"+dic+"/definitions?limit=1&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5",
						data:{
							format:'json'
						},
						error:function(){
							$('#meaning').append("<p>Error in meaning</p>");
						},
						type:"GET",
						success:function(res2){
							//  console.log(res2[0]["text"]);
							// 	mw[i]=res2[0]["text"];
							// 	console.log(mw)
							$('#meaning').append("<p>"+res2[0]['word']+"-"+res2[0]['text']+"</p>");

							},
					});
				} 	
}

$(document).ready(function(){
	$("#btn").click(function(){
		var word=$("#word");
		var dic=""
		var dt=new Array();
		$.ajax({
			url:"http://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&minCorpusCount=0&minLength=5&maxLength=15&limit=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5",
			error:function(){
				$('#meaning').text("Error in getting randomWords");
			},
			type:"GET",
			data:{
				format:'json'
			},
			success:function(res){
				for(var i in res){
					dt.push(res[i]['word'])
				}
				getMeaning(dt)
				// console.log(dt);
				//$('#meaning').append("<p>"+JSON.stringify(res)+"</p>");
			}
			
		});
	});
});


