import React, { Component } from 'react';
import Task from './Task';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import {getTasks} from "../actions/task";

const { Content } = Layout;

class Tasks extends Component {

    componentDidMount() {
        const { dispatch } = this.props

        dispatch(getTasks())
    }

    render() {
        const { tasks } = this.props.task;
        return (
            <div>
                <Content style={{ padding: '10px', margin: 'auto', width: '50%' }}>
                    {tasks.map(task => (
                        <Task key={task.id} task={task} />
                    ))}
                </Content>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    task: state.task
})

export default connect(mapStateToProps)(Tasks);