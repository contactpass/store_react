import React, { useState, useEffect } from "react";

export default function Profile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    let local_user = JSON.parse(localStorage.getItem("user"));
    if (local_user !== undefined) {
      setUser(local_user);
      console.log("local", local_user);
    }
  }, []);

  return (
    <div className="container">
      <br />
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Profile</h1>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <form>
                {/* <div className="form-group row">
                  <label
                    for="username"
                    className="col-3 col-form-label text-right"
                  >
                    User Name
                  </label>
                  <div className="col-7">
                    <input
                      id="username"
                      name="username"
                      placeholder="Username"
                      className="form-control here"
                      required="required"
                      type="text"
                      disabled
                    />
                  </div>
                </div> */}
                <div className="form-group row">
                  <label for="name" className="col-3 col-form-label text-right">
                    Name
                  </label>
                  <div className="col-7">
                    <input
                      id="name"
                      name="name"
                      placeholder="First Name"
                      className="form-control here"
                      type="text"
                      value={user.name}
                      disabled
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label for="age" className="col-3 col-form-label text-right">
                    Age
                  </label>
                  <div className="col-2">
                    <input
                      id="age"
                      name="age"
                      placeholder="Age"
                      className="form-control here"
                      required="required"
                      type="number"
                      value={user.age}
                      disabled
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    for="salary"
                    className="col-3 col-form-label text-right"
                  >
                    Salary
                  </label>
                  <div className="col-3">
                    <input
                      id="salary"
                      name="salary"
                      placeholder="Salary"
                      className="form-control here"
                      type="number"
                      value={user.salary}
                      disabled
                    />
                  </div>
                </div>
                <br />
                <div className="form-group row">
                  <div className="offset-5 col-8">
                    <button
                      name="submit"
                      type="submit"
                      className="btn btn-primary"
                    >
                      Update Profile
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
