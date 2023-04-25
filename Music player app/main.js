
        var divlenght =document.querySelectorAll('.song').length;
        console.log(divlenght);
        for(var i=0; i<divlenght; i++){
            var demo = document.querySelectorAll('.song')[i].addEventListener('click',playsong);
            var demo = document.querySelectorAll('.song')[i].addEventListener('dblclick',pausesong);
        }
         
        var song1 = new Audio();
        song1.src = "song/1.mp3";
        var song2 = new Audio();
        song2.src = "song\2.mp2";
        var song3 = new Audio();
        song3.src = "song\3.mp3";

        function playsong(){
          
            var songId= this.innerHTML;

            confirm.log(songId)
            switch (songId) {
                case "a":
                    song1.play();
                    break;
                    case "b":
                    song2.play();
                    break;
                    case "c":
                    song3.play();
                    break;
                    case "d":
                    song1.play();
                    break;
                    case "e":
                    song2.play();
                    break;
                    case "f":
                    song3.play();
                    break;
                    case "g":
                    song1.play();
                    break;
                    case "h":
                    song2.play();
                    break;
                    case "1":
                    song3.play();
                    break;
                   
            
                default:
                    console.log("wrong input");
                    break;
            }
        }
 function pausesong(){
    alert("pause function call")
 }
 
    