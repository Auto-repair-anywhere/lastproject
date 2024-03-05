const {cart} = require('../../database/Models/cart')

const getAll = function (req, res) {
    const user=  cart.findAll({}).then((result)=>{
      res.status(201).send(result)
    })
    .catch((error)=>{
      res.send(error)
    })
    }
    
    // const getAllByUserId= function (req, res) {
    //       const getone= wishlist.findAll({where:{userId:req.params.id}}).then((result)=>{
    //         res.json(result)
    //       })
    //       .catch((error)=>{
    //         res.send(error)
    //       })
    //       }
  
  const add = function (req, res) {
    const user=  cart.create(req.body).then((result)=>{
      res.json(user)
    })
    .catch((error)=>{
      res.send(error)
    })
    }
  
  const del = function (req, res) {
    const user=  cart.destroy({where:{idCart:req.params.idCart}}).then((result)=>{
      res.json(user)
    })
    .catch((error)=>{
      res.send(error)
    })
    }
  
  
  
  
  
  
    module.exports={getAll, add ,del}