// Single line comment
/*

Multiline comment

*/

//alert("Warning Will Robinston...Warning!");

//confirm("Do you like Pokemon?")

//prompt("What type of pokemon do you like?");

Game();

function Game(){
    
    alert("A Thief's Blunders")
    
    var playerName = prompt("What is your name?");
    
    alert("You've made it quietly in the house "+ playerName);
    
    Kitchen();
    
    function Kitchen(){
        var kitchen = prompt("You've made it into the mannor. Now let's see what you can take before getting out of here. \n -look around \n -go left into dining room \n - go right into hallway \n -go forward"). toLowerCase();
        
        if(kitchen == "look around" || kitchen == "look"){
            
            var kitchenlook = prompt("There's a large table, dusted with flour. A pantry is to your right, most likely full of food. There are cupboards lining the wall, and you imagine fancy dishes fill them. Drawers are beside an oven and a sink with a stool. \n -look in cupboards \n -look in drawers -turn on sink \n look in pantry");
        }
        
        else if(kitchen == "look in cupboards" || kithen == "cupboards look"){
            var kitchencupboardlook = prompt("");
        }
        
        else{
            alert("You can't use "+kitchen+" playerName!");
            Kitchen();
        }
        
    }
    
}