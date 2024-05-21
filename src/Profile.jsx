import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "./authSlice";
import { useEffect } from "react";

export default function Profile() {
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
useEffect(() => {
    if (!user.access_token) {
     
       navigate('/');
    }
  }, [user]);


  const handleLogout = () => {

    console.log(" * ",user)
    console.log(localStorage.getItem('auth'))
    dispatch(logout());
    console.log(" 2 * ",user)
    console.log(localStorage.getItem('auth'))
    // navigate('/signup');
  };
 console.log("state",user)
  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className='profile_box'>
        <h1>Profile</h1>
        <p>Full Name: <span>{user.name}</span></p>
        <p>Email: <span>{user.email}</span></p>
        <p>Password: <span>{user.password}</span></p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
}
