const axios = require('axios');


const add= async (req,res)=>{
    const url="https://developers.flouci.com/api/generate_payment"
const pay={
    "app_token": "10f2ad2c-d4bb-47d6-89fd-0b52fd95c91b", 
    "app_secret": "939f1d6e-75cb-4041-ba13-41b28511ba64",
    "amount": req.body.amount,
    "accept_card": "true",
    "session_timeout_secs": 1200,
    "success_link": "https://example.website.com/success",
    "fail_link": "https://example.website.com/fail",
    "developer_tracking_id": "13360cca-3c0b-451f-b4c0-427d9bdd035d"
}
await axios.post(url,pay)
.then((result)=>{
res.send(result.data)
})
.catch((err)=>{
console.log(err);
})
}
const verify= async (req,res)=>{
 await axios.get(`https://developers.flouci.com/api/verify_payment/${req.params.id}`,
 {headers : {
    'Content-Type': 'application/json',
    'apppublic': '10f2ad2c-d4bb-47d6-89fd-0b52fd95c91b',
    'appsecret': '939f1d6e-75cb-4041-ba13-41b28511ba64'
  }})
.then((result)=>{
    res.send(result.data)
})
.catch((err)=>{console.log(err);})

}
 
module.exports={add,verify}