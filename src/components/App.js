import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';

import { simpleAction } from '../actions/simpleAction';

class App extends Component {
    simpleAction = (event) => {
        this.props.simpleAction();
    }

    render() {
        return (
            <div className="App">
                <DatePicker/>
                <button onClick={this.simpleAction}>Test redux action</button>
                <pre>
                 {
                     JSON.stringify(this.props)
                 }
                </pre>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    simpleAction: () => dispatch(simpleAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);