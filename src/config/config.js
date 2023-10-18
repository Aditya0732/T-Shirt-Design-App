const config = {
  development: {
    // backendUrl:process.env.REACT_APP_MY_VAR,
    backendUrl: "http://localhost:8080/api/v1/dalle",
  },
  production: {
    backendUrl: "https://devswag.onrender.com/api/v1/dalle",
  },
};

export default config;
