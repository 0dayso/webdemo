$(function() {
	var sInfo = {
		category: '推荐'
	};
	getData(sInfo);
	//ajax
	function getData(sInfo) {
		$.ajax({
			type: 'get',
			url: '/news',
			dataType: 'json',
			data: sInfo,
			beforeSend: function() {
				$("#loading").html("<img id='loadin'g src='../img/loading.gif'>");
			},
			success: function(msg) {
				$("#loading").html("");
				$("#list ul").empty();
				var li = "";
				var list = msg;
				$.each(list, function(index, array) { //遍历json数据列
					li += "<li><a href='#'><img src='" + array['pic'] + "'><p>" + array['title'].substring(0) + "</p></a><b>" + array['time'] + "</b></li>";
				});
				$("#list ul").append(li);
			},
			error: function() {
				$("#loading").html("<img id='loadin'g src='../img/loading.gif'>");
				$("#list ul").html("请求数据失败");
			}
		});
	}
})