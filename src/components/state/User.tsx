import { useState } from "react"

type AuthUser = {
    name:string , 
    email:string ,
}

export const User =({name , email}:AuthUser) =>{
    // const [user , setUser] = useState<null | AuthUser>(null)
    const [user , setUser] = useState<AuthUser>({} as AuthUser)
    const handleLogin = ():void =>{
        setUser({name, email})
    };
    // const handleLogout = ():void =>{
    //     setUser(null)
    // };
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            {/* <button onClick={handleLogout}>Logout</button> */}
            <div>User name is {user.name}</div>
            <div>User email is {user.email}</div>
        </div>
    )
}