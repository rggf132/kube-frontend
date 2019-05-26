import React, { Component } from "react";
import { connect } from "react-redux";
import { DatePicker } from "antd";
import "./App.css";
import "antd/dist/antd.css";
import Tasks from "./Tasks";
import Login from "./Login";
import { Button } from "antd";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">Task Application</div>
        <div style={{ position: "fixed", top: 5, left: 5 }}>
          <Link to="/login">
            <Button type="primary">Log in</Button>
          </Link>
        </div>
        <Tasks />
      </div>
    );
  }
}

export default App;
