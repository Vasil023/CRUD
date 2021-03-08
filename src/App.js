import React, { useState } from 'react'
import { AddUserForm } from './forms/AddUserForm'
import { UserTables } from './tables/UserTables'

const App = () => {
  const userData = [
    {id: 1, name: 'Vasil', username: 'vasil01'}
  ]

  const [users, setUsers] = useState(userData)

  const addUser = (user) => {
    user.id = users.length + 1 
    setUsers([...users, user])
  }

  return (
    <div className="container">
      <h1>CRUD App</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          <AddUserForm 
          addUser={addUser}
          />
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTables users={users} />
        </div>
      </div>
    </div>
  )
}


export default App;
