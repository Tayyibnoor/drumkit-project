var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        
        var buttonInnerHTML = this.innerHTML;
        
        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
    });
 }



     document.addEventListener("keydown", function (event) {
        makeSound(event.key);

        buttonAnimation(event.key);
 });

  function makeSound (key){
    
    switch (key) {
        case "w":
            var tom1 = new Audio ("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
             var tom2 = new Audio ("sounds/tom-2.mp3");
             tom2.play();
             break;

        case "s":
            var tom3 = new Audio ("sounds/tom-3.mp3");
            tom3.play();
            break;  
            
        case "d":
            var tom4 = new Audio ("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio ("sounds/snare.mp3");
            snare.play();
            break;
        
        case "k":
            var crash = new Audio ("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio ("sounds/kick-bass.mp3");
            kick.play();
            break;
    
       
        default:
            
    }

 }

function  buttonAnimation(currentKey){ 
   
    var activeButton = document.querySelector(".", currentKey);
   
   
   activeButton.classList.add(".pressed");

   setTimeout(function(){
    activeButton.classList.remove("pressed");
   }, 100);
} 






// constuctor functions

//  function HouseKeeper (yearOfExperience, name, cleaningRepertoire) {
//     this.yearOfExperience = yearOfExperience;
//     this.name = name;
//     this.cleaningRepertoire = cleaningRepertoire;
//     this.clean = function(){
//         alert("Cleaning In Progess!");
//     }
//  }

//  var houseKeeper1 = new HouseKeeper(9, "Skepta", ["Studio", "Bando"]) 

 
 
// the function now can be used to make variables with less code

// /w/wp4676582