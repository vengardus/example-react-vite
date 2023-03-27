import { useContext, createContext, useState } from "react";

export const UserContext = createContext( undefined )

export const UserProvider = ( { children, course } ) => {
    const [ user, setUser ] = useState( {
        name: 'Gardus',
        email: 'gardus@gmail.com',
    })
    // const [ course, setCourse ] = useState(_course)
    
    return <UserContext.Provider value={ {user, course} }>{ children }</UserContext.Provider>
}

export const useUser = () => useContext( UserContext )