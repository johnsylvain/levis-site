$(document).ready(function(){$("#content").load("content/portfolio.html",function(){$(".projectrow a, .contactlink").click(function(t){t.preventDefault(),console.log(o);var o=$(this).attr("href");console.log(o),$("#content").load("content/"+o+".html")})}),$(".nav li a").click(function(t){$("a").removeClass("active"),$(this).addClass("active");var o=$(this).attr("href");return console.log(o),$("#content").load("content/"+o+".html",function(){$(".projectrow a, .contactlink").click(function(t){t.preventDefault(),console.log(o);var o=$(this).attr("href");console.log(o),$("#content").load("content/"+o+".html")})}),!1})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJsb2FkIiwiY2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwicGFnZSIsInRoaXMiLCJhdHRyIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyJdLCJtYXBwaW5ncyI6IkFBQUFBLEVBQUVDLFVBQVVDLE1BQU0sV0FFakJGLEVBQUUsWUFBWUcsS0FBSyx5QkFBMEIsV0FDNUNILEVBQUUsK0JBQStCSSxNQUFNLFNBQVNDLEdBQy9DQSxFQUFFQyxpQkFDRkMsUUFBUUMsSUFBSUMsRUFDWixJQUFJQSxHQUFPVCxFQUFFVSxNQUFNQyxLQUFLLE9BQ3hCSixTQUFRQyxJQUFJQyxHQUNaVCxFQUFFLFlBQVlHLEtBQUssV0FBYU0sRUFBTyxhQUl6Q1QsRUFBRSxhQUFhSSxNQUFNLFNBQVNDLEdBQzdCTCxFQUFFLEtBQUtZLFlBQVksVUFDbkJaLEVBQUVVLE1BQU1HLFNBQVMsU0FDakIsSUFBSUosR0FBT1QsRUFBRVUsTUFBTUMsS0FBSyxPQVd4QixPQVZBSixTQUFRQyxJQUFJQyxHQUNaVCxFQUFFLFlBQVlHLEtBQUssV0FBYU0sRUFBTyxRQUFTLFdBQy9DVCxFQUFFLCtCQUErQkksTUFBTSxTQUFTQyxHQUMvQ0EsRUFBRUMsaUJBQ0ZDLFFBQVFDLElBQUlDLEVBQ1osSUFBSUEsR0FBT1QsRUFBRVUsTUFBTUMsS0FBSyxPQUN4QkosU0FBUUMsSUFBSUMsR0FDWlQsRUFBRSxZQUFZRyxLQUFLLFdBQWFNLEVBQU8sY0FHbEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXHQvL2luaXRpYWwgbG9hZFxuXHQkKFwiI2NvbnRlbnRcIikubG9hZCgnY29udGVudC9wb3J0Zm9saW8uaHRtbCcsIGZ1bmN0aW9uKCl7XG5cdFx0JCgnLnByb2plY3Ryb3cgYSwgLmNvbnRhY3RsaW5rJykuY2xpY2soZnVuY3Rpb24oZSl7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRjb25zb2xlLmxvZyhwYWdlKTtcblx0XHRcdHZhciBwYWdlID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XG5cdFx0XHRjb25zb2xlLmxvZyhwYWdlKTtcblx0XHRcdCQoJyNjb250ZW50JykubG9hZCgnY29udGVudC8nICsgcGFnZSArICcuaHRtbCcpO1xuXHRcdH0pO1xuXHR9KTtcblxuXHQkKCcubmF2IGxpIGEnKS5jbGljayhmdW5jdGlvbihlKXtcblx0XHQkKCdhJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdCQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXHRcdHZhciBwYWdlID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XG5cdFx0Y29uc29sZS5sb2cocGFnZSk7XG5cdFx0JCgnI2NvbnRlbnQnKS5sb2FkKCdjb250ZW50LycgKyBwYWdlICsgJy5odG1sJywgZnVuY3Rpb24oKXtcblx0XHRcdCQoJy5wcm9qZWN0cm93IGEsIC5jb250YWN0bGluaycpLmNsaWNrKGZ1bmN0aW9uKGUpe1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGNvbnNvbGUubG9nKHBhZ2UpO1xuXHRcdFx0XHR2YXIgcGFnZSA9ICQodGhpcykuYXR0cignaHJlZicpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhwYWdlKTtcblx0XHRcdFx0JCgnI2NvbnRlbnQnKS5sb2FkKCdjb250ZW50LycgKyBwYWdlICsgJy5odG1sJyk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0pO1xufSk7XG4iXX0=
