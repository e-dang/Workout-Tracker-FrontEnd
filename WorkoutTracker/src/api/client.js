import axios from 'axios';
import {normalize} from 'normalizr';

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

export default client = {
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

        const pagination = getState().pagination[action.actionName];
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
        const authToken = getState().auth.authToken;

        return axiosClient
            .get(url, constructHeader(authToken))
            .then((resp) => {
                normalizedJson = normalize(getData(resp), schema);

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
};
