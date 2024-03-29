const skills = [
    {skill: 'HTML', level: 'intermediate'},
    {skill: 'CSS', level: 'intermediate'},
    {skill: 'Javascript', level: 'novice'},
    {skill: 'node.js', level: 'beginner'},
  ];
  
  module.exports = {
      getAll,
      getOne,
      create,
      deleteOne,
      update
  };

  function getAll() {
      return skills;
  };

  function getOne(id) {
    return skills[id];
  };

  function create(skill) {
    skills.push(skill);
  };

  function deleteOne(id) {
    skills.splice(id, 1);
  }

  function update(id, skill) {
    skills.splice(id, 1, skill)
  }