const { Request } = require('../db/index');

const createRequest = async (req, res) => {
    try {
        const { brand, problem, description, moredescription, milage, time, userId, latitude, longitude } = req.body;
        const status = "waiting";
        const newRequest = await Request.create({
            brand,
            problem,
            description,
            moredescription,
            milage,
            status,
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
