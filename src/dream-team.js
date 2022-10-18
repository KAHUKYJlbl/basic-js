const { NotImplementedError } = require('../extensions/index.js');

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
  let dreamTeam = [];
  if ( Array.isArray(members) ) {
    for (member of members) {
      if (typeof member === 'string' && member !== undefined) {
        let theMember = member.trim();
        dreamTeam.push( theMember[0].toUpperCase() );
      };
    }
  } else {
    return false;
  }
  return dreamTeam.sort().join('');
}

createDreamTeam(3);
createDreamTeam(3.312312);
createDreamTeam(false);
createDreamTeam(null);
createDreamTeam(undefined);
createDreamTeam({ 'foo': 'bar' });
createDreamTeam(['Ann', 'Nancy', 'Nicholas', 'Alexander', 'Charles', 'Johnny', 'Philip', 'Jeffrey', 'Kenneth', 'Raymond'])

module.exports = {
  createDreamTeam
};
