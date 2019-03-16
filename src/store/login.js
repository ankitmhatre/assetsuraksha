import * as actionTypes from './actions';

const initialState = {
    email: '',
    password: ''
}

const login = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.LOGIN_EMAIL: 
            return {
                ...state,
                email: action.val
            }
        case actionTypes.LOGIN_PASSWORD: 
            return {
                ...state,
                password: action.val
            }
        case actionTypes.LOGIN: 
            return 
    }
    return state;
}

export default login;