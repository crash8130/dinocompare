const dinoArray = [];  
const humans = [];

// Create Dino Constructor
    function createDino(species, weight, height, diet,where, when, fact) {
        return { species: species,weight: weight,height: height, diet: diet, where: where, when: when, fact: fact};
      }


      function pushDino(obj){
        let dino = createDino(obj.species, obj.weight, obj.height, obj.diet,obj.where, obj.when, obj.fact);
        dinoArray.push(dino);
      }
    // Create Dino Objects

     fetch('./dino.json').then(function(resp) {return resp.json()})
        .then(function(data){
            data.Dinos.forEach(element => {
                let dino = element;
                pushDino(dino)
            });
        console.log('Dinos Loaded...')
    })  
 
    // Create Human Object

    function human(name, feet, inches, weight, diet) {
        height = feet * 12 + inches
        return {name: name, height:height, weight: weight, diet: diet};
    }

    // Use IIFE to get human data from form
     let getHumanData = (function(){
        const name = document.getElementById("name").value
        const feet =  document.getElementById("feet").value
        const inches = document.getElementById("inches").value
        const weight = document.getElementById("weight").value
        const diet =  document.getElementById("diet").value
        humans.push(human(name, feet, inches, weight,diet))
    })



    // Create Dino Compare Method 1
    // NOTE: Weight in JSON file is in lbs, height in inches. 
    const compareManTOBeast = function(dino, human){
       console.log(dino)
       console.log(human)
    //    heightComparison = human.height / dino.height;
    //    weightComparison = human.weight / dino.weight;
    //    nameComparison =   `Your name is ${human.name.lenght()} while the dinosours is ${dino.species.lenght()}`
    }
    let person = human('Johnathon',6,1,340,'Carnivore')
    let person2 = human('Johnny',6,1,340,'Carnivore')
    humans.push(person)
    humans.push(person2)
    // compareManTOBeast(dinosours.dinos[0], humans.human[0])
    // compareManTOBeast(dinosours[0], humans[0]);
    console.log(dinoArray)
    console.log(humans)

    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array
  
        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
