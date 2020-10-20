"use strict";

//RANDOM DESTINATION
// i need a selection of locations to choose from
    //split locations to be able to be selected
// i need to choose one location out of the possible options
// if a solution is selected, print it to console
    //break out of loop after a selection is made
let trip = [];
let destination = ["Sheboygan", "Milwaukee", "Wausau"];

function randomDestination(){

    for(let i = Math.floor(Math.random() * 3); i < destination.length; i++){
        let choice = i;
    
        if(choice === 0 || choice === 1 || choice === 2){
            console.log(destination[i]);
            break;

        }
             
    }
    
}




//RANDOM RESTAURANT

let restaurant = ["Legend Larry's", "Pho Viet", "World Market"];

function randomRestaurant(){

    for(let i = Math.floor(Math.random() * 3); i < restaurant.length; i++){

        let choice = i;

        if(choice === 0 || choice === 1 || choice === 2){
            console.log(restaurant[i]);
            break;

        }

    }
}



//RANDOM MODE OF TRANSPORTATION

let transportation = ["Ferrari 458", "Lambo Huracan", "Focus ST", "Godzilla"];

function randomTransport(){

    for(let i = Math.floor(Math.random()* 4); i < transportation.length; i++){

        let choice = i;

        if(choice === 0 || choice === 1 || choice === 2 || choice === 3){
            console.log(transportation[i]);
            break;
        }
    }
    
}



//RANDOM ENTERTAINMENT

let entertainment = ["Museum Tour!", "Zoo day!", "Beach and bikes!", "Explore a park"];

function randomEntertainment(){

    for(let i = Math.floor(Math.random() * 4); i < entertainment.length; i++){

        let choice = i;

        if(choice === 0 || choice === 1 || choice === 2 || choice === 3){
            console.log(entertainment[i]);          
            break;
        }
    }
    

}

let destinationChoice = randomDestination();
let restaurantChoice = randomRestaurant();
let transportChoice = randomTransport();
let entertainmentChoice = randomEntertainment();
let question = prompt("Do you want to re-select? Y/N for an answer");
if(question === "y" || question === "Y"){
    console.log("Here is your day trip intinerary: " + "Your vehicle for transportation is a " +
    transportChoice + "." + "/n" + "You will be going to " + destinationChoice + "." + "/n" + 
    "You will be eating at " + restaurantChoice + " followed by " + entertainmentChoice + ".");
}




// RE-SELECT 
// as if user likes the selected options
// if user likes selections, store options
    // otherwise re-select the option(s)
        // re-run the function if they choose option 1-4 for destination, restaurant, transport, or entertainment
        // store new option generated


// let confirm = prompt("Do you want to re-select any options? (Enter Y/y for yes and N/n for no)")        
// if(confirm === "Y" || confirm === 'y'){
//     console.log(randomEntertainment());

// }


