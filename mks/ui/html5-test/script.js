// $('table td').each(function(z){	
// 	$(this).find('div').height($(this).data('td') / 300 * 100 + '%');
// });

$('table td').each(function(y){	
	$(this).find('div.data-bar').height($(this).data('td') / 300 * 100 + '%');
});

$('table td').each(function(z){	
	$(this).find('div.data-scatter').css('bottom', $(this).data('td') + 'px');
});