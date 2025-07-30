var noOfButtons=document.querySelectorAll(".drum").length;
for(var a=0; a<noOfButtons; a++){
    document.querySelectorAll(".drum")[a].addEventListener("click",function(){
      var buttonInner= this.innerHTML
       makeSound(buttonInner);
    })
}
      document.addEventListener("keydown",function(event){
        console.log(event.key);
        makeSound(event.key);
      })
      function makeSound (key){
        switch(key){
            case "K":
                var song1=new Audio("./song/song-1.mp3")
                song1.play();
                 break;
            case "T":
                    var song2=new Audio("./song/song-2.mp3")
                    song2.play();
                     break;
            case "H":
                var song3=new Audio("./song/song-3.mp3")
                song3.play();
                 break;
           
            default:
                console.log("click the valid key");
            }
        }
                