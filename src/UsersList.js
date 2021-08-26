import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const UsersList = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems([
      { username: 'carl', id: 0, email: 'carl@example.com' },
      { username: 'daniel', id: 1, email: 'daniel@example.com' },
      { username: 'salanga', id: 2, email: 'salanga@example.com' },
    ])
  }, [])

  return (
    <div className='container'>
      <div className='mt-3'>
        <h3>Users List</h3>
        <table className='table table-striped mt-3'>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {items.map((users) => (
              <tr key={users._id}>
                <td>{users.username}</td>
                <td>{users.email}</td>
                <td>
                  <Link to={`/edit/${users._id}`}>Edit</Link>
                </td>
                <td>
                  <button className='danger'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UsersList
