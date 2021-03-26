import React, { useState } from "react";
import axios from "axios";
export default function PasswordResetForm({ match }) {
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  // console.log(route)
  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      if (password !== confirm_password) {
        alert("Passwords do not match");
        return;
      }

      const payload = {
        password,
        token: match.params.token,
      };
      const response = await axios.post(
        "https://clypsync.herokuapp.com/reset",
        payload
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <div className="" style={{ display: "flex", justifyContent: "center" }}>
        <img width={130} src="logo.svg" alt="logo" />
      </div>
      <div className="card login-form">
        <div className="card-body">
          <h3 className="card-title text-center">Change your password</h3>
          <div className="card-text">
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label for="exampleInputEmail1">New password</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  value={password}
                  className="form-control form-control-sm"
                  placeholder="New password"
                />
              </div>

              <div className="form-group">
                <label for="exampleInputEmail1">Confirm new password</label>
                <input
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type="password"
                  value={confirm_password}
                  className="form-control form-control-sm"
                  placeholder="Confirm new password"
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Reset
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
