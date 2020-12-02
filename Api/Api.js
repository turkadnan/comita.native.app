import axios from 'axios';

export default axios.create({
  baseURL: 'http://comitanativeapi.roitech.com.tr/api',
  headers: {
    'Content-type': 'application/json',
  },
});
