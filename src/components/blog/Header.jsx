import { LoggedInUser } from "./LoggedInUser"


export const Header = () => {
    return (
        <header>
            <LoggedInUser />
            <div>Blog App</div>
        </header>
    )
}