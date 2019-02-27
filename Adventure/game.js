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
    
	//loop
		var playerName = prompt("What is your name?");
		
		while(!confirm("Are you sure you want "+playerName+" as a name?")){
		playerName = prompt("What name do you want?");
		}
    
    alert("You've made it quietly in the house, "+ playerName);
    
    Kitchen();
    
    function Kitchen(){
        var kitchen = prompt("You've made it into the manor. Now let's see what you can take before getting out of here. \n -look around \n -go left into dining room \n -go forward"). toLowerCase();
        
        if(kitchen == "look around" || kitchen == "look"){
            
            var kitchenlook = prompt("There's a large table, dusted with flour. A pantry is to your right, most likely full of food. There are cupboards lining the wall, and you imagine fancy dishes fill them. Drawers are beside an oven and a sink with a stool. \n -look in cupboards \n -look in drawers \n -turn on sink \n look in pantry");
            
             if(kitchenlook == "look in cupboards" || kitchenlook == "cupboards look"){
            
            var kitchencupboardlook = prompt("As you suspected, there are nice dishes in here. They might make noise or break if you take them. Is that a risk you're willing to take? \n -yes \n -no"); 
                 
                 if(kitchencupboardlook == "yes"){
                     var kitchenyes = alert("You're willing to take the risk. You have the fancy dishes!");
					 Kitchen();
                 }
                 
                 else if(kitchencupboardlook == "no"){
                     var kitchenno = alert("Having them break wouldn't be worth it. You leave the dishes alone.");
					 Kitchen();
                 }
                 
                 else if(kitchenlook == "look in drawers" || kitchenlook == "drawers look"){
                     var kitchendrawers = confirm("actual silverware clutters theses drawers. They glitter in the moon's light. Do you take them?");
                     
                     if(kitchendrawers == "ok"){
                         // Adds stolen item +1
                         inventory.stolen_items ++;
                         alert("You now have" +inventory.stolen_items+"stolen items");
						 Kitchen();
                     }
                     
					 else if(kitchendrawers == "cancel"){
						 alert("You leave the silverware alone.");
						 Kitchen();
					 }
                 }
				 
        }
			
			 else if(kitchenlook == "turn on sink"){
					 alert("You're sure you want to do that? Well, as you wash your hands in the sink, someone hears and you get caught! Game over!")
				 }

        }
        
        else if(kitchen == "go left" || kitchen == "go into dining room" || kitchen == "go left into dining room"){
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
            else if(diningroompiano == "take some of the ivory" || diningroompiano == "take ivory"){
                var diningroomivorys = alert("They aren't easy to detach, but soon enough you have a good handful of the precious keys.");
				DiningRoom();
            }
			
			else{
				alert("You can't do that " + diningroompiano);
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
                    alert("You now have" +inventory.keys+" keys");
					
					// displays amount of keys in account
        alert("you have "+inventory.keys+" keys");
        PrivateStudy();
                }
				
				else if(deskdrawers){
					PrivateStudy();
				}
				
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
		var livingroom = prompt("It appears to be a living room; devoid of empty space. There are two couches with lacey throw pillows placed neatly on top. There's a table between the couches housing a glass vase filled with lilys. There are shelves with glass covers full of books and other items: porcelain figures, unused dishes, trophys, fabric flowers. \n -open shelves *requires key* \n -sit down \n -continue down entry to front door \n -go up the stairs \n -return to kitchen")
		
		if(livingroom == "sit down" || livingroom == "sit"){
		//loop
			var livingsit = prompt("You sit in the silent dark. Would you like to get up?")
			
			while(!confirm("You should get going.")){
				livingsit = prompt("Would you like to get up?")
				LivingRoom();
			}
			
			}
		
		
		else if(livingroom == "return to kitchen" || livingroom == "go to kitchen" || livingroom == "back to kitchen"){
			Kitchen();
		}
		
		else if(livingroom == "continue down entry to front door" || livingroom == "go to front door" || livingroom == "continue down entry" || livingroom == "go down to front door"){
			FrontDoor();
		}
		
		else if(livingroom == "go up the stairs" || livingroom == "go up stairs"){
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
		
		else if(frontdoor == "no"){
			LivingRoom();
		}
		
		else{
			alert("You can't do that " + frontdoor);
			FrontDoor();
		}
	}
	
	function Upstairs(){
		var upstairs = prompt("You've gone up the stairs, now on the top floor. \n -look around");
		
		if(upstairs == "look around"){
			var uplook = prompt("There are multiple doors leading into other rooms. \n -go through first door \n -go through second door \n -go through third door \n -back to living room");
			
			if(uplook == "go through first door"){
				BedroomOne();
			}
			
			else if(uplook == "go through second door"){
			BedroomTwo();
		}
		
		else if(uplook == "go through third door"){
			BedroomThree();
		}
		
		else if(uplook == "back to living room" || upstairs == "go down the stairs"){
			LivingRoom();
		}
			
		}

		else{
			alert("You can't do that " + upstairs);
			Upstairs();
		}
	}
	
	function BedroomOne(){
		var childbed = prompt("It's a child's room. They're sleeping soundly in their bed, unaware of your pressence. You doubt there's anything worth taking in here. \n -leave room \n -look around");
		
		if(childbed == "leave room"){
			Upstairs();
		}
		
		else if(childbed == "look around"){
			var childlook = prompt("thingthingthing")
		}
		
		else{
			alert("You can't do that " + childbed);
			BedroomOne();
		}
	}
	
	function BedroomTwo(){
		var boybed = prompt("It's a boy's room. The floor is littered with clothes and small sheaved daggers. He has a chest at the end of his bed. Maybe venturing to check it wouldn't be such a bad idea? \n -leave room \n -sneak to chest");
		
		if(boybed == "leave room"){
			Upstairs();
		}
		
		else if(boybed == "sneak to chest"){
			var boysneak = prompt("There's a small pouch with a little money in it, as well as a sheet of chainmail and a crumpled love letter. 'You'll always be the only one I love, Roan. I owed you my heart since I first-' you stop reading. Who writes this garbage? Scanning for a name, you find it's your younger sister. The fool... \n -take money \n -take chainmail")
		}
		
		else{
			alert("You can't do that " + boybed);
			BedroomTwo();
		}
	}
	
	function BedroomThree(){
		var adultbed = prompt("The man of the house and his wife are sleeping in their bed. There are chests and dressers which you can only imagine hold priceless items. The closet was left open, showing a vanity filled with jewely. You'll be rich if you could get past the slumbering couple.\n -leave room \n -search drawers \n -enter vanity room");
		
		if(adultbed == "leave room"){
			Upstairs();
		}
		
		else if(adultbed == "search drawers"){
			var adultdrawers = confirm("Are you sure you want to open it? There's a possibility that you might wake the sleeping couple")
			
			if(adultdrawers == "ok"){
				alert("The drawers creaks open, bringing louder and disturbed snoring from the couple. You continue to open it. Slower, this time. That works better because you finish opening it no problem. There are cards in here with time slots written on them. You know when they'll be switching guard rounds now. Sneaking into the Captain's house has turned out to be a good idea after all.");
				BedroomThree();
			}
		}
		
		else{
			alert("You can't do that " + adultbed);
			BedroomThree();
		}
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
		
		//loop
		var playerName = prompt("What is your name?");
		
		while(!confirm("Are you sure you want "+playerName+" as a name?")){
		playerName = prompt("What name do you want?");
		}
		
		var purchase = prompt("Welcome to the shop, what would you like to buy? \n - arrows:"+arrowShop).toLowerCase();
		
		if(purchase == "arrows" || purchase == "arrow"){
		var arrowCon = prompt("How many arrows would you like to purchase?"):
		
		while(!confirm("Are you sure you want to purchase "+arrowCon+" arrows, for "+arrowPrice+" per arrow?)){
		arrowCon = prompt("How many arrows do you wish to buy?");
		}
		
		for(i = !; 1 <= arrowCon; i++){
		//add arrow to inventory
		inventory.arrows ++;
		console.log("you have "+inventory,arrows+" arrows");
		//removies coin from inventory
		inventory.coins --;
		console.log("You have "inventory.coins+" coins");
		//removes arrow from shop inventory
		arrowShop --;
		
		
		alert(You have purchased "+arrowCon+" arrows. Thank you!");
		Shop();
		}
		
		
		
		}
        */