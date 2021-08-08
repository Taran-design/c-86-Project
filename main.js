var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");


    function newplayer_load()
    {
    fabric.Image.fromURL("BirthdayImage.jpg",function(Img){
    player_object = Img;
    
    player_object.scaleToWidth(650);
    player_object.scaleToHeight(500);
    player_object.set(
    {
        top:0,
        left:0
    }
    );
    canvas.add(player_object;)
    });
    
    
    }	
	

function playSound(){
x.play();	
}
