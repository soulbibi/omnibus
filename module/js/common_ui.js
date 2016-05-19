// 탭메뉴 
function tabClick (tabmenu, tabcont) {
	tabmenu.on('touchstart click', function(event) {
		event.preventDefault();
		tabmenu.removeClass('on')
		$(this).addClass('on')

		var num = $(this).index();
		tabcont.hide();
		tabcont.eq(num).show();
	});
}

//리스트
function listToggle (listmenu, listcont) {
		
	var scrolling = false;

	listmenu.on('touchmove touchend touchstart click', function(event) {

		if(event.type == "touchmove"){ scrolling = true; }			
		if(event.type == "touchend" || event.type == "click"){
			if(!scrolling){
				$(this).toggleClass('on');

				if ($(this).closest('ul').attr('id') == 'type_01') {
					if ($(this).hasClass('on')) {
						$(this).removeClass('on');		
						listmenu.removeClass('on');
						listcont.hide();
						$(this).addClass('on');
					};	

				};
							
				$(this).parent().next().slideToggle('500');
			}			
			scrolling = false;
			event.preventDefault(); 
		}		
	});
}