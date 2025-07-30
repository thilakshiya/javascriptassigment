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
                var song1=new Audio("/home/uki/Documents/modules/javascript_module/music app/song/song-english-edm-296526.mp3")
                song1.play();
                 break;
            case "T":
                    var song2=new Audio("/home/uki/Documents/modules/javascript_module/music app/keen-fire-jean-drop-235365.mp3")
                    song2.play();
                     break;
            case "H":
                var song3=new Audio("/home/uki/Documents/modules/javascript_module/music app/naitira-te-reo-maori-catch-phrase-english-307231.mp3")
                song3.play();
                 break;
           
            default:
                console.log("click the valid key");
            }
        }
                