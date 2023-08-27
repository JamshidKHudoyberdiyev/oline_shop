import axios from '../Server/axios'

export const authLogin = async(data) => {
    console.log(data)
    console.log(data, 'asdasds')
    return await axios.post(
        'http://localhost:8080/auth/login', data, {
            headers: { 'Content-Type': 'application/json' }
        }
    )
}