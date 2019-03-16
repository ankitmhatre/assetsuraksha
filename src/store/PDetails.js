import * as actionTypes from './actions';

const initialState = {
    phoneNumber: '',
    otp: ''
}

const PDetails = ( state = initialState, action ) => {
    switch (action.type) {
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