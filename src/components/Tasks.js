import React, { Component } from 'react';
import Task from './Task';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Layout, Button } from 'antd';
import {getTasks, newTask} from "../actions/task";
import AddTaskForm from "./AddTaskForm"

const { Content } = Layout;
const task = {
    "title":"Do washing",
    "description":"Put washing into machine"
}

class Tasks extends Component {
    constructor(props) {
        super(props)

        this.state = {
            visible: false
        }
    }

    componentDidMount() {
        const { dispatch } = this.props

        dispatch(getTasks())
    }
    buttonPress(task) {
        const { dispatch } = this.props

        dispatch(newTask(task))
    }

    showModal = () => {
        this.setState({ visible: true });
    }

    handleCancel = () => {
        this.setState({ visible: false });
    }

    handleCreate = () => {
        const form = this.formRef.props.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }

            console.log('Received values of form: ', values);
            form.resetFields();
            this.setState({ visible: false });
        });
    }

    saveFormRef = (formRef) => {
        this.formRef = formRef;
    }

    render() {
        const { tasks } = this.props.task;
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>New Collection</Button>
                <AddTaskForm
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                />

                <Content style={{ padding: '10px', margin: 'auto', width: '50%' }}>
                    <Button onClick={this.showModal} type="New Task">Primary</Button>
                    {tasks.map(task => (
                        <Task key={task.id} task={task}  />
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