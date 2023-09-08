import axios from '../Server/axios.js'

const config = {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
    }
}

export const apiCategory = {
    getCategory() {
        return axios.get('http://185.246.67.55:8080/admin/category/all?page=1&size=10', config)
    },

    addCategory(data) {
        console.log(data)
        return axios.post('http://185.246.67.55:8080/admin/category/add', data, config)
    },

    deleteCategory(id) {
        return axios.delete(`http://185.246.67.55:8080/admin/category/${id}`, config)
    },
    updateCategory(data) {
        // console.log(id, data)
        return axios.post(`http://185.246.67.55:8080/admin/category/update`, data)
    },

    updateVisibleCategory(id, isVisible) {
        return axios.put(
            `http://185.246.67.55:8080/admin/category/visible/${id}`, { isVisible },
            config
        )
    },

    SearchCategory(name) {
        return axios.get(
            `http://185.246.67.55:8080/admin/category/search?search=${name}&page=1&size=10`,
            config
        )
    }
}