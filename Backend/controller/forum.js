const { Forum } = require('../db/index');

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

module.exports={AddPost,getAll,getOne,getbyID}