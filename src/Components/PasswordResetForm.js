import React, { useState } from "react";
import axios from "axios";

export default function PasswordResetForm() {
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");

  const onSubmit = async (e) => {
    try {
      if (password !== confirm_password) {
        alert("Passwords do not match");
        return;
      }
      e.preventDefault();
      const payload = {
        password,
      };
    } catch (error) {}
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
            <form>
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
