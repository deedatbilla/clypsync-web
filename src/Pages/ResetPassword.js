import React from "react";
import PasswordResetForm from "../Components/PasswordResetForm";
function ResetPassword({ match }) {
  return (
    <div>
      <PasswordResetForm match={match} />
    </div>
  );
}
export default ResetPassword;
