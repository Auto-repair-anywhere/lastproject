const express=require('express')
const {AddPost,getAll,getOne,getbyID,getAllComments,addComment}=require('../controller/forum')

const forumRouter=express.Router()

forumRouter.post('/post',AddPost)
forumRouter.get('/getAll',getAll)
forumRouter.get('/getOne/:category',getOne)
forumRouter.get('/get/:id',getbyID)
forumRouter.get('/getCom/:forumId',getAllComments)
forumRouter.post('/add/:forumId',addComment)
module.exports=forumRouter