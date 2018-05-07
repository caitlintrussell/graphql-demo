module.exports = {
  addDog: (_, { input: { name, breed }}, {
    req, res, models: { Dog }
  }) => Dog.create({ name, breed }),
  removeDog: async (_, {input: { name}
  }, { req, res, models: { Dog }}) => {
    const foundDog = await Dog.findOne({where: {name}});
    return foundDog.destroy({returning: true})
  },
}
