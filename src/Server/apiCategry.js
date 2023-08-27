import axios from "../Server/axios.js";

export const apiCategory = {

    getCategory() {
        return axios.get('/category/')
    },

    addCategory(data) {
        return axios.post('/', data)
    },

    deleteCategory(id) {
        return axios.delete(id)
    },
    updateCategory(id, data) {
        return axios.post(`//`, data)
    }

}