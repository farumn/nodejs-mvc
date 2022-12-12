
const requireController = (controller, callback) => {
  callback = require(`../controllers/${controller}`);
  return callback;
}

const requireModel = (model, callback) => {
  callback = require(`../models/${model}`);
  return callback;
}

module.exports = { requireController, requireModel  };