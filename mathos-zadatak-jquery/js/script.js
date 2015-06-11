$(document).ready(function() {
    
    $(document).keypress(function(e) {
        if(e.which == 13) {
            var toAdd = $('input[name=unos]').val();
            $('#list').prepend('<li class="item">' + toAdd + '<div class="obrisi">x</div></li>');
            $('#unos').val('');
            e.preventDefault();
        }
    });
    $('li').live('click', function(){
        $(this).toggleClass('kraj');
    });
    $('.obrisi').live('click', function(){
        $(this).parent().remove();
    });
	
   $('.dg').draggable({
    cursor: 'move',        
    opacity: 0.35,         
    revert: true,          
    revertDuration: 600
  });

});
