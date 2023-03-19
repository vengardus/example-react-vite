import { useUser } from "./UserContext"


export const LoggedInUser = () => {
    const user = useUser()

    return (
        <div>Hello <strong>{ user.name }</strong></div>
    )
}
