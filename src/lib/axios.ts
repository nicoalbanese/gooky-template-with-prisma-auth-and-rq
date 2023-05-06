import axios from "axios";

export const fetch = axios.create({
  baseURL: process.env.DOMAIN,
});
