import axios from 'axios'
const baseURL = 'https://phonebook-4rlh.onrender.com/'

const getPB = () => {
  const request = axios.get(baseURL + 'api/persons')
  return request.then(respone => respone.data)
}

const addNum = (newNum) => {
  const request = axios.post(baseURL + 'api/persons', newNum)
  return request.then(response => response.data)
}

const deleteNum = (id) => {
  const request = axios.delete(baseURL + `api/persons/${id}`)
  return request.then(response => response.data)
}

const changeNum = (newNum, id) => {
  const request = axios.put(baseURL + `api/persons/${id}`, newNum)
  return request.then(response => response.data)
}

export default {getPB, addNum, deleteNum, changeNum}