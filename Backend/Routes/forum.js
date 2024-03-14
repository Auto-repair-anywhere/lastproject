const express=require('express')
const {AddPost,getAll,getOne,getbyID}=require('../controller/forum')

const forumRouter=express.Router()

forumRouter.post('/post',AddPost)
forumRouter.get('/getAll',getAll)
forumRouter.get('/getOne/:category',getOne)
forumRouter.get('/get/:id',getbyID)
module.exports=forumRouter