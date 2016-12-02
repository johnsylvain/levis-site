$(document).ready(function() {
	//initial load
	$("#content").load('content/home.html');
	
	//menu clicks and active class
	$('#nav ul li a').click(function(e){
		$('#nav ul li a').removeClass('active');
		$(this).addClass('active');
		var page = $(this).attr('href');
		console.log(page);
		$('#content').load('content/' + page + '.html');
		return false;
	});
});