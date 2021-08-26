import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'

const CreateUser = () => {
  const { register, handleSubmit } = useForm()
  const history = useHistory()

  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data))
    history.push('/')
  })

  return (
    <div className='container'>
      <div>
        <h3>Create User</h3>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor='username'>Username:</label>
            <input
              className='form-control'
              {...register('username')}
              type='text'
              name='username'
              id='username'
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-primary'>
              Create User
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateUser
