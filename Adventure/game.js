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
        
        else if(kitchen == "go left" || "go into dining room"){
            DiningRoom();
        }
        
        else if(kitchen == "look in cupboards" || kitchen == "cupboards look"){
            var kitchencupboardlook = prompt("As you suspected, there are nice dishes in here. They might make noise or break if you take them. Is that a risk you're willing to take? \n - yes \n - no");
        }
        
        else{
            alert("You can't do that "+kitchen+" playerName!");
            Kitchen();
        }
        
    }
    
    function DiningRoom(){
        var diningroom1 = prompt("There's a large table trailed with golden candelabra. In the corner of the room, a lone piano stands. There's a door back into the kitchen, and another door at the other end of the room. \n -take candelabra \n -go to piano \n -back to kitchen \n -go to other door")
        
        if(diningroom1 == "take candelabra"){
            alert("you now have candelabra")
        }
        
        else if(diningroom1 == "go to piano"){
            var diningroompiano = prompt("\n - play piano \n -take some of the ivory")
            
            if(diningroompiano == "play piano"){
                alert("Are you sure? As you tap the keys playing a song your mom taught you, a heavy sword brings your head down with a clunk... You've been caught! Game Over");
            }
            else if (diningroompiano == "take some of the ivory"){
                var diningroomivorys = prompt("They aren't easy to detach, but soon enough you have a good handful of the precious keys.")
            }
            
        }
        
        else if(diningroom1 == "back to kitchen" || "go to kitchen"){
                Kitchen();
            }
        
        else{
            alert("You can't do that " + diningroom1);
            DiningRoom();
        }
    }
    
}