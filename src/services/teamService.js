import React from 'react'
import axios from 'axios'

//For API calls pertaining teams

//Get All Teams Points for month???
export const GetTeamsPoints = async () => {
  return axios.get("https://www.greenbackend.xyz/getTeamsPoint", {headers: {
      'content-type': 'application/json'
    }}
  ).then(response => response.data);
};

//Get single team points per current month by week
export const GetTeamWeeklyStats = async (teamId) => {
    if(!teamId)
        return null;
  return axios.get(`https://www.greenbackend.xyz/getTeamWeeklyStats/${teamId}`, {headers: {
      'content-type': 'application/json'
    }}
  ).then(response => response.data);
};

//Get single team points for the whole year, but display data per month
export const getSingleTeamMonthlyStats= async (teamId) => {
    if(!teamId)
        return null;
  return axios.get(`https://www.greenbackend.xyz/getTeamMonthlyStats/${teamId}`, {headers: {
      'content-type': 'application/json'
    }}
  ).then(response =>  response.data);
};

//Get leaderboard stats per user for whole account for current month
export const getUserLeaderboardMonthlyStats = async (accountId) => {
    if(!accountId)
        return null;
  return axios.get(`https://www.greenbackend.xyz/getUserLeaderboardMonthlyStats/${accountId}`, {headers: {
      'content-type': 'application/json'
    }}
  ).then(response =>  response.data);
};

//Get Leaderboard stats for teams for current month
export const getUserLeaderboardYearlyStats = async (accountId) => {
    if(!accountId)
        return null;
  return axios.get(`https://www.greenbackend.xyz/getUserLeaderboardYearlyStats/${accountId}`, {headers: {
      'content-type': 'application/json'
    }}
  ).then(response =>  response.data);
};

//Get leaderboards for teams for current month
export const getTeamLeaderboardMonthlyStats = async (accountId) => {
    if(!accountId)
        return null;
    return axios.get(`https://www.greenbackend.xyz/getTeamLeaderboardMonthlyStats/${accountId}`, {headers: {
            'content-type': 'application/json'
        }}
    ).then(response =>  response.data);
};

//Get leaderboards for teams for current year
export const getTeamLeaderboardYearlyStats = async (accountId) => {
    if(!accountId)
        return null;
    return axios.get(`https://www.greenbackend.xyz/getTeamLeaderboardYearlyStats/${accountId}`, {headers: {
            'content-type': 'application/json'
        }}
    ).then(response => response.data);
};
