import axios from 'axios'

const getPB = () => {
  const request = axios.get('http://localhost:3001/persons')
  return request.then(respone => respone.data)
}

const addNum = (newNum) => {
  const request = axios.post('http://localhost:3001/persons', newNum)
  return request.then(response => response.data)
}

const deleteNum = (id) => {
  const request = axios.delete(`http://localhost:3001/persons/${id}`)
  return request.then(response => response.data)
}

const changeNum = (newNum, id) => {
  const request = axios.put(`http://localhost:3001/persons/${id}`, newNum)
  return request.then(response => response.data)
}

export default {getPB, addNum, deleteNum, changeNum}