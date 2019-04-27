import React, { Component } from 'react';
import { Card, Icon, Modal } from 'antd';
import 'antd/dist/antd.css';
import {deleteTask} from "../actions/task";
import { connect } from 'react-redux';

class Task extends Component {
    state = {
        ModalText: 'Content of the modal',
        visible: false,
        confirmLoading: false,
    }


    deleteTask(id) {
        const { dispatch } = this.props

        dispatch(deleteTask(id))
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = () => {
        this.setState({
            ModalText: 'The modal will be closed after two seconds',
            confirmLoading: true,
        });
        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
            });
        }, 2000);
    }

    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
            visible: false,
        });
    }

    render() {
        console.log(this.props)
        const { visible, confirmLoading, ModalText } = this.state;
        const { id, title, description, status, insertDate } = this.props.task;
        return (
            <div>
                <Card
                    style={{ marginTop: "10px" }}
                    title = {title}
                    size="small"
                    actions={[<Icon type="edit" />, <Icon type="delete" onClick={e => this.deleteTask(id)}/>]}
                >

                    <p>{description}</p>
                    <p>{status}</p>
                    <p>{insertDate}</p>
                </Card>
                <Modal
                    title="Title"
                    visible={visible}
                    onOk={this.handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={this.handleCancel}
                >
                    <p>{ModalText}</p>
                </Modal>
            </div>
        );
    }
}

export default connect()(Task)