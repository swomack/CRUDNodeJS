let express = require('express');
let Todo = require('./todo')

let router = express.Router();

router.post('/', (req, res, next) => {
  Todo.create();
});



module.exports = router;