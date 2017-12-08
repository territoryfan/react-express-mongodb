const mongoose = require('mongoose');//Mongoose是在node.js异步环境下对mongodb进行便捷操作的对象模型工具
const Schema = mongoose.Schema;//一种数据模式,表结构的定义,每个schema会映射到mongodb中的一个collection
//以文件形式存储的数据库模型骨架，不具备数据库的操作能力
//required: true  //空字符串undefined和null值总是通过匹配验证器。如果您需要这些值，也启用required验证器
const Todo = new Schema({//两个字段 内容 和时间 保存在todo表中
         content: {//输入的内容
            type: String,
            required: true  //content非空 required非空验证
         },
         date: {//输入时的当前时间
            type: String,
            required: true
         }
}, { collection: 'todoLi' });

module.exports = Todo;