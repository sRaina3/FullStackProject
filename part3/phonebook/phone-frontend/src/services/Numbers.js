import axios from 'axios'

const getPB = () => {
  const request = axios.get('/api/persons')
  return request.then(respone => respone.data)
}

const addNum = (newNum) => {
  const request = axios.post('/api/persons', newNum)
  return request.then(response => response.data)
}

const deleteNum = (id) => {
  const request = axios.delete(`/api/persons/${id}`)
  return request.then(response => response.data)
}

const changeNum = (newNum, id) => {
  const request = axios.put(`/api/persons/${id}`, newNum)
  return request.then(response => response.data)
}

export default {getPB, addNum, deleteNum, changeNum}