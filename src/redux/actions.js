import { REFRESH, ERROR } from './actionTypes';

export const refresh = (alerts) => {
    return {
        type: REFRESH,
        alerts
    };
}

export const errorFetch = (bool) => {
    return {
        type: ERROR,
        hasErrored: bool
    };
};

const getPostURL = 'http://127.0.0.1:8000/alerts/';

export const alertsRefreshData = () => {
    return (dispatch) => {
        fetch(getPostURL)
            .then(response => response.json())
            .then(alerts => dispatch(refresh(alerts)))
            .catch(error => dispatch(errorFetch(true)));
    };
}

export const alertsAddData = (alertJson) => {
    return (dispatch) => {
        fetch(getPostURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(alertJson),
            })
            .then((response) => {
                dispatch(alertsRefreshData());
            });
    };
}

// TODO: create functions for update and delete
