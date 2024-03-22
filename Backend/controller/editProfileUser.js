const {User} = require('../db/index')
const bycribt = require("bcrypt");


module.exports ={
    updateUser: async (req,res)=>{
   const firstname=req.body.firstname
   const lastname=req.body.lastname
   const email=req.body.email
   const newpwd=req.body.password
   const Number=req.body.Number
   const img =req.body.image
        try {
            const hashpwd = await bycribt.hash(newpwd, 10);
            const upd = User.update({firstname:firstname,Number:Number,lastname:lastname,email:email,password:hashpwd,image:img},{
                where:{iduser:req.params.iduser}
            });
            res.status(200).json(upd);
          } catch (err) {
            console.log(err);
          }

    },
  }