import React from "react";
import PasswordResetForm from "../Components/PasswordResetForm";

function ResetPassword({match}) {
    console.log(match)
  return (
    <div>
       
      <PasswordResetForm />
    </div>
  );
}

export default ResetPassword;
