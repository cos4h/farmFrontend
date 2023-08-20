import axios from "axios";

const instance = axios.create({
  baseURL: 'https://farmapp-0coz.onrender.com/api',
  withCredentials: true
})

export default instance;