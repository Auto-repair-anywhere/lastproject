const db = require('../../database/Models/Image')

module.exports ={
    addImage: async(req,res)=>{
        try {
            const addition = db.Image.create(req.body,{where:{productProdId:req.params.productProdId}})
            res.json(addition)
        }
        catch (error) {res.send(error)}
    },

    // UpdateCategory : async(req,res) => {
    //     try {
    //     const updated=await db.Image.update(req.body,{where:{catId:req.params.catId}})
    //     res.json(updated)   
    //     }
    //      catch (error) {res.send(error)}
    // },
    
    deleteImage: async (req,res)=>{
        try {
            const deleted = await db.Image.destroy({
                where :  {imgId:req.params.imgId}
            })
            res.json(deleted)
        }
        catch (error) {res.send(error)}
    },
    getImage : async(req,res) => {
        try {
        const categories=await db.Image.findAll({});
        res.json(categories) }
         catch (error) {res.send(error) }
    },
    getOneImage : async(req,res)=>{
        try{
            const category=await db.Image.findOne({where:{imgId:req.params.imgId}})
            res.json(category)
        }
        catch (error) {res.send(error) }
    }

}