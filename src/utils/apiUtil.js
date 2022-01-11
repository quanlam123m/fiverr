import axios from "axios";

const tokenByClass =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAxNCIsIkhldEhhblN0cmluZyI6IjE1LzA0LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY0OTk4MDgwMDAwMCIsIm5iZiI6MTYyMTE4NDQwMCwiZXhwIjoxNjUwMTI4NDAwfQ.43sCqLD_V6VUJP8qZLQSWO07uCIDI7bS5MGR92deYb8";

// const token = localStorage.getItem("UserAdmin")
//   ? JSON.parse(localStorage.getItem("UserAdmin")).token
//   : "";

const api = axios.create({
  baseURL: "https://fiverr.cybersoft.edu.vn",
});

api.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      tokenByClass: tokenByClass,
      Authorization: localStorage.getItem("UserAdmin")
        ? "Bearer " + JSON.parse(localStorage.getItem("UserAdmin")).token
        : "",
      token: localStorage.getItem("UserAdmin")
        ? JSON.parse(localStorage.getItem("UserAdmin")).token
        : "",
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { api };
