import './App.css';
import Header from "../header/Header"
import Goals from "../goals/Goals"
import Needtodo from "../needtodo/Needtodo"
import Rule from "../rule/Rule"
import {Helmet} from "react-helmet"

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Aristotel school</title>
      </Helmet>
      <Header />
      <Goals />
      <Needtodo />
      <Rule />
    </div>
  );
}

export default App;
