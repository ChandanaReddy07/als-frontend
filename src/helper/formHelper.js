// import { API } from "../backend";

const API = "http://localhost:3000";

export const createForm = (form, user, token) => {
  return fetch(`${API}/load/addload/${user._id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(form),
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};

export const getallform = (user, token) => {
  return fetch(`${API}/load/getall/${user._id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};

export const updateform = (invoice, amt, acc_holder, user, token) => {
  return fetch(`${API}/load/updateload/${user._id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      invoice: invoice,
      amt: amt,
      acc_holder: acc_holder,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};