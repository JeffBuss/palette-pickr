const seedProjects = [
  {
    project_name: 'Palette Pickr'
  },
]

exports.seed = function(knex, Promise) {
  return knex('projects').del()
    .then(() => {
      return Promise.all([
        knex('projects').insert(seedProjects)
        .then(() => console.log('Seeding projects complete!'))
        .catch(error => console.log(`Error seeding data: ${error}`))
      ])
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};
