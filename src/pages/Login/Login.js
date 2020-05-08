import React, { useState } from "react";
import "./Login.css";
import { loginUser } from "./../../api/api";
// import { loginUser } from "../../api/api";

export default function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    let user = {
      username: username,
      password: password,
    };
    let result = await loginUser(user);
    console.log(result);

    if (result.status === "success") {
      let userData = {
        id: result.data._id,
        name: result.data.name,
        age: result.data.age,
        salary: result.data.salary,
      };
      localStorage.setItem("user", JSON.stringify(userData));
      props.history.push("/home");
    } else {
      alert("Login fail");
    }
  };

  const changeUsername = (e) => {
    setUsername(e.target.value);
    // console.log(username);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
    // console.log(password);
  };

  return (
    <div className="login">
      <div style={{ textAlign: "center" }}>
        <img
          src={process.env.PUBLIC_URL + "assets/images/login.jpg"}
          width="150"
        ></img>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label for="username">Username</label>
          <input
            type="text"
            onChange={changeUsername}
            className="form-control"
            id="username"
          />
        </div>
        <div className="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            onChange={changePassword}
            className="form-control"
            id="password"
          />
        </div>
        <button type="submit" className="btn btn-danger btn-block">
          Login
        </button>
      </form>
    </div>
  );
}
