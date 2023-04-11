import { useUser } from './UserContext'

export const LoggedInUser = () => {
  const { user, course, updateUsername } = useUser()

  return (
    <>
      <div>Hello <strong>{user.name}</strong></div>
      <div>Del curso de <strong>{course}</strong></div>
      <button
        className='bg-orange-500 py-2 px-3 text-white'
        onClick={() => updateUsername('Ed')}
      >
        Cambia nombre
      </button>

    </>
  )
}
