const wishrouter =  require('express').Router();
const {getAll,add ,del}=require('../Controller/wishList')



wishrouter.get('/getall',getAll)
wishrouter.post('/add',add)
wishrouter.delete('/delete/:idWishlist',del)

module.exports= wishrouter;