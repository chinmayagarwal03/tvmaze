import axios from 'axios';

const BASE_URL = 'https://api.tvmaze.com';

export const searchShows = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/shows?q=${query}`);
    return response.data;
  } catch (error) {
    console.error('Error searching shows:', error);
    throw error;
  }
};

export const getShowSummary = async (showId) => {
  try {
    const response = await axios.get(`${BASE_URL}/shows/${showId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching show summary:', error);
    throw error;
  }
};
