const config = {
    development: {
        APIURL:process.env.REACT_APP_API_URL || 'http://localhost:8080',
    },
    production: {
        APIURL: process.env.REACT_APP_APIURL || 'https://icamp.tech',
    },
};

const environment = process.env.NODE_ENV || 'production';

export const {APIURL} = config[environment];