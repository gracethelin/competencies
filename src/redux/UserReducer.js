import axios from 'axios'

const initialState = {
    user: {},
    email: '',
    profilePic: '',
    userId: 0
    
}



const CHECK_USER = "CHECK_USER"
const LOGIN = "LOGIN"
const LOGOUT = "LOGOUT"
const REGISTER = "REGISTER"

export function login(email, userId) {

    let action = {
        type: LOGIN,
        payload: {email, userId}
    }

    return action
}

export function checkUser(userId) {
    let action = {
        type: CHECK_USER,
        payload: {userId}
    }

    return action
}

export function register(email, password) {
    let action = {
        type: REGISTER,
        payload: {email, password}
    }

    return action
}
export function logout() {
    let action = {
        type: LOGOUT,
        payload: axios.post('/api/logout')
    }

    return action
}


export default function userReducer(state = initialState, action) {
    switch(action.type) {
        case CHECK_USER + '_PENDING':
            return {...state, loading: true, error: false}
        case CHECK_USER + '_FULFILLED':
            return {...state, loading: false, user: action.payload.data}
        case CHECK_USER + '_REJECTED':
            console.log('CHECK_USER REJECTED')
            return {...state, loading: false}
        
        case LOGIN:
            return {...state, loading: false, user: action.payload}
    
        case LOGOUT + '_PENDING':
            return {...state, loading: true, error: false}
        case LOGOUT + '_FULFILLED':
            return {...state, ...initialState}
        case LOGOUT + '_REJECTED':
            return {...state, loading: false, error: true}
    
        default:
            return state;
    }
}