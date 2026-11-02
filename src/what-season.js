const { NotImplementedError } = require('../lib');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }

  let month;

  try {
    month = Date.prototype.getMonth.call(date);
  } catch {
    throw new Error('Invalid date!');
  }

  if (Number.isNaN(Date.prototype.getTime.call(date))) {
    throw new Error('Invalid date!');
  }

  const seasons = [
    'winter', // January
    'winter', // February
    'spring', // March
    'spring', // April
    'spring', // May
    'summer', // June
    'summer', // July
    'summer', // August
    'autumn', // September
    'autumn', // October
    'autumn', // November
    'winter', // December
  ];

  return seasons[month];
}

module.exports = {
  getSeason
};
