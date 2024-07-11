import { useState } from "react";

const LoggedIn = () => {
    const [isLoggedIn , setIsLoggedIn] = useState(false);
    const handleLogin = ():void => {
        setIsLoggedIn(true);
    };
    const handleLogout = ():void => {
        setIsLoggedIn(false);
    };
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is {isLoggedIn ? "Logged in ":"Logged out"}</div>
        </div>
    );
};

export default LoggedIn;