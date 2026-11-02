const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */


const chainMaker = {
  links: [],

  getLength() {
    return this.links.length;
  },

  addLink(value) {
    if (arguments.length === 0) {
      this.links.push('');
    } else {
      this.links.push(String(value));
    }

    return this;
  },

  removeLink(position) {
    if (
      !Number.isInteger(position) ||
      position < 1 ||
      position > this.links.length
    ) {
      throw new Error("You can't remove incorrect link!");
    } else {
      this.links.splice(position - 1, 1);
    }

    return this;
  },

  reverseChain() {
    this.links.reverse();
    return this;
  },

  finishChain() {
    const chain = this.links.map((item) => `( ${item} )`).join('~~');

    this.links = [];
    return chain;
  },
};

module.exports = {
  chainMaker,
};
