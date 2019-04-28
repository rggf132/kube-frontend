import React, { Component } from 'react';
import { Card, Icon, Modal } from 'antd';
import 'antd/dist/antd.css';
import {deleteTask} from "../actions/task";
import { connect } from 'react-redux';

class Task extends Component {

    deleteTask(id) {
        const { dispatch } = this.props

        dispatch(deleteTask(id))
    }

    render() {
        console.log(this.props)
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
            </div>
        );
    }
}

export default connect()(Task)