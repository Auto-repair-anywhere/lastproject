const {Product} = require('../../database/Models/Product.js')
const db = require('../../database/Models/Category')

module.exports ={

   getCategoryzProd : async(req,res)=>{
        try{
            const category=await Product.findAll({where:{categoryCatId:req.params.categoryCatId}})
            res.json(category)
        }
        catch (error) {res.send(error) }
    },




    addCategory: async(req,res)=>{
        try {
            const addition = db.Category.create(req.body)
            res.json(addition)
        }
        catch (error) {res.send(error)}
    },

    UpdateCategory : async(req,res) => {
        try {
        const updated=await db.Category.update(req.body,{where:{catId:req.params.catId}})
        res.json(updated)   
        }
         catch (error) {res.send(error)}
    },
    
    deleteCategory: async (req,res)=>{
        try {
            const deleted = await db.Category.destroy({
                where :  {catId:req.params.catId}
            })
            res.json(deleted)
        }
        catch (error) {res.send(error)}
    },
    getCategories : async(req,res) => {
        try {
        const categories=await db.Category.findAll({});
        res.json(categories) }
         catch (error) {res.send(error) }
    },
    getOneCategory : async(req,res)=>{
        try{
            const category=await db.Category.findOne({where:{catId:req.params.catId}})
            res.json(category)
        }
        catch (error) {res.send(error) }
    }

}