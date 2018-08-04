var cuadrante = "a";


function moverse(id) {
	




}





function ensuciar(id) {
	
	$("#"+id).children(".caja").append("<img class='shuquito' src='img/ensuciando.gif'  height='100'width='100'>");
	$('#consola').append("<br>Ensuciando " + id);
	//window.setTimeout(limpiar(id),6000);

}


function limpiar(id) {
		$('#consola').append("<br>Limpiando " + id);

			$("#"+id).children(".caja").empty();

				$("#"+id).children(".caja").append("<img class='limpito' src='img/limpiando.gif'  height='100'width='100'>");

		setTimeout(function() {
				$("#"+id).children(".caja").empty();
					}, 4000);


}


function sensor() {

var cuadranteb =  $('#cuadranteb div:has(.shuquito)').length;
var cuadrantea =  $('#cuadrantea div:has(.shuquito)').length;


if(cuadrantea != 0){
		$('#consola').append("<br>Moviendo a Cuadrante A " );
	limpiar("cuadrantea");
}
else if(cuadranteb != 0){
		$('#consola').append("<br>Moviendo a Cuadrante B " );
	limpiar("cuadranteb");


}



}


$( document ).ready(function() {
    console.log( "ready!" );

var cuadrante = 'cuadrantea';



setInterval(function(){sensor()}, 5000);

    $(".shuco").click(function(){

    	cuadrante = $(this).closest('div').attr('id');
    	ensuciar(cuadrante);




     });
});