const todoModel = require("../Models/todoModel");
//const TODOModel=require('../Models/todoModel')

module.exports.getTODO = async (req, res) => {
  const toDO = await todoModel.find();
  res.send(toDO);
};

module.exports.saveTODO = async (req, res) => {
  const { text } = req.body;
  todoModel.create({ text }).then((data) => {
    console.log("added successfully");
    console.log(data);
    res.send(data);
  });
};

module.exports.updateTODO = async (req, res) => {
  const { _id, text } = req.body;
  todoModel
    .findByIdAndUpdate(_id, { text })
    .then(() => res.send("Updated Successfully..."))
    .catch((err) => console.log(err));
};

module.exports.deleteTODO = async (req, res) => {
  const { _id } = req.body;
  todoModel
    .findByIdAndDelete(_id)
    .then(() => res.send("Deleted Successfully..."))
    .catch((err) => console.log(err));
};
