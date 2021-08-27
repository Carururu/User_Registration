import axios from 'axios'

export const getUsers = async () => {
  const users = await axios.get('http://localhost:8000/user')
  return users.data.data
}

export const createUser = async (user) => {
  await axios.post('http://localhost:8000/user/create', user)
}
