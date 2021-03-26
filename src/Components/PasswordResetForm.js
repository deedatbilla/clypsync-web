import React from "react";

export default function PasswordResetForm() {
  return (
    <div>
      <div className="ml-3">
        <img width={130} src="logo.svg" alt="logo" />
      </div>
      <div className="card login-form">
        <div className="card-body">
          <h3 className="card-title text-center">Change your password</h3>

          <div className="card-text">
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">
                 New password
                </label>
                <input
                  type="password"
                  className="form-control form-control-sm"
                  placeholder="Enter your email address"
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Send password reset email
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
