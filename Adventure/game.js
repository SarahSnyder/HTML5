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
        var kitchen = prompt("You've made it into the manor. Now let's see what you can take before getting out of here. \n -look around \n -go left into dining room \n -go forward"). toLowerCase();
        
        if(kitchen == "look around" || kitchen == "look"){
            
            var kitchenlook = prompt("There's a large table, dusted with flour. A pantry is to your right, most likely full of food. There are cupboards lining the wall, and you imagine fancy dishes fill them. Drawers are beside an oven and a sink with a stool. \n -look in cupboards \n -look in drawers \n -turn on sink \n look in pantry");
            
             if(kitchenlook == "look in cupboards" || kitchenlook == "cupboards look"){
            
            var kitchencupboardlook = prompt("As you suspected, there are nice dishes in here. They might make noise or break if you take them. Is that a risk you're willing to take? \n -yes \n -no"); 
                 
                 if(kitchencupboardlook == "yes"){
                     var kitchenyes = alert("You're willing to take the risk. You have the fancy dishes!");
                 }
                 
                 else if(kitchencupboardlook == "no"){
                     var kitchenno = alert("Having them break wouldn't be worth it. You leave the dishes alone.");
                 }
                 
                 else if(kitchenlook == "look in drawers" || kitchenlook == "drawers look"){
                     
                     var kitchendrawers = confirm("actual silverware clutters theses drawers. They glitter in the moon's light. Do you take them?");
                     
                     if(kitchendrawers){
                         // Adds stolen item +1
                         inventory.stolen_items ++;
                         alert("You now have" +inventory.stolen_items+"stolen items");
                     }
                     Kitchen();
                 }
				 
        }
			
			 else if(kitchenlook == "turn on sink"){
					 alert("You're sure you want to do that? Well, as you wash your hands in the sink, someone hears and you get caught! Game over!")
				 }

        }
        
        else if(kitchen == "go left" || kitchen == "go into dining room"){
            DiningRoom();
        }
		
		else if(kitchen == "go forward"){
			LivingRoom();
		}
        
        else{
            alert("You can't do that " + kitchen);
            Kitchen();
        }
        
    }
    
    function DiningRoom(){
        var diningroom1 = prompt("There's a large table trailed with golden candelabra. In the corner of the room, a lone piano stands. There's a door back into the kitchen, and another door at the other end of the room. \n -take candelabra \n -go to piano \n -back to kitchen \n -go to other door");
        
        if(diningroom1 == "take candelabra"){
            alert("you now have candelabra");
			DiningRoom();
        }
        
        else if(diningroom1 == "go to piano"){
            var diningroompiano = prompt("\n - play piano \n -take some of the ivory")
            
            if(diningroompiano == "play piano"){
                alert("Are you sure? As you tap the keys playing a song your mom taught you, a heavy sword brings your head down with a clunk... You've been caught! Game over!");
            }
            else if(diningroompiano == "take some of the ivory"){
                var diningroomivorys = prompt("They aren't easy to detach, but soon enough you have a good handful of the precious keys.");
				DiningRoom();
            }
            
        }
        
        else if(diningroom1 == "go to other door"){
            PrivateStudy();
        }
        
        else if(diningroom1 == "back to kitchen" || diningroom1 == "go to kitchen"){
                Kitchen();
            }
        
        else{
            alert("You can't do that " + diningroom1);
            DiningRoom();
        }
    }
    
    function PrivateStudy(){
        var study = prompt("It appears to be a private study, where a desk sits at the left of the doom, and a locked chest at the right. A painting is hung in front of you. \n -go to chest \n -take painting \n -go to desk \n -back to dining room");
        
        if(study == "go to chest"){
            var studychest = alert("It is locked, and cannot be opened without a key.");
			
            PrivateStudy();
        }
        
        else if(study == "take painting" || study == "take the painting"){
            alert("you quickly snatched the painting.");
			PrivateStudy();
        }
        
        else if(study == "go to desk"){
            var studydesk = prompt("The desk has nothing of value on it, but it does have drawers that you could look in. \n -look in drawers \n -move on");
            
            if(studydesk == "look in drawers" || studydesk == "search drawers"){
                var deskdrawers = confirm("There isn't much of value, but there is a small key you found. Would you like to take it?");
                
                if(deskdrawers){
                    // Adds key +1
                    inventory.keys ++;
                    alert("You now have" +inventory.keys+"keys");
                }
				PrivateStudy();
            }
            
            else if(studydesk == "move on" || studydesk == "back to dining room" || studydesk == "go to dining room"){
				
                DiningRoom();
            }
        }
        
        else if(study == "back to dining room" || study == "go to dining room"){
			
            DiningRoom();
        }
        
        else{
            alert("You can't do that " + study);
			
            PrivateStudy();
        }
    }
	
	function LivingRoom(){
		var livingroom = prompt("It appears to be a living room; devoid of empty space. There's are two couches with lacey throw pillows placed neatly on top. There's a table between the couches housing a glass vase filled with lilys. There are shelves with glass covers full of books and other items: porcelain figures, unused dishes, trophys, fabric flowers. \n -open shelves *requires key* \n -sit down \n -continue down entry to front door \n -go up the stairs")
		
		if(livingroom == "sit down" || livingroom == "sit"){
			var livingsit = confirm("You sit in the silent dark. Would you like to get up?")
			
			if(livingsit){
				LivingRoom();
			}
			
		}
		
		else if(livingroom == "continue down entry to front door" || livingroom == "go to front door" || livingroom == "continue down entry" || livingroom == "go down to front door"){
			FrontDoor();
		}
		
		else if(livingroom == "go up the stairs"){
			Upstairs();
		}
		
		else{
			alert("You can't do that " + livingroom);
			LivingRoom();
		}
	
	}
	
	function FrontDoor(){
		var frontdoor = prompt("You're at the front door. Do you wish to leave this way? *this ends the game* \n -yes \n -no")
		
		if(frontdoor == "yes"){
			alert("Thus, the theiving is done. End Game.")
		}
		
		else if(frontdoor ==)
		
		else{
			alert("You can't do that " + frontdoor);
			FrontDoor();
		}
	}
	
	function Upstairs(){
		var upstairs = prompt("You've gone up the stairs, now on the top floor.")
	}
	
	
            //Javascript Object for an inventory
            var inventory = {
                stolen_items:0,
                keys:0,
                items_worth:0,
            }
}
        /*
        function Castle(){
        var insidecastle = prompt("prompts")
        switch(insidecastle){
                case "upstairs":
                var upstairs = prompt("description")
                break;
                case "downstairs"
                alert("alert")
                break;
                default("I don't know what "insidecastle+" is!");
                break;
        }
        
        if(variable == "stuff" && inventory.coins >= 100){
        var swordbuy = comfirm("are you sure you want to buy this?);
        if(swordbuy){
        // adds sword +1
        inventory.sword ++;
        alert('you own" +inventory.sword+" swords");
        //takes money out of account for sword
        inventory.coins = inventory.coins - 100;
        
        //shorthand notation: inventory.coins -= 100;
        
        // displays coins left in account
        alert("you have "+inventory.coins+" coins remaining")
        function();
        }
        
        }
        
        //array
        var wizardnames =  ["name, othername, stillname"];
        
        }
        */