import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://5ec252588ebdcc0016a59bfb.mockapi.io/',
});

const usersAPI = {

    getUsers() {
        return instance.get('Users')
            .then(response => {
                console.log(response.data)
                return response.data
            })

    },
    editUser(editValue) {
        return instance.put(`Users/${editValue.id}`, editValue)
            .then(response => {
                return response.data
            })
    },
    deleteUserRequest(id) {
        return instance.delete(`Users/${id}`)
            .then(response => {
                return response.data
            })
    },
    addNewUserRequest(formValues) {
        return instance.post(`Users`, formValues)
            .then(response => {
                console.log(response.data)
                return response.data
            })
    },
    userSearchRequest(values) {
        return instance.get(`Users?search=${values}`)
            .then(response => {
                console.log(response.data)
                return response.data
            })
    }
}

export default usersAPI;