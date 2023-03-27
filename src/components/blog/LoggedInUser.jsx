import { useUser } from "./UserContext"


export const LoggedInUser = () => {
    const values = useUser()

    return (
        <>
            <div>Hello <strong>{values.user.name}</strong></div>
            <div>Del curso de <strong>{values.course}</strong></div>
        </>
    )
}
