import Axios from 'axios'

const axios = Axios.create({
    baseURL: 'http://localhost:3300'
})

export default axios