module.exports = {
  allDogs: (_, __, { req, res, models: { Dog } }) => {
    return Dog.findAll()
  },
  dogByBreed: (_, { breed }, { req, res, models: { Dog } }) => {
    return Dog.findAll({where: {breed}})
  },
  dogByName: (_, { name }, { req, res, models: { Dog } }) => {
    return Dog.findAll({where: {name}})
  },
}
