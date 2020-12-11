import usersAPI from "../api/API";
import {addNewUserToState, deleteUserFromState, setEditingUser, setUserSearchToState, setUsersToState} from "./action";
import * as _ from 'lodash';


let initialState = {
    users: []
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_USERS' :
            return {
                ...state,
                users: action.users
            }
        case 'SET_EDITING_USER' :
            return {
                ...state,
                users: [...state.users, action.data]
            }
        case 'DELETE_USER' :
            return {
                ...state,
                users: _.remove(state.users, u => {return u.id !== action.id})
            }
        case 'ADD_NEW_USER' :
            return {
                ...state,
                users: [...state.users, action.formValues]
            }
            case 'SET_USER_FROM_SEARCH' :
            return {
                ...state,
                users: action.users
            }
        default :
            return state;
    }
}
export const getAllUsers = () => {
    return async (dispatch) => {
        const data = await usersAPI.getUsers()
        localStorage.setItem('users', JSON.stringify(data))
        dispatch(setUsersToState(data.users))
    }
}
export const editUser = (editValue) => {
    return async (dispatch) => {
        const data = await usersAPI.editUser(editValue)
        localStorage.setItem('users', JSON.stringify(data))
        dispatch(setEditingUser(data))
    }
}
export const deleteUser = (id) => {
    return async (dispatch) => {
        const data = await usersAPI.deleteUserRequest(id)
        localStorage.setItem('users', JSON.stringify(data))
        dispatch(deleteUserFromState(data.id))
    }
}

export const addNewUser = (formValues) => {
    return async (dispatch) => {
        const data = await usersAPI.addNewUserRequest(formValues)
        localStorage.setItem('users', JSON.stringify(data))
        console.log(data)
        dispatch(addNewUserToState(formValues))
    }
}
export const userSearch = (values) => {
    return async (dispatch) => {
        const data = await usersAPI.userSearchRequest(values)
        localStorage.setItem('users', JSON.stringify(data))
        console.log(data)
        dispatch(setUserSearchToState(data.users))
    }
}


export default usersReducer