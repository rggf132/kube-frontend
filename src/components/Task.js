import React, { Component } from 'react';
import { Card, Icon } from 'antd';
import 'antd/dist/antd.css';
import {deleteTask} from "../actions/task";
import { connect } from 'react-redux';
import PropTypes from "prop-types";

class Task extends Component {

    deleteTask(id) {
        const { dispatch } = this.props

        dispatch(deleteTask(id))
    }

    render() {
        const { onEdit, task } = this.props

        const { id, title, description, status, insertDate } = task;

        return (
            <div>
                <Card
                    style={{ marginTop: "10px" }}
                    title = {title}
                    size="small"
                    actions={[
                        <Icon type="edit" onClick={e => onEdit()} />,
                        <Icon type="delete" onClick={e => this.deleteTask(id)}/>
                    ]}
                >
                    <p>{description}</p>
                    <p>{status}</p>
                    <p>{insertDate}</p>
                </Card>
            </div>
        );
    }
}

Task.propTypes = {
    onEdit: PropTypes.func.isRequired
}

export default connect()(Task)