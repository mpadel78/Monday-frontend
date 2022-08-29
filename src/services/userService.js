import React from 'react'
import axios from 'axios'

//For API calls pertaining a single user
export const postUserActivity = async (userData) => {
  return axios.post("http://flask-env.eba-pqxgz2ka.us-east-2.elasticbeanstalk.com/insertActivity", userData, {headers: {
    'content-type': 'application/json'
  }}
).then(response => console.log(response));
};
