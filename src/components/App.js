import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DatePicker } from 'antd';
import './App.css'
import 'antd/dist/antd.css';
import { simpleAction } from "../actions/simpleAction";

class App extends Component {
    simpleAction = (event) => {
        const { dispatch } = this.props;
        dispatch(simpleAction(event))
    }

    render() {
        return (
            <div className="App">
                <DatePicker/>
                <button onClick={this.simpleAction}>Test redux action</button>
                <pre>
                 {
                     JSON.stringify(this.props.simpleReducer)
                 }
                </pre>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    simpleReducer: state.simpleReducer
})


export default connect(mapStateToProps)(App);