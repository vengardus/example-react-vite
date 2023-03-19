import { useContext, createContext, useState } from "react";

const UserContext = createContext( undefined )

export const UserProvider = ( { children } ) => {
    console.log('ed')
    const [ user ] = useState( {
        name: 'Gardus',
        email: 'gardus@gmail.com',
    })
    console.log('ed2', user)
    return <UserContext.Provider value={ user }>{ children }</UserContext.Provider>
}

export const useUser = () => useContext( UserContext )