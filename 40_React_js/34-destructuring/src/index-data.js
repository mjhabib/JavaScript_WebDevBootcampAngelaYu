import animals, {nestedAnimals, useAnimals} from "./data.js";

const [cat, dog] = animals;  // any names
console.log(cat);

const {name = "new cat name", sound = "new cat sound"} = cat;  // names must match with our js object keys + we can assign new values to them if NO VALUE exists
console.log(sound);
console.log(cat.sound);

const {name: dogName, sound: dogSound} = dog;  // assigning new names
console.log(dogSound);

const [chicken, bird] = nestedAnimals
console.log(bird);

const {title, feedingRequirement: {food, water}} = bird
console.log(title);
console.log(food);
console.log(water);

const [animal, makeSound] = useAnimals(cat)
console.log(animal);
makeSound()