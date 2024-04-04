const express=require('express')
const {AddPost,getAll,getOne,getbyID,getAllComments,addComment,deleteComment }=require('../controller/forum')
const upload= require('../middleware/multer')
const forumRouter=express.Router()

forumRouter.post('/post',upload.single('image'),AddPost);
forumRouter.get('/getAll',getAll)
forumRouter.get('/getOne/:category',getOne)
forumRouter.get('/get/:id',getbyID)
forumRouter.get('/getCom/:forumId',getAllComments)
forumRouter.post('/add/:forumId',addComment)
forumRouter.delete('/comments/:commentId',deleteComment);

module.exports=forumRouter