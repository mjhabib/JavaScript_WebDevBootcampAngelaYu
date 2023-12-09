const animals = [
  { name: "cat", sound: "meow" },
  { name: "dog", sound: "woof" },
];

const nestedAnimals = [
  { title: "chicken", noise: "jik" },
  {
    title: "bird",
    noise: "toot",
    feedingRequirement: {
      food: 2,
      water: 3,
    },
  },
];

function useAnimals(animal) {
  return [
    animal.name,
    function () {
      console.log(animal.sound);
    }
  ];
}

export default animals;
export { nestedAnimals, useAnimals };
