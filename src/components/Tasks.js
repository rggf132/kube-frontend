import React, { Component } from 'react';
import Task from './Task';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Layout, Button } from 'antd';
import {getTasks, newTask} from "../actions/task";
import AddTaskForm from "./TaskForm"

const { Content } = Layout;

class Tasks extends Component {
    state = {
        visible: false,
        editId: null
    };

    componentDidMount() {
        const { dispatch } = this.props

        dispatch(getTasks())
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
            const { dispatch } = this.props

            dispatch(newTask(values))

            form.resetFields();
            this.setState({ visible: false });
        });
    }

    handleEdit = () => {

    }

    handleEditCancel = () => {
        this.setState({ editId: null });
    }

    saveFormRef = (formRef) => {
        this.formRef = formRef;
    }

    render() {
        const { tasks } = this.props.task;
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>Add Task</Button>
                <AddTaskForm
                    type={"new"}
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                />
                <AddTaskForm
                    type={"edit"}
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.editId}
                    onCancel={this.handleEditCancel}
                    onCreate={this.handleEdit}
                />

                <Content style={{ padding: '10px', margin: 'auto', width: '50%' }}>
                    {tasks.map(task => (
                        <Task
                            key={task.id}
                            task={task}
                            onEdit={e => this.setState({editId:task.id})}
                        />
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