import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DatePicker } from 'antd';
import './App.css'
import 'antd/dist/antd.css';
import Tasks from "./Tasks";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    Task Application
                </div>
                <Tasks/>
            </div>
        );
    }
}

export default App;