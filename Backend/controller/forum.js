const { Forum, Comments, User } = require('../db/index');

const AddPost = async (req,res)=>{
    try {
        const {title,content,image_url,category,userId}=req.body
        const result=await Forum.create({
            title:title,
            content:content,
            image_url:image_url,
            category:category,
            userId:userId
        })
        res.json(result)
    }
    catch (err) {
            console.error('Error:', err);
    }
}


const getAll = async (req,res)=>{
    try{
        const results = await Forum.findAll({});
        res.json(results)   }
    catch (err) {
        console.error('Error:', err);
}
}



const getOne = async (req,res)=>{
    try{
        const results = await Forum.findAll({
            where: {
                category: req.params.category 
            },
        })
        res.json(results)
    }
    catch (err) {
        console.error('Error:', err);
}
}


const getbyID =async (req,res)=>{
    try{
        const results=await Forum.findAll({
            where:{
                id:req.params.id
            }, 
        })
        res.json(results)
    }
    catch (err) {
        console.error('Error:', err);
}
}


// const getAllComments = async (req, res) => {
//     try {
//         const forumsWithComments = await Forum.findAll({
//             include: Comments 
//         });

//         const forumComments = forumsWithComments.map(e => {
//             const forumData = {
//                 forumId: e.id,
//                 title: e.title,
//                 content: e.content,
//                 imageUrl: e.image_url,
//                 createdAt: e.createdAt,
//                 comments: [] 
//             };
            
        
//            e.comments.forEach(comment => {
//                 forumData.comments.push({
//                     id: comment.idcomments,
//                     content: comment.content
//                 });
//             });

//             return forumData;
//         });

//         res.json(forumComments)
//     } 
//     catch (error) {
//         console.error('Error:', error);
//     }
// };

const getAllComments = async (req, res) => {
    const { forumId } = req.params;

    try {
        const forumPost = await Forum.findByPk(forumId, {
            include: [
                {
                    model: Comments,
                    include: [{ model: User, attributes: ['firstname', 'lastname'] }]
                }
            ]
        });

        if (!forumPost) {
            return res.status(404).json({ error: 'Forum post not found' });
        }

        const comments = forumPost.comments;

        return res.status(200).json(comments);
    } catch (error) {
        console.error('Error getting comments for forum post:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};



const addComment = async (req, res) => {
  try {
    const newComment = await Comments.create({
      content:req.body,
      forumId:req.params.forumId, 
      userIduser:req.body
    });

    res.status(201).json(newComment);
  } catch (err) {
    console.error('Error:', err);
  }
};





module.exports={AddPost,getAll,getOne,getbyID,getAllComments,addComment }