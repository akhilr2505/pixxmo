import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingScreen from "./components/LandingScreen";
import LoginScreen from "./components/LoginScreen";

function App() {
  return (
    <Router>
      <main>
        <div>
          <Route path="/" component={LandingScreen} exact />
          <Route path="/login" component={LoginScreen} />
          <Route path="/home" component={LandingScreen} />
        </div>
      </main>
    </Router>
  );
}

export default App;
