const { Request } = require('../db/index');


const getRequests = async (req,res) => {
    try {
        const requests = await Request.findAll({
            where: {
                userId : req.params.id
            },   
        })
        res.send(requests)
    }
     catch(err){
      console.log(err)
     }
     
      
    };


module.exports = { getRequests };
