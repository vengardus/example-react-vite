import { useContext, createContext, useState } from 'react'

export const UserContext = createContext(undefined)

export const UserProvider = ({ children, course }) => {
  const [user, setUser] = useState({
    name: 'Gardus',
    email: 'gardus@gmail.com'
  })

  const updateUsername = (newUsername) => {
    // solo para probar cambio de nombre
    newUsername = (user.name === 'Ed') ? 'Gardo' : newUsername
    setUser((currentUser) => ({
      ...currentUser,
      name: newUsername
    }))
  }

  return (
    <UserContext.Provider value={{ user, updateUsername, course }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => useContext(UserContext)
