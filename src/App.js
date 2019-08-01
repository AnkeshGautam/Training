import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import About from './about/About';
import Albums from './albums/Albums';
import Homepage from './homepage/Homepage';


export class App extends React.Component {

  state = {
    albums : [
      {
        id : 1,
        title : "Valar Morghulis"
      },
      {
        id : 2,
        title : "All Men Must Die"
      },
      {
        id : 3,
        title : "Vala Dohaeris"
      }
    ]
  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Homepage</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/albums/">Albums</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={Homepage} />
          <Route path="/about/" component={About} />
          <Route path="/albums/" render = {() => <Albums albums = {this.state.albums}></Albums>} />
        </div>
      </Router>
    );
  }
}

export default App;
