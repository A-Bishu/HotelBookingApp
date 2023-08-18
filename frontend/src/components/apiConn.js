import axios from 'axios';

const BASE_URL = 'http://localhost:3005';
const apiConn = axios.create({ baseURL: BASE_URL});

export default apiConn;