import { REFRESH, ERROR } from '../actionTypes';

const initialState = {
    alerts: [],
    error: false
}

export default function(state = initialState, action) {
    switch (action.type) {
        case REFRESH:
            return {
                alerts: action.alerts,
                error: false
            };
        case ERROR:
            return {
                alerts: state.alerts,
                error: action.hasErrored
            };
        default:
            return state;
    }
}
