/*
* 定义数据库模型
* */
const mongoose = require("mongoose");
const TodoSchema = require("../schemas/todo");
const TodoBox = mongoose.model("TodoBox",TodoSchema);

module.exports = TodoBox;

