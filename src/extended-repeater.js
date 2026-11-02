const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  const baseString = String(str);
  const repeatTimes = options.repeatTimes ?? 1;
  const separator = options.separator ?? '+';

  const addition = String(options.addition ?? '');
  const additionRepeatTimes = options.additionRepeatTimes ?? 1;
  const additionSeparator = options.additionSeparator ?? '|';

  const additionString = Array(additionRepeatTimes).fill(addition).join(additionSeparator);
  const newStr = baseString.concat(additionString);

  return Array(repeatTimes).fill(newStr).join(separator);
}

 repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' });

module.exports = {
  repeater
};
