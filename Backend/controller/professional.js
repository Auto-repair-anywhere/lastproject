const { Request, User } = require('../db/index');


const getProRequests = async (req, res) => {
    try {
        const requests = await Request.findAll({
            where: {
                status: 'waiting',
                id_professionel: null
            }
        });

        res.status(200).send(requests);
    } catch (error) {
        console.error('Error getting requests:', error);
        res.status(500).json({ message: 'Failed to get requests', error: error.message });
    }
};


const getAllRequests = async (req,res) => {
    try {
        const requests = await Request.findAll({
            where: {
                idrequest : req.params.id
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


    const acceptRequest = async (reqId, proId) => {
        console.log(reqId);
        try {
            const request = await Request.findOne({
                where: { idrequest: reqId }
            });
    
            if (!request) {
                throw new Error('Request not found');
            }
    
            request.status = 'accept';
            request.id_professionel = proId;
    
            await request.save();
    
            return request;
        } catch (error) {
            console.error('Error accepting request:', error);
            throw error;
        }
    };
    

module.exports = { getAllRequests, getProRequests, acceptRequest };

