const { Request, User } = require('../db/index');


const getAllRequests = async (req,res) => {
    try {
        const requests = await Request.findAll({
            where: {
                idrequest : req.params.idrequest
            },
            include: [
                {
                    model: User,
                    attributes: ['firstname', 'lastname']
                },
  
            ]
            
        })
        res.send(requests)
    }
     catch(err){
      console.log(err)
     }
     
      
    };


module.exports = { getAllRequests };
