(function($, undefined){
            $(function() {
				var sum = 0;
                var counter = $('#counter');
				counter.text(sum);
				var elClone = $('.row:first').clone(true);
                var el = $('main');
                var addText = $('#addСase').prev();
                addText.focus(function(){
                	$(this).select();
                	$(this).parent().find('em').remove();
                });
               $('.header').on('click', '#addСase', function(){
               		if(addText.val()!='' && addText.val()!=addText.attr('value')){
						var elCloneClone = elClone.clone(true);
						elCloneClone.appendTo('main');
						elCloneClone.removeClass('noneDisplay');
						var elText = elCloneClone.find('.text>span');
						elText.text($('#addСase').prev().val());
						$('#addСase').prev().val('');
						sum++;
						counter.text(sum);
					}else{
						$(this).parent().append('<em>Введите название!</em>');
						
					}
                }); 
                el.on('click', '.check', function () {
                    var caseEl = $(this).parent().find('.text>span');
                    if(!($(this).hasClass('doneIcon'))){
                        $(this).addClass('doneIcon');
                        caseEl.addClass('done');
                    } else {
                        $(this).removeClass('doneIcon');
                        caseEl.removeClass('done');
                    }
                });
                el.on('click', '.dlt', function () {
                    $(this).parent().remove();
                    sum--;
					counter.text(sum);
                });
            });
        })(jQuery);
    