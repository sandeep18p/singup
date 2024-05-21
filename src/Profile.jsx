import { useState } from "react";

export default function Profile(){
    const [user,setUser] = useState(null);
    function handleLogout(){
      return 1;
    }
    return(<>
     <div className='profile_box'>
        <h1>Profile</h1>
        <p>Full Name: <span>{user?.full_name}</span></p>
        <p>Email: <span>{user?.email}</span></p>
        <p>Password: <span>{user?.password}</span></p>
        <button onClick={()=>handleLogout()}>Logout</button>
    </div>
    </>)
}