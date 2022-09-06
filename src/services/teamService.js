import React from 'react'
import axios from 'axios'

//For API calls pertaining teams

//Get All Teams Points for month???
export const GetTeamsPoints = async () => {
  return axios.get("http://mondayapiv2-env.eba-2dwymyer.us-east-2.elasticbeanstalk.com/getTeamsPoint", {headers: {
      'content-type': 'application/json'
    }}
  ).then(response => response.data);
};

//Get single team points per current month by week
export const GetTeamWeeklyStats = async (teamId) => {
  return axios.get(`http://mondayapiv2-env.eba-2dwymyer.us-east-2.elasticbeanstalk.com/getTeamWeeklyStats/${teamId}`, {headers: {
      'content-type': 'application/json'
    }}
  ).then(response => response.data);
};

//Get single team points for the whole year, but display data per month
export const getSingleTeamMonthlyStats= async (teamId) => {
  return axios.get(`http://mondayapiv2-env.eba-2dwymyer.us-east-2.elasticbeanstalk.com/getTeamMonthlyStats/${teamId}`, {headers: {
      'content-type': 'application/json'
    }}
  ).then(response =>  response.data);
};

//Get leaderboard stats per user for whole account for current month
export const getUserLeaderboardMonthlyStats = async (accountId) => {
  return axios.get(`http://mondayapiv2-env.eba-2dwymyer.us-east-2.elasticbeanstalk.com/getUserLeaderboardMonthlyStats/${accountId}`, {headers: {
      'content-type': 'application/json'
    }}
  ).then(response =>  response.data);
};

//Get Leaderboard stats for teams for current month
export const getUserLeaderboardYearlyStats = async (accountId) => {
  return axios.get(`http://mondayapiv2-env.eba-2dwymyer.us-east-2.elasticbeanstalk.com/getUserLeaderboardYearlyStats/${accountId}`, {headers: {
      'content-type': 'application/json'
    }}
  ).then(response =>  response.data);
};

//Get leaderboards for teams for current month
export const getTeamLeaderboardMonthlyStats = async (accountId) => {
    return axios.get(`http://mondayapiv2-env.eba-2dwymyer.us-east-2.elasticbeanstalk.com/getTeamLeaderboardMonthlyStats/${accountId}`, {headers: {
            'content-type': 'application/json'
        }}
    ).then(response =>  response.data);
};

//Get leaderboards for teams for current year
export const getTeamLeaderboardYearlyStats = async (accountId) => {
    return axios.get(`http://mondayapiv2-env.eba-2dwymyer.us-east-2.elasticbeanstalk.com/getTeamLeaderboardYearlyStats/${accountId}`, {headers: {
            'content-type': 'application/json'
        }}
    ).then(response => response.data);
};
