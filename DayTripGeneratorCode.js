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
            console.log(destination[i]);
            break;

        }
             
    }
    
}



function randomRestaurant(){

    let restaurant = ["Legend Larry's", "Pho Viet", "World Market"];

    for(let i = Math.floor(Math.random() * 3); i < restaurant.length; i++){

        if(i === 0 ||  i  === 1 || i === 2){
            console.log(restaurant[i]);
            break;

        }

    }
}


function randomTransport(){

    let transportation = ["Ferrari 458", "Lambo Huracan", "Focus ST", "Godzilla"];

    for(let i = Math.floor(Math.random()* 4); i < transportation.length; i++){
        
        if(i === 0 ||  i  === 1 || i === 2 || i === 3){
            console.log(transportation[i]);
            break;
        }
    }
    
}


function randomEntertainment(){

    let entertainment = ["Museum Tour!", "Zoo day!", "Beach and bikes!", "Explore a park"];

    for(let i = Math.floor(Math.random() * 4); i < entertainment.length; i++){

        if(i === 0 ||  i  === 1 || i === 2 || i === 3){
            console.log(entertainment[i]);          
            break;
        }
    }
     

}

function dayTrip(){

    
    // loop here
    //while(false){
    let destinationChoice = randomDestination();
    let restaurantChoice = randomRestaurant();
    let transportChoice = randomTransport();
    let entertainmentChoice = randomEntertainment();
    // write out current trip
    // ask for confirmation of curent trip, if no confirmation, go again
    console.log("You will be going to " + destinationChoice + " in a " + 
    transportChoice + ". You will be doing this activity, " +  entertainmentChoice + 
    ", and eating at " + restaurantChoice + ".");
    //}

}
dayTrip();
// cal dayTrip here

// let question = prompt("Do you want to re-select? Y/N for an answer");
// if(question === "y" || question === "Y"){
//     console.log("Here is your day trip intinerary: " + "Your vehicle for transportation is a " +
//     transportChoice + "." + "You will be going to " + destinationChoice + "." + 
//     " You will be eating at " + restaurantChoice + " followed by " + entertainmentChoice + ".");
// }





// RE-SELECT 
// as if user likes the selected options
// if user likes selections, store options
    // otherwise re-select the option(s)
        // re-run the function if they choose option 1-4 for destination, restaurant, transport, or entertainment
        // store new option generated




