const { Forum, Comments, User } = require('../db/index');
const cloudinary = require('cloudinary').v2;

require('dotenv').config()


cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_APIKEY,
  api_secret: process.env.CLOUDINARY_APISECRET,
});
cloudinary.config({ 
    cloud_name: 'ddmbhtfsy', 
    api_key: '368466755543241', 
    api_secret: 'wCpyrDeG9g0-tk2e38CgceXglkU' 
  });

// const AddPost = async (req,res)=>{
//     try {
//         const {title,content,category,userId}=req.body
//         let image_url = null; 
         


//             if (req.file) {
//                 const result = await cloudinary.uploader.upload(req.file.path);
//                 image_url = result.secure_url;

//               }
//         const result=await Forum.create({
//             title:title,
//             content:content,
//             image_url:image_url,
//             category:category,
//             userId:userId
//         })
//         res.json(result)
//     }
//     catch (err) {
//             console.error('Error:', err);
//     }
// }




const AddPost = async (req, res) => {
    try {
      const { title, content, category, userId} = req.body;
      let image_url = null;
      
      console.log(req.body)
  
      // Check if an image file is uploaded
      if (req.file) {
        // Upload image to cloudinary
        const result = await cloudinary.uploader.upload(req.file.path);
        image_url = result.secure_url;
  
        // Remove temporary file after uploading
        // fs.unlinkSync(req.file.path);
      }
  
      // Create post record in the database
      const result = await Forum.create({
        title: title,
        content: content,
        image_url: image_url , // Use the variable, not a string "image_url"
        category: category,
        userIduser: userId // Use the correct field name
      });
  
      res.json(result);
    } catch (err) {
      console.error('Error:', err);
      res.status(500).json({ error: 'Internal Server Error' });
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
      const { content } = req.body;
      const { forumId } = req.params;
      const { userIduser } = req.body

      const newComment = await Comments.create({
        content: content,
        forumId: forumId, 
        userIduser: userIduser
      });

      res.status(201).json(newComment);
    } catch (err) {
      console.error('Error:', err);
    }
  };
  
  const deleteComment = async (req, res) => {
    try {
        const { commentId } = req.params;
        const comment = await Comments.findByPk(commentId);
        if (!comment) {
            return res.status(404).json({ error: 'Comment not found' });
        }
        await comment.destroy();
        res.status(200).json({ message: 'Comment deleted' });
    } catch (error) {
        console.error('Error deleting comment:', error);
    }
};



module.exports={AddPost,getAll,getOne,getbyID,getAllComments,addComment, deleteComment}