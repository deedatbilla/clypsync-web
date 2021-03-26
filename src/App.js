import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ResetPassword from "./Pages/ResetPassword";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={ResetPassword} />
      </Switch>
    </Router>
  );
}

export default App;
