import axios from 'axios'

// import axios from './axios.js'

// condig

const config = {
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
    }
}

export const apiProducts = {
    async getProducts() {
        console.log(config, 'config')
        return await axios.get('http://localhost:8080/admin/category/1', config).then(res => console.log(res))
    },

    addNewProduct() {
        return axios.post('http://localhost:8080/admin/category/add', {
            name: {
                uz: 'string1',
                ru: 'string2',
                eng: 'string3'
            },
            image: 'string4',
            isVisible: true
        }, config)
    },

    deleteProduct(id) {
        return axios.delete(`http://localhost:3000/productshttp://localhost:3000/products/${id}`)
    },

    updateProduct(id, data) {
        return axios.patch(`http://localhost:3000/products/${id}`, data)
    },

    searchProduct() {
        return axios.get('https://dummyjson.com/products/search?q=car')
    }
}