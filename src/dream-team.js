const { NotImplementedError } = require('../lib');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  const teamName = members
    .filter((str) => typeof str === "string")
    .filter((str) => str.trim() !== "")
    .map((member) => member.trim()[0].toUpperCase())
    .sort()
    .join('');

  console.log(teamName);

  return teamName;
}

let members = [
          ['David Abram'],
          ['Robin Attfield'],
          'Thomas Berry',
          ['Paul R.Ehrlich'],
          'donna Haraway',
          ' BrIaN_gOodWiN  ',
          {
            0: 'Serenella Iovino',
          },
          'Erazim Kohak',
          '  val_plumwood',
        ];

createDreamTeam(members);

module.exports = {
  createDreamTeam
};
