import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./authSlice";

const Signup = () => {
    // const user = useSelector((state) => state.auth);
    const user = JSON.parse(localStorage.getItem("auth"));
    console.log(user);
    const dispatch=useDispatch();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(true);
  const [showMsg, setShowMsg] = useState(false);

  useEffect(() => {
    if (user && user.access_token) {
     
       navigate('/Profile');
    }
  }, [user]);

  const navigate = useNavigate();

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user && user.token) {
      navigate("/profile");
    }
  }, []);
  function handleInputChange(e) {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log("inputs", inputs);
  }

  function handleSubmit(e) {
    e.preventDefault();

    setShowMsg(true);
    if (
      inputs.name === "" ||
      inputs.email === "" ||
      inputs.password === "" ||
      inputs.confirmPassword === ""
    ) {
      setError(true);
      return;
    } else if (inputs.password !== inputs.confirmPassword) {
      setError(true);
      return;
    }
    setError(false);
    const accessToken = generateRandomString();
    let user = {
      name: inputs.name,
      email: inputs.email,
      password: inputs.password,
      access_token: accessToken,
    };
    
    setTimeout(() => {
      dispatch(login(user))
      alert("Signup successful, you will be redirected to Profile Page Now!");
      navigate("/profile");
    }, 1000);

    console.log("htitt");
  }

  function generateRandomString() {
    const byteArray = new Uint8Array(16);
    window.crypto.getRandomValues(byteArray);
    let hexString = "";
    for (let i = 0; i < byteArray.length; i++) {
      hexString += byteArray[i].toString(16).padStart(2, "0");
    }
    return hexString;
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h1>Signup</h1>
      <input
        type="text"
        placeholder="Full Name"
        value={inputs.name}
        onChange={(e) => handleInputChange(e)}
        name="name"
      />
      <input
        type="email"
        placeholder="Email"
        value={inputs.email}
        onChange={(e) => handleInputChange(e)}
        name="email"
      />
      <input
        type="password"
        placeholder="Password"
        value={inputs.password}
        onChange={(e) => handleInputChange(e)}
        name="password"
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={inputs.confirmPassword}
        onChange={(e) => handleInputChange(e)}
        name="confirmPassword"
      />
      {showMsg && (
        <p style={{ color: error ? "red" : "green" }}>
          {error
            ? "Error:All the fields are manadatory"
            : "Successfully Signed Up!"}
        </p>
      )}
      <button type="submit">Signup</button>
    </form>
  );
};

export default Signup;