var cuadrante = "a";


function moverse() {
	




}





$(document).ready(function(){
    const artyom = new Artyom(); 
    
    artyom.initialize({
        continuous:true,
        lang:"es-ES",
        obeyKeyword: "listen to me",
        listen:true, 
        debug:false
    });

	 $("#boton").click(function(){ 


		 
		 var llega =  $( "#texto" ).val();
		 $.post("/chatbot",
				    {
				        request: llega,
				   
				    },
				    function(data, status){
				    	console.log(data);
	                    artyom.say(data);
	                    $( "#texto" ).val("");
				    });
	  });
	});