import axios from 'axios';
import {normalize} from 'normalizr';
import {getAuthToken, getPaginationState} from '@utils';

const ROOT_URL = 'http://localhost:8000/api/v1/';

const ACCEPT = {
    JSON: 'application/json',
};

const authHeader = (authToken) => ({
    Authorization: `token ${authToken}`,
});

const constructHeader = (authToken, accept = ACCEPT.JSON) => ({
    headers: {
        Accept: accept,
        ...authHeader(authToken),
    },
});

const getData = (response) => {
    const data = response.data;

    if (data.results == undefined) {
        return data;
    }

    return data.results;
};

const getNextPageURL = (response) => response.data.next;

const axiosClient = axios.create({
    baseURL: ROOT_URL,
});

export const client = {
    get: (url, schema, action) => async (dispatch, getState) => {
        dispatch({
            type: action.PENDING,
        });

        const authToken = getAuthToken(getState);
        return axiosClient
            .get(url, constructHeader(authToken))
            .then((resp) => {
                const normalizedJson = normalize(getData(resp), schema);

                dispatch({
                    type: action.SUCCESS,
                    payload: normalizedJson,
                });

                return Promise.resolve();
            })
            .catch((err) => {
                dispatch({
                    type: action.ERROR,
                    payload: err.response.data,
                });

                return Promise.reject(err);
            });
    },
    list: (url, schema, action, paginationParams = {}) => async (dispatch, getState) => {
        // pagination handling
        const {paginationKey, forceRefresh = false, loadMore = false} = paginationParams;

        // reset pagination
        if (forceRefresh) {
            dispatch({
                type: action.RESET,
                id: paginationKey,
            });
        }

        const pagination = getPaginationState(action.actionName, getState);
        const {pageCount = 0, isFetching = false, nextPageURL} = pagination[paginationKey] || {};

        // should we block the call?
        if (!forceRefresh && (isFetching || (pageCount > 0 && !loadMore) || (loadMore && !nextPageURL))) {
            return Promise.resolve();
        }

        // are we instructed to get next page?
        if (loadMore) {
            url = nextPageURL;
        }

        // let component know we are performing action
        dispatch({
            type: action.PENDING,
            id: paginationKey,
        });

        // perform call
        const authToken = getAuthToken(getState);

        return axiosClient
            .get(url, constructHeader(authToken))
            .then((resp) => {
                let normalizedJson = normalize(getData(resp), schema);

                normalizedJson.pagination = {
                    ids: normalizedJson.result,
                    nextPageURL: getNextPageURL(resp),
                };

                delete normalizedJson.result;

                dispatch({
                    type: action.SUCCESS,
                    id: paginationKey,
                    payload: {...normalizedJson},
                });

                return Promise.resolve();
            })
            .catch((err) => {
                dispatch({
                    type: action.ERROR,
                    id: paginationKey,
                });

                return Promise.reject(err);
            });
    },
    create: (url, data, schema, action) => async (dispatch, useState) => {
        dispatch({
            type: action.PENDING,
        });

        const authToken = getAuthToken(useState);
        return axiosClient
            .post(url, data, constructHeader(authToken))
            .then((resp) => {
                let normalizedJson = normalize(getData(resp), schema);

                dispatch({
                    type: action.SUCCESS,
                    payload: normalizedJson,
                });
                return Promise.resolve();
            })
            .catch((err) => {
                dispatch({type: action.ERROR});
                return Promise.reject(err);
            });
    },
    put: (url, data, schema, action) => async (dispatch, useState) => {
        dispatch({
            type: action.PENDING,
        });

        const authToken = getAuthToken(useState);
        return axiosClient
            .put(url, data, constructHeader(authToken))
            .then((resp) => {
                let normalizedJson = normalize(getData(resp), schema);

                dispatch({
                    type: action.SUCCESS,
                    payload: normalizedJson,
                });
                return Promise.resolve();
            })
            .catch((err) => {
                dispatch({type: action.ERROR});
                return Promise.reject(err);
            });
    },
    patch: (url, data, schema, action) => async (dispatch, useState) => {
        dispatch({
            type: action.PENDING,
        });

        const authToken = getAuthToken(useState);
        return axiosClient
            .patch(url, data, constructHeader(authToken))
            .then((resp) => {
                let normalizedJson = normalize(getData(resp), schema);

                dispatch({
                    type: action.SUCCESS,
                    payload: normalizedJson,
                });
                return Promise.resolve();
            })
            .catch((err) => {
                dispatch({type: action.ERROR, payload: err.response.data});
                return Promise.reject(err);
            });
    },
    delete: (url, action) => async (dispatch, useState) => {
        dispatch({
            type: action.PENDING,
        });

        const authToken = getAuthToken(useState);
        return axiosClient
            .delete(url, constructHeader(authToken))
            .then((resp) => {
                dispatch({
                    type: action.SUCCESS,
                });

                return Promise.resolve();
            })
            .catch((err) => {
                dispatch({
                    type: action.ERROR,
                    payload: err.response.data,
                });

                return Promise.reject(err);
            });
    },
    login: async (username, password) => {
        return await axiosClient.post(
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
        return await axiosClient.post('auth/logout/', authToken);
    },
    register: async (username, password, confirmPassword) => {
        return await axiosClient.post(
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
    getAuthUser: async (authToken) => {
        return await axiosClient.get('auth/user/', constructHeader(authToken));
    },
};
