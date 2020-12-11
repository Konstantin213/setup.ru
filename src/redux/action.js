const GET_USERS = 'GET_USERS'
const SET_EDITING_USER = 'SET_EDITING_USER'
const DELETE_USER = 'DELETE_USER'
const ADD_NEW_USER = 'ADD_NEW_USER'
const SET_USER_FROM_SEARCH = 'SET_USER_FROM_SEARCH'

export const setUsersToState = (users) => ({type : GET_USERS, users})
export const setEditingUser = (data) => ({type : SET_EDITING_USER, data})
export const deleteUserFromState = (id) => ({type : DELETE_USER, id})
export const addNewUserToState = (formValues) => ({type : ADD_NEW_USER, formValues})
export const setUserSearchToState = (users) => ({type : SET_USER_FROM_SEARCH, users})