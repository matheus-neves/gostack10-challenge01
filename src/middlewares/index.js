const { projects } = require('../data.js');

const projectsFindIndex = (req, res, next) => {

  const { id } = req.params;

  const index = projects.findIndex( value => value.id == id );

  if(index < 0) {
    return res.status(400).json({error: 'Project not exist'});
  }

  req.index = index;

  return next();
}

let count = 0;
const countRequest = (req, res, next) => {
  count++;
  console.log(`Request number ${count} | Route: ${req.path} | Method: ${req.method}`)
  return next();
};


module.exports = {
  projectsFindIndex,
  countRequest
}