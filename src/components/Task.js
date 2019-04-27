import React, { Component } from 'react';
import { Card } from 'antd';
import 'antd/dist/antd.css';

class Task extends Component {

    render() {
        console.log(this.props)
        const { title, description, status, insertDate } = this.props.task;

        return (
            <div>
                <Card
                    style={{ marginTop: "10px" }}
                    title = {title}
                    size="small"
                    extra={<a href="#">Edit</a>}>

                    <p>{description}</p>
                    <p>{status}</p>
                    <p>{insertDate}</p>
                </Card>
            </div>
        );
    }
}

export default Task