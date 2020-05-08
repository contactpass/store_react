import React, { useState } from "react";
import "./Register.css";
// import { registerUser } from "../../api/api";

export default function Register(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  console.log("props: ", props.history);

  const register = async (e) => {
    e.preventDefault();
    let user = {
      username: username,
      password: password,
    };
    // let result = await registerUser(user);
    // if (result.status === "success") {
    //   alert("Register success");
    //   props.history.push("/login");
    // } else {
    //   alert("Register fail");
    // }
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
    <div className="register">
      <div style={{ textAlign: "center" }}>
        <img
          src={process.env.PUBLIC_URL + "assets/images/user.png"}
          width="200"
        ></img>
      </div>

      <form onSubmit={register}>
        <div class="form-group">
          <label for="username">Username</label>
          <input
            type="text"
            class="form-control"
            id="username"
            onChange={changeUsername}
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            onChange={changePassword}
          />
        </div>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" />
        </div>
        <div class="form-group">
          <label for="age">Age</label>
          <input type="number" class="form-control" id="age" />
        </div>
        <div class="form-group">
          <label for="salary">Salary</label>
          <input type="number" class="form-control" id="salary" />
        </div>
        <button type="submit" class="btn btn-success btn-block">
          Submit
        </button>
      </form>
    </div>
  );
}
