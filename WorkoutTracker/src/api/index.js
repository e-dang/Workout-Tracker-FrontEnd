import axios from 'axios';

const ROOT_URL = 'http://localhost:8000/api/v1/';

const ACCEPT = {
    JSON: 'application/json',
};

const authHeader = (authToken) => ({
    Authorization: `token ${authToken}`,
});

export const api = {
    instance: axios.create({
        baseURL: ROOT_URL,
    }),
    headers: (authToken, accept = ACCEPT.JSON) => ({
        headers: {
            Accept: accept,
            ...authHeader(authToken),
        },
    }),
    get: async (url, authToken) => {
        return await api.instance.get(url, api.headers(authToken, ACCEPT.JSON));
    },
    getAuthUser: async (authToken) => {
        return await api.get('auth/user/', authToken);
    },
    post: async (url, authToken, body = {}) => {
        return await api.instance.post(url, JSON.stringify(body), api.headers(authToken, ACCEPT.JSON));
    },
    put: async (url, authToken, body = {}) => {
        return await api.instance.put(url, body, api.headers(authToken, ACCEPT.JSON));
    },
    patch: async (url, authToken, body = {}) => {
        return await api.instance.patch(url, body, api.headers(authToken, ACCEPT.JSON));
    },
    delete: async (url, authToken) => {
        return await api.instance.delete(url, api.headers(authToken, ACCEPT.JSON));
    },
    login: async (username, password) => {
        return await api.instance.post(
            'auth/login/',
            {username, password},
            {
                headers: {
                    Accept: ACCEPT.JSON,
                    'Content-Type': ACCEPT.JSON,
                },
            },
        );
    },
    logout: async (authToken) => {
        return await api.post('auth/logout/', authToken);
    },
    register: async (username, password, confirmPassword) => {
        return await api.instance.post(
            'auth/register/',
            {username, password1: password, password2: confirmPassword},
            {
                headers: {
                    Accept: ACCEPT.JSON,
                    'Content-Type': ACCEPT.JSON,
                },
            },
        );
    },
};
