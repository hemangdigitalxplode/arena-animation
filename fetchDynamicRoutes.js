const axios = require('axios');

const API_ENDPOINT = 'https://animationdelhincr.com/admin/api/course';
const API_KEY = '9381c6f9906bf6eeeda60923010b6084b051cab5b75ca0b59e79dec5';
const fetchDynamicRoutes = async () => {
  try {
    const response = await axios.get(API_ENDPOINT, {
      headers: {
        'x-api-key': API_KEY,
      },
    });
return response?.data?.data.map(url => `https://www.animationdelhincr.com/course-details/${url.slug}`);
  } catch (error) {
    console.error('Error fetching dynamic routes:', error);
    return [];
  }
};
module.exports = fetchDynamicRoutes;
