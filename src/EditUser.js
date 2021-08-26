import React, { useState, useEffect } from 'react'
import UserForm from './UserForm'

const EditUser = () => {
  const [user, setUser] = useState()

  useEffect(() => {
    setUser({
      username: 'carl',
      email: 'carl@example.com',
      password: '123456',
    })
  }, [])

  const onSubmit = (data) => {
    alert(JSON.stringify(data))
  }

  return user ? (
    <div className='container'>
      <div>
        <h3>Edit User</h3>
        <UserForm user={user} onSubmit={onSubmit} />
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  )
}

export default EditUser
