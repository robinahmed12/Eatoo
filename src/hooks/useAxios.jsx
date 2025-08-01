import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXTAUTH_URL 
});

const useAxios = () => {
  return axiosInstance;
};

export default useAxios;
