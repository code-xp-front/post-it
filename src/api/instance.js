import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://limitless-harbor-35826.herokuapp.com'
})

export default instance