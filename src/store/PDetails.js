import * as actionTypes from './actions';

const initialState = {
    otpbox: false,
    firstName: '',
    lastName: '',
    line1: '',
    line2: '',
    line3: '',
    city: '',
    state: '',
    country: '',
    phoneNumber: '',
    otp: ''
}

const PDetails = ( state = initialState, action ) => {
    switch (action.type) {
        case actionTypes.VERIFY:
            return {
                ...state,
                otpbox: true
            }
        case actionTypes.FIRSTNAME:
            return {
                ...state,
                firstName: action.val
            }
        case actionTypes.LASTNAME:
            return {
                ...state,
                lastName: action.val
            }
        case actionTypes.LINE1:
            return {
                ...state,
                line1: action.val
            }
        case actionTypes.LINE2:
            return {
                ...state,
                line2: action.val
            }
        case actionTypes.LINE3:
            return {
                ...state,
                line3: action.val
            }
        case actionTypes.CITY:
            return {
                ...state,
                city: action.val
            }
        case actionTypes.STATE:
            return {
                ...state,
                state: action.val
            }
        case actionTypes.COUNTRY:
            return {
                ...state,
                country: action.val
            }
        case actionTypes.PHONE_NUMBER:
            return {
                ...state,
                phoneNumber: action.val
            }
            case actionTypes.OTP:
            return {
                ...state,
                otp: action.val
            }
    }
    return state;
}

export default PDetails;