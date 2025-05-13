import axios from 'axios'
const baseURL = 'http://localhost:3000/items'

//Show all Items
export const getItems = async () => {
    const URL = baseURL
    const response = await axios.get(URL)
    return response
}

//Show one Item
export const getItem = async (id) => {
    const URL = `${baseURL}/${id}`
    const response = await axios.get(URL)
    return response
}

//Delte Item from Cart
export const deleteItem = async (id) => {
    const URL = `${baseURL}/${id}`
    const response = await axios.delete(URL)
    return response
}