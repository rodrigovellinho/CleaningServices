import axios from "axios";

const url: string = "https://ediaristas-workshop.herokuapp.com";

export const ApiService = axios.create({
  baseURL: url,
  headers: {
    "Content-Type": "application/json",
  },
});
