import React from 'react'
import UserForm from './UserForm'

const CreateUser = () => {
  const onSubmit = (data) => {
    alert(JSON.stringify(data))
  }

  return (
    <div className='container'>
      <div>
        <h3>Create User</h3>
        <UserForm onSubmit={onSubmit} />
      </div>
    </div>
  )
}

export default CreateUser
