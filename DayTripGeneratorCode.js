"use strict";

//RANDOM DESTINATION
// i need a selection of locations to choose from
    //split locations to be able to be selected
// i need to choose one location out of the possible options
// if a solution is selected, print it to console
    //break out of loop after a selection is made

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
randomDestination();



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
randomRestaurant();


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
randomTransport();


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

randomEntertainment();

