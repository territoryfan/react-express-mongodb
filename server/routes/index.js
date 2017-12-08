var express = require('express');
var router = express.Router();
const Todo = require('../models/todo');
// 获取全部
router.get('/getAllItems', (req, res, next) => {
   Todo.find({}).sort({'date': -1}).exec((err, todoList) => {
      if (err) {
         console.log(err);
      }else {
         res.json(todoList);
      }
   })
});
// 添加
router.post('/addItem', (req, res, next) => {
   console.log(req.body);
   let newItem = req.body;
   Todo.create(newItem, (err) => {
      if (err) {
         console.log(err);
      }else {
         Todo.find({}, (err, todoList) => {
            if (err) {
               console.log(err);
            }else {
               console.log(todoList);
               res.json(todoList);
            }
         });
      }
   })
})

// 删除
router.post('/deleteItem', (req, res, next) => {
   console.log(req.body);
   let delete_date = req.body.date
   Todo.remove({date: delete_date}, (err, result) => {
      if (err) {
         console.log(err)
      }else {
         res.json(result);
      }
   });
});
module.exports = router;
