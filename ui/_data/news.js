require("dotenv").config();

const { default: axios } = require("axios");

const apiUrl = process.env.API_URL;

module.exports = async () => {
  try {
    const res = await axios.get(`${apiUrl}/news-items`);
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
