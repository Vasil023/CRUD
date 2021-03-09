import React, { useState } from 'react'
import { AddUserForm } from './forms/AddUserForm'
import { UserTables } from './tables/UserTables'
import { EditUserForm} from './forms/EdituserForm'

const App = () => {
  const userData = []

  const [users, setUsers] = useState(userData)
  const [editing, setEditing] = useState(false)

  const initialFormState = {id: null, name: '', username: ''}

  const [currentUser, setCurrentUser] =  useState(initialFormState)

  const addUser = (user) => {
    user.id = users.length + 1 
    setUsers([...users, user])
  }

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id))
  }

  const editRow = (user) => {
    setEditing(true)

    setCurrentUser({id: user.id, name: user.name, username: user.username})
  }

  const updateUser = (id, updateUser) => {
    setEditing(false)

    setUsers(users.map((user) => (user.id === id ? updateUser : user)))
  }
  return (
    <div className="container">
      <h1>CRUD App</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
            <h2>Edit user</h2>
            <EditUserForm 
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
            </div>
          ) : (
            <div>
               <h2>Add user</h2>
          <AddUserForm 
          addUser={addUser}
          />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTables 
          users={users} 
          deleteUser={deleteUser}
          editRow={editRow}
          />
        </div>
      </div>
    </div>
  )
}


export default App;
