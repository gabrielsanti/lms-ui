import Login from "./containers/login/login"
import Courses from "./containers/courses/courses"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/mycourses">
            <Courses />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
