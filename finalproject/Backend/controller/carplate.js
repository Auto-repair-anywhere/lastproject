const axios = require('axios');
const parseString = require('xml2js').parseString;
const connection = require('../db/index.js')
const getCarInfoFromLicensePlate = async (req, res) => {
  const { licensePlate, username } = req.body;

  const soapRequest = `<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema">
  <soap:Body>
    <CheckTunisia xmlns="http://regcheck.org.uk">
      <RegistrationNumber>${licensePlate}</RegistrationNumber>
      <username>${username}</username>
    </CheckTunisia>
  </soap:Body>
</soap:Envelope>`;

  try {
    
    const response = await axios.post('http://www.regcheck.org.uk/api/reg.asmx', soapRequest, {
      headers: {
        'Content-Type': 'text/xml; charset=utf-8',
        'SOAPAction': 'http://regcheck.org.uk/CheckTunisia',
      }
    });

    parseString(response.data, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Internal Server Error');
      }

      const vehicleJson = JSON.parse(result['soap:Envelope']['soap:Body'][0]['CheckTunisiaResponse'][0]['CheckTunisiaResult'][0]['vehicleJson'][0]);
      const description = vehicleJson.Description;
      const fuelType = vehicleJson.FuelType;
      const imageUrl = vehicleJson.ImageUrl;
      const car =  connection.Car.create({
        carname:description,
        fueltype:fuelType,
        carimage:imageUrl
      })
      res.send({ description, fuelType, imageUrl });
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = { getCarInfoFromLicensePlate };
