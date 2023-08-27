import axios from 'axios'

// import axios from './axios.js'

// condig

// const config = {
//   headers: {
//     Authorization: `token ${localStorage.getItem.token}`,
//     'Content-Type': 'application/json'
//   }
// }

export const apiProducts = {
    async getProducts() {
        return axios.get('https://dummyjson.com/products')
    },

    addNewProduct(product) {
        return axios.post('/product/add', product)
    },

    deleteProduct(id) {
        return axios.delete(`https://dummyjson.com/products/${id}`)
    },

    updateProduct(id, data) {
        return axios.post(`/product/update/${id}`, data)
    }
}