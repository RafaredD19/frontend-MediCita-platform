import axiosInstance from '@/config/http.config';
// import axios from 'axios';

const baseURL = process.env.VUE_APP_BASE_URL;


export function listVisitaApi() {
  
    return axiosInstance.get(`${baseURL}/visits/list`)
}

export function createVisitaApi(payload) {
  
    return axiosInstance.post(`${baseURL}/visits/create`, payload)
}