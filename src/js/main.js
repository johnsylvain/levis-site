$(document).ready(function() {
	//initial load
	$("#content").load('content/portfolio.html', function(){
		$('.projectrow a, p a').click(function(e){
			e.preventDefault();
			console.log(page);
			var page = $(this).attr('href');
			console.log(page);
			$('#content').load('content/' + page + '.html');
		});
	});

	$('.nav li a').click(function(e){
		$('a').removeClass('active');
		$(this).addClass('active');
		var page = $(this).attr('href');
		console.log(page);
		$('#content').load('content/' + page + '.html', function(){
			$('.projectrow a, p a').click(function(e){
				e.preventDefault();
				console.log(page);
				var page = $(this).attr('href');
				console.log(page);
				$('#content').load('content/' + page + '.html');
			});
		});
		return false;
	});
});





	/*$('.nav li a').click(function(e){
		$('a').removeClass('active');
		$(this).addClass('active');
		var page = $(this).attr('href');
		console.log(page);
		$('#content').load('content/' + page + '.html', function(){
			$('.projectrow a, p a').click(function(e){
				e.preventDefault();
				console.log(page);
				var page = $(this).attr('href');
				console.log(page);
				$('#content').load('content/' + page + '.html');
			});
		});
		return false;
	});*/