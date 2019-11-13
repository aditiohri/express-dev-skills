const skills = [
    {skill: 'HTML', level: 'intermediate'},
    {skill: 'CSS', level: 'intermediate'},
    {skill: 'Javascript', level: 'novice'},
    {skill: 'node.js', level: 'beginner'},
  ];
  
  module.exports = {
      getAll,
      getOne
  };

  function getAll() {
      return skills;
  };

  function getOne(id) {
    return skills[id];
  }