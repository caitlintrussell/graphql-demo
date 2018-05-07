module.exports = {
  addDog: (_, {
    input: { name, breed }
  }, {
    req, res, models: { Dog }
  }) => {
    return Dog.create({ name, breed });
  },
  addDog: async (_, {
    input: { name}
  }, {
    req, res, models: { Dog }
  }) => {
    const foundDog = await Dog.findOne({where: {name}});
    // return foundDog.destroy({returning: true})
  },
}
