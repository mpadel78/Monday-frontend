import React from 'react'
import axios from 'axios'

//For API calls pertaining a single user
export const postUserActivity = async (userData) => {
    if(!userData)
        return null;
  return axios.post("https://www.greenbackend.xyz/insertActivity", userData, {headers: {
    'content-type': 'application/json'
  }}
  )
};

//total points for user, no dates
export const getSingleUserTotalPoints = async (userId) => {
    if(!userId)
        return null;
  return axios.get(`https://www.greenbackend.xyz/getSingleUserTotalPoints/${userId}`, {headers: {
      'content-type': 'application/json'
    }}
  ).then(response => response.data);
};

//Returns amount of points for month with date being then end of that week ex: 2022-08-28
export const getSingleUserTotalPointsPerMonthByWeek = async (userId) => {
    if(!userId)
        return null;
  return axios.get(`https://www.greenbackend.xyz/getSingleUserTotalPointsPerMonthByWeek/${userId}`, {headers: {
      'content-type': 'application/json'
    }}
  ).then(response =>  response.data);
};

//Returns amount of points for month with date being then end of that month ex: 2022-08-31
export const getSingleUserTotalPointsPerYearByMonth = async (userId) => {
    if(!userId)
        return null;
  return axios.get(`https://www.greenbackend.xyz/getSingleUserTotalPointsPerYearByMonth/${userId}`, {headers: {
      'content-type': 'application/json'
    }}
  ).then(response =>  response.data);
};

//Returns amount of points for month by week by activity
export const getSingleUserTotalPointsPerWeekPerActivity = async (userId) => {
    if(!userId)
        return null;
  return axios.get(`https://www.greenbackend.xyz/getSingleUserTotalPointsPerWeekPerActivity/${userId}`, {headers: {
      'content-type': 'application/json'
    }}
  ).then(response => response.data);
};
//Returns amount of points for a single user YTD
export const getSingleUserTotalPointsYTDByActivity = async (userId) => {
    if(!userId)
        return null;
    return axios.get(`https://www.greenbackend.xyz/getSingleUserTotalPointsYTDByActivity/${userId}`, {headers: {
            'content-type': 'application/json'
        }}
    ).then(response =>  response.data);
};
