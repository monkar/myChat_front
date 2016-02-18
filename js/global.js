
$("document").ready(function(){

	cargarEventos();


$('.ui.dropdown')
  .dropdown({
    allowAdditions: true
  });
	
})


function cargarEventos(){

	$(".btn_login").click(function(){
		$(".cnt_login").css('display','none');
		$(".cnt_menu").css('display','block');
		$(".cnt_chat").css('display','none');
	})

	$(".btn_logout").click(function(){
		$(".cnt_login").css('display','block');
		$(".cnt_menu").css('display','none');
		$(".cnt_chat").css('display','none');
	})

	$("#ul_chat .item").click(function(){
		$(".cnt_login").css('display','none');
		$(".cnt_menu").css('display','none');
		$(".cnt_chat").css('display','block');

	})

	$(".btn_regresar").click(function(){
		$(".cnt_login").css('display','none');
		$(".cnt_menu").css('display','block');
		$(".cnt_chat").css('display','none');
	})




	








	$(".btn_abrirCambiarNick").click(function(){
		$('.ui.modal').modal('show');
	});
}