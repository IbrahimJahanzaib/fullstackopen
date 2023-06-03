import axios from "axios";

const url = "http://localhost:3001/persons"

const getAll = () => {
    const request = axios.get(url)
    return request.then(response => response.data)
}

const create = (newPerson) => {
    const request = axios.post(url, newPerson)
    return request.then(response => response.data)
} 

const remove = (id) => {
    return axios.delete(`${url}/${id}`)
}

const update = (id, d) => {
    const request = axios.put(`${url}/${id}`, d)
    return request.then(response => response.data)
}

export default {getAll, create, remove, update}