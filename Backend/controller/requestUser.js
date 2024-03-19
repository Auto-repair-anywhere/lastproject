const { Request } = require('../db/index');

<<<<<<< HEAD
const createRequest = async (req, res) => {
    try {
        const { brand, problem, description, moredescription, milage, time, userId, latitude, longitude } = req.body;

        const newRequest = await Request.create({
            brand,
            problem,
            description,
            moredescription,
            milage,
            time,
            userId,
            latitude,
            longitude
        });

        res.status(201).send(newRequest);
    } catch (error) {
        console.error('Error creating request:', error);
        res.status(500).json({ message: 'Failed to create request', error: error.message });
    }
};

const getRequests = async (req, res) => {
    try {
        const requests = await Request.findAll({
            where: {
                userId: req.params.id
            }
        });
        res.send(requests);
    } catch (error) {
        console.error('Error fetching requests:', error);
        res.status(500).json({ message: 'Failed to fetch requests', error: error.message });
    }
};

module.exports = { getRequests, createRequest };
=======

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
>>>>>>> d178a0085bbd0c028ad7a04739952787ddb4f2ea
