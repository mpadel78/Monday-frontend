import React from 'react'
import axios from 'axios'

//For API calls pertaining a single user
export const postUserActivity = async (userData) => {
  return axios.post("http://mondayapiv2-env.eba-2dwymyer.us-east-2.elasticbeanstalk.com/insertActivity", userData, {headers: {
    'content-type': 'application/json'
  }}
  )
};

//total points for user, no dates
export const getSingleUserTotalPoints = async (userId) => {
  return axios.get(`http://mondayapiv2-env.eba-2dwymyer.us-east-2.elasticbeanstalk.com/getSingleUserTotalPoints/${userId}`, {headers: {
      'content-type': 'application/json'
    }}
  ).then(response => response.data);
};

//Returns amount of points for month with date being then end of that week ex: 2022-08-28
export const getSingleUserTotalPointsPerMonthByWeek = async (userId) => {
  return axios.get(`http://mondayapiv2-env.eba-2dwymyer.us-east-2.elasticbeanstalk.com/getSingleUserTotalPointsPerMonthByWeek/${userId}`, {headers: {
      'content-type': 'application/json'
    }}
  ).then(response =>  response.data);
};

//Returns amount of points for month with date being then end of that month ex: 2022-08-31
export const getSingleUserTotalPointsPerYearByMonth = async (userId) => {
  return axios.get(`http://mondayapiv2-env.eba-2dwymyer.us-east-2.elasticbeanstalk.com/getSingleUserTotalPointsPerYearByMonth/${userId}`, {headers: {
      'content-type': 'application/json'
    }}
  ).then(response =>  response.data);
};

//Returns amount of points for month by week by activity
export const getSingleUserTotalPointsPerWeekPerActivity = async (userId) => {
  return axios.get(`http://mondayapiv2-env.eba-2dwymyer.us-east-2.elasticbeanstalk.com/getSingleUserTotalPointsPerWeekPerActivity/${userId}`, {headers: {
      'content-type': 'application/json'
    }}
  ).then(response =>  response.data);
};
//Returns amount of points for a single user YTD
export const getSingleUserTotalPointsYTDByActivity = async (userId) => {
    return axios.get(`http://mondayapiv2-env.eba-2dwymyer.us-east-2.elasticbeanstalk.com/getSingleUserTotalPointsYTDByActivity/${userId}`, {headers: {
            'content-type': 'application/json'
        }}
    ).then(response =>  response.data);
};
