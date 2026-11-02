const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const deleted = arr.map(() => false);
  const copies = arr.map(() => 0);

  const commands = [
    '--discard-next',
    '--discard-prev',
    '--double-next',
    '--double-prev',
  ];

  // Обрабатываем команды слева направо
  for (let i = 0; i < arr.length; i++) {
    const command = arr[i];

    let target;

    switch (command) {
      case '--discard-next':
      case '--double-next':
        target = i + 1;
        break;

      case '--discard-prev':
      case '--double-prev':
        target = i - 1;
        break;

      default:
        continue;
    }

    if (target < 0 || target >= arr.length) continue;
    if (commands.includes(arr[target])) continue;
    if (deleted[target]) continue;

    if (command === '--discard-next' || command === '--discard-prev') {
      deleted[target] = true;
    } else {
      copies[target]++;
    }
  }

  // Формируем результат
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (commands.includes(arr[i]) || deleted[i]) continue;

    for (let j = 0; j <= copies[i]; j++) {
      result.push(arr[i]);
    }
  }

  return result;
}


module.exports = {
  transform
};
