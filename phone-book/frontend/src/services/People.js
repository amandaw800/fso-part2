import axios from 'axios'

const baseURL = "http://localhost:3001/persons"

const getAll = () => {
    const request =  axios.get(baseURL)

    return request.then(res => {
        return res.data
    })
    .catch(err =>{
        console.log("An error occurred")
    })
}

const create = newObj => {
    const request = axios.post(baseURL, newObj)
    return request.then(res =>{
        return res.data
    })
    .catch(err => {
        console.log("An error occurred")
    })
}

const update = (id, newObj) =>{
    const request = axios.put(`${baseURL}/${id}`, newObj)

    return request.then(res =>{
        return res.data
    })
    .catch(err =>{
        console.log("An error occurred")
    })
}

const remove = (id) =>{
    const request = axios.delete(`${baseURL}/${id}`)

    return request.then(res =>{
        return res.data
    })
    .catch(err =>{
        console.log("An error occured")
    })
}


export default {getAll, create, update, remove}