import axios from "axios";
const baseURL = 'http://10.0.2.2:8080/';

export function sendPostRequest(data) {
  const acceptURL = `${baseURL}reqU/create`;

  return new Promise((resolve, reject) => {
    axios.post(acceptURL, data)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error.message);
      });
  });
}

export function acceptBreakdown(requestId, professionalId) {
  const acceptURL = `${baseURL}req/acceptRequest`;
  const data = {
    requestId: requestId,
    professionalId: professionalId
  };

  return new Promise((resolve, reject) => {
    axios.post(acceptURL, data)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error.message);
      });
  });
}


export function getProfessionelPosition(id) {
  const positionURL = `${baseURL}auth/professionel_positions/${id}`;
  return new Promise((resolve, reject) => {
    axios.get(positionURL)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error.message);
      });
  });
}

export function addProfessionelPosition(data) {
  console.log("data");
  console.log(data);
  const addPositionURL = `${baseURL}auth/professionel_positions`;
  return new Promise((resolve, reject) => {
    axios.post(addPositionURL, data)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error.message);
      });
  });
}
