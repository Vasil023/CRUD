import React, {useState, useEffect} from 'react'

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser)

  const handlerInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  useEffect(() => {
    setUser(props.currentUser)
  }, [props])

  return (
    <form onSubmit={(event) => {
      event.preventDefault()
      
      props.updateUser(user.id, user)
    }}>
      <label>Name</label>
      <input 
      type="text" 
      name="name" 
      value={user.name} 
      onChange={handlerInputChange}
      />

      <label>Username</label>
      <input 
      type="text" 
      name="username" 
      value={user.username} 
      onChange={handlerInputChange}
      />

      <button>Update user</button>
      <button
      onClick={() => props.setEditing(false)}
      >
        Canel
      </button>
    </form>

  )
}

export { EditUserForm }