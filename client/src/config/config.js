// The config folder is like a folder to centralize configuration files, constants
// environment variables, or settings that are used throughout the application

const config = {
  development: {
    backendUrl: "http://localhost:8080/api/v1/dalle",
  },
  production: {
    backendUrl: "https://devswag.onrender.com/api/v1/dalle",
  },
};

export default config;
