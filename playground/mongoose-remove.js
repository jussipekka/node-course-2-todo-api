const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//Todo.findOneAndRemove()

Todo.findByIdAndRemove('5aa82ffa18feb1b78ef04c2d').then((todo) => {
  console.log(todo);
});
