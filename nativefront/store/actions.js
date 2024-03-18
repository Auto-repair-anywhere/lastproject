import axios from "axios";
const baseURL = 'http://192.168.235.11:8080/api/';

export function sendPostRequest(data) {
  const acceptURL = `${baseURL}breakdowns`;

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

export function acceptBreakdown(id) {
  const acceptURL = `${baseURL}breakdowns/${id}/accept`;
  return new Promise((resolve, reject) => {
    axios.put(acceptURL)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error.message);
      });
  });
}

export function getProfessionelPosition(id) {
  const positionURL = `${baseURL}professionel_positions/${id}`;
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
  const addPositionURL = `${baseURL}professionel_positions`;
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
