const {Product} = require('../../database/Models/Product.js')
const {Image} = require('../../database/Models/Image.js')

const AllPro = async(req,res) => {
    try {
    const result=await Product.findAll({});
    res.json(result) }
     catch (error) {res.send(error) }
};


const AllProSeller = async(req,res) => {
    try {
    const result=await Product.findAll({where:{role:req.params.seller}});
    res.json(result) }
     catch (error) {res.send(error) }
};


const GetOnePro=async(req,res) => {
    try {
    const result=await Product.findOne({where:{prodId:req.params.prodId}})
    res.json(result)}
    catch (error) { res.send(error)}
}

const GetOneByUser=async(req,res) => {
    try {
    const result=await Product.findAll({where:{userUserId:req.params.userUserId}})
    res.json(result)}
    catch (error) { res.send(error)}
}

const AddPro = async(req,res) => {
    try {
    const result=await Product.create(req.body)
    res.json(result) } 
    catch (error) {res.send(error) }
};

const AddProimg = async(req,res) => {
    try {
    const result=await Image.create(req.body)
    res.json(result) } 
    catch (error) {res.send(error) }
};

const getProimg = async(req,res) => {
    try {
    const result=await Image.findAll({where:{productProdId:req.params.productProdId}})
    res.json(result) } 
    catch (error) {res.send(error) }
};

const DeletePro = async(req,res) => {
    try {
    const result=await Product.destroy({where:{prodId:req.params.prodId}})
    res.json(result) } 
    catch (error){res.send(error) }
};

const UpdatePro = async(req,res) => {
    try {
    const result=await Product.update(req.body,{where:{prodId:req.params.prodId}})
    res.json(result)   
    }
     catch (error) {res.send(error)}
}
     
    const UpdateRating=async(req, res)=>{
        try {
            const ratings = await Product.update({ratings:req.body.ratings},{where:{prodId:req.params.prodId}})
            res.json(ratings)
        }
        catch (error) {res.send(error)} 
     }

    const updateSellerProd= async (req,res)=>{
        try {
            const updated = await Product.update(
                {
                    name:req.body.name,
                    description:req.body.description,
                    price:req.body.price,
                    categoryCatId:req.body.categoryCatId,
                    file:req.body.file,
            },{where:{prodId:req.params.prodId}})
            res.json(updated)
        }
        catch (error) {res.send(error)} 
    } 



module.exports={AllPro,GetOnePro,AddPro,DeletePro,UpdatePro,GetOneByUser,AddProimg,getProimg ,UpdateRating,updateSellerProd}


