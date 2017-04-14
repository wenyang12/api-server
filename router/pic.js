//服务接口编写
const express = require('express')
const router = express.Router();
const Pic = require('../models/pic')

//查看所有图片列表
router.get('/picList', (req, res) => {
    Pic.find({})
        .sort({update_at : -1})
        .then(pics => {
            res.json(pics); //以json格式返回数据
        })
        .catch(err => {
            res.json(err);
        })
})

//添加图片
router.post('/add', (req, res) => {
    Pic.create(req.body, (err, pic) => {
        if(err){
            res.json(err)
        } else {
            res.json(pic)
        }
    })
})

module.exports = router;