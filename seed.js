const { Dog }= require('./db').models;

const dogs = [
  {
    name: 'Rover',
    breed: 'Golden Retriever'
  },
  {
    name: 'Sally',
    breed: 'Golden Retriever'
  },
  {
    name: 'Donovan',
    breed: 'Golden Retriever'
  },
  {
    name: 'Kelly',
    breed: 'Schnauzer'
  },
  {
    name: 'Millie',
    breed: 'Schnauzer'
  },
  {
    name: 'Sandy',
    breed: 'Cocker Spaniel'
  },
  {
    name: 'Caleb',
    breed: 'Cocker Spaniel'
  },
  {
    name: 'Belle',
    breed: 'Chihuahua'
  },
  {
    name: 'Ginger',
    breed: 'Chihuahua'
  },
  {
    name: 'Totoro',
    breed: 'Border Collie'
  }
];

const seed = async () => {
  for (let dog of dogs) {
    await Dog.create(dog);
  }
}

module.exports = seed;
