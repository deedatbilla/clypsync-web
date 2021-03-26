import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ResetPassword from "./Pages/ResetPassword";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/auth/reset/:token" component={ResetPassword} />
        <Route path="/" component={ResetPassword} />
      </Switch>
    </Router>
  );
}

export default App;
