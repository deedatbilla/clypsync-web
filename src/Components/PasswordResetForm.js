import React, { useState } from "react";
import axios from "axios";
export default function PasswordResetForm({ match }) {
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [error, setError] = useState({ hasError: false, message: "" });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      if (password !== confirm_password) {
        alert("Passwords do not match");
        return;
      }

      const payload = {
        password,
        token: match.params.token,
      };
      await axios.post(
        "https://clypsync.herokuapp.com/reset-password",
        payload
      );
      setLoading(false);
      alert("password reset successful");
      //   console.log(response.data);
    } catch (error) {
      setLoading(false);
      setError({
        hasError: true,
        message: error?.response.data || error.message,
      });
      console.log(error.response);
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
              {error.hasError ? (
                <div className="alert alert-danger">{error.message}</div>
              ) : null}
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

              <button
              disabled={loading?true:false}
               type="submit" className="btn btn-primary btn-block">
                {loading ? <i className="fa fa-spinner fa-spin"></i> : "Reset"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
