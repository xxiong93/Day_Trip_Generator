"use strict";

//RANDOM DESTINATION
// i need a selection of locations to choose from
    //split locations to be able to be selected
// i need to choose one location out of the possible options
// if a solution is selected, print it to console
    //break out of loop after a selection is made




function randomDestination(){

    let destination = ["Sheboygan", "Milwaukee", "Wausau"];

    for(let i = Math.floor(Math.random() * 3); i < destination.length; i++){
          
        if(i === 0 ||  i  === 1 || i === 2){
            //console.log(destination[i]);
            return destination[i];

        }
             
    }
    
}



function randomRestaurant(){

    let restaurant = ["Legend Larry's", "Pho Viet", "World Market"];

    for(let i = Math.floor(Math.random() * 3); i < restaurant.length; i++){

        if(i === 0 ||  i  === 1 || i === 2){
           // console.log(restaurant[i]);
            return restaurant[i];

        }

    }
}


function randomTransport(){

    let transportation = ["Ferrari 458", "Lambo Huracan", "Focus ST", "Soccer-mom Van"];

    for(let i = Math.floor(Math.random()* 4); i < transportation.length; i++){
        
        if(i === 0 ||  i  === 1 || i === 2 || i === 3){
            //console.log(transportation[i]);
            return transportation[i];
        }
    }
    
}


function randomEntertainment(){

    let entertainment = ["Museum Tour!", "Zoo day!", "Beach and bikes!", "Explore a park"];
    
    for(let i = Math.floor(Math.random() * 4); i < entertainment.length; i++){

        if(i === 0 ||  i  === 1 || i === 2 || i === 3){
                      
            return entertainment[i];
        }
    }
     

}

function printOptions(){
    
    randomDestination();
    randomRestaurant();
    randomTransport();
    randomEntertainment();
}

function reSelect(){
    //variables for random options
    let destination = randomDestination();
    let transport = randomTransport();
    let restaurant = randomRestaurant();
    let entertainment = randomEntertainment();
    let confirm = prompt("Enter Y/y to re-select or N/n to accept options")
    
    while(confirm === "Y" || confirm === "y"){
        let printTrip = ("You will be going to " + destination + " in a " + 
        transport + ". You will be doing this activity, " +  entertainment + 
        ", and eating at " + restaurant + " afterwards.");
        console.log(printTrip);
        
        let input = parseInt(prompt("To re-select options, enter 1 for destination, 2 for restaurant, 3 for transportation, 4 for entertainment, or 5 all options)"));
        let options = [];
        let count = 5;
        if(input > 0 && input <= 5){
            
            if(input === 1){
                let newDestination = randomDestination();
                printTrip = printTrip.replace(destination, newDestination);
                console.log(printTrip);
            }
            else if(input === 2){
                let newTransport = randomTransport();
                printTrip = printTrip.replace(transport, newTransport);
                console.log(printTrip)
            }
            else if(input === 3){
                let newRestaurant = randomRestaurant();
                printTrip = printTrip.replace(restaurant, newRestaurant);
                console.log(printTrip)
            }
            else if(input === 4){
                let newEntertainment = randomEntertainment();
                printTrip = printTrip.replace(entertainment, newEntertainment);
                console.log(printTrip)
            }
                return;
            //console.log(printTrip);
            
        // write out current trip
        // ask for confirmation of curent trip, if no confirmation, go again
        
    }

   }

    
}


reSelect();
// cal dayTrip here


// RE-SELECT 
// as if user likes the selected options
// if user likes selections, store options
    // otherwise re-select the option(s)
        // re-run the function if they choose option 1-4 for destination, restaurant, transport, or entertainment
        // store new option generated




