import { LoggedInUser } from "./LoggedInUser"
import { useUser } from "./UserContext"


export const Header = () => {
    const { user } = useUser()

    return (
        <header>
            <LoggedInUser />
            <div>Blog App ( { user.name } )</div>
        </header>
    )
}