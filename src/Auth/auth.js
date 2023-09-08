import axios from '../Server/axios'

export const authLogin = async(data) => {
    console.log(data)
    console.log(data, 'asdasds')
    return await axios.post(
        'http://185.246.67.55:8080/auth/login', {
            email: 'admin@gmail.com',
            password: 'admin1234'
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        }
    )
}