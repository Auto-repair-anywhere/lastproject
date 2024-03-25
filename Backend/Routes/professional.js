const express=require('express')
const {getAllRequests, getProRequests, acceptRequest}=require('../controller/professional');

const professionalRouter=express.Router()

professionalRouter.get('/getall/:id',getAllRequests)
professionalRouter.get('/getRequests', getProRequests);
professionalRouter.post('/acceptRequest', async (req, res) => {
    const { requestId, professionalId } = req.body;

    try {
        const acceptedRequest = await acceptRequest(requestId, professionalId);
        res.status(200).json(acceptedRequest);
    } catch (error) {
        res.status(500).json({ message: 'Failed to accept request', error: error.message });
    }
});

module.exports=professionalRouter